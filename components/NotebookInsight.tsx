import { notebook } from "@/lib/data";
import { Reveal } from "./Reveal";

export function NotebookInsight() {
  return (
    <Reveal className="py-10 px-6">
      <div className="max-w-content mx-auto">
        <p className="reveal-child font-serif text-[clamp(22px,3.4vw,30px)] font-medium leading-[1.4] tracking-tight text-ink max-w-[760px]">
          {notebook.insight}
        </p>
      </div>
    </Reveal>
  );
}
