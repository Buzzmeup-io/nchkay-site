import { AnimateIn } from "@/components/ui/AnimateIn";
import { ParkPageHeader } from "../ParkPageHeader";

export const metadata = {
  title: "Amenities | Capilano River RV Park",
  description:
    "Heated outdoor pool, indoor whirlpool, laundry, free WiFi, recreation room, and more at Capilano River RV Park.",
};

const AMENITIES = [
  {
    name: "Heated Outdoor Pool",
    desc: "Seasonal outdoor pool surrounded by landscaped grounds. Perfect for cooling off after a day of exploring the North Shore.",
    icon: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
    category: "recreation",
  },
  {
    name: "Indoor Whirlpool",
    desc: "10-person hot tub available year-round. Unwind after hiking Grouse Mountain or cycling the seawall.",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0 .828.448 1.285 1 2s1 2.172 1 3a4 4 0 01-8 0c0-1.293.882-2.408 1.659-3.276",
    category: "recreation",
  },
  {
    name: "Recreation Room",
    desc: "Indoor games and lounge area for rainy days. Board games, TV, and a comfortable space to socialize.",
    icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    category: "recreation",
  },
  {
    name: "Children's Playground",
    desc: "Dedicated play area for kids to enjoy while parents relax at the campsite.",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    category: "recreation",
  },
  {
    name: "Walking Trails",
    desc: "Beautiful on-site walking trails through the park grounds, steps from the Capilano River.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    category: "recreation",
  },
  {
    name: "Free High-Speed WiFi",
    desc: "Campground-wide high-speed wireless internet included with every site. Stay connected throughout your stay.",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
    category: "services",
  },
  {
    name: "Laundry Facilities",
    desc: "On-site coin-operated washers and dryers. Clean and well-maintained for your convenience.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    category: "services",
  },
  {
    name: "Complimentary Showers",
    desc: "Clean washrooms with free hot showers available to all guests throughout the park.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    category: "services",
  },
  {
    name: "Propane Station",
    desc: "Competitively priced on-site propane filling station. No need to leave the park for refills.",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0 .828.448 1.285 1 2s1 2.172 1 3a4 4 0 01-8 0c0-1.293.882-2.408 1.659-3.276",
    category: "services",
  },
  {
    name: "Sani-Station",
    desc: "Full dump station for RV waste disposal, conveniently located within the park grounds.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    category: "services",
  },
  {
    name: "RV Wash",
    desc: "On-site RV wash facility to keep your vehicle clean during and after your stay.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    category: "services",
  },
  {
    name: "24/7 Gated Security",
    desc: "Gated and supervised around the clock for your comfort and safety. Rest easy knowing your site is secure.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    category: "services",
  },
];

const PET_FEATURES = [
  "Full on-site doggie walk area",
  "Free waste bags provided",
  "Multiple dog walking areas",
  "Off-leash dog park (10-min walk)",
  "Pet-friendly sites throughout",
];

const EXTRA_SERVICES = [
  { name: "Sightseeing tours", desc: "Arranged through the front desk" },
  { name: "Car rentals", desc: "Arranged through the front desk" },
  { name: "Picnic tables", desc: "At every site" },
];

export default function AmenitiesPage() {
  return (
    <div>
      <ParkPageHeader
        label="Capilano River RV Park"
        title="Amenities"
        description="Everything you need for a comfortable stay on the North Shore. From our heated pool to free WiFi, we've got you covered."
      />

      {/* Main amenities grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Recreation & facilities
            </h2>
          </AnimateIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((a, i) => (
              <AnimateIn key={a.name} delay={i * 60} variant="scale">
                <div className="group h-full rounded-xl border border-gray-100 bg-[var(--park-warm)] p-6 transition-all duration-300 hover:border-[var(--park-sage)]/30 hover:bg-white hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--park-forest)] text-white transition-colors group-hover:bg-[var(--park-pine)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={a.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-[var(--park-forest)]">{a.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{a.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pet friendly */}
      <section className="border-t border-gray-100 bg-[var(--park-forest)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start">
            <AnimateIn variant="left" className="flex-1">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-cedar-light)]">
                Furry friends welcome
              </p>
              <h2
                className="mt-3 text-3xl text-white"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                Pet-friendly park
              </h2>
              <p className="mt-4 leading-relaxed text-white/60">
                We love your four-legged family members. Our park is fully
                pet-friendly with dedicated walking areas and nearby off-leash
                parks along the Capilano River.
              </p>
            </AnimateIn>
            <AnimateIn variant="right" delay={200} className="flex-1">
              <ul className="space-y-3">
                {PET_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/80">
                    <svg className="h-5 w-5 shrink-0 text-[var(--park-cedar-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Extra services */}
      <section className="border-t border-gray-100 bg-[var(--park-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Additional services
            </h2>
          </AnimateIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {EXTRA_SERVICES.map((s, i) => (
              <AnimateIn key={s.name} delay={i * 100}>
                <div className="rounded-xl border border-gray-200 bg-white px-6 py-5">
                  <p className="font-semibold text-[var(--park-forest)]">{s.name}</p>
                  <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
