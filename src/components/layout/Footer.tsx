import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-nchkay.png"
              alt="Nch'ḵay̓ Development Corporation"
              width={120}
              height={36}
            />
            <span className="text-sm text-gray-600">Capilano River RV Park</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/sites" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Sites & Rates
            </Link>
            <Link href="/amenities" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Amenities
            </Link>
            <Link href="/activities" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Activities
            </Link>
            <Link href="/location" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Location
            </Link>
            <Link href="/reservations" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Reservations
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Contact
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Nch&apos;ḵay̓ Development Corporation. Sḵwx̱wú7mesh Úxwumixw.
        </p>
      </div>
    </footer>
  );
}
