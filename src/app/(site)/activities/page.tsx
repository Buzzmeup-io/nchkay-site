import { AnimateIn } from "@/components/ui/AnimateIn";
import { ParkPageHeader } from "../ParkPageHeader";

export const metadata = {
  title: "Activities & Attractions | Capilano River RV Park",
  description:
    "Explore Vancouver's North Shore from Capilano River RV Park — skiing, hiking, beaches, Stanley Park, and more minutes away.",
};

const OUTDOOR = [
  {
    category: "Skiing & Snowsports",
    items: [
      { name: "Grouse Mountain", distance: "15 min", desc: "Skiing, snowboarding, ice skating & the Peak of Christmas" },
      { name: "Cypress Mountain", distance: "20 min", desc: "Alpine skiing, snowshoeing & cross-country trails" },
      { name: "Mount Seymour", distance: "25 min", desc: "Family-friendly skiing, tubing & snowshoeing" },
      { name: "Whistler Blackcomb", distance: "90 min", desc: "World-class resort via the scenic Sea-to-Sky Highway" },
    ],
  },
  {
    category: "Hiking & Trails",
    items: [
      { name: "Grouse Grind", distance: "15 min", desc: "The iconic 2.9 km climb — 'Mother Nature's Stairmaster'" },
      { name: "Seymour Demonstration Forest", distance: "20 min", desc: "Family-friendly trails through old-growth forest" },
      { name: "Lynn Canyon Park", distance: "15 min", desc: "Free suspension bridge, swimming holes & rainforest trails" },
      { name: "Lighthouse Park", distance: "15 min", desc: "Old-growth forest trails with ocean views" },
    ],
  },
  {
    category: "Beaches & Waterfront",
    items: [
      { name: "Ambleside Beach", distance: "Walking", desc: "Sandy beach with mountain views, walking distance from park" },
      { name: "Deep Cove", distance: "25 min", desc: "Kayaking, paddleboarding & the famous honey doughnuts" },
      { name: "Horseshoe Bay", distance: "10 min", desc: "BC Ferries terminal to Vancouver Island & the Sunshine Coast" },
    ],
  },
];

const URBAN = [
  {
    name: "Stanley Park",
    distance: "10 min",
    desc: "Over 1,000 acres of natural forest, a 9 km seawall perfect for walking or biking, incredible beaches, and the Vancouver Aquarium.",
    featured: true,
  },
  {
    name: "Downtown Vancouver",
    distance: "10 min",
    desc: "World-class dining, incredible shopping, museums, attractions, nightlife, and live entertainment.",
    featured: true,
  },
  {
    name: "Park Royal Mall",
    distance: "5 min",
    desc: "West Vancouver's premier shopping centre, steps from the park. Over 280 stores and restaurants.",
    featured: false,
  },
  {
    name: "Granville Island",
    distance: "15 min",
    desc: "Public market, artisan shops, galleries, theatres, and waterfront dining.",
    featured: false,
  },
  {
    name: "Lonsdale Quay",
    distance: "10 min",
    desc: "Bustling North Vancouver marketplace with fresh food, unique shops, and SeaBus terminal.",
    featured: false,
  },
];

const ATTRACTIONS_LIST = [
  "Aboriginal BC",
  "BC Place",
  "Capilano Salmon Hatchery",
  "Capilano Suspension Bridge",
  "Cates Park",
  "Cleveland Dam",
  "Cypress Provincial Park",
  "Deep Cove Village",
  "Granville Island",
  "Lonsdale Quay",
  "Lynn Canyon Suspension Bridge",
  "Maplewood Farm",
  "Mosquito Creek Marina",
  "Museum of Anthropology",
  "North Vancouver Museum",
  "Rogers Arena",
  "VanDusen Botanical Garden",
  "Vancouver Aquarium",
];

const SPORTS = [
  { name: "Vancouver Canucks", sport: "NHL Hockey", venue: "Rogers Arena" },
  { name: "BC Lions", sport: "CFL Football", venue: "BC Place" },
  { name: "Vancouver Whitecaps", sport: "MLS Soccer", venue: "BC Place" },
];

export default function ActivitiesPage() {
  return (
    <div>
      <ParkPageHeader
        label="Capilano River RV Park"
        title="Activities & Attractions"
        description="From world-class skiing to coastal rainforest hikes, everything the Pacific Northwest offers is at your doorstep."
      />

      {/* Outdoor activities */}
      {OUTDOOR.map((group, gi) => (
        <section
          key={group.category}
          className={`border-t border-gray-100 py-16 sm:py-20 ${gi % 2 ? "bg-[var(--park-warm)]" : "bg-white"}`}
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <AnimateIn>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
                Outdoor
              </p>
              <h2
                className="mt-3 text-3xl text-[var(--park-forest)]"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                {group.category}
              </h2>
            </AnimateIn>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {group.items.map((item, i) => (
                <AnimateIn key={item.name} delay={i * 80}>
                  <div className="flex h-full items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--park-mist)] text-[var(--park-forest)]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-semibold text-[var(--park-forest)]">{item.name}</h3>
                        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[var(--nchkay-orange)]">
                          {item.distance}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Mountain biking callout */}
      <section className="border-t border-gray-100 bg-[var(--park-forest)] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-cedar-light)]">
              World-famous trails
            </p>
            <h2
              className="mt-3 text-3xl text-white"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Mountain biking capital
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              North Vancouver features an incredible array of mountain biking
              trails for all ability and skill levels — from flowy cross-country
              to world-class downhill. The trails are minutes from the park.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Urban attractions */}
      <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
              City life
            </p>
            <h2
              className="mt-3 text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Vancouver & beyond
            </h2>
          </AnimateIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {URBAN.map((u, i) => (
              <AnimateIn key={u.name} delay={i * 80}>
                <div
                  className={`h-full rounded-xl border p-6 transition-all hover:shadow-md ${
                    u.featured
                      ? "border-[var(--nchkay-orange)]/20 bg-gradient-to-br from-[var(--nchkay-orange)]/5 to-transparent"
                      : "border-gray-200 bg-[var(--park-warm)]"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-[var(--park-forest)]">{u.name}</h3>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[var(--nchkay-orange)]">
                      {u.distance}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{u.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="border-t border-gray-100 bg-[var(--park-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Professional sports
            </h2>
          </AnimateIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {SPORTS.map((s, i) => (
              <AnimateIn key={s.name} delay={i * 100}>
                <div className="rounded-xl border border-gray-200 bg-white px-6 py-5">
                  <p className="font-semibold text-[var(--park-forest)]">{s.name}</p>
                  <p className="mt-1 text-sm text-gray-500">{s.sport}</p>
                  <p className="mt-0.5 text-xs text-[var(--park-sage)]">{s.venue}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full attractions list */}
      <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              All nearby attractions
            </h2>
          </AnimateIn>
          <AnimateIn delay={150}>
            <div className="mt-8 flex flex-wrap gap-2">
              {ATTRACTIONS_LIST.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-[var(--park-sage)]/20 bg-[var(--park-mist)] px-4 py-1.5 text-sm text-[var(--park-forest)]"
                >
                  {a}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
