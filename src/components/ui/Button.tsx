import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variants = {
  primary: "bg-[var(--nchkay-red)] text-white hover:bg-[var(--nchkay-red-dark)]",
  secondary: "bg-[var(--nchkay-orange)] text-white hover:bg-[var(--nchkay-orange-dark)]",
  outline: "border-2 border-[var(--nchkay-red)] text-[var(--nchkay-red)] hover:bg-[var(--nchkay-red)] hover:text-white",
};

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-[var(--radius)] px-6 py-3 font-medium transition-colors";
  const combined = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }
  return <button type="button" className={combined}>{children}</button>;
}
