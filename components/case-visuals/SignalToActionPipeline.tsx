import { Fragment } from "react";

type Node = { k: string; v: string; act?: boolean };

export function SignalToActionPipeline({
  nodes,
  caption,
}: {
  nodes: Node[];
  caption?: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-stretch gap-1.5">
        {nodes.map((n, i) => (
          <Fragment key={i}>
            <div
              className={`flex-1 min-w-[116px] rounded-[9px] border p-2.5 ${
                n.act ? "bg-accent-soft border-accent" : "bg-surface border-ink-200"
              }`}
            >
              <div className="font-mono text-[8px] uppercase tracking-wide text-ink-400 mb-1">
                {n.k}
              </div>
              <div className="text-[12px] font-medium leading-tight">{n.v}</div>
            </div>
            {i < nodes.length - 1 && (
              <div className="flex items-center text-ink-300" aria-hidden>
                &rarr;
              </div>
            )}
          </Fragment>
        ))}
      </div>
      {caption && (
        <p className="text-[12px] text-ink-500 italic mt-2.5">{caption}</p>
      )}
    </div>
  );
}
