"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";
import { meta, social } from "@/lib/data";
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
    <nav className="sticky top-0 z-40 border-b border-ink-200/70 bg-page/90 backdrop-blur-md">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          aria-label={`${meta.author}, home`}
          onClick={() => setOpen(false)}
        >
          <span
            className="w-[38px] h-[38px] border-[1.5px] border-accent rounded-md flex items-center justify-center text-accent text-[14px] font-medium flex-shrink-0"
            aria-hidden="true"
          >
            MS
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-medium text-ink leading-tight">{meta.author}</span>
            <span className="text-[9px] font-mono uppercase tracking-[1.3px] text-ink-500 mt-1.5 leading-none">
              Data & AI Decision Systems
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5 text-[13px] text-ink-600">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={social.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-ink px-3.5 py-2 text-[12px] font-medium text-page hover:bg-ink-800 transition-colors"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-200 text-ink"
          >
            {open ? <X size={17} aria-hidden /> : <Menu size={17} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-200 bg-page px-6 py-4">
          <div className="max-w-content mx-auto flex flex-col gap-1">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-ink border-b border-ink-200 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-[13px] font-medium text-page"
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
