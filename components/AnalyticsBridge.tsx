"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

export function AnalyticsBridge() {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      if (pathname.startsWith("/case-studies/")) {
        const button = target.closest("button");
        const label = button?.textContent?.replace(/\s+/g, " ").trim().toLowerCase() ?? "";

        if (label.includes("deep dive")) {
          const slug = pathname.split("/").filter(Boolean).pop() ?? "unknown";
          track("case_study_deep_dive_open", {
            slug,
            source: label.includes("open deep dive") ? "prompt" : "view_toggle",
          });
        }
      }

      if (pathname.startsWith("/services/") && pathname !== "/services") {
        const anchor = target.closest("a");
        const href = anchor?.getAttribute("href") ?? "";

        if (href === "/contact") {
          const service = pathname.split("/").filter(Boolean).pop() ?? "unknown";
          track("service_contact_click", { service });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
