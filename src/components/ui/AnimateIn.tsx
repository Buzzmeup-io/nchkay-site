"use client";

import { useEffect, useRef } from "react";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "fade" | "scale" | "left" | "right";
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export function AnimateIn({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("animate-in--visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const variantClass =
    variant === "fade"
      ? "animate-in--fade"
      : variant === "scale"
        ? "animate-in--scale"
        : variant === "left"
          ? "animate-in--left"
          : variant === "right"
            ? "animate-in--right"
            : "";

  return (
    // @ts-expect-error -- dynamic tag with ref
    <Tag ref={ref} className={`animate-in ${variantClass} ${className}`}>
      {children}
    </Tag>
  );
}
