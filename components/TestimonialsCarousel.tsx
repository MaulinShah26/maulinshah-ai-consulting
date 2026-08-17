"use client";

import { ArrowUpRight, Linkedin } from "lucide-react";
import { track } from "@/lib/analytics";
import { testimonials, type TestimonialKey } from "@/lib/testimonials";
import styles from "./TestimonialsCarousel.module.css";

const order: TestimonialKey[] = ["vineet", "kuntal", "jay", "satyajit"];

function TestimonialGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className={styles.group} aria-hidden={duplicate || undefined}>
      {order.map((key) => {
        const testimonial = testimonials[key];

        return (
          <article className={styles.card} key={`${duplicate ? "dup-" : ""}${key}`}>
            <div className={styles.identity}>
              <div className={styles.portraitWrap}>
                <span className={styles.initials} aria-hidden>
                  {testimonial.initials}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.image}
                  alt={duplicate ? "" : testimonial.name}
                  className={styles.portrait}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>

            <a
              href={testimonial.website}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={duplicate ? -1 : undefined}
              aria-label={`${testimonial.company} website`}
              onClick={() =>
                track("testimonial_link_click", {
                  person: testimonial.name,
                  destination: "company_brand",
                })
              }
              className={styles.companyBrand}
            >
              <span className={styles.companyLogoWrap} aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.logo}
                  alt=""
                  className={styles.companyLogo}
                />
              </span>
              <span className={styles.companyCopy}>
                <span className={styles.companyName}>{testimonial.company}</span>
                <span className={styles.companyRole}>{testimonial.role}</span>
              </span>
            </a>

            <blockquote className={styles.quote}>“{testimonial.quote}”</blockquote>

            <div className={styles.person}>
              <div className={styles.name}>{testimonial.name}</div>
              <div className={styles.context}>
                Worked with Maulin as {testimonial.maulinRole}
              </div>

              <div className={styles.links}>
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={duplicate ? -1 : undefined}
                  onClick={() =>
                    track("testimonial_link_click", {
                      person: testimonial.name,
                      destination: "linkedin",
                    })
                  }
                  className={styles.link}
                >
                  <Linkedin size={11} aria-hidden />
                  LinkedIn
                  <ArrowUpRight size={10} aria-hidden />
                </a>
                <a
                  href={testimonial.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={duplicate ? -1 : undefined}
                  onClick={() =>
                    track("testimonial_link_click", {
                      person: testimonial.name,
                      destination: "company",
                    })
                  }
                  className={styles.link}
                >
                  Website
                  <ArrowUpRight size={10} aria-hidden />
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function TestimonialsCarousel() {
  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.heading}>
        <h2 id="testimonials-title" className={styles.sectionLabel}>
          Testimonials
        </h2>
        <span className={styles.headingRule} aria-hidden />
      </div>

      <div className={styles.rail} aria-label="Testimonials. Hover or focus to pause.">
        <div className={styles.viewport}>
          <div className={styles.track}>
            <TestimonialGroup />
            <TestimonialGroup duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
