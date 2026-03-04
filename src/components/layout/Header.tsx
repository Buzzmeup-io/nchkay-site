import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/sites", label: "Sites & Rates" },
  { href: "/amenities", label: "Amenities" },
  { href: "/activities", label: "Activities" },
  { href: "/location", label: "Location" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo-nchkay.png"
            alt="Nch'ḵay̓ Development Corporation"
            width={160}
            height={48}
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-semibold tracking-wide sm:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 transition-colors hover:text-[var(--nchkay-red)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
