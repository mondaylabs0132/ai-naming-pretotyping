'use client';

export default function FocusEmailButton() {
  const handleClick = () => {
    const input = document.getElementById('email-input') as HTMLInputElement | null;
    input?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    input?.focus();
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      오픈 알림 받기
    </button>
  );
}
