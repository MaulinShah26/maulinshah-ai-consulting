"use client";

import { ArrowUpRight, Calendar, Linkedin, Mail } from "lucide-react";
import { meta, social } from "@/lib/data";
import { track } from "@/lib/analytics";

export function ContactConversion() {
  const email = `${social.emailUser}@${social.emailDomain}`;

  return (
    <main className="px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-5 flex items-center gap-4">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <span className="h-px flex-1 bg-ink-200" aria-hidden />
        </div>

        <section className="overflow-hidden rounded-[28px] bg-ink text-page">
          <div className="grid gap-10 px-6 py-9 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-end lg:px-10 lg:py-12">
            <div className="min-w-0">
              <h1 className="max-w-[800px] font-serif text-[clamp(34px,4vw,58px)] font-medium leading-[1.02] tracking-[-0.035em] text-page">
                Tell me what you are trying to solve.
              </h1>
              <p className="mt-5 max-w-[720px] text-[14px] leading-[1.7] text-page/70 sm:text-[15px]">
                Start with the business problem. We can work out whether the right next step is an audit, a focused build, ongoing ownership, or no engagement.
              </p>

              <div className="mt-8 border-t border-page/15 pt-6">
                <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-page/48">
                  Useful context for the first conversation
                </div>
                <div className="mt-4 grid gap-3 text-[13px] leading-[1.55] text-page/80 sm:grid-cols-3">
                  <p>What decision or problem needs attention?</p>
                  <p>What is getting in the way today?</p>
                  <p>What would a useful outcome look like?</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={social.calendly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("book_call_click", { placement: "contact_page" })}
                className="inline-flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-page px-5 text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5 sm:min-w-[300px]"
              >
                <span className="inline-flex items-center gap-2">
                  <Calendar size={15} aria-hidden />
                  Book a 30 minute fit call
                </span>
                <ArrowUpRight size={15} aria-hidden />
              </a>

              <a
                href={`mailto:${email}`}
                onClick={() => track("contact_click", { channel: "email", placement: "contact_page" })}
                className="inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-page/20 px-5 text-[12px] text-page/80 transition-colors hover:border-accent hover:text-page sm:min-w-[300px]"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail size={14} aria-hidden />
                  {email}
                </span>
                <ArrowUpRight size={14} aria-hidden />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("contact_click", { channel: "linkedin", placement: "contact_page" })}
                className="inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-page/20 px-5 text-[12px] text-page/80 transition-colors hover:border-accent hover:text-page sm:min-w-[300px]"
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin size={14} aria-hidden />
                  LinkedIn
                </span>
                <ArrowUpRight size={14} aria-hidden />
              </a>

              <p className="mt-2 max-w-[300px] text-[11px] leading-[1.55] text-page/48 lg:text-right">
                No deck needed. Bring the problem and enough context to decide whether a next step makes sense.
              </p>
            </div>
          </div>

          <div className="mx-6 flex flex-col gap-2 border-t border-page/12 py-4 text-[10px] text-page/48 sm:mx-8 sm:flex-row sm:items-center sm:justify-between lg:mx-10">
            <span>© {new Date().getFullYear()} {meta.author}</span>
            <span>{meta.location}</span>
          </div>
        </section>
      </div>
    </main>
  );
}
