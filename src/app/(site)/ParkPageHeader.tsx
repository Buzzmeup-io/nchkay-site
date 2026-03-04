import { AnimateIn } from "@/components/ui/AnimateIn";

export function ParkPageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="noise-overlay relative overflow-hidden bg-[var(--park-forest)] py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--park-pine)]/30 via-transparent to-[var(--park-forest)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <AnimateIn variant="fade" delay={100}>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--park-cedar-light)]">
            {label}
          </p>
        </AnimateIn>
        <AnimateIn delay={200}>
          <h1
            className="mt-4 text-4xl text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            {title}
          </h1>
        </AnimateIn>
        <AnimateIn delay={350}>
          <p className="mt-4 max-w-2xl text-lg text-white/60">{description}</p>
        </AnimateIn>
      </div>
    </section>
  );
}
