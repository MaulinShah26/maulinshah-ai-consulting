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
      <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-1.5">
        {nodes.map((node, index) => (
          <Fragment key={`${node.k}-${index}`}>
            <div
              className={`w-full md:flex-1 md:min-w-0 rounded-[12px] border px-3.5 py-3.5 ${
                node.act
                  ? "bg-accent-soft border-accent"
                  : "bg-surface border-ink-200"
              }`}
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-400 mb-1.5">
                {node.k}
              </div>
              <div className="text-[13.5px] font-medium leading-[1.25] text-ink">
                {node.v}
              </div>
            </div>
            {index < nodes.length - 1 && (
              <div
                className="flex h-4 md:h-auto md:w-5 flex-none items-center justify-center text-ink-300 rotate-90 md:rotate-0"
                aria-hidden
              >
                &rarr;
              </div>
            )}
          </Fragment>
        ))}
      </div>
      {caption && (
        <p className="text-[13px] text-ink-500 italic mt-3.5 leading-[1.45]">
          {caption}
        </p>
      )}
    </div>
  );
}
