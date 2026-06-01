'use client';

import { useState, type FormEvent } from 'react';

const perks = [
  { icon: '🎟️', text: '우선 체험권' },
  { icon: '💸', text: '50% 할인' },
  { icon: '📊', text: '분석 리포트' },
];

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <style>{`
        .cta-wrap {
          background: linear-gradient(145deg, #3d2fc4 0%, #5441d8 45%, #7c5fe6 100%);
          border-radius: 32px;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .cta-wrap { border-radius: 40px; }
        }
        .cta-grid {
          position: absolute; inset: 0;
          opacity: 0.04;
          background-image:
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .cta-orb-tr {
          position: absolute;
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(198,192,255,0.22) 0%, transparent 65%);
          top: -100px; right: -80px;
          pointer-events: none;
        }
        @media (min-width: 768px) {
          .cta-orb-tr { width: 420px; height: 420px; top: -140px; right: -100px; }
        }
        .cta-orb-bl {
          position: absolute;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(252,211,68,0.14) 0%, transparent 65%);
          bottom: -60px; left: -40px;
          pointer-events: none;
        }
        @media (min-width: 768px) {
          .cta-orb-bl { width: 320px; height: 320px; bottom: -100px; left: -60px; }
        }
        .perk-chip {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 6px 12px; border-radius: 999px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.88);
          backdrop-filter: blur(4px);
        }
        @media (min-width: 768px) {
          .perk-chip { font-size: 12px; gap: 6px; padding: 7px 14px; }
        }
        .email-wrap {
          display: flex; flex-direction: column; gap: 8px;
          padding: 6px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 24px;
          backdrop-filter: blur(8px);
        }
        @media (min-width: 640px) {
          .email-wrap { flex-direction: row; border-radius: 999px; gap: 10px; }
        }
        .email-inner {
          position: relative; flex: 1;
        }
        .email-icon {
          position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
          color: rgba(100,100,120,0.5); pointer-events: none;
        }
        .email-input {
          width: 100%; padding: 12px 16px 12px 42px;
          border-radius: 999px;
          background: #fff; color: #191a2e;
          border: none; outline: none;
          font-size: 14px; font-weight: 500;
        }
        @media (min-width: 768px) {
          .email-input { font-size: 15px; padding: 14px 20px 14px 48px; }
        }
        .cta-submit {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 12px 24px; border-radius: 999px;
          background: #fcd344; color: #3d2400;
          font-size: 13px; font-weight: 800;
          border: none; cursor: pointer; white-space: nowrap;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        @media (min-width: 768px) {
          .cta-submit { font-size: 14px; padding: 14px 28px; gap: 8px; }
        }
        .success-box {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 24px; padding: 24px;
          backdrop-filter: blur(12px);
        }
        .avatar-ring {
          width: 32px; height: 32px; border-radius: 50%;
          border: 2px solid rgba(84,65,219,0.6);
          overflow: hidden; background: #e4dfff;
          margin-left: -8px;
        }
        .avatar-ring:first-child { margin-left: 0; }
        @media (min-width: 768px) {
          .avatar-ring { width: 36px; height: 36px; margin-left: -10px; }
        }
      `}</style>

      <section className="px-6 mx-auto w-full h-svh flex flex-col items-center justify-center py-6 md:py-0">
        <div
          className="max-w-275 mx-auto w-full cta-wrap"
          style={{ boxShadow: '0 40px 80px -20px rgba(62,37,195,0.35)' }}
        >
          {/* 배경 레이어 */}
          <div className="cta-grid" />
          <div className="cta-orb-tr" />
          <div className="cta-orb-bl" />

          <div className="relative z-10 px-6 py-12 md:px-20 md:py-20 text-center">
            {/* 출시 뱃지 */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 md:mb-8"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.22)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#fcd344' }}
              />
              <span
                className="text-[10px] md:text-xs font-bold tracking-wide"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                정식 출시 준비 중
              </span>
            </div>

            {/* 헤드라인 */}
            <h2 className="text-2xl md:text-5xl font-black text-white leading-[1.2] tracking-tight mb-4 md:mb-6">
              우리 아이 평생 불릴 이름,
              <br />
              <span style={{ color: '#fcd344' }}>한 번 더</span> 확인해보세요.
            </h2>

            <p
              className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              지금 사전 등록하고{' '}
              <strong className="text-white">우선 체험권</strong>과{' '}
              <strong style={{ color: '#fcd344' }}>50% 할인권</strong>을
              받으세요.
            </p>

            {/* 혜택 칩 */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
              {perks.map((p) => (
                <span key={p.text} className="perk-chip">
                  {p.icon} {p.text}
                </span>
              ))}
            </div>

            {/* 폼 / 완료 상태 */}
            <div className="max-w-md mx-auto">
              {isSubmitted ? (
                <div className="success-box animate-in fade-in zoom-in duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#fcd344] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3d2400"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-white mb-2">
                    신청 완료! 🎉
                  </h3>
                  <p className="text-xs md:text-sm text-white/60">
                    혜택 안내 메일을 곧 보내드릴게요.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="email-wrap">
                    <div className="email-inner">
                      <div className="email-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <input
                        id="email-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email-input"
                        placeholder="이메일 주소를 입력해주세요"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="cta-submit hover:bg-[#ffe066] active:scale-95 transition-all"
                    >
                      무료 사전 예약
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* 소셜 프루프 */}
            <div className="mt-8 md:mt-10 flex flex-col items-center gap-2 md:gap-3">
              <div className="flex">
                {[16, 17, 18, 19, 20].map((i) => (
                  <div key={i} className="avatar-ring">
                    <img
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[11px] md:text-sm font-medium text-white/50">
                이미{' '}
                <strong style={{ color: '#fcd344', fontWeight: 800 }}>
                  1,248명
                </strong>
                의 부모님이 대기 중
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
