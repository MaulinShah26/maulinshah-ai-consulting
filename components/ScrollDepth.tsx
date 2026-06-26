"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function ScrollDepth() {
  useEffect(() => {
    const fired = new Set<number>();
    const marks = [25, 50, 75, 100];
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = ((doc.scrollTop || window.scrollY) / max) * 100;
      for (const m of marks) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          track("scroll_depth", { percent: m });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
