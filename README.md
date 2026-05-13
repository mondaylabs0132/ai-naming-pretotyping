# AI Naming — 프리토타이핑 랜딩 페이지

이 프로젝트는 실제 서비스를 출시하기 전에, 사람들의 **수요와 관심도를 검증하기 위한 프리토타이핑(Pretotyping) 랜딩 페이지**입니다. 본격적인 개발에 자원을 투입하기 전에 "이 아이디어에 사람들이 실제로 반응하는가?"를 빠르게 확인하는 것이 목적입니다.

## 현재 개발 상태

- 현재는 **히어로(Hero) 섹션만 개발된 상태**입니다.
- 히어로 섹션에서 사용 중인 이미지는 임시 버전이며, **추후 변경될 수 있습니다.**
- 앞으로 히어로 섹션 하단에 서비스 소개, 사용 사례, FAQ, CTA 등 **더 많은 콘텐츠를 추가하여 방문자의 클릭과 전환(가입/대기 신청 등)을 유도할 예정**입니다.

## 기술 스택

- [Next.js](https://nextjs.org) (App Router)
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)로 [Geist](https://vercel.com/font) 폰트 최적화

## 시작하기

개발 서버 실행:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

`app/page.tsx` 파일을 수정하면 페이지가 자동으로 업데이트됩니다.

## 배포

이 프로젝트는 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)에 배포하기 적합합니다. 자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참고하세요.
