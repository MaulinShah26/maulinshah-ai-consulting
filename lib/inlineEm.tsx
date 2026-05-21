/**
 * Renders inline emphasis: text wrapped in _underscores_ becomes italic emphasized,
 * styled to be slightly heavier than surrounding muted prose. Used in body copy.
 */
import React from "react";

export function inlineEm(text: string): React.ReactNode {
  const parts = text.split(/(_[^_]+_)/g);
  return parts.map((part, i) => {
    if (part.startsWith("_") && part.endsWith("_") && part.length > 2) {
      return (
        <em key={i} className="not-italic text-ink font-normal">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
