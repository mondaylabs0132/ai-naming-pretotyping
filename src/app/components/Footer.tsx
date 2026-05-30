import Link from 'next/link';

const navLinks = [
  { label: 'Features', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full py-xl px-gutter flex flex-col md:flex-row justify-between items-center gap-8 bg-surface-container mt-24">
      <div className="flex flex-col items-center md:items-start gap-4">
        <span className="text-2xl font-bold text-primary">Astra Naming</span>
        <p className="font-body-md text-body-md text-on-surface-variant">
          © 2024 Astra Naming. Crafting Digital Heirlooms.
        </p>
      </div>
      <nav className="flex flex-wrap justify-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
