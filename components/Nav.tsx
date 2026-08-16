"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";
import { social } from "@/lib/data";
import { BrandLockup } from "./BrandLockup";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-ink-200/70 bg-page/88 backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3.5">
        <BrandLockup compact className="min-w-0" />

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-[13px] text-ink-600">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={social.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-300 px-3.5 py-2 text-[12px] font-medium text-ink hover:border-accent hover:text-accent transition-colors"
          >
            <Calendar size={13} aria-hidden />
            Book a call
          </a>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink"
          >
            {open ? <X size={17} aria-hidden /> : <Menu size={17} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-200 bg-page px-6 py-5">
          <div className="max-w-[1440px] mx-auto flex flex-col">
            {links.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-4 border-b border-ink-200"
              >
                <span className="font-serif text-[28px] text-ink">{item.label}</span>
                <span className="font-mono text-[9px] text-ink-400">0{index + 1}</span>
              </Link>
            ))}
            <a
              href={social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-[13px] font-medium text-page"
            >
              <Calendar size={14} aria-hidden />
              Book a call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
