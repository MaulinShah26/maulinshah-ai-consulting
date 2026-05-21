"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  id?: string;
}

/**
 * Wraps content with intersection-observer-driven reveal animation.
 * Children with className "reveal-child" stagger in sequence.
 */
export function Reveal({ children, className = "", as = "section", id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = as as keyof JSX.IntrinsicElements;

  return (
    // @ts-expect-error - ref typing across dynamic element
    <Component ref={ref} id={id} className={`reveal ${className}`}>
      {children}
    </Component>
  );
}
