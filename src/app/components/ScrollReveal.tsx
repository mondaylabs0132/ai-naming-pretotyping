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
          el.classList.add('opacity-100');
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-1000 opacity-0 
        ${move ? 'translate-y-10' : ''} 
        ${snap ? 'snap-start snap-always min-h-svh flex flex-col justify-center' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
