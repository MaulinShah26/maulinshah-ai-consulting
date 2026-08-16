import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const featuredCases = [
  {
    label: "Retention · Supertails",
    title: "Catch customers before they lapse.",
    body: "A daily repurchase score wired directly into retention actions.",
    proof: "~60%",
    proofLabel: "lift on test conversion",
    href: "/case-studies/customer-retention-probability",
  },
  {
    label: "Replenishment · Supertails",
    title: "Reach customers before they run out.",
    body: "A reorder-timing system built around each customer and product cycle.",
    proof: "~75%",
    proofLabel: "precision on wet-food reorders",
    href: "/case-studies/food-replenishment",
  },
  {
    label: "Product intelligence · CricHeroes",
    title: "Turn data into an identity users adopt.",
    body: "Nine player archetypes became a community language and a product layer.",
    proof: "10M+",
    proofLabel: "players adopted",
    href: "/case-studies/batters-bowlers-tag",
  },
];

export const featuredCorporateHrefs = featuredCases.map((item) => item.href);

export function FeaturedWork() {
  return (
    <section className="px-6 pt-5 pb-3">
      <div className="max-w-content mx-auto">
        <SectionHeader label="Selected proof" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {featuredCases.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group min-w-0 rounded-[18px] border border-ink-200 bg-surface p-5 md:p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-5">
                {item.label}
              </div>

              <div className="mb-5">
                <div className="font-serif text-[32px] md:text-[38px] leading-none text-ink mb-1">
                  {item.proof}
                </div>
                <div className="text-[12.5px] text-ink-500">{item.proofLabel}</div>
              </div>

              <h2 className="font-serif text-[21px] md:text-[23px] font-semibold leading-[1.15] text-ink mb-3">
                {item.title}
              </h2>
              <p className="text-[13.5px] text-ink-600 leading-relaxed mb-6">{item.body}</p>

              <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wide text-accent">
                View case study
                <ArrowUpRight size={14} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
