import type { MetadataRoute } from "next";
import { meta } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? meta.siteUrl;

  const routes = [
    "",
    "/work",
    "/services",
    "/about",
    "/contact",
    "/privacy",
    "/services/opportunity-audit",
    "/services/decision-system-build",
    "/services/fractional-head",
    "/case-studies/customer-retention-probability",
    "/case-studies/batters-bowlers-tag",
    "/case-studies/food-replenishment",
    "/case-studies/customer-affinity-modelling",
    "/case-studies/adaptive-nudge-decision-engine",
    "/case-studies/ai-cricket-commentary",
    "/case-studies/ai-job-impact-assessor",
    "/case-studies/ai-trading-copilot",
    "/case-studies/medicine-helper",
    "/case-studies/nerdycricket",
    "/case-studies/packaged-food-label-analyzer",
  ];

  return routes.map((route): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : ["/work", "/services", "/about", "/contact"].includes(route) ? 0.9 : 0.7,
  }));
}
