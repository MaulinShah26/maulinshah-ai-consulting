"use client";

import { ArrowUpRight, Building2, Linkedin } from "lucide-react";
import { track } from "@/lib/analytics";
import { testimonials, type TestimonialKey } from "@/lib/testimonials";

export function TestimonialProof({
  person,
  label = "From people I have worked with",
  featured = false,
}: {
  person: TestimonialKey;
  label?: string;
  featured?: boolean;
}) {
  const testimonial = testimonials[person];

  const outer = featured
    ? "border-ink bg-ink text-page"
    : "border-ink-200 bg-surface text-ink";
  const muted = featured ? "text-page/60" : "text-ink-500";
  const body = featured ? "text-page" : "text-ink";
  const portrait = featured
    ? "border-page/15 bg-page/8 text-page"
    : "border-ink-200 bg-ink text-page";
  const link = featured
    ? "border-page/18 text-page/78 hover:border-accent hover:text-page"
    : "border-ink-200 text-ink-600 hover:border-accent hover:text-accent";

  return (
    <section className="px-6 py-7 md:py-9">
      <div className="mx-auto max-w-content">
        <div className={`overflow-hidden rounded-[26px] border ${outer}`}>
          <div className="grid gap-7 p-6 md:p-8 lg:grid-cols-[150px_minmax(0,1fr)_260px] lg:items-center lg:gap-10">
            <div>
              <div className={`flex aspect-[4/5] w-[118px] flex-col items-center justify-center rounded-[22px] border ${portrait}`}>
                <span className="font-serif text-[38px] font-medium tracking-[-0.04em]">
                  {testimonial.initials}
                </span>
                <span className={`mt-2 font-mono text-[8px] uppercase tracking-[0.14em] ${featured ? "text-page/42" : "text-page/55"}`}>
                  Portrait
                </span>
              </div>
            </div>

            <div className="min-w-0">
              <div className={`mb-4 font-mono text-[9px] uppercase tracking-[0.13em] ${featured ? "text-accent-soft" : "text-accent"}`}>
                {label}
              </div>
              <blockquote className={`max-w-[760px] font-serif text-[22px] font-medium leading-[1.28] tracking-[-0.02em] md:text-[27px] ${body}`}>
                “{testimonial.quote}”
              </blockquote>
            </div>

            <div className={`border-t pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 ${featured ? "border-page/12" : "border-ink-200"}`}>
              <div className={`font-serif text-[19px] font-semibold ${body}`}>
                {testimonial.name}
              </div>
              <div className={`mt-1 text-[12.5px] ${muted}`}>
                {testimonial.role}, {testimonial.company}
              </div>
              <div className={`mt-4 font-mono text-[9px] uppercase tracking-[0.09em] ${muted}`}>
                Maulin's role
              </div>
              <div className={`mt-1 text-[12px] ${muted}`}>
                {testimonial.maulinRole}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("testimonial_link_click", {
                      person: testimonial.name,
                      destination: "linkedin",
                    })
                  }
                  className={`inline-flex min-h-9 items-center gap-2 rounded-full border px-3.5 text-[10.5px] transition-colors ${link}`}
                >
                  <Linkedin size={13} aria-hidden />
                  LinkedIn
                  <ArrowUpRight size={12} aria-hidden />
                </a>
                <a
                  href={testimonial.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("testimonial_link_click", {
                      person: testimonial.name,
                      destination: "company",
                    })
                  }
                  className={`inline-flex min-h-9 items-center gap-2 rounded-full border px-3.5 text-[10.5px] transition-colors ${link}`}
                >
                  <Building2 size={13} aria-hidden />
                  {testimonial.company}
                  <ArrowUpRight size={12} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
