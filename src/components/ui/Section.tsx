export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-[var(--spacing-section)] ${className}`}>
      {children}
    </section>
  );
}
