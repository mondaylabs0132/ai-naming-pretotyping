import Link from 'next/link';

const footerSections = [
  {
    title: 'Service',
    links: [
      { label: 'AI 분석 엔진', href: '#' },
      { label: '이름 추천 시스템', href: '#' },
      { label: '안전성 검사', href: '#' },
      { label: '이용 가이드', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: '개인정보 처리방침', href: '#' },
      { label: '이용약관', href: '#' },
      { label: '책임 고지', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: '자주 묻는 질문', href: '#' },
      { label: '1:1 문의', href: '#' },
      { label: '제휴 문의', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container pt-20 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* 브랜드 섹션 */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-black tracking-tight flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white text-lg">
                  A
                </span>
                <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                  Astra Naming
                </span>
              </span>
            </Link>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
              아이의 평생을 함께할 소중한 이름, <br />
              AI와 데이터 기반의 정교한 분석으로 <br />
              놀림 걱정 없는 가장 안전한 이름을 선물하세요.
            </p>
            {/* 소셜 아이콘 */}
            <div className="flex gap-4">
              {[
                { label: 'Instagram', icon: '📸' },
                { label: 'Blog', icon: '📝' },
                { label: 'Kakao', icon: '💬' },
              ].map((social) => (
                <button
                  key={social.label}
                  className="w-10 h-10 rounded-full bg-white border border-outline-variant flex items-center justify-center text-lg hover:bg-primary-fixed hover:border-primary transition-all shadow-sm active:scale-90"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* 링크 섹션들 */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 하단 저작권 및 기타 정보 */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <p className="text-xs text-on-surface-variant/70">
              상호명: (주)아스트라 네이밍
            </p>
            <p className="text-xs text-on-surface-variant/70">
              대표자: 홍길동
            </p>
            <p className="text-xs text-on-surface-variant/70">
              사업자등록번호: 000-00-00000
            </p>
          </div>
          <p className="text-xs text-on-surface-variant/60 font-medium">
            © 2026 Astra Naming. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
