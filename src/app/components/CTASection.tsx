'use client';

import { useState, type FormEvent } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: 이메일 제출 로직 구현
    console.log('Submitted email:', email);
  };

  return (
    <section className="py-xl px-gutter">
      <div className="max-w-[1200px] mx-auto bg-primary rounded-[40px] p-12 md:p-24 text-center text-on-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -ml-32 -mb-32" />
        <div className="relative z-10">
          <span className="inline-block border border-on-primary/30 rounded-full px-6 py-2 mb-8 font-label-md text-label-md">
            현재 정식 출시 준비 중입니다
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            우리 아이 평생 불릴 이름,
            <br />한 번 더 확인해보세요.
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed mb-12 max-w-xl mx-auto">
            지금 이메일을 등록하고 사전 대기 명단에 이름을 올리세요.
            <br />
            <strong className="text-white">우선 체험권</strong>과{' '}
            <strong className="text-secondary-fixed">50% 할인 바우처</strong>를
            보내드립니다.
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-6 py-4 rounded-full bg-white text-on-background focus:ring-2 focus:ring-secondary-container border-none shadow-inner font-body-md text-body-md outline-none"
              placeholder="이메일 주소를 입력해주세요"
              required
            />
            <button
              type="submit"
              className="bg-secondary-container text-on-secondary-container font-bold px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-all whitespace-nowrap"
            >
              사전 예약하기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
