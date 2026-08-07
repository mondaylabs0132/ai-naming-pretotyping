# Next.js 16 → Cloudflare Workers 배포 가이드

기존 Next.js 16 앱을 **OpenNext 어댑터(`@opennextjs/cloudflare`)** 를 사용해 Cloudflare Workers로 배포하는 단계별 runbook입니다.
정적 이미지 서빙 + 가벼운 미들웨어 구성을 기준으로 작성되었습니다.

> **전체 흐름:** 준비 → 자동 마이그레이션 → 설정 확인 → 로컬 미리보기 → 배포
> 배포는 CLI 방식과 Git 연동 방식 두 가지가 있으며, 팀 협업에는 **Git 연동 방식**을 권장합니다.

---

## 가장 자주 발생하는 실패 지점 (먼저 체크)

1. **`compatibility_date`를 최신으로 안 잡음** → 런타임에 `process.env`가 비어버림
2. **빌드용 환경변수를 런타임 쪽에만 등록** → 빌드 실패

이 두 가지만 처음에 제대로 잡으면 5단계 로컬 프리뷰에서 대부분의 문제가 걸러집니다.

---

## 0단계 — 사전 준비

### Cloudflare 계정

- 브라우저에서 <https://dash.cloudflare.com/sign-up> 접속 → 이메일로 가입 (무료)
- 이메일 인증까지 완료

### 로컬 환경

- 터미널: macOS는 Terminal/iTerm, **Windows는 WSL 권장** (OpenNext는 Windows 네이티브에서 빌드 이슈가 있음)
- Node 버전 확인 (Next.js 16은 Node 20 이상 권장)

```bash
node -v   # v20 이상인지 확인
```

- 프로젝트 폴더로 이동

```bash
cd /path/to/your-nextjs-app
```

---

## 1단계 — 자동 마이그레이션 명령 실행

OpenNext가 설정 파일들을 자동으로 생성/수정해 주는 명령입니다. (가장 빠른 길)

```bash
npx @opennextjs/cloudflare migrate
```

- 아래의 모든 설정 단계를 자동화함
- 계정에 R2가 활성화되어 있으면 캐싱용 R2 버킷도 자동 생성
- 생성/수정되는 파일: `wrangler.jsonc`, `open-next.config.ts`, `package.json` 스크립트, `.dev.vars` 등

### (선택) 수동으로 진행할 경우

```bash
npm install @opennextjs/cloudflare@latest
npm install --save-dev wrangler@latest
```

> Wrangler는 **3.99.0 이상** 버전이어야 배포가 가능합니다.

---

## 2단계 — 생성된 설정 파일 확인 및 수정

### `wrangler.jsonc` — compatibility_date를 최신으로

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "main": ".open-next/worker.js",
  "name": "my-app",
  "compatibility_date": "2026-06-12", // 오늘 날짜 또는 2025-04-01 이상으로
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS",
  },
}
```

- `nodejs_compat` 플래그 필수
- `compatibility_date`는 안전하게 **오늘 날짜**로 설정

### 이미지 관련

- 설정에 `images: { binding: "IMAGES" }` 항목이 있을 수 있음
- 정적 이미지만 서빙하고 `next/image` 최적화를 안 쓸 거라면 이 바인딩 불필요 (있어도 무해)
- 최적화를 끄려면 `next.config.ts`의 `images`에 `unoptimized: true` 추가

### R2 캐싱

- ISR/SSG 재검증을 쓴다면 R2 버킷 바인딩(`NEXT_INC_CACHE_R2_BUCKET`) 필요
- **첫 배포에서는 건너뛰고 나중에 추가해도 됨**

---

## 3단계 — Next.js 설정 파일과 코드 점검

### `next.config.ts`에 로컬 개발용 유틸 추가

파일 맨 아래에 추가합니다. (next dev 개발 서버가 OpenNext 어댑터와 통합되어 로컬에서 바인딩을 쓸 수 있게 함)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 기존 설정 */
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
```

### edge 런타임 지시자 제거

소스 파일에 `export const runtime = "edge";`가 있으면 **모두 제거** (edge 런타임 미지원).
가벼운 미들웨어 자체는 그대로 둬도 되고, 이 지시자만 찾아서 삭제하면 됩니다.

```bash
grep -r 'runtime = "edge"' ./   # 검색
```

### `.gitignore`에 빌드 출력물 추가

```bash
echo ".open-next" >> .gitignore
```

### `package.json` 스크립트 확인

자동 마이그레이션이 아래를 넣어줍니다.

```jsonc
{
  "scripts": {
    "build": "next build",
    "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
  },
}
```

---

## 4단계 — 정적 에셋 캐싱 헤더 추가

캐릭터 이미지 등 정적 파일이 엣지에 잘 캐싱되도록 `public/_headers` 파일 생성:

```
/_next/static/*
  Cache-Control: public,max-age=31536000,immutable
```

---

## 5단계 — 로컬에서 미리보기

배포 전, 실제 Workers 런타임에서 잘 도는지 로컬 확인:

```bash
npm run preview
```

- Node.js가 아니라 **Workers 런타임**에서 로컬로 띄워줌 → 배포 환경과 동일하게 테스트 가능
- 터미널에 출력되는 `http://localhost:8787` 주소를 브라우저로 열어 페이지·이미지·미들웨어 확인
- 환경변수 문제나 빌드 에러가 여기서 가장 먼저 드러남

> 평소 개발은 기존처럼 `npm run dev` 로 계속 진행하면 됩니다.

---

## 6단계 — 배포

### 방법 A — CLI로 바로 배포 (빠르게 한 번 띄워보기)

브라우저 인증:

```bash
npx wrangler login
```

→ 브라우저 창이 자동으로 열림 → Cloudflare 로그인 화면에서 **"Allow"(허용)** 클릭

배포:

```bash
npm run deploy
```

→ 빌드 후 자동 배포, 완료되면 터미널에 `https://my-app.<your-subdomain>.workers.dev` 형태의 URL 출력

### 방법 B — Git 연동 (팀 협업 권장)

코드를 push하면 Cloudflare가 자동 빌드·배포하고, PR마다 프리뷰 환경도 생성합니다.

1. <https://dash.cloudflare.com> 로그인
2. 왼쪽 사이드바 **"Workers & Pages"**(또는 "Compute") 클릭
3. **"Create"** 버튼 → **"Import a repository"** / Git 연결 선택
4. GitHub(또는 GitLab) 연동을 **"Authorize"(승인)** 후, 배포할 저장소 선택
5. 빌드 설정에서 프레임워크가 **Next.js**로 자동 감지되는지 확인
   - 안 되면 빌드 명령을 `npx opennextjs-cloudflare build`로 지정
6. **(중요)** "Build Variables and secrets"(빌드 변수 및 시크릿) 섹션에 환경변수 등록
   - `NEXT_PUBLIC_...` 공개 변수와 비공개 변수 **모두** 등록
   - 빌드가 SSG 페이지 생성·인라이닝에 접근해야 하므로 빠지면 빌드 실패
7. **"Save and Deploy"(저장 및 배포)** 클릭

→ 이후 프로덕션 브랜치에 머지하는 PR마다 자동 빌드·배포되고, PR별 프리뷰 URL이 생성됨

---

## 7단계 — 배포 후

자체 도메인 연결:

- 대시보드 → 해당 Worker → **"Settings"** → **"Domains & Routes"** → 커스텀 도메인 추가

---

## 핵심 명령 요약

```bash
# 1. 마이그레이션
npx @opennextjs/cloudflare migrate

# 2. 로컬 미리보기
npm run preview

# 3a. CLI 배포
npx wrangler login
npm run deploy

# 3b. 또는 Git 연동 (대시보드에서 저장소 연결)
```

---

## 참고 링크

- OpenNext Cloudflare 시작 가이드: <https://opennext.js.org/cloudflare/get-started>
- 이미지 최적화 설정: <https://opennext.js.org/cloudflare/howtos/image>
- 환경변수 가이드: <https://opennext.js.org/cloudflare/howtos/env-vars>
- 캐싱(R2) 설정: <https://opennext.js.org/cloudflare/caching>
- Cloudflare Workers 공식 Next.js 가이드: <https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/>
