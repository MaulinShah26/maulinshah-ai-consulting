"use client";
import { track } from "@/lib/analytics";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  work,
  type CorporateCard as CorporateCardData,
  type PersonalCard as PersonalCardData,
} from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type TabKey = "corporate" | "personal";

const labCaseStudyRoutes: Record<string, string> = {
  NerdyCricket: "/case-studies/nerdycricket",
  "Medicine Helper": "/case-studies/medicine-helper",
  "Packaged Food Label Analyzer": "/case-studies/packaged-food-label-analyzer",
  "AI Trading Copilot": "/case-studies/ai-trading-copilot",
  "AI Job Impact Assessor": "/case-studies/ai-job-impact-assessor",
};

export function Work() {
  const [activeTab, setActiveTab] = useState<TabKey>("corporate");
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  const cards = work.tabs[activeTab].cards;
  const totalCards = cards.length;
  const totalPages = Math.max(1, Math.ceil(totalCards / Math.max(1, visibleCount)));
  const currentPage = Math.floor(currentIndex / Math.max(1, visibleCount));

  const cardStep = useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 380;
    const card = track.querySelector<HTMLElement>(".case-card");
    if (!card) return 380;
    const gap = parseInt(getComputedStyle(track).gap || "18", 10);
    return card.offsetWidth + gap;
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = cardStep();
    const newIdx = Math.round(track.scrollLeft / step);
    const vis = Math.max(1, Math.round(track.clientWidth / step));
    setCurrentIndex(newIdx);
    setVisibleCount(vis);
  }, [cardStep]);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: 0, behavior: "auto" });
    }
    setCurrentIndex(0);
    requestAnimationFrame(measure);
  }, [activeTab, measure]);

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * cardStep() * visibleCount,
      behavior: "smooth",
    });
  };

  const onScroll = () => requestAnimationFrame(measure);

  const fromIdx = currentIndex + 1;
  const toIdx = Math.min(currentIndex + visibleCount, totalCards);
  const counterText = fromIdx === toIdx ? `${fromIdx}` : `${fromIdx}–${toIdx}`;

  return (
    <Reveal id="work" className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={work.sectionNumber} label={work.sectionLabel} />
        </div>

        <div className="reveal-child tabs-row">
          <div className="tabs">
            <button
              type="button"
              onClick={() => setActiveTab("corporate")}
              className={`tab ${activeTab === "corporate" ? "is-active" : ""}`}
            >
              {work.tabs.corporate.label}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("personal")}
              className={`tab ${activeTab === "personal" ? "is-active" : ""}`}
            >
              {work.tabs.personal.label}
            </button>
          </div>

          <div className="carousel-nav">
            <span className="nav-pos">
              <b>{counterText}</b> / {totalCards}
            </span>
            <button
              type="button"
              className="nav-btn"
              onClick={() => scrollByPage(-1)}
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              <ChevronLeft size={14} strokeWidth={2} />
            </button>
            <button
              type="button"
              className="nav-btn"
              onClick={() => scrollByPage(1)}
              disabled={currentIndex + visibleCount >= totalCards}
              aria-label="Next"
            >
              <ChevronRight size={14} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="reveal-child carousel">
          <div
            className="carousel-track"
            ref={trackRef}
            onScroll={onScroll}
          >
            {activeTab === "corporate"
              ? (cards as CorporateCardData[]).map((card, i) => (
                  <CorporateCardEl key={`corp-${i}`} card={card} />
                ))
              : (cards as PersonalCardData[]).map((card, i) => (
                  <PersonalCardEl key={`pers-${i}`} card={card} />
                ))}
          </div>
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentPage ? "is-active" : ""}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function CorporateCardEl({ card }: { card: CorporateCardData }) {
  return (
    <Link
      className="case-card"
      href={card.href}
      onClick={() => track("case_study_click", { slug: card.href, kind: "corporate" })}
    >
      <span className="case-tag">{card.tag}</span>
      <h3 className="case-title">{card.title}</h3>
      <p className="case-meta">{card.meta}</p>
      <p className="case-problem">{card.problem}</p>
      <p className="case-summary">{card.summary}</p>
      <div className="case-metrics">
        {card.metrics.map((m, i) => (
          <div key={i} className="metric">
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="demo-cta">
        <span className="demo-link-text">View case study</span>
        <ArrowRight size={18} className="demo-arrow" aria-hidden />
      </div>
    </Link>
  );
}

function PersonalCardEl({ card }: { card: PersonalCardData }) {
  const caseStudyHref = labCaseStudyRoutes[card.title] ?? card.href;
  const isExternal = caseStudyHref.startsWith("http");

  const inner = (
    <>
      <span className="case-tag">{card.tag}</span>
      <h3 className="case-title">{card.title}</h3>
      <p className="case-meta">{card.meta}</p>
      <div className="sao">
        <div className="sao-block">
          <span className="sao-label">Problem</span>
          <p className="sao-text">{card.situation}</p>
        </div>
        <div className="sao-block">
          <span className="sao-label">What I built</span>
          <p className="sao-text">{card.approach}</p>
        </div>
        <div className="sao-block">
          <span className="sao-label">Where it is now</span>
          <p className="sao-text">{card.outcome}</p>
        </div>
      </div>
      <div className="demo-cta">
        <span className="demo-link-text">View case study</span>
        <ArrowRight size={18} className="demo-arrow" aria-hidden />
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        className="case-card"
        href={caseStudyHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("case_study_click", { slug: caseStudyHref, kind: "personal" })}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      className="case-card"
      href={caseStudyHref}
      onClick={() => track("case_study_click", { slug: caseStudyHref, kind: "personal" })}
    >
      {inner}
    </Link>
  );
}
