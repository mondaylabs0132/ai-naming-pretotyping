'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  snap?: boolean;
  move?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  snap = true,
  move = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-8');
          el.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        opacity-0
        transition-all
        duration-1000
        ease-out
        ${move ? 'translate-y-8' : ''}
        ${/* 자식 섹션이 h-svh로 스스로 한 화면을 차지하므로 래퍼는 높이를
             지정하지 않는다. min-h-[calc(100vh-80px)] + justify-center를 두면
             남는 공간이 -80px이 되어 자식이 상시 40px 위로 밀려 헤더에 가렸다. */ ''}
        ${snap ? 'snap-start snap-always' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
