"use client";

import { ArrowUpRight, Calendar, Linkedin, Mail } from "lucide-react";
import { social } from "@/lib/data";
import { track } from "@/lib/analytics";

const prompts = [
  "What decision or problem needs attention?",
  "What is getting in the way today?",
  "What would a useful outcome look like?",
];

export function ContactConversion() {
  const email = `${social.emailUser}@${social.emailDomain}`;

  return (
    <main className="px-6 pb-16 pt-10 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <span className="h-px flex-1 bg-ink-200" aria-hidden />
        </div>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)] lg:items-stretch">
          <div className="flex min-h-[430px] flex-col justify-center border-b border-ink-200 py-8 lg:border-b-0 lg:border-r lg:pr-14">
            <h1 className="max-w-[780px] font-serif text-[clamp(42px,5vw,72px)] font-medium leading-[0.98] tracking-[-0.04em] text-ink">
              Tell me what you are trying to solve.
            </h1>
            <p className="mt-6 max-w-[680px] text-[15px] leading-[1.7] text-ink-600 md:text-[16px]">
              Start with the business problem. We can work out whether the right next step is an audit, a focused build, ongoing ownership, or no engagement.
            </p>
          </div>

          <aside className="flex min-h-[430px] flex-col justify-between rounded-[28px] bg-ink p-7 text-page md:p-9">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-page/45">
                Start here
              </div>
              <h2 className="mt-4 max-w-[420px] font-serif text-[30px] font-medium leading-[1.08] tracking-[-0.025em] text-page md:text-[34px]">
                A short conversation is usually enough to know the next step.
              </h2>
              <p className="mt-4 max-w-[430px] text-[13px] leading-[1.65] text-page/60">
                No deck needed. Bring the problem and enough context to decide whether it makes sense to continue.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href={social.calendly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("book_call_click", { placement: "contact_page" })}
                className="inline-flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-page px-5 text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5"
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
                className="inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-page/20 px-5 text-[12px] text-page/78 transition-colors hover:border-accent hover:text-page"
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
                className="inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full border border-page/20 px-5 text-[12px] text-page/78 transition-colors hover:border-accent hover:text-page"
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin size={14} aria-hidden />
                  LinkedIn
                </span>
                <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>
          </aside>
        </section>

        <section className="mt-12 border-t border-ink-200 pt-6 md:mt-14">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">
              For the first conversation
            </span>
            <span className="h-px flex-1 bg-ink-200" aria-hidden />
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {prompts.map((prompt, index) => (
              <div key={prompt} className="border-t border-ink-200 pt-4">
                <div className="font-mono text-[9px] tracking-[0.12em] text-accent">
                  0{index + 1}
                </div>
                <p className="mt-3 max-w-[330px] font-serif text-[19px] leading-[1.25] text-ink">
                  {prompt}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
