import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-nchkay.png"
            alt="Nch'ḵay̓ Development Corporation"
            width={160}
            height={48}
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-[var(--nchkay-red)] hover:underline">
            Portfolio
          </Link>
          <Link href="/directory" className="text-gray-700 hover:text-[var(--nchkay-red)]">
            Directory
          </Link>
          <Link href="/design" className="text-gray-700 hover:text-[var(--nchkay-red)]">
            Design
          </Link>
          <Link href="/working-with-us" className="text-gray-700 hover:text-[var(--nchkay-red)]">
            Working with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
