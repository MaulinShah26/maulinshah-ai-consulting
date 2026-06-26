import { notebook } from "@/lib/data";
import { Reveal } from "./Reveal";

export function NotebookInsight() {
  return (
    <Reveal className="py-6 px-6">
      <div className="max-w-content mx-auto">
        <div className="reveal-child rounded-xl border border-ink-200 bg-[#FBFAF6] px-7 py-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400 mb-3.5">
            {notebook.sectionLabel}
          </div>
          <p className="font-serif text-[23px] font-medium leading-[1.4] tracking-tight text-ink max-w-[680px]">
            {notebook.insight}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
