/**
 * 마케팅 이벤트 전송 헬퍼.
 *
 * 컴포넌트에서는 track("cta_click", { cta_location: "hero" })처럼만 호출하고,
 * GA4(gtag)·Meta Pixel(fbq) 어디로 보낼지는 이 파일에서만 결정한다.
 * 이벤트 이름과 파라미터는 EventMap에 모아 두어 오타를 타입으로 막는다.
 *
 * 스크립트 자체는 app/layout.tsx에서 로드한다.
 */

export const GA_MEASUREMENT_ID = "G-TF10XFGXBK";
export const META_PIXEL_ID = "1102660275444225";

type EventMap = {
  /** 헤더·히어로의 사전 예약 버튼 클릭 (이메일 폼으로 스크롤) */
  cta_click: { cta_location: "header" | "hero" };
  /** 이메일 사전 예약 제출 성공. Meta에는 표준 Lead 이벤트로도 전달 */
  email_submitted: Record<string, never>;
  /** 세련된 이름 섹션에서 느낌 태그 선택 */
  tag_selected: { feel_tag: string };
};

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

export function track<E extends keyof EventMap>(
  event: E,
  params?: EventMap[E],
) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;

  w.gtag?.("event", event, params ?? {});

  // Meta에는 광고 최적화 기준이 되는 실제 성과(Lead)만 보낸다.
  if (event === "email_submitted") {
    w.fbq?.("track", "Lead");
  }
}
