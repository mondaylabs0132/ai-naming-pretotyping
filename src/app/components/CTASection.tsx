'use client';

import { useState, type FormEvent } from 'react';

const perks = [
  { icon: '🎟️', text: '우선 체험권 지급' },
  { icon: '💸', text: '50% 할인 바우처' },
  { icon: '📊', text: '무료 샘플 리포트' },
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
          border-radius: 40px;
          position: relative;
          overflow: hidden;
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
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(198,192,255,0.22) 0%, transparent 65%);
          top: -140px; right: -100px;
          pointer-events: none;
        }
        .cta-orb-bl {
          position: absolute;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(252,211,68,0.14) 0%, transparent 65%);
          bottom: -100px; left: -60px;
          pointer-events: none;
        }
        .perk-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 999px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          font-size: 12px; font-weight: 600;
          color: rgba(255,255,255,0.88);
          backdrop-filter: blur(4px);
        }
        .email-wrap {
          display: flex; flex-direction: column; gap: 10px;
          padding: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          backdrop-filter: blur(8px);
        }
        @media (min-width: 640px) {
          .email-wrap { flex-direction: row; }
        }
        .email-inner {
          position: relative; flex: 1;
        }
        .email-icon {
          position: absolute; left: 18px; top: 50%; transform: translateY(-50%);
          color: rgba(100,100,120,0.5); pointer-events: none;
        }
        .email-input {
          width: 100%; padding: 14px 20px 14px 48px;
          border-radius: 999px;
          background: #fff; color: #191a2e;
          border: none; outline: none;
          font-size: 15px; font-weight: 500;
          transition: box-shadow 0.2s;
        }
        .email-input:focus { box-shadow: 0 0 0 3px rgba(252,211,68,0.35); }
        .email-input::placeholder { color: rgba(100,100,120,0.45); }
        .cta-submit {
          display: flex; align-items: center; justify-content: center; gap-8px;
          gap: 8px;
          padding: 14px 28px; border-radius: 999px;
          background: #fcd344; color: #3d2400;
          font-size: 14px; font-weight: 800;
          border: none; cursor: pointer; white-space: nowrap;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 4px 20px rgba(252,211,68,0.4);
        }
        .cta-submit:hover {
          background: #ffe066;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(252,211,68,0.5);
        }
        .cta-submit:active { transform: scale(0.97); }
        .cta-submit svg { transition: transform 0.2s; }
        .cta-submit:hover svg { transform: translateX(3px); }
        .success-box {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 28px; padding: 32px;
          backdrop-filter: blur(12px);
        }
        .success-icon {
          width: 64px; height: 64px; border-radius: 50%;
          background: #fcd344;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
        }
        .avatar-ring {
          width: 36px; height: 36px; border-radius: 50%;
          border: 2px solid rgba(84,65,219,0.6);
          overflow: hidden; background: #e4dfff;
          margin-left: -10px;
        }
        .avatar-ring:first-child { margin-left: 0; }
      `}</style>

      <section className="py-24 px-6">
        <div
          className="max-w-[1100px] mx-auto cta-wrap"
          style={{ boxShadow: '0 40px 80px -20px rgba(62,37,195,0.35)' }}
        >
          {/* 배경 레이어 */}
          <div className="cta-grid" />
          <div className="cta-orb-tr" />
          <div className="cta-orb-bl" />

          <div className="relative z-10 px-8 py-16 md:px-20 md:py-20 text-center">
            {/* 출시 뱃지 */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
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
                className="text-xs font-bold tracking-wide"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                정식 출시 준비 중
              </span>
            </div>

            {/* 헤드라인 */}
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.15] tracking-tight mb-6">
              우리 아이 평생 불릴 이름,
              <br />
              <span style={{ color: '#fcd344' }}>한 번 더</span> 확인해보세요.
            </h2>

            <p
              className="text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              지금 사전 대기 명단에 등록하고
              <br className="hidden md:block" />
              <strong className="text-white">우선 체험권</strong>과{' '}
              <strong style={{ color: '#fcd344' }}>50% 할인 바우처</strong>를
              받아보세요.
            </p>

            {/* 혜택 칩 */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
              {perks.map((p) => (
                <span key={p.text} className="perk-chip">
                  {p.icon} {p.text}
                </span>
              ))}
            </div>

            {/* 폼 / 완료 상태 */}
            <div className="max-w-lg mx-auto">
              {isSubmitted ? (
                <div className="success-box">
                  <div className="success-icon">
                    <svg
                      width="26"
                      height="26"
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
                  <h3 className="text-xl font-black text-white mb-2">
                    신청 완료! 🎉
                  </h3>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '15px',
                    }}
                  >
                    입력하신 이메일로 출시 알림과 혜택을 보내드릴게요.
                  </p>
                  <div
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold"
                    style={{
                      background: 'rgba(252,211,68,0.15)',
                      color: '#fcd344',
                      border: '1px solid rgba(252,211,68,0.25)',
                    }}
                  >
                    ✅ 대기 명단 등록 완료
                  </div>
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
                    <button type="submit" className="cta-submit">
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
            <div className="mt-10 flex flex-col items-center gap-3">
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
              <p
                className="text-sm font-medium"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
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
