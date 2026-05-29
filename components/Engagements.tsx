import { engagements } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Engagements() {
  return (
    <Reveal id="engagements" className="py-2 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child mb-4">
          <SectionHeader
            number={engagements.sectionNumber}
            label={engagements.sectionLabel}
          />
        </div>

        <div className="engagement-rows reveal-child">
          {engagements.cards.map((card, i) => (
            <div key={i} className="engagement-row">
              <p className="engagement-quote">&ldquo;{card.quote}&rdquo;</p>
              <svg
                className="engagement-arrow"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
              <div className="engagement-answer">
                <div className="engagement-row-head">
                  <span className="engagement-label">{card.title}</span>
                  <span className="engagement-meta">{card.meta}</span>
                </div>
                <p className="engagement-tagline">{card.tagline}</p>
                <p className="engagement-walkaway">
                  <span className="engagement-walkaway-lbl">
                    You walk away with:
                  </span>{" "}
                  {card.walkaway}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
