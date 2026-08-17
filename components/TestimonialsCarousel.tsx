"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Linkedin,
} from "lucide-react";
import { track } from "@/lib/analytics";
import {
  testimonials,
  type TestimonialKey,
} from "@/lib/testimonials";

const order: TestimonialKey[] = ["vineet", "kuntal", "jay", "satyajit"];

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % order.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, active]);

  const person = order[active];
  const testimonial = testimonials[person];

  const move = (direction: 1 | -1) => {
    setActive((current) => (current + direction + order.length) % order.length);
    track("testimonial_carousel_change", {
      direction: direction === 1 ? "next" : "previous",
      source: "manual",
    });
  };

  const select = (index: number) => {
    setActive(index);
    track("testimonial_carousel_change", {
      direction: "direct",
      source: order[index],
    });
  };

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      aria-roledescription="carousel"
      className="scroll-mt-24 px-6 py-8 md:py-11"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto max-w-content">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
              Testimonials
            </div>
            <h2 className="mt-2 max-w-[780px] font-serif text-[30px] font-medium leading-[1.05] tracking-[-0.025em] text-ink md:text-[40px]">
              From people who have worked with me.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft size={15} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRight size={15} aria-hidden />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-ink bg-ink text-page">
          <div
            key={person}
            className="grid min-h-[390px] gap-8 p-6 md:p-8 lg:grid-cols-[180px_minmax(0,1fr)_290px] lg:items-center lg:gap-10 lg:p-10"
          >
            <div className="flex lg:justify-start">
              {testimonial.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="aspect-[4/5] w-[136px] rounded-[24px] border border-page/15 object-cover md:w-[150px]"
                />
              ) : (
                <div className="flex aspect-[4/5] w-[136px] flex-col items-center justify-center rounded-[24px] border border-page/15 bg-page/8 md:w-[150px]">
                  <span className="font-serif text-[42px] font-medium tracking-[-0.04em] text-page">
                    {testimonial.initials}
                  </span>
                  <span className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-page/42">
                    Photo
                  </span>
                </div>
              )}
            </div>

            <div className="min-w-0">
              <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.13em] text-accent-soft">
                {String(active + 1).padStart(2, "0")} / {String(order.length).padStart(2, "0")}
              </div>
              <blockquote className="max-w-[820px] font-serif text-[23px] font-medium leading-[1.27] tracking-[-0.02em] text-page md:text-[29px]">
                “{testimonial.quote}”
              </blockquote>
            </div>

            <div className="border-t border-page/12 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="font-serif text-[20px] font-semibold text-page">
                {testimonial.name}
              </div>
              <div className="mt-1 text-[12.5px] text-page/62">
                {testimonial.role}, {testimonial.company}
              </div>

              <div className="mt-5 font-mono text-[9px] uppercase tracking-[0.09em] text-page/44">
                Worked with Maulin as
              </div>
              <div className="mt-1 text-[12px] leading-relaxed text-page/62">
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
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-page/18 px-3.5 text-[10.5px] text-page/78 transition-colors hover:border-accent hover:text-page"
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
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-page/18 px-3.5 text-[10.5px] text-page/78 transition-colors hover:border-accent hover:text-page"
                >
                  <Building2 size={13} aria-hidden />
                  {testimonial.company}
                  <ArrowUpRight size={12} aria-hidden />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-page/10 px-6 py-4 md:px-8 lg:px-10">
            {order.map((key, index) => (
              <button
                key={key}
                type="button"
                onClick={() => select(index)}
                aria-label={`Show testimonial from ${testimonials[key].name}`}
                aria-current={index === active ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  index === active
                    ? "w-10 bg-accent"
                    : "w-5 bg-page/20 hover:bg-page/40"
                }`}
              />
            ))}
            <span className="ml-auto font-mono text-[8px] uppercase tracking-[0.12em] text-page/38">
              {paused ? "Paused" : reduceMotion ? "Manual" : "Auto"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
