"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

type Props = {
  href: string;
  event: string;
  params?: Record<string, string | number | boolean>;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
};

export function TrackedLink({
  href,
  event,
  params,
  className,
  target,
  rel,
  children,
}: Props) {
  const onClick = () => track(event, params);
  const external = /^https?:\/\//.test(href);

  if (external) {
    return (
      <a href={href} className={className} target={target} rel={rel} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
