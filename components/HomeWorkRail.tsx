"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import styles from "./HomeWorkRail.module.css";

type RailItem = {
  client: string;
  logo?: string;
  project: string;
  proof: string;
  href: string;
};

// Intentionally shuffled so company work and Labs feel like one body of work,
// without obvious client blocks or an alternating corporate/Lab pattern.
const items: RailItem[] = [
  {
    client: "Supertails",
    logo: "/logos/supertails.jpg",
    project: "Customer Retention Score",
    proof: "~60% lift on test conversion",
    href: "/case-studies/customer-retention-probability",
  },
  {
    client: "Independent Lab",
    project: "AI Trading Copilot",
    proof: "Paper trading · limited access",
    href: "/case-studies/ai-trading-copilot",
  },
  {
    client: "CricHeroes",
    logo: "/logos/cricheroes.png",
    project: "AI Cricket Commentary",
    proof: "+15% live-commentary engagement",
    href: "/case-studies/ai-cricket-commentary",
  },
  {
    client: "Supertails",
    logo: "/logos/supertails.jpg",
    project: "Customer Affinity Modelling",
    proof: "Multi-team personalization · live",
    href: "/case-studies/customer-affinity-modelling",
  },
  {
    client: "Independent Lab",
    project: "NerdyCricket",
    proof: "Live · IPL 2026",
    href: "/case-studies/nerdycricket",
  },
  {
    client: "Supertails",
    logo: "/logos/supertails.jpg",
    project: "Food Replenishment",
    proof: "~75% wet-food precision",
    href: "/case-studies/food-replenishment",
  },
  {
    client: "Independent Lab",
    project: "AI Job Impact Assessor",
    proof: "Closed beta",
    href: "/case-studies/ai-job-impact-assessor",
  },
  {
    client: "CricHeroes",
    logo: "/logos/cricheroes.png",
    project: "Batters & Bowlers Tag",
    proof: "10M+ players · live product",
    href: "/case-studies/batters-bowlers-tag",
  },
  {
    client: "Independent Lab",
    project: "Food Label Analyzer",
    proof: "Live in ChatGPT",
    href: "/case-studies/packaged-food-label-analyzer",
  },
  {
    client: "Supertails",
    logo: "/logos/supertails.jpg",
    project: "Adaptive Nudge Engine",
    proof: "Cross-channel decisioning · in rollout",
    href: "/case-studies/adaptive-nudge-decision-engine",
  },
  {
    client: "Independent Lab",
    project: "Medicine Helper",
    proof: "Live in ChatGPT",
    href: "/case-studies/medicine-helper",
  },
];

function RailGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className={styles.group} aria-hidden={duplicate || undefined}>
      {items.map((item) => (
        <Link
          key={`${duplicate ? "dup-" : ""}${item.href}`}
          href={item.href}
          onClick={() =>
            track("case_study_click", {
              slug: item.href,
              kind: item.client === "Independent Lab" ? "personal" : "corporate",
              source: "home_work_rail",
            })
          }
          className={styles.item}
          tabIndex={duplicate ? -1 : undefined}
        >
          {item.logo ? (
            <span className={styles.logoWrap} aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.logo} alt="" className={styles.logo} />
            </span>
          ) : (
            <span className={styles.labMark} aria-hidden>LAB</span>
          )}

          <span className={styles.copy}>
            <span className={styles.meta}>{item.client}</span>
            <span className={styles.title}>{item.project}</span>
            <span className={styles.proof}>{item.proof}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function HomeWorkRail() {
  return (
    <section className={styles.rail} aria-label="Work and results. Hover to pause.">
      <div className={styles.viewport}>
        <div className={styles.track}>
          <RailGroup />
          <RailGroup duplicate />
        </div>
      </div>
    </section>
  );
}
