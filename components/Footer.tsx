"use client";

import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import Link from "next/link";
import { meta, social } from "@/lib/data";
import { track } from "@/lib/analytics";
import { ANALYTICS_CONSENT_OPEN_EVENT } from "@/lib/consent";
import { BrandLockup } from "./BrandLockup";

export function Footer() {
  const email = `${social.emailUser}@${social.emailDomain}`;

  return (
    <footer className="px-4 pb-4 pt-6 sm:px-6 sm:pb-5">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[24px] bg-ink text-page">
        <div className="grid gap-7 px-6 py-6 sm:px-8 sm:py-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:items-end lg:px-9 lg:py-7">
          <div className="min-w-0">
            <BrandLockup compact inverse animateDomains={false} />
            <p className="mt-4 max-w-[680px] font-serif text-[clamp(22px,2.4vw,32px)] font-medium leading-[1.06] tracking-[-0.03em] text-page">
              Your next important decision deserves a system behind it.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 lg:items-end">
            <a
              href={social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("book_call_click", { placement: "footer" })}
              className="inline-flex min-h-10 w-full items-center justify-between gap-4 rounded-full bg-page px-4 text-[12.5px] font-medium text-ink transition-transform hover:-translate-y-0.5 sm:w-auto sm:min-w-[230px]"
            >
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} aria-hidden />
                Book a fit call
              </span>
              <ArrowUpRight size={14} aria-hidden />
            </a>

            <a
              href={`mailto:${email}`}
              onClick={() =>
                track("contact_click", {
                  channel: "email",
                  placement: "footer",
                })
              }
              className="inline-flex min-h-10 w-full items-center justify-between gap-4 rounded-full border border-page/20 px-4 text-[11.5px] text-page/78 transition-colors hover:border-accent hover:text-page sm:w-auto sm:min-w-[230px]"
            >
              <span className="inline-flex items-center gap-2">
                <Mail size={13} aria-hidden />
                {email}
              </span>
              <ArrowUpRight size={13} aria-hidden />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("contact_click", {
                  channel: "linkedin",
                  placement: "footer",
                })
              }
              className="inline-flex min-h-10 w-full items-center justify-between gap-4 rounded-full border border-page/20 px-4 text-[11.5px] text-page/78 transition-colors hover:border-accent hover:text-page sm:w-auto sm:min-w-[230px]"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={13} aria-hidden />
            </a>
          </div>
        </div>

        <div className="mx-6 flex flex-col gap-2 border-t border-page/12 py-3 text-[9.5px] text-page/48 sm:mx-8 sm:flex-row sm:items-center sm:justify-between lg:mx-9">
          <span>© {new Date().getFullYear()} {meta.author}</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link className="transition-colors hover:text-page" href="/privacy">
              Privacy
            </Link>
            <button
              type="button"
              className="transition-colors hover:text-page"
              onClick={() =>
                window.dispatchEvent(
                  new Event(ANALYTICS_CONSENT_OPEN_EVENT),
                )
              }
            >
              Analytics preferences
            </button>
            <span>{meta.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
