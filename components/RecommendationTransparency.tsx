"use client";

import Image from "next/image";
import {
  AlertTriangle,
  Check,
  Heart,
  Info,
  Minus,
  Plus,
  RotateCcw,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Badge = "Recommended" | "Best Seller" | "Top Rated" | "Popular" | "Sponsored" | "Best Match";
type RankMode = "match" | "popular" | "rating" | "price";
type ExperienceMode = "typical" | "explained";
type PriceFilter = "all" | "under8" | "under12" | "over12";
type FeatureFilter = "anc" | "multipoint" | "calls" | "battery" | "gaming";

type Preferences = {
  budget: number;
  calls: boolean;
  multipoint: boolean;
  anc: boolean;
  battery: boolean;
  gaming: boolean;
};

type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  sold: number;
  badge: Badge;
  sponsored: boolean;
  image: string;
  imagePosition?: string;
  color: string;
  callScore: number;
  ancScore: number;
  multipoint: boolean;
  battery: number;
  lowLatency: boolean;
  waterResistance: string;
  delivery: string;
  returnRate: number;
  sellerScore: number;
  recommendationMix: string[];
};

const images = {
  navy: "/products/earbuds/aurora-navy.webp",
  sage: "/products/earbuds/rhythm-sage.webp",
  white: "/products/earbuds/clarity-white.webp",
  burgundy: "/products/earbuds/volt-burgundy.webp",
};

const products: Product[] = [
  { id: "p01", brand: "Auraloop", name: "Focus Pro", price: 10999, mrp: 14999, rating: 4.6, reviews: 2184, sold: 8200, badge: "Recommended", sponsored: false, image: images.navy, color: "Midnight", callScore: 5, ancScore: 5, multipoint: true, battery: 36, lowLatency: false, waterResistance: "IPX5", delivery: "Tomorrow", returnRate: 2.1, sellerScore: 96, recommendationMix: ["Strong match for your search", "High seller reliability", "Low return rate"] },
  { id: "p02", brand: "Kite Audio", name: "Air Mini 2", price: 5999, mrp: 7999, rating: 4.4, reviews: 4910, sold: 18400, badge: "Best Seller", sponsored: false, image: images.white, color: "Pearl", callScore: 4, ancScore: 3, multipoint: true, battery: 28, lowLatency: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 3.7, sellerScore: 94, recommendationMix: ["Highest unit sales in this category", "Available for next-day delivery", "Frequent repeat purchase"] },
  { id: "p03", brand: "Sona Labs", name: "Clarity One", price: 12999, mrp: 16999, rating: 4.8, reviews: 782, sold: 3900, badge: "Top Rated", sponsored: false, image: images.sage, color: "Sage", callScore: 5, ancScore: 4, multipoint: true, battery: 34, lowLatency: false, waterResistance: "IPX5", delivery: "2 days", returnRate: 1.8, sellerScore: 98, recommendationMix: ["Highest verified-buyer rating", "Strong call quality feedback", "Consistent recent reviews"] },
  { id: "p04", brand: "Vektor", name: "Play Neo", price: 8999, mrp: 11999, rating: 4.3, reviews: 1740, sold: 7100, badge: "Sponsored", sponsored: true, image: images.burgundy, color: "Wine", callScore: 4, ancScore: 4, multipoint: false, battery: 40, lowLatency: true, waterResistance: "IPX5", delivery: "Tomorrow", returnRate: 4.2, sellerScore: 91, recommendationMix: ["Seller paid for placement", "Meets the relevance threshold", "Strong gaming feature match"] },
  { id: "p05", brand: "Nimbo", name: "Everyday ANC", price: 7499, mrp: 9999, rating: 4.2, reviews: 3290, sold: 12600, badge: "Popular", sponsored: false, image: images.navy, imagePosition: "52% 48%", color: "Ink", callScore: 3, ancScore: 4, multipoint: true, battery: 32, lowLatency: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 5.1, sellerScore: 90, recommendationMix: ["Most viewed this week", "High add-to-bag rate", "Discount is driving attention"] },
  { id: "p06", brand: "Auraloop", name: "Workday Lite", price: 8499, mrp: 10999, rating: 4.5, reviews: 1264, sold: 5400, badge: "Best Match", sponsored: false, image: images.sage, imagePosition: "50% 46%", color: "Moss", callScore: 5, ancScore: 4, multipoint: true, battery: 38, lowLatency: false, waterResistance: "IPX5", delivery: "2 days", returnRate: 2.4, sellerScore: 97, recommendationMix: ["Matches your declared priorities", "Inside your budget", "No paid placement"] },
  { id: "p07", brand: "Kite Audio", name: "Bass Sprint", price: 4499, mrp: 6499, rating: 4.1, reviews: 6480, sold: 22300, badge: "Best Seller", sponsored: false, image: images.burgundy, imagePosition: "48% 52%", color: "Merlot", callScore: 3, ancScore: 2, multipoint: false, battery: 30, lowLatency: true, waterResistance: "IPX6", delivery: "Tomorrow", returnRate: 6.4, sellerScore: 89, recommendationMix: ["Highest sales volume", "Strong discount conversion", "Broad entry-level appeal"] },
  { id: "p08", brand: "Sona Labs", name: "Quiet Form", price: 15999, mrp: 19999, rating: 4.7, reviews: 1106, sold: 4700, badge: "Top Rated", sponsored: false, image: images.navy, imagePosition: "47% 50%", color: "Graphite", callScore: 5, ancScore: 5, multipoint: true, battery: 42, lowLatency: false, waterResistance: "IPX5", delivery: "3 days", returnRate: 1.6, sellerScore: 98, recommendationMix: ["Strongest ANC score", "Excellent verified reviews", "Lowest return rate"] },
  { id: "p09", brand: "Vektor", name: "Commute X", price: 11999, mrp: 14999, rating: 4.4, reviews: 950, sold: 4300, badge: "Sponsored", sponsored: true, image: images.white, imagePosition: "50% 54%", color: "Cloud", callScore: 4, ancScore: 5, multipoint: true, battery: 30, lowLatency: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 3.9, sellerScore: 92, recommendationMix: ["Seller paid for placement", "Matches 4 common commuter needs", "In stock near you"] },
  { id: "p10", brand: "Morrow", name: "Studio Buds", price: 13999, mrp: 17999, rating: 4.6, reviews: 680, sold: 2800, badge: "Recommended", sponsored: false, image: images.burgundy, imagePosition: "54% 50%", color: "Bordeaux", callScore: 4, ancScore: 4, multipoint: true, battery: 35, lowLatency: true, waterResistance: "IPX5", delivery: "2 days", returnRate: 2.8, sellerScore: 95, recommendationMix: ["Similar shoppers kept this item", "Balanced feature set", "Low return rate"] },
  { id: "p11", brand: "Nimbo", name: "Pocket Air", price: 3999, mrp: 5499, rating: 4.0, reviews: 7860, sold: 20800, badge: "Popular", sponsored: false, image: images.white, imagePosition: "47% 48%", color: "Ice", callScore: 3, ancScore: 1, multipoint: false, battery: 24, lowLatency: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 7.2, sellerScore: 87, recommendationMix: ["High traffic this week", "Low price drives clicks", "Often compared with sale products"] },
  { id: "p12", brand: "Morrow", name: "Link Duo", price: 9999, mrp: 12999, rating: 4.5, reviews: 1430, sold: 6700, badge: "Best Match", sponsored: false, image: images.sage, imagePosition: "53% 50%", color: "Olive", callScore: 5, ancScore: 4, multipoint: true, battery: 40, lowLatency: true, waterResistance: "IPX5", delivery: "Tomorrow", returnRate: 2.5, sellerScore: 96, recommendationMix: ["Matches your work and travel needs", "Inside your budget", "No payment influenced rank"] },
  { id: "p13", brand: "Auraloop", name: "Halo 3", price: 6799, mrp: 8999, rating: 4.3, reviews: 2480, sold: 9400, badge: "Recommended", sponsored: false, image: images.navy, imagePosition: "50% 55%", color: "Navy", callScore: 4, ancScore: 3, multipoint: true, battery: 34, lowLatency: false, waterResistance: "IPX5", delivery: "2 days", returnRate: 4.1, sellerScore: 93, recommendationMix: ["Relevant to your recent browsing", "Good value for the feature mix", "Reliable availability"] },
  { id: "p14", brand: "Kite Audio", name: "Game Arc", price: 7999, mrp: 10499, rating: 4.4, reviews: 1990, sold: 8900, badge: "Sponsored", sponsored: true, image: images.burgundy, imagePosition: "50% 46%", color: "Garnet", callScore: 3, ancScore: 3, multipoint: false, battery: 45, lowLatency: true, waterResistance: "IPX6", delivery: "Tomorrow", returnRate: 4.8, sellerScore: 90, recommendationMix: ["Seller paid for placement", "Strong latency match", "High stock availability"] },
  { id: "p15", brand: "Sona Labs", name: "Voice Clear", price: 11499, mrp: 13999, rating: 4.7, reviews: 870, sold: 3600, badge: "Top Rated", sponsored: false, image: images.white, imagePosition: "52% 52%", color: "Silver", callScore: 5, ancScore: 4, multipoint: true, battery: 31, lowLatency: false, waterResistance: "IPX4", delivery: "2 days", returnRate: 1.9, sellerScore: 97, recommendationMix: ["Top call-quality ratings", "Verified review threshold met", "High seller reliability"] },
  { id: "p16", brand: "Vektor", name: "Motion 5", price: 5499, mrp: 7499, rating: 4.2, reviews: 4150, sold: 15100, badge: "Popular", sponsored: false, image: images.sage, imagePosition: "46% 50%", color: "Fern", callScore: 3, ancScore: 2, multipoint: true, battery: 37, lowLatency: true, waterResistance: "IPX6", delivery: "Tomorrow", returnRate: 5.9, sellerScore: 88, recommendationMix: ["Trending in fitness audio", "High add-to-bag rate", "Recent price drop"] },
  { id: "p17", brand: "Morrow", name: "Calm Mini", price: 9299, mrp: 11999, rating: 4.5, reviews: 1210, sold: 4900, badge: "Best Match", sponsored: false, image: images.navy, imagePosition: "53% 47%", color: "Slate", callScore: 4, ancScore: 5, multipoint: true, battery: 36, lowLatency: false, waterResistance: "IPX5", delivery: "2 days", returnRate: 2.7, sellerScore: 96, recommendationMix: ["Strong needs match", "Better ANC at this price", "No paid placement"] },
  { id: "p18", brand: "Nimbo", name: "Pods Go", price: 3499, mrp: 4999, rating: 4.1, reviews: 9200, sold: 26000, badge: "Best Seller", sponsored: false, image: images.white, imagePosition: "54% 48%", color: "White", callScore: 3, ancScore: 1, multipoint: false, battery: 22, lowLatency: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 8.1, sellerScore: 86, recommendationMix: ["Most units sold", "Lowest entry price", "Broad availability"] },
  { id: "p19", brand: "Auraloop", name: "Deep Quiet", price: 17999, mrp: 21999, rating: 4.8, reviews: 540, sold: 2100, badge: "Top Rated", sponsored: false, image: images.burgundy, imagePosition: "48% 48%", color: "Plum", callScore: 5, ancScore: 5, multipoint: true, battery: 46, lowLatency: true, waterResistance: "IPX5", delivery: "3 days", returnRate: 1.4, sellerScore: 99, recommendationMix: ["Highest satisfaction score", "Premium feature coverage", "Very low return rate"] },
  { id: "p20", brand: "Kite Audio", name: "Metro Plus", price: 10499, mrp: 13499, rating: 4.4, reviews: 1520, sold: 6100, badge: "Recommended", sponsored: false, image: images.sage, imagePosition: "51% 54%", color: "Willow", callScore: 4, ancScore: 4, multipoint: true, battery: 33, lowLatency: false, waterResistance: "IPX5", delivery: "Tomorrow", returnRate: 3.2, sellerScore: 94, recommendationMix: ["Good query relevance", "Often chosen in this price range", "Dependable seller score"] },
  { id: "p21", brand: "Sona Labs", name: "Sync Air", price: 12499, mrp: 15999, rating: 4.6, reviews: 910, sold: 4100, badge: "Best Match", sponsored: false, image: images.white, imagePosition: "48% 52%", color: "Frost", callScore: 5, ancScore: 4, multipoint: true, battery: 39, lowLatency: true, waterResistance: "IPX5", delivery: "2 days", returnRate: 2.0, sellerScore: 98, recommendationMix: ["Matches all key feature needs", "Slightly above budget", "No payment influenced rank"] },
  { id: "p22", brand: "Vektor", name: "Rush ANC", price: 6999, mrp: 9499, rating: 4.2, reviews: 2750, sold: 11200, badge: "Sponsored", sponsored: true, image: images.navy, imagePosition: "46% 54%", color: "Black", callScore: 3, ancScore: 4, multipoint: false, battery: 41, lowLatency: true, waterResistance: "IPX6", delivery: "Tomorrow", returnRate: 5.4, sellerScore: 89, recommendationMix: ["Seller paid for placement", "Price and ANC are relevant", "High campaign budget"] },
  { id: "p23", brand: "Morrow", name: "Daylong 44", price: 8999, mrp: 11499, rating: 4.5, reviews: 1680, sold: 7200, badge: "Popular", sponsored: false, image: images.sage, imagePosition: "54% 46%", color: "Sage", callScore: 4, ancScore: 3, multipoint: true, battery: 48, lowLatency: false, waterResistance: "IPX5", delivery: "Tomorrow", returnRate: 3.4, sellerScore: 95, recommendationMix: ["High engagement this week", "Battery-life searches are rising", "Strong availability"] },
  { id: "p24", brand: "Nimbo", name: "Daily Talk", price: 6499, mrp: 8499, rating: 4.3, reviews: 3070, sold: 10100, badge: "Recommended", sponsored: false, image: images.white, imagePosition: "50% 46%", color: "Pearl", callScore: 4, ancScore: 3, multipoint: true, battery: 30, lowLatency: false, waterResistance: "IPX4", delivery: "2 days", returnRate: 4.6, sellerScore: 92, recommendationMix: ["Strong match for calls", "Inside your usual price range", "Consistent stock"] },
];

const labelLogic: Record<Badge, { means: string; optimizedFor: string; canBeDistortedBy: string; doesNotMean: string }> = {
  Sponsored: {
    means: "The seller paid for a chance to appear in a promoted position. The product still had to pass a basic relevance check.",
    optimizedFor: "Paid visibility and the likelihood of a sale.",
    canBeDistortedBy: "Seller budget, campaign bids and the platform's conversion target.",
    doesNotMean: "Best product, best value or best fit for you.",
  },
  "Best Seller": {
    means: "One of the highest unit-selling products in wireless earbuds during the last 30 days.",
    optimizedFor: "Sales volume and marketplace turnover.",
    canBeDistortedBy: "Discounts, stock levels, category boundaries and earlier visibility.",
    doesNotMean: "Highest quality or most suitable for your needs.",
  },
  "Top Rated": {
    means: "A high average rating among products with at least 250 verified-buyer ratings.",
    optimizedFor: "Buyer satisfaction as captured by reviews.",
    canBeDistortedBy: "Who leaves reviews, product age and small differences in rating averages.",
    doesNotMean: "Best value, newest product or strongest match for you.",
  },
  Popular: {
    means: "This product received unusually high views and add-to-bag activity in the last seven days.",
    optimizedFor: "Current shopper attention and engagement momentum.",
    canBeDistortedBy: "Previous placement, promotions and curiosity clicks that create a feedback loop.",
    doesNotMean: "Most purchased or most highly rated.",
  },
  Recommended: {
    means: "A blended ranking using query relevance, browsing patterns, availability, seller reliability and predicted purchase likelihood.",
    optimizedFor: "A likely conversion while balancing shopper and marketplace signals.",
    canBeDistortedBy: "Guessed intent, high-stock products and commercial weights you cannot normally see.",
    doesNotMean: "Chosen only because it is the best product for you.",
  },
  "Best Match": {
    means: "The product matches the needs you explicitly selected in this prototype.",
    optimizedFor: "Your stated budget and feature requirements.",
    canBeDistortedBy: "Incomplete preferences and how each requirement is weighted.",
    doesNotMean: "Objectively best for every shopper.",
  },
};

const defaultPreferences: Preferences = {
  budget: 12000,
  calls: true,
  multipoint: true,
  anc: true,
  battery: true,
  gaming: false,
};

const rankCopy: Record<RankMode, { label: string; optimized: string; detail: string }> = {
  match: { label: "Best match for me", optimized: "your declared needs", detail: "Budget and selected features decide the order. Platform payment is ignored." },
  popular: { label: "Popular", optimized: "recent sales volume", detail: "Products with more purchases rise, even when they miss your requirements." },
  rating: { label: "Rating", optimized: "review average", detail: "Higher-rated products rise. Price and feature fit are not considered." },
  price: { label: "Price", optimized: "lowest price", detail: "The cheapest products rise. Quality, returns and feature fit are not considered." },
};

function money(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function getFit(product: Product, preferences: Preferences) {
  const checks = [
    { active: true, label: `Under ${money(preferences.budget)}`, pass: product.price <= preferences.budget },
    { active: preferences.calls, label: "Clear calls", pass: product.callScore >= 4 },
    { active: preferences.multipoint, label: "Multipoint", pass: product.multipoint },
    { active: preferences.anc, label: "Strong ANC", pass: product.ancScore >= 4 },
    { active: preferences.battery, label: "32h+ battery", pass: product.battery >= 32 },
    { active: preferences.gaming, label: "Low latency", pass: product.lowLatency },
  ].filter((check) => check.active);
  const matches = checks.filter((check) => check.pass);
  const misses = checks.filter((check) => !check.pass);
  const score = Math.round((matches.length / checks.length) * 90 + (product.rating / 5) * 10);
  return { checks, matches, misses, score: Math.min(100, score) };
}

function badgeStyle(badge: Badge) {
  if (badge === "Sponsored") return "border-amber-300 bg-amber-50 text-amber-900";
  if (badge === "Best Match") return "border-emerald-300 bg-emerald-50 text-emerald-800";
  if (badge === "Top Rated") return "border-sky-300 bg-sky-50 text-sky-800";
  if (badge === "Best Seller") return "border-violet-300 bg-violet-50 text-violet-800";
  if (badge === "Popular") return "border-rose-300 bg-rose-50 text-rose-800";
  return "border-slate-300 bg-white text-slate-700";
}

export default function RecommendationTransparency() {
  const [experience, setExperience] = useState<ExperienceMode>("typical");
  const [rankMode, setRankMode] = useState<RankMode>("match");
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [features, setFeatures] = useState<FeatureFilter[]>([]);
  const [labelFilter, setLabelFilter] = useState<Badge | "All">("All");
  const [saved, setSaved] = useState<string[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [bag, setBag] = useState<string[]>([]);
  const [reasonId, setReasonId] = useState<string | null>(null);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [showNeeds, setShowNeeds] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 1800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const list = products.filter((product) => {
      if (query && !`${product.brand} ${product.name} ${product.badge} ${product.color}`.toLowerCase().includes(query)) return false;
      if (priceFilter === "under8" && product.price >= 8000) return false;
      if (priceFilter === "under12" && product.price >= 12000) return false;
      if (priceFilter === "over12" && product.price < 12000) return false;
      if (features.includes("anc") && product.ancScore < 4) return false;
      if (features.includes("multipoint") && !product.multipoint) return false;
      if (features.includes("calls") && product.callScore < 4) return false;
      if (features.includes("battery") && product.battery < 40) return false;
      if (features.includes("gaming") && !product.lowLatency) return false;
      if (labelFilter !== "All" && product.badge !== labelFilter) return false;
      if (savedOnly && !saved.includes(product.id)) return false;
      return true;
    });
    return list.sort((a, b) => {
      if (rankMode === "popular") return b.sold - a.sold || b.reviews - a.reviews;
      if (rankMode === "rating") return b.rating - a.rating || b.reviews - a.reviews;
      if (rankMode === "price") return a.price - b.price || b.rating - a.rating;
      return getFit(b, preferences).score - getFit(a, preferences).score || b.rating - a.rating;
    });
  }, [features, labelFilter, preferences, priceFilter, rankMode, saved, savedOnly, search]);

  const reasonProduct = reasonId ? products.find((product) => product.id === reasonId) ?? null : null;
  const detailProduct = detailId ? products.find((product) => product.id === detailId) ?? null : null;
  const bagProducts = products.filter((product) => bag.includes(product.id));
  const bagSubtotal = bag.reduce((total, id) => total + (products.find((product) => product.id === id)?.price ?? 0), 0);
  const activeFilterCount = features.length + (priceFilter !== "all" ? 1 : 0) + (labelFilter !== "All" ? 1 : 0);

  function toggleFeature(feature: FeatureFilter) {
    setFeatures((current) => current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature]);
  }

  function toggleSaved(id: string) {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function addToBag(product: Product) {
    setBag((current) => [...current, product.id]);
    setToast(`${product.name} added to bag`);
  }

  function removeOneFromBag(id: string) {
    setBag((current) => {
      const index = current.indexOf(id);
      return index === -1 ? current : [...current.slice(0, index), ...current.slice(index + 1)];
    });
  }

  function resetAll() {
    setExperience("typical");
    setRankMode("match");
    setPreferences(defaultPreferences);
    setSearch("");
    setPriceFilter("all");
    setFeatures([]);
    setLabelFilter("All");
    setSavedOnly(false);
    setReasonId(null);
    setDetailId(null);
    setShowFilters(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const hasChanges = search || activeFilterCount > 0 || savedOnly || rankMode !== "match" || experience !== "typical";

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-[#17211f]">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-[1500px] items-center gap-3 px-4 sm:px-6">
          <div className="flex shrink-0 items-center gap-2 text-[15px] font-semibold tracking-[-0.02em]">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#17211f] text-xs text-white">A</span>
            <span>Arc Audio</span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-violet-700">Prototype</span>
          </div>
          <label className="mx-auto hidden w-full max-w-2xl md:block">
            <span className="sr-only">Search wireless earbuds</span>
            <span className="relative block">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search wireless earbuds" className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100" />
            </span>
          </label>
          <div className="ml-auto flex items-center gap-1">
            <button onClick={() => setSavedOnly((value) => !value)} aria-pressed={savedOnly} className={`relative grid h-10 w-10 place-items-center rounded-full transition ${savedOnly ? "bg-rose-50 text-rose-600" : "text-slate-600 hover:bg-slate-100"}`} aria-label="Show saved products">
              <Heart className={`h-[18px] w-[18px] ${savedOnly ? "fill-current" : ""}`} />
              {saved.length > 0 ? <CountBadge>{saved.length}</CountBadge> : null}
            </button>
            <button onClick={() => setShowBag(true)} className="relative grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100" aria-label="Open bag">
              <ShoppingBag className="h-[18px] w-[18px]" />
              {bag.length > 0 ? <CountBadge>{bag.length}</CountBadge> : null}
            </button>
          </div>
        </div>
        <div className="border-t border-slate-100 px-4 py-2 md:hidden">
          <label className="relative block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search wireless earbuds" className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-violet-400" />
          </label>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">Wireless earbuds</h1>
                <span className="text-xs text-slate-500">24 products</span>
              </div>
              <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm">The same products. The same labels. One switch reveals what each label is actually optimized for.</p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:flex-row xl:w-auto">
              <div className="grid grid-cols-2 rounded-2xl border border-slate-200 bg-slate-100 p-1" aria-label="Recommendation explanation view">
                <button onClick={() => setExperience("typical")} className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${experience === "typical" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>Typical view</button>
                <button onClick={() => setExperience("explained")} className={`flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition ${experience === "explained" ? "bg-[#17211f] text-white shadow-sm" : "text-slate-500"}`}><Sparkles className="h-3.5 w-3.5" /> Explain the labels</button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-[#fbfbfd] p-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-100 text-violet-700 sm:grid"><Check className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Your priorities</div>
                <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                  <PriorityChip>Under {money(preferences.budget)}</PriorityChip>
                  {preferences.calls ? <PriorityChip>Clear calls</PriorityChip> : null}
                  {preferences.multipoint ? <PriorityChip>Multipoint</PriorityChip> : null}
                  {preferences.anc ? <PriorityChip>Strong ANC</PriorityChip> : null}
                  {preferences.battery ? <PriorityChip>32h+ battery</PriorityChip> : null}
                  {preferences.gaming ? <PriorityChip>Low latency</PriorityChip> : null}
                </div>
              </div>
              <button onClick={() => setShowNeeds(true)} className="ml-auto shrink-0 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 hover:border-violet-300 hover:text-violet-700">Edit needs</button>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Rank by</span>
              {(Object.keys(rankCopy) as RankMode[]).map((mode) => <button key={mode} onClick={() => setRankMode(mode)} className={`shrink-0 rounded-full px-3 py-2 text-[11px] font-semibold transition ${rankMode === mode ? "bg-violet-700 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-violet-300"}`}>{rankCopy[mode].label}</button>)}
            </div>
          </div>

          {experience === "explained" ? (
            <div className="mt-3 flex flex-col gap-2 rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-2.5">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-violet-700" />
                <div><span className="text-xs font-semibold text-violet-950">This order is optimized for {rankCopy[rankMode].optimized}.</span><span className="ml-1 text-xs text-violet-700">{rankCopy[rankMode].detail}</span></div>
              </div>
              <span className="shrink-0 text-[10px] font-semibold text-violet-700">No ranking is neutral.</span>
            </div>
          ) : null}
        </div>
      </section>

      <div className="mx-auto grid max-w-[1500px] gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden self-start rounded-2xl border border-slate-200 bg-white p-4 lg:sticky lg:top-[88px] lg:block">
          <Filters priceFilter={priceFilter} setPriceFilter={setPriceFilter} features={features} toggleFeature={toggleFeature} labelFilter={labelFilter} setLabelFilter={setLabelFilter} clear={() => { setPriceFilter("all"); setFeatures([]); setLabelFilter("All"); }} />
        </aside>

        <section className="min-w-0">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="text-xs text-slate-500"><span className="font-semibold text-slate-900">{visibleProducts.length}</span> results{savedOnly ? " · saved only" : ""}</div>
            <div className="flex items-center gap-2">
              {hasChanges ? <button onClick={resetAll} className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-semibold text-slate-500 hover:bg-white hover:text-slate-900"><RotateCcw className="h-3.5 w-3.5" /> Reset</button> : null}
              <button onClick={() => setShowFilters(true)} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold lg:hidden"><SlidersHorizontal className="h-3.5 w-3.5" /> Filters{activeFilterCount ? ` (${activeFilterCount})` : ""}</button>
            </div>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" data-testid="product-grid">
              {visibleProducts.map((product, index) => {
                const fit = getFit(product, preferences);
                return <ProductCard key={product.id} product={product} index={index} fit={fit} explained={experience === "explained"} saved={saved.includes(product.id)} onSave={() => toggleSaved(product.id)} onWhy={() => setReasonId(product.id)} onDetails={() => setDetailId(product.id)} onAdd={() => addToBag(product)} />;
              })}
            </div>
          ) : (
            <div className="grid min-h-[420px] place-items-center rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <div><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100"><Search className="h-5 w-5 text-slate-500" /></div><h2 className="mt-4 text-lg font-semibold">No earbuds match these filters</h2><p className="mt-2 text-sm text-slate-500">Clear a filter or reset the catalogue to see all 24 products.</p><button onClick={resetAll} className="mt-4 rounded-full bg-[#17211f] px-4 py-2.5 text-xs font-semibold text-white">Show all products</button></div>
            </div>
          )}
        </section>
      </div>

      {reasonProduct ? <WhyPanel product={reasonProduct} preferences={preferences} onClose={() => setReasonId(null)} onAdd={() => addToBag(reasonProduct)} /> : null}
      {detailProduct ? <ProductDetails product={detailProduct} preferences={preferences} saved={saved.includes(detailProduct.id)} onClose={() => setDetailId(null)} onSave={() => toggleSaved(detailProduct.id)} onWhy={() => { setDetailId(null); setReasonId(detailProduct.id); }} onAdd={() => addToBag(detailProduct)} /> : null}
      {showNeeds ? <NeedsPanel preferences={preferences} setPreferences={setPreferences} rankMode={rankMode} setRankMode={setRankMode} onClose={() => setShowNeeds(false)} /> : null}
      {showFilters ? <Drawer title="Filters" onClose={() => setShowFilters(false)}><Filters priceFilter={priceFilter} setPriceFilter={setPriceFilter} features={features} toggleFeature={toggleFeature} labelFilter={labelFilter} setLabelFilter={setLabelFilter} clear={() => { setPriceFilter("all"); setFeatures([]); setLabelFilter("All"); }} /><button onClick={() => setShowFilters(false)} className="mt-6 w-full rounded-xl bg-[#17211f] py-3 text-sm font-semibold text-white">Show {visibleProducts.length} results</button></Drawer> : null}
      {showBag ? <BagPanel bag={bag} products={bagProducts} subtotal={bagSubtotal} onRemove={removeOneFromBag} onAdd={addToBag} onClose={() => setShowBag(false)} /> : null}
      {toast ? <div role="status" className="fixed bottom-5 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-[#17211f] px-4 py-2.5 text-xs font-semibold text-white shadow-xl">{toast}</div> : null}
    </main>
  );
}

function ProductCard({ product, index, fit, explained, saved, onSave, onWhy, onDetails, onAdd }: { product: Product; index: number; fit: ReturnType<typeof getFit>; explained: boolean; saved: boolean; onSave: () => void; onWhy: () => void; onDetails: () => void; onAdd: () => void }) {
  const discount = Math.round((1 - product.price / product.mrp) * 100);
  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(23,33,31,0.08)]">
      <div className="relative aspect-[1.12/1] overflow-hidden bg-slate-100">
        <Image src={product.image} alt={`${product.brand} ${product.name} wireless earbuds`} fill sizes="(min-width: 1536px) 280px, (min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw" priority={index < 4} className="object-cover transition duration-500 group-hover:scale-[1.025]" style={{ objectPosition: product.imagePosition ?? "50% 50%" }} />
        <button onClick={explained ? onWhy : undefined} aria-label={explained ? `Explain ${product.badge} label for ${product.name}` : undefined} className={`absolute left-3 top-3 rounded-full border px-2.5 py-1.5 text-[9px] font-bold shadow-sm ${badgeStyle(product.badge)} ${explained ? "cursor-pointer ring-offset-2 hover:ring-2 hover:ring-violet-300" : "cursor-default"}`}>{product.badge}{explained ? " · Why?" : ""}</button>
        <button onClick={onSave} aria-label={saved ? `Remove ${product.name} from saved` : `Save ${product.name}`} className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border shadow-sm transition ${saved ? "border-rose-200 bg-rose-50 text-rose-600" : "border-white bg-white/95 text-slate-600 hover:text-rose-600"}`}><Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} /></button>
        {explained ? <div className="absolute bottom-3 left-3 rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[9px] font-bold text-emerald-800 shadow-sm backdrop-blur">{fit.matches.length}/{fit.checks.length} needs matched</div> : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">{product.brand} · {product.color}</div>
        <h2 className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-slate-900">{product.name}</h2>
        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-500"><span className="flex items-center gap-0.5 font-semibold text-slate-800"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {product.rating.toFixed(1)}</span><span>({product.reviews.toLocaleString("en-IN")})</span><span>· {product.sold >= 1000 ? `${(product.sold / 1000).toFixed(1)}k` : product.sold} bought</span></div>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1"><span className="text-lg font-bold tracking-[-0.03em]">{money(product.price)}</span><span className="text-[10px] text-slate-400 line-through">{money(product.mrp)}</span><span className="text-[10px] font-semibold text-emerald-700">{discount}% off</span></div>
        <div className="mt-1 text-[10px] text-slate-500">Free delivery · {product.delivery}</div>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[9px] text-slate-600"><Feature>{product.battery}h battery</Feature>{product.ancScore >= 4 ? <Feature>Strong ANC</Feature> : null}{product.multipoint ? <Feature>Multipoint</Feature> : null}{product.lowLatency ? <Feature>Low latency</Feature> : null}</div>
        {explained ? (
          <button onClick={onWhy} className="mt-3 rounded-xl border border-violet-200 bg-violet-50 p-3 text-left transition hover:border-violet-400">
            <div className="flex items-center justify-between gap-2 text-[10px] font-bold text-violet-900"><span>Why this is here</span><span aria-hidden="true">→</span></div>
            <div className="mt-1 line-clamp-2 text-[10px] leading-4 text-violet-700">{product.sponsored ? "Paid placement, then checked for relevance." : product.recommendationMix[0] + "."} {fit.misses.length ? `Misses ${fit.misses[0].label.toLowerCase()}.` : "Matches every selected need."}</div>
          </button>
        ) : null}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-4"><button onClick={onDetails} className="rounded-xl border border-slate-200 py-2.5 text-[10px] font-semibold text-slate-700 transition hover:border-slate-400">View details</button><button onClick={onAdd} className="rounded-xl bg-[#17211f] py-2.5 text-[10px] font-semibold text-white transition hover:bg-violet-800">Add to bag</button></div>
      </div>
    </article>
  );
}

function WhyPanel({ product, preferences, onClose, onAdd }: { product: Product; preferences: Preferences; onClose: () => void; onAdd: () => void }) {
  const fit = getFit(product, preferences);
  const logic = labelLogic[product.badge];
  return (
    <Modal onClose={onClose} maxWidth="max-w-3xl">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5 sm:p-6">
        <div><div className="text-[10px] font-bold uppercase tracking-[0.15em] text-violet-700">Why you are seeing this</div><h2 className="mt-1 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">{product.brand} {product.name}</h2><p className="mt-1 text-xs text-slate-500">The label, the placement and the product fit are three different signals.</p></div>
        <CloseButton onClick={onClose} />
      </div>
      <div className="max-h-[78vh] overflow-y-auto p-5 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <SignalCard label="Label" value={product.badge} tone={product.sponsored ? "amber" : "violet"} />
          <SignalCard label="Placement" value={product.sponsored ? "Paid" : "Organic"} tone={product.sponsored ? "amber" : "green"} />
          <SignalCard label="Your fit" value={`${fit.matches.length} of ${fit.checks.length} needs`} tone={fit.misses.length <= 1 ? "green" : "slate"} />
        </div>

        <section className="mt-5 rounded-2xl border border-slate-200 p-4">
          <div className="flex items-center gap-2"><span className={`rounded-full border px-2.5 py-1 text-[9px] font-bold ${badgeStyle(product.badge)}`}>{product.badge}</span><h3 className="text-sm font-semibold">What this label actually means</h3></div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{logic.means}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <ExplanationBlock label="Optimized for" text={logic.optimizedFor} />
            <ExplanationBlock label="What can shape it" text={logic.canBeDistortedBy} warning />
          </div>
          <div className="mt-3 rounded-xl bg-slate-100 px-3 py-2.5 text-[11px] text-slate-600"><strong className="text-slate-900">It does not mean:</strong> {logic.doesNotMean}</div>
        </section>

        <section className="mt-4 rounded-2xl border border-slate-200 p-4">
          <div className="flex items-center justify-between gap-3"><h3 className="text-sm font-semibold">How it fits your needs</h3><span className="text-xs font-bold text-emerald-700">{fit.score}% fit score</span></div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${fit.score}%` }} /></div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {fit.matches.map((item) => <div key={item.label} className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-[11px] font-medium text-emerald-800"><Check className="h-3.5 w-3.5" /> {item.label}</div>)}
            {fit.misses.map((item) => <div key={item.label} className="flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-2 text-[11px] font-medium text-amber-900"><AlertTriangle className="h-3.5 w-3.5" /> Misses {item.label.toLowerCase()}</div>)}
          </div>
        </section>

        <section className={`mt-4 rounded-2xl border p-4 ${product.sponsored ? "border-amber-200 bg-amber-50" : "border-emerald-200 bg-emerald-50"}`}>
          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">Placement disclosure</div>
          <p className="mt-1.5 text-sm leading-6 text-slate-700">{product.sponsored ? "The seller paid for promotional visibility. Payment helped this product enter a prominent slot; it did not make the product your best match." : "No payment influenced this product's position. Its place comes from the ranking mode you selected and the product data shown here."}</p>
        </section>

        <section className="mt-4">
          <h3 className="text-sm font-semibold">Signals used for this product</h3>
          <div className="mt-2 space-y-2">{product.recommendationMix.map((item, index) => <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5 text-[11px] text-slate-600"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-slate-100 text-[9px] font-bold text-slate-700">{index + 1}</span>{item}</div>)}</div>
        </section>

        <div className="mt-6 flex flex-col-reverse gap-2 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end"><button onClick={onClose} className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold">Keep browsing</button><button onClick={onAdd} className="rounded-xl bg-[#17211f] px-4 py-2.5 text-xs font-semibold text-white">Add to bag · {money(product.price)}</button></div>
      </div>
    </Modal>
  );
}

function ProductDetails({ product, preferences, saved, onClose, onSave, onWhy, onAdd }: { product: Product; preferences: Preferences; saved: boolean; onClose: () => void; onSave: () => void; onWhy: () => void; onAdd: () => void }) {
  const fit = getFit(product, preferences);
  return (
    <Modal onClose={onClose} maxWidth="max-w-4xl">
      <div className="flex items-start justify-between gap-4 p-5 sm:p-6"><div><div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">{product.brand}</div><h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">{product.name}</h2></div><CloseButton onClick={onClose} /></div>
      <div className="grid max-h-[78vh] overflow-y-auto border-t border-slate-200 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-square overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[520px]"><Image src={product.image} alt={`${product.brand} ${product.name}`} fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" style={{ objectPosition: product.imagePosition ?? "50% 50%" }} /><span className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-[10px] font-bold shadow-sm ${badgeStyle(product.badge)}`}>{product.badge}</span></div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs text-slate-500"><span className="flex items-center gap-1 font-semibold text-slate-900"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {product.rating}</span><span>{product.reviews.toLocaleString("en-IN")} reviews</span><span>·</span><span>{product.sold.toLocaleString("en-IN")} bought</span></div>
          <div className="mt-3 flex items-baseline gap-2"><span className="text-2xl font-bold">{money(product.price)}</span><span className="text-sm text-slate-400 line-through">{money(product.mrp)}</span></div>
          <p className="mt-1 text-xs text-slate-500">Free delivery · {product.delivery} · 7-day returns</p>
          <button onClick={onWhy} className="mt-5 w-full rounded-2xl border border-violet-200 bg-violet-50 p-4 text-left hover:border-violet-400"><div className="flex items-center justify-between"><span className="text-xs font-bold text-violet-900">Why this product appears here</span><span className="text-violet-700">→</span></div><div className="mt-1 text-[11px] leading-5 text-violet-700">{product.sponsored ? "Paid placement with a relevance check." : "Organic placement based on the selected ranking."} Matches {fit.matches.length} of {fit.checks.length} of your needs.</div></button>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3"><Spec label="Call quality" value={`${product.callScore}/5`} /><Spec label="Noise cancelling" value={`${product.ancScore}/5`} /><Spec label="Battery" value={`${product.battery} hours`} /><Spec label="Multipoint" value={product.multipoint ? "Yes" : "No"} /><Spec label="Low latency" value={product.lowLatency ? "Yes" : "No"} /><Spec label="Water resistance" value={product.waterResistance} /></div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4"><div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Other marketplace signals</div><div className="mt-3 grid grid-cols-2 gap-3 text-xs"><div><div className="text-slate-400">Return rate</div><div className="mt-1 font-semibold">{product.returnRate}%</div></div><div><div className="text-slate-400">Seller score</div><div className="mt-1 font-semibold">{product.sellerScore}/100</div></div></div></div>
          <div className="mt-6 grid grid-cols-[auto_1fr] gap-2"><button onClick={onSave} aria-label={saved ? "Remove from saved" : "Save product"} className={`grid h-12 w-12 place-items-center rounded-xl border ${saved ? "border-rose-200 bg-rose-50 text-rose-600" : "border-slate-200"}`}><Heart className={`h-5 w-5 ${saved ? "fill-current" : ""}`} /></button><button onClick={onAdd} className="rounded-xl bg-[#17211f] text-sm font-semibold text-white">Add to bag</button></div>
        </div>
      </div>
    </Modal>
  );
}

function NeedsPanel({ preferences, setPreferences, rankMode, setRankMode, onClose }: { preferences: Preferences; setPreferences: (preferences: Preferences) => void; rankMode: RankMode; setRankMode: (mode: RankMode) => void; onClose: () => void }) {
  const toggles: Array<[keyof Omit<Preferences, "budget">, string, string]> = [
    ["calls", "Clear calls", "Strong microphones for work and calls"],
    ["multipoint", "Multipoint", "Switch between phone and laptop"],
    ["anc", "Strong ANC", "Better noise reduction for commuting"],
    ["battery", "32h+ battery", "Longer total battery with the case"],
    ["gaming", "Low latency", "Faster audio response for games"],
  ];
  return (
    <Drawer title="What matters to you?" onClose={onClose}>
      <p className="text-sm leading-6 text-slate-500">These choices power “Best match for me.” Change them and the catalogue re-ranks immediately.</p>
      <div className="mt-5"><div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Budget</div><div className="mt-2 grid grid-cols-3 gap-2">{[8000, 12000, 16000].map((budget) => <button key={budget} onClick={() => setPreferences({ ...preferences, budget })} className={`rounded-xl border px-2 py-2.5 text-xs font-semibold ${preferences.budget === budget ? "border-violet-600 bg-violet-50 text-violet-800" : "border-slate-200"}`}>Under {money(budget)}</button>)}</div></div>
      <div className="mt-6 space-y-2">{toggles.map(([key, title, detail]) => <label key={key} className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-slate-200 p-3.5"><span><span className="block text-sm font-semibold">{title}</span><span className="mt-0.5 block text-[11px] text-slate-500">{detail}</span></span><input type="checkbox" checked={preferences[key]} onChange={() => setPreferences({ ...preferences, [key]: !preferences[key] })} className="h-5 w-5 shrink-0 accent-violet-700" /></label>)}</div>
      {rankMode !== "match" ? <button onClick={() => setRankMode("match")} className="mt-5 w-full rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-xs font-semibold text-violet-800">Use these needs to rank products</button> : null}
      <button onClick={onClose} className="mt-3 w-full rounded-xl bg-[#17211f] py-3 text-sm font-semibold text-white">Show my best options</button>
    </Drawer>
  );
}

function BagPanel({ bag, products: bagProducts, subtotal, onRemove, onAdd, onClose }: { bag: string[]; products: Product[]; subtotal: number; onRemove: (id: string) => void; onAdd: (product: Product) => void; onClose: () => void }) {
  return (
    <Drawer title={`Your bag · ${bag.length}`} onClose={onClose}>
      {bag.length ? <><div className="space-y-3">{bagProducts.map((product) => { const quantity = bag.filter((id) => id === product.id).length; return <div key={product.id} className="flex gap-3 rounded-2xl border border-slate-200 p-3"><div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100"><Image src={product.image} alt="" fill sizes="80px" className="object-cover" /></div><div className="min-w-0 flex-1"><div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{product.brand}</div><div className="mt-0.5 truncate text-sm font-semibold">{product.name}</div><div className="mt-1 text-xs font-semibold">{money(product.price)}</div><div className="mt-2 flex items-center gap-2"><button onClick={() => onRemove(product.id)} className="grid h-7 w-7 place-items-center rounded-full border border-slate-200" aria-label={`Remove one ${product.name}`}><Minus className="h-3 w-3" /></button><span className="text-xs">{quantity}</span><button onClick={() => onAdd(product)} className="grid h-7 w-7 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-700" aria-label={`Add one ${product.name}`}><Plus className="h-3 w-3" /></button></div></div></div>; })}</div><div className="mt-6 border-t border-slate-200 pt-4"><div className="flex items-center justify-between text-sm"><span className="text-slate-500">Subtotal</span><strong>{money(subtotal)}</strong></div><button onClick={onClose} className="mt-4 w-full rounded-xl bg-[#17211f] py-3 text-sm font-semibold text-white">Continue shopping</button><p className="mt-2 text-center text-[10px] text-slate-400">Checkout is outside this prototype.</p></div></> : <div className="grid min-h-[320px] place-items-center text-center"><div><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100"><ShoppingBag className="h-5 w-5 text-slate-500" /></div><h3 className="mt-4 font-semibold">Your bag is empty</h3><p className="mt-1 text-sm text-slate-500">Add an option to keep exploring the flow.</p></div></div>}
    </Drawer>
  );
}

function Filters({ priceFilter, setPriceFilter, features, toggleFeature, labelFilter, setLabelFilter, clear }: { priceFilter: PriceFilter; setPriceFilter: (value: PriceFilter) => void; features: FeatureFilter[]; toggleFeature: (feature: FeatureFilter) => void; labelFilter: Badge | "All"; setLabelFilter: (value: Badge | "All") => void; clear: () => void }) {
  const active = priceFilter !== "all" || features.length > 0 || labelFilter !== "All";
  const featureOptions: Array<[FeatureFilter, string]> = [["anc", "Strong ANC"], ["multipoint", "Multipoint"], ["calls", "Clear calls"], ["battery", "40h+ battery"], ["gaming", "Low latency"]];
  const labels: Array<Badge | "All"> = ["All", "Recommended", "Best Seller", "Top Rated", "Popular", "Sponsored", "Best Match"];
  return (
    <div>
      <div className="flex items-center justify-between"><h2 className="text-sm font-semibold">Filters</h2>{active ? <button onClick={clear} className="text-[10px] font-semibold text-violet-700">Clear all</button> : null}</div>
      <FilterGroup title="Price"><Radio checked={priceFilter === "all"} onChange={() => setPriceFilter("all")} label="All prices" /><Radio checked={priceFilter === "under8"} onChange={() => setPriceFilter("under8")} label="Under ₹8,000" /><Radio checked={priceFilter === "under12"} onChange={() => setPriceFilter("under12")} label="Under ₹12,000" /><Radio checked={priceFilter === "over12"} onChange={() => setPriceFilter("over12")} label="₹12,000 and above" /></FilterGroup>
      <FilterGroup title="Features">{featureOptions.map(([key, label]) => <Checkbox key={key} checked={features.includes(key)} onChange={() => toggleFeature(key)} label={label} />)}</FilterGroup>
      <FilterGroup title="Label"><div className="flex flex-wrap gap-1.5">{labels.map((label) => <button key={label} onClick={() => setLabelFilter(label)} className={`rounded-full border px-2.5 py-1.5 text-[9px] font-semibold ${labelFilter === label ? "border-violet-600 bg-violet-50 text-violet-800" : "border-slate-200 text-slate-500"}`}>{label}</button>)}</div></FilterGroup>
    </div>
  );
}

function Modal({ children, onClose, maxWidth }: { children: React.ReactNode; onClose: () => void; maxWidth: string }) {
  return <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/55 p-3 backdrop-blur-sm" onMouseDown={onClose}><div role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()} className={`w-full ${maxWidth} overflow-hidden rounded-3xl bg-white shadow-2xl`}>{children}</div></div>;
}

function Drawer({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return <div className="fixed inset-0 z-[70] flex justify-end bg-slate-950/50 backdrop-blur-sm" onMouseDown={onClose}><aside role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()} className="h-full w-full max-w-md overflow-y-auto bg-white p-5 shadow-2xl sm:p-6"><div className="flex items-center justify-between gap-4"><h2 className="text-xl font-semibold tracking-[-0.03em]">{title}</h2><CloseButton onClick={onClose} /></div><div className="mt-6">{children}</div></aside></div>;
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200" aria-label="Close"><X className="h-4 w-4" /></button>;
}

function CountBadge({ children }: { children: React.ReactNode }) {
  return <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-violet-700 px-1 text-[8px] font-bold text-white">{children}</span>;
}

function PriorityChip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1">{children}</span>;
}

function Feature({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-slate-100 px-2 py-1">{children}</span>;
}

function SignalCard({ label, value, tone }: { label: string; value: string; tone: "amber" | "violet" | "green" | "slate" }) {
  const styles = { amber: "border-amber-200 bg-amber-50 text-amber-900", violet: "border-violet-200 bg-violet-50 text-violet-900", green: "border-emerald-200 bg-emerald-50 text-emerald-900", slate: "border-slate-200 bg-slate-50 text-slate-900" };
  return <div className={`rounded-2xl border p-3 ${styles[tone]}`}><div className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-60">{label}</div><div className="mt-1 text-sm font-semibold">{value}</div></div>;
}

function ExplanationBlock({ label, text, warning = false }: { label: string; text: string; warning?: boolean }) {
  return <div className={`rounded-xl p-3 ${warning ? "bg-amber-50" : "bg-slate-50"}`}><div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">{warning ? <AlertTriangle className="h-3 w-3 text-amber-600" /> : null}{label}</div><p className="mt-1.5 text-[11px] leading-5 text-slate-700">{text}</p></div>;
}

function Spec({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl border border-slate-200 p-3"><div className="text-[9px] text-slate-400">{label}</div><div className="mt-1 text-xs font-semibold">{value}</div></div>;
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="mt-5 border-t border-slate-200 pt-4"><h3 className="mb-2 text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">{title}</h3><div className="space-y-1">{children}</div></div>;
}

function Radio({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return <label className="flex cursor-pointer items-center gap-2 rounded-lg py-1.5 text-xs text-slate-600"><input type="radio" checked={checked} onChange={onChange} className="h-4 w-4 accent-violet-700" />{label}</label>;
}

function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return <label className="flex cursor-pointer items-center gap-2 rounded-lg py-1.5 text-xs text-slate-600"><input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 accent-violet-700" />{label}</label>;
}
