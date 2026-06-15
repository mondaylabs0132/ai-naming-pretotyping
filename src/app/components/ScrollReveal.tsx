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
        ${snap ? 'snap-start snap-always min-h-[calc(100vh-80px)] flex flex-col justify-center' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
