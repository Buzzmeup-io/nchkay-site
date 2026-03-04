"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PARK_LINKS = [
  { href: "/capilano-rv-park", label: "Overview" },
  { href: "/capilano-rv-park/sites", label: "Sites & Rates" },
  { href: "/capilano-rv-park/amenities", label: "Amenities" },
  { href: "/capilano-rv-park/activities", label: "Activities" },
  { href: "/capilano-rv-park/location", label: "Location" },
  { href: "/capilano-rv-park/reservations", label: "Reservations" },
  { href: "/capilano-rv-park/contact", label: "Contact" },
];

export function ParkNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-16 z-40 border-b border-[var(--park-mist)] bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="-mb-px flex gap-1 overflow-x-auto py-1 scrollbar-none">
          {PARK_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`shrink-0 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[var(--park-forest)] text-white"
                    : "text-gray-600 hover:bg-[var(--park-mist)] hover:text-[var(--park-forest)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
