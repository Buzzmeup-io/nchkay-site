import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Portfolio" },
  { href: "/capilano-rv-park", label: "Capilano RV Park" },
  { href: "/directory", label: "Directory" },
  { href: "/design", label: "Design" },
  { href: "/working-with-us", label: "Working with us" },
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
        <nav className="flex items-center gap-1 text-sm font-medium sm:gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-[var(--nchkay-red)] sm:px-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
