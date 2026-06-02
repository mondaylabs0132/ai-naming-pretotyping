'use client';

import Image from 'next/image';

export default function Header() {
  const scrollToEmail = () => {
    const input = document.getElementById('email-input');
    const section = input?.closest('section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        (input as HTMLInputElement)?.focus();
      }, 800); // 스크롤 및 스냅 완료 후 포커스
    }
  };

  return (
    <header
      className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out nav-border py-4
        `}
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        background: 'rgba(251, 248, 255, 0.6)',
        boxShadow:
          '0 4px 32px -8px rgba(84, 65, 219, 0.1), 0 1px 0 rgba(84,65,219,0.06)',
      }}
    >
      <div className="max-w-300 mx-auto px-6 flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'radial-gradient(circle, rgba(84,65,219,0.15) 0%, transparent 70%)',
              }}
            />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFSXZBzLEmIn-EBknaMOueggLz419YJhrkGWOoL-TcLRxZMCol5kAW4HsTU7QFz45A8ISfszeaLJifxMAc0sAOGcLFLllaQCmgAh3S4dZ30Y6skk6bIVSK-rRb1jOrD5GbeK1dsHVcERj4zRdcDsTRETplvpKHtiCldxL-WkB5fWhGqLONdnTcZG80eQEro3YvVvOAdPV8YguXRsPGYWLFIrOogOQvNt5TASQzRU7op17z5r-lQZ1yo3TC6y2UiuSND2B9rGa-bxk"
              alt="Astra Naming Logo"
              width={36}
              height={36}
              className="logo-glow relative z-10 rounded-lg"
            />
          </div>
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #5441d8 0%, #8b7cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            이름담다
          </span>
        </div>

        {/* CTA 버튼 */}
        <button
          className="btn-shimmer relative overflow-hidden rounded-full text-sm font-semibold text-white px-5 py-2.5 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-px active:scale-[0.97]"
          style={{
            background: 'linear-gradient(135deg, #5441d8 0%, #7c6ef0 100%)',
            boxShadow:
              '0 2px 16px rgba(84, 65, 219, 0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
          }}
          onClick={scrollToEmail}
        >
          <span className="relative z-10 flex items-center gap-1.5">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#fcd344' }}
            />
            사전 신청하기
          </span>
        </button>
      </div>
    </header>
  );
}
