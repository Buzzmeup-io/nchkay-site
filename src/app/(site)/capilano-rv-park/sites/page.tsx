import { AnimateIn } from "@/components/ui/AnimateIn";
import { ParkPageHeader } from "../ParkPageHeader";
import Link from "next/link";

export const metadata = {
  title: "Sites & Rates | Capilano River RV Park",
  description:
    "205 premium RV sites and 32 tent sites at Capilano River RV Park in West Vancouver. Full hookup, partial hookup, and tent camping options.",
};

const OFF_SEASON = [
  { type: "Tent site", detail: "No hookup, first-come first-served", price: "Seasonal" },
  { type: "RV — Partial hookup", detail: "15-amp, water", price: "$70" },
  { type: "RV — Full hookup (30A)", detail: "30-amp, water, sewer", price: "$75" },
  { type: "RV — Full hookup (50A)", detail: "50-amp, water, sewer", price: "$80" },
  { type: "Short-term RV storage", detail: "Unpowered storage pad", price: "$35" },
];

const SUMMER_RATES = [
  { type: "Tent site", detail: "No hookup", weekday: "$68", weekend: "$78" },
  { type: "RV — Partial hookup", detail: "15-amp, water", weekday: "$83", weekend: "$93" },
  { type: "RV — Full hookup (30A)", detail: "30-amp, water, sewer", weekday: "$94", weekend: "$104" },
  { type: "RV — Full hookup (50A)", detail: "50-amp, water, sewer", weekday: "$104", weekend: "$114" },
];

const SITE_FEATURES = [
  "Level concrete pads",
  "Blacktopped roads",
  "Landscaped lawns",
  "Picnic table at every site",
  "Fully serviced pads (sewer & water)",
  "Off-season storage available",
];

export default function SitesPage() {
  return (
    <div>
      <ParkPageHeader
        label="Capilano River RV Park"
        title="Sites & Rates"
        description="205 premium RV sites and 32 tent sites. Level concrete pads, landscaped lawns, and full-service hookups."
      />

      {/* Site breakdown */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              205 premium sites
            </h2>
            <p className="mt-3 max-w-2xl text-gray-500">
              Plus 32 tent sites for guests travelling lighter. Every RV site
              features level concrete pads with blacktopped roads and landscaped
              lawns.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { count: "65", label: "15-amp sites", desc: "Partial hookup with water" },
              { count: "102", label: "30-amp sites", desc: "Full hookup with water & sewer" },
              { count: "6", label: "50-amp sites", desc: "Full hookup with water & sewer" },
            ].map((s, i) => (
              <AnimateIn key={s.label} delay={i * 100}>
                <div className="rounded-2xl border border-gray-200 bg-[var(--park-warm)] p-8 text-center">
                  <p
                    className="text-5xl text-[var(--park-forest)]"
                    style={{ fontFamily: "var(--font-display), serif" }}
                  >
                    {s.count}
                  </p>
                  <p className="mt-2 font-semibold text-[var(--park-forest)]">{s.label}</p>
                  <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={300}>
            <div className="mt-10 flex flex-wrap gap-3">
              {SITE_FEATURES.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-[var(--park-sage)]/20 bg-[var(--park-mist)] px-4 py-1.5 text-sm text-[var(--park-forest)]"
                >
                  {f}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Off-season rates */}
      <section className="border-t border-gray-100 bg-[var(--park-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
              October 1 – April 30
            </p>
            <h2
              className="mt-3 text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Off-season rates
            </h2>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-[var(--park-forest)] text-white">
                    <th className="px-6 py-4 font-medium">Site type</th>
                    <th className="px-6 py-4 font-medium">Details</th>
                    <th className="px-6 py-4 text-right font-medium">Nightly</th>
                  </tr>
                </thead>
                <tbody>
                  {OFF_SEASON.map((r, i) => (
                    <tr
                      key={r.type}
                      className={`border-b border-gray-50 ${i % 2 ? "bg-gray-50/50" : ""}`}
                    >
                      <td className="px-6 py-4 font-medium text-[var(--park-forest)]">{r.type}</td>
                      <td className="px-6 py-4 text-gray-500">{r.detail}</td>
                      <td className="px-6 py-4 text-right font-semibold text-[var(--park-forest)]">
                        {r.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Summer rates */}
      <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--nchkay-orange)]">
              May 1 – September 30
            </p>
            <h2
              className="mt-3 text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Summer rates
            </h2>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-[var(--park-forest)] text-white">
                    <th className="px-6 py-4 font-medium">Site type</th>
                    <th className="px-6 py-4 font-medium">Details</th>
                    <th className="px-6 py-4 text-right font-medium">Weekday</th>
                    <th className="px-6 py-4 text-right font-medium">Weekend</th>
                  </tr>
                </thead>
                <tbody>
                  {SUMMER_RATES.map((r, i) => (
                    <tr
                      key={r.type}
                      className={`border-b border-gray-50 ${i % 2 ? "bg-gray-50/50" : ""}`}
                    >
                      <td className="px-6 py-4 font-medium text-[var(--park-forest)]">{r.type}</td>
                      <td className="px-6 py-4 text-gray-500">{r.detail}</td>
                      <td className="px-6 py-4 text-right font-semibold text-[var(--park-forest)]">
                        {r.weekday}
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-[var(--nchkay-orange)]">
                        {r.weekend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn delay={300}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Extra person", value: "$4.50/night" },
                { label: "Children 12 & under", value: "Free" },
                { label: "Club discounts", value: "10% off (Good Sam, auto clubs)" },
              ].map((d) => (
                <div key={d.label} className="rounded-xl border border-gray-200 bg-[var(--park-warm)] px-5 py-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--park-sage)]">{d.label}</p>
                  <p className="mt-1 font-semibold text-[var(--park-forest)]">{d.value}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={400}>
            <p className="mt-6 text-sm text-gray-500">
              All rates include 5% GST. Weekly rates available Oct–Apr with
              manager approval.{" "}
              <Link href="/capilano-rv-park/reservations" className="text-[var(--nchkay-orange)] hover:underline">
                View booking policies →
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Tent camping */}
      <section className="border-t border-gray-100 bg-[var(--park-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
              Tent camping
            </p>
            <h2
              className="mt-3 text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              32 tent sites
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-500">
              For guests travelling a bit lighter. Tent sites are available on a
              first-come, first-served basis during summer season and include
              access to all park amenities.
            </p>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
