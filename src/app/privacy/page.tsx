import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 - 첫지음",
  description:
    "첫지음 사전예약 시 수집하는 개인정보의 처리 목적, 보유 기간, 처리위탁 및 정보주체의 권리를 안내합니다.",
};

/**
 * 개인정보보호법 제30조 필수 기재사항을 모두 담는다.
 * 수집 항목이 이메일 하나뿐이라 분량은 짧지만, 항목 자체는 생략할 수 없다.
 * 시행일자와 위탁·국외이전 표는 스택이 바뀌면 반드시 함께 갱신한다.
 */
const EFFECTIVE_DATE = "2026년 8월 7일";
const CONTACT_EMAIL = "mondaylabs0132@gmail.com";
const RETENTION = "수집일로부터 1년";

/** 처리위탁 및 국외이전 현황 — 실제 배포 스택과 일치해야 한다. */
const processors = [
  {
    name: "Supabase Inc.",
    purpose: "사전예약 이메일 저장 및 관리",
    country: "미국",
    period: `${RETENTION} (위탁계약 종료 시까지)`,
  },
  {
    name: "Cloudflare, Inc.",
    purpose: "웹사이트 호스팅 및 트래픽 처리",
    country: "미국",
    period: "위탁계약 종료 시까지",
  },
  {
    name: "Google LLC",
    purpose: "Google Tag Manager를 통한 방문 통계 분석",
    country: "미국",
    period: "위탁계약 종료 시까지",
  },
  {
    name: "Meta Platforms, Inc.",
    purpose: "Meta 픽셀을 통한 방문·전환 데이터 수집 및 광고 성과 측정",
    country: "미국",
    period: "위탁계약 종료 시까지",
  },
];

const rights = [
  "개인정보 열람 요구",
  "오류가 있을 경우 정정 요구",
  "삭제 요구",
  "처리정지 요구",
];

export default function PrivacyPage() {
  return (
    <div className="min-h-svh bg-surface">
      {/* 랜딩과 달리 스냅 스크롤 컨테이너 밖의 일반 문서 페이지다. */}
      <header className="sticky top-0 z-10 glass-nav border-b border-[rgba(84,65,219,0.1)]">
        <div className="max-w-3xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-black tracking-tight"
            style={{ color: "#5441d8" }}
          >
            첫지음
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm font-semibold"
            style={{ color: "#787586" }}
          >
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>
            돌아가기
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-on-background">
          개인정보처리방침
        </h1>
        <p className="mt-3 text-sm" style={{ color: "#787586" }}>
          시행일자: {EFFECTIVE_DATE}
        </p>

        <p
          className="mt-8 text-sm md:text-base leading-relaxed"
          style={{ color: "#474555" }}
        >
          먼데이랩스(이하 &lsquo;회사&rsquo;)는 개인정보보호법 제30조에 따라
          정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하게 처리할 수
          있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
        </p>

        <Section title="1. 개인정보의 처리 목적 및 수집 항목">
          <p>
            회사는 첫지음 정식 출시 알림 및 사전예약 혜택 안내를 위해 아래
            정보를 수집·이용합니다. 수집한 정보는 명시한 목적 외의 용도로
            이용하지 않습니다.
          </p>
          <Table
            head={["수집 항목", "처리 목적", "보유·이용 기간"]}
            rows={[
              [
                "이메일 주소",
                "정식 출시 알림, 사전예약 혜택(할인 등) 안내",
                RETENTION,
              ],
            ]}
          />
          <p className="text-xs" style={{ color: "#787586" }}>
            이메일 주소는 사전예약 목적 달성에 필요한 최소한의 정보이며,
            이름·연락처·생년월일 등 그 밖의 개인정보는 수집하지 않습니다.
          </p>
        </Section>

        <Section title="2. 개인정보의 보유 및 이용 기간">
          <p>
            회사는 수집일로부터 <strong>1년</strong>간 이메일 주소를 보유하며,
            기간이 만료되거나 정보주체가 수신거부·삭제를 요청한 경우 지체 없이
            파기합니다. 관계 법령에 따라 보존 의무가 있는 경우에는 해당 기간
            동안 보관합니다.
          </p>
        </Section>

        <Section title="3. 개인정보의 제3자 제공">
          <p>
            회사는 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만
            법령에 특별한 규정이 있거나 수사기관이 법령에 정한 절차와 방법에
            따라 요구하는 경우에 한해 제공할 수 있습니다.
          </p>
        </Section>

        <Section title="4. 개인정보 처리위탁 및 국외 이전">
          <p>
            회사는 서비스 운영을 위해 아래와 같이 개인정보 처리업무를 위탁하고
            있으며, 해당 업무는 국외에서 처리됩니다. 위탁계약 시 개인정보의
            안전한 관리에 관한 사항을 규정하고 있습니다.
          </p>
          <Table
            head={["수탁자", "위탁 업무", "이전 국가", "보유 기간"]}
            rows={processors.map((p) => [
              p.name,
              p.purpose,
              p.country,
              p.period,
            ])}
          />
          <p className="text-xs" style={{ color: "#787586" }}>
            이전되는 항목은 이메일 주소이며, 정보주체는 개인정보의 국외 이전을
            거부할 수 있습니다. 다만 거부 시 사전예약 신청이 제한될 수 있습니다.
          </p>
        </Section>

        <Section title="5. 개인정보의 파기 절차 및 방법">
          <p>
            보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 지체 없이
            파기합니다. 전자적 파일 형태의 정보는 복구·재생할 수 없도록
            데이터베이스 레코드를 영구 삭제하는 방법으로 파기합니다.
          </p>
        </Section>

        <Section title="6. 정보주체의 권리와 행사 방법">
          <p>정보주체는 언제든지 회사에 대해 다음 권리를 행사할 수 있습니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            {rights.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p>
            권리 행사는{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold underline"
              style={{ color: "#5441d8" }}
            >
              {CONTACT_EMAIL}
            </a>{" "}
            으로 요청하실 수 있으며, 회사는 요청을 받은 날로부터 10일 이내에
            조치하고 그 결과를 알려드립니다. 법정대리인이나 위임을 받은 자를
            통해 권리를 행사할 수도 있습니다.
          </p>
        </Section>

        <Section title="7. 광고성 정보 전송">
          <p>
            회사는 정보통신망법 제50조에 따라 정보주체가 사전예약 시 동의한 범위
            내에서 출시 알림 및 혜택 안내 메일을 발송합니다. 모든 발송 메일에는
            수신거부 방법이 포함되며, 수신거부 시 발송을 즉시 중단하고 해당
            이메일 주소를 파기합니다. 위{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold underline"
              style={{ color: "#5441d8" }}
            >
              {CONTACT_EMAIL}
            </a>{" "}
            으로도 수신거부를 요청하실 수 있습니다.
          </p>
        </Section>

        <Section title="8. 자동으로 수집되는 정보 및 쿠키">
          <p>
            회사는 방문 통계 분석을 위해 Google Tag Manager를 사용하며, 이
            과정에서 쿠키와 접속 로그(브라우저 종류, 방문 일시, 페이지 조회 기록
            등)가 자동으로 수집될 수 있습니다. 또한 회사는 광고 성과 측정을
            위해 Meta Platforms, Inc.의 Meta 픽셀을 사용하며, 이 과정에서 방문
            및 전환 데이터가 쿠키를 통해 수집될 수 있습니다. 이 정보는 개인을
            식별하는 데 이용되지 않으며, 사전예약 이메일 주소와 결합하여
            처리하지 않습니다.
          </p>
          <p>
            정보주체는 웹브라우저의 설정에서 쿠키 저장을 거부할 수 있습니다.
            (예: Chrome → 설정 → 개인 정보 보호 및 보안 → 서드 파티 쿠키) 다만
            쿠키를 거부해도 사전예약 신청은 정상적으로 이용할 수 있습니다.
          </p>
        </Section>

        <Section title="9. 개인정보의 안전성 확보 조치">
          <p>
            회사는 개인정보의 안전한 처리를 위해 접근 권한 최소화, 데이터베이스
            접근 통제, 전송 구간 암호화(HTTPS) 등의 조치를 취하고 있습니다.
          </p>
        </Section>

        <Section title="10. 개인정보 보호책임자">
          <Table
            head={["구분", "내용"]}
            rows={[
              ["개인정보 보호책임자", "예병수 (먼데이랩스 대표)"],
              ["이메일", CONTACT_EMAIL],
              ["열람 청구 접수·처리 부서", "먼데이랩스 (동일 연락처)"],
            ]}
          />
          <p>
            정보주체는 개인정보 처리에 관한 문의, 불만처리, 피해구제 등에 관한
            사항을 위 연락처로 문의할 수 있습니다.
          </p>
        </Section>

        <Section title="11. 권익침해 구제 방법">
          <p>
            개인정보 침해로 인한 구제를 받기 위해 아래 기관에 분쟁 해결이나 상담
            등을 신청할 수 있습니다.
          </p>
          <Table
            head={["기관", "전화", "홈페이지"]}
            rows={[
              ["개인정보분쟁조정위원회", "1833-6972", "www.kopico.go.kr"],
              ["개인정보침해신고센터", "118", "privacy.kisa.or.kr"],
              ["대검찰청 사이버수사과", "1301", "www.spo.go.kr"],
              ["경찰청 사이버수사국", "182", "ecrm.police.go.kr"],
            ]}
          />
        </Section>

        <Section title="12. 개인정보처리방침의 변경">
          <p>
            이 개인정보처리방침은 {EFFECTIVE_DATE}부터 적용됩니다. 법령·정책
            또는 보안 기술의 변경에 따라 내용이 추가·삭제·수정될 경우, 변경
            사항의 시행 최소 7일 전부터 본 페이지를 통해 공지합니다.
          </p>
        </Section>

        <div className="mt-14 pt-8 border-t border-[rgba(84,65,219,0.1)]">
          <p className="text-xs leading-relaxed" style={{ color: "#a5a2b3" }}>
            상호명: 먼데이랩스 · 대표자: 예병수 · 사업자번호: 203-35-93380
          </p>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-base md:text-lg font-black tracking-tight text-on-background">
        {title}
      </h2>
      <div
        className="mt-3 space-y-3 text-sm md:text-[15px] leading-relaxed"
        style={{ color: "#474555" }}
      >
        {children}
      </div>
    </section>
  );
}

/** 넓은 표가 페이지 전체를 좌우로 밀지 않도록 자체 스크롤 컨테이너에 담는다. */
function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto -mx-1 px-1">
      <table className="w-full min-w-[420px] text-xs md:text-sm border-collapse">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="text-left font-bold px-3 py-2.5 whitespace-nowrap"
                style={{
                  background: "rgba(84,65,219,0.05)",
                  color: "#5441d8",
                  borderBottom: "1px solid rgba(84,65,219,0.12)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2.5 align-top"
                  style={{
                    borderBottom: "1px solid rgba(84,65,219,0.07)",
                    color: "#474555",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
