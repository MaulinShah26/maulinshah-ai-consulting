"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Check,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Badge = "Recommended" | "Best Seller" | "Top Rated" | "Popular" | "Sponsored" | "Best Match";
type RankMode = "match" | "popular" | "rating" | "price";
type PriceFilter = "all" | "under8" | "under12" | "over12";
type FeatureFilter = "anc" | "multipoint" | "calls" | "battery" | "gaming";
type ProductType = "Over-ear" | "On-ear" | "In-ear" | "Open-ear" | "Neckband";
type NeedKey = "calls" | "multipoint" | "anc" | "battery" | "gaming" | "comfort" | "workout" | "overEar" | "inEar" | "openEar";

type Preferences = {
  budget: number | null;
  needs: NeedKey[];
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
  badge?: Badge;
  sponsored: boolean;
  image: string;
  productType: ProductType;
  description: string;
  color: string;
  callScore: number;
  ancScore: number;
  multipoint: boolean;
  battery: number;
  lowLatency: boolean;
  comfortScore: number;
  sportFit: boolean;
  waterResistance: string;
  delivery: string;
  returnRate: number;
  sellerScore: number;
  recommendationMix: string[];
};

const productImages = {
  overEarBlack: "/products/headphones/over-ear-black.webp",
  overEarIvory: "/products/headphones/over-ear-ivory.webp",
  overEarBurgundy: "/products/headphones/over-ear-burgundy.webp",
  overEarSage: "/products/headphones/over-ear-sage.webp",
  onEarCharcoal: "/products/headphones/on-ear-charcoal.webp",
  openEarPearl: "/products/headphones/open-ear-pearl.webp",
  neckbandBlack: "/products/headphones/neckband-black.webp",
  sportEarhookBlack: "/products/headphones/sport-earhook-black.webp",
  openEarBoneCharcoal: "/products/headphones/open-ear-bone-charcoal.webp",
  earbudsNavy: "/products/earbuds/aurora-navy.webp",
  earbudsWhite: "/products/earbuds/clarity-white.webp",
  earbudsSage: "/products/earbuds/rhythm-sage.webp",
  earbudsBurgundy: "/products/earbuds/volt-burgundy.webp",
} as const;

const products: Product[] = [
  { id: "p01", brand: "Auraloop", name: "Focus Pro", price: 10999, mrp: 14999, rating: 4.6, reviews: 2184, sold: 8200, badge: "Recommended", sponsored: false, image: productImages.overEarBlack, productType: "Over-ear", description: "Comfortable over-ear headphones with strong ANC, clear work calls and multipoint switching.", color: "Midnight", callScore: 5, ancScore: 5, multipoint: true, battery: 36, lowLatency: false, comfortScore: 5, sportFit: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 2.1, sellerScore: 96, recommendationMix: ["Strong match for your search", "High seller reliability", "Low return rate"] },
  { id: "p02", brand: "Kite Audio", name: "Air Mini 2", price: 5999, mrp: 7999, rating: 4.4, reviews: 4910, sold: 18400, badge: "Best Seller", sponsored: false, image: productImages.earbudsWhite, productType: "In-ear", description: "Compact in-ear earbuds for calls, commuting and easy switching between phone and laptop.", color: "Pearl", callScore: 4, ancScore: 3, multipoint: true, battery: 28, lowLatency: false, comfortScore: 4, sportFit: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 3.7, sellerScore: 94, recommendationMix: ["Highest unit sales in this category", "Available for next-day delivery", "Frequent repeat purchase"] },
  { id: "p03", brand: "Sona Labs", name: "Clarity One", price: 12999, mrp: 16999, rating: 4.8, reviews: 782, sold: 3900, badge: "Top Rated", sponsored: false, image: productImages.overEarIvory, productType: "Over-ear", description: "Lightweight over-ear design with clear microphones, balanced sound and all-day comfort.", color: "Pearl", callScore: 5, ancScore: 4, multipoint: true, battery: 34, lowLatency: false, comfortScore: 5, sportFit: false, waterResistance: "IPX4", delivery: "2 days", returnRate: 1.8, sellerScore: 98, recommendationMix: ["Highest verified-buyer rating", "Strong call quality feedback", "Consistent recent reviews"] },
  { id: "p04", brand: "Vektor", name: "Play Neo", price: 8999, mrp: 11999, rating: 4.3, reviews: 1740, sold: 7100, badge: "Sponsored", sponsored: true, image: productImages.overEarBlack, productType: "Over-ear", description: "Low-latency over-ear wireless headphones for gaming with long battery life.", color: "Black", callScore: 4, ancScore: 4, multipoint: false, battery: 40, lowLatency: true, comfortScore: 4, sportFit: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 4.2, sellerScore: 91, recommendationMix: ["Seller paid for placement", "Meets the relevance threshold", "Strong gaming feature match"] },
  { id: "p05", brand: "Nimbo", name: "Everyday ANC", price: 7499, mrp: 9999, rating: 4.2, reviews: 3290, sold: 12600, sponsored: false, image: productImages.earbudsNavy, productType: "In-ear", description: "Small in-ear earbuds with noise cancellation and multipoint for everyday commuting.", color: "Ink", callScore: 3, ancScore: 4, multipoint: true, battery: 32, lowLatency: false, comfortScore: 4, sportFit: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 5.1, sellerScore: 90, recommendationMix: ["Good feature relevance", "High add-to-bag rate", "Discount is driving attention"] },
  { id: "p06", brand: "Auraloop", name: "Workday Max", price: 8499, mrp: 10999, rating: 4.5, reviews: 1264, sold: 5400, badge: "Best Match", sponsored: false, image: productImages.overEarSage, productType: "Over-ear", description: "Comfortable over-ear headphones built for meetings, clear calls and switching devices.", color: "Moss", callScore: 5, ancScore: 4, multipoint: true, battery: 38, lowLatency: false, comfortScore: 5, sportFit: false, waterResistance: "IPX4", delivery: "2 days", returnRate: 2.4, sellerScore: 97, recommendationMix: ["Matches your declared priorities", "Inside your budget", "No paid placement"] },
  { id: "p07", brand: "Kite Audio", name: "Bass Loop", price: 4499, mrp: 6499, rating: 4.1, reviews: 6480, sold: 22300, sponsored: false, image: productImages.neckbandBlack, productType: "Neckband", description: "Secure neckband earphones for running and workouts with sweat resistance and punchy bass.", color: "Black", callScore: 3, ancScore: 2, multipoint: false, battery: 30, lowLatency: true, comfortScore: 3, sportFit: true, waterResistance: "IPX6", delivery: "Tomorrow", returnRate: 6.4, sellerScore: 89, recommendationMix: ["Strong price relevance", "Secure workout fit", "Broad entry-level appeal"] },
  { id: "p08", brand: "Sona Labs", name: "Quiet Form", price: 15999, mrp: 19999, rating: 4.7, reviews: 1106, sold: 4700, sponsored: false, image: productImages.overEarBurgundy, productType: "Over-ear", description: "Premium over-ear headphones with powerful ANC, soft cushions and long-flight comfort.", color: "Burgundy", callScore: 5, ancScore: 5, multipoint: true, battery: 42, lowLatency: false, comfortScore: 5, sportFit: false, waterResistance: "IPX4", delivery: "3 days", returnRate: 1.6, sellerScore: 98, recommendationMix: ["Strongest ANC score", "Excellent verified reviews", "Lowest return rate"] },
  { id: "p09", brand: "Vektor", name: "Commute X", price: 11999, mrp: 14999, rating: 4.4, reviews: 950, sold: 4300, badge: "Sponsored", sponsored: true, image: productImages.overEarBlack, productType: "Over-ear", description: "Over-ear commuter headphones with strong noise cancellation, calls and multipoint.", color: "Graphite", callScore: 4, ancScore: 5, multipoint: true, battery: 30, lowLatency: false, comfortScore: 4, sportFit: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 3.9, sellerScore: 92, recommendationMix: ["Seller paid for placement", "Matches common commuter needs", "In stock near you"] },
  { id: "p10", brand: "Morrow", name: "Studio Air", price: 13999, mrp: 17999, rating: 4.6, reviews: 680, sold: 2800, sponsored: false, image: productImages.onEarCharcoal, productType: "On-ear", description: "Lightweight on-ear headphones with balanced audio, low latency and multipoint.", color: "Charcoal", callScore: 4, ancScore: 3, multipoint: true, battery: 35, lowLatency: true, comfortScore: 4, sportFit: false, waterResistance: "IPX4", delivery: "2 days", returnRate: 2.8, sellerScore: 95, recommendationMix: ["Similar shoppers kept this item", "Balanced feature set", "Low return rate"] },
  { id: "p11", brand: "Nimbo", name: "Pocket Air", price: 3999, mrp: 5499, rating: 4.0, reviews: 7860, sold: 20800, badge: "Popular", sponsored: false, image: productImages.earbudsSage, productType: "In-ear", description: "Compact in-ear earbuds for music and casual calls at an entry-level price.", color: "White", callScore: 3, ancScore: 1, multipoint: false, battery: 24, lowLatency: false, comfortScore: 3, sportFit: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 7.2, sellerScore: 87, recommendationMix: ["High traffic this week", "Low price drives clicks", "Often compared with sale products"] },
  { id: "p12", brand: "Morrow", name: "Link Duo Max", price: 9999, mrp: 12999, rating: 4.5, reviews: 1430, sold: 6700, sponsored: false, image: productImages.overEarIvory, productType: "Over-ear", description: "Comfortable work headphones with excellent calls, ANC, multipoint and 40-hour battery.", color: "Cloud", callScore: 5, ancScore: 4, multipoint: true, battery: 40, lowLatency: true, comfortScore: 5, sportFit: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 2.5, sellerScore: 96, recommendationMix: ["Matches work and travel needs", "Inside your budget", "No payment influenced rank"] },
  { id: "p13", brand: "Auraloop", name: "Halo Clip", price: 6799, mrp: 8999, rating: 4.3, reviews: 2480, sold: 9400, sponsored: false, image: productImages.openEarPearl, productType: "Open-ear", description: "Open-ear clip headphones that keep surroundings audible during walking and office use.", color: "Pearl", callScore: 4, ancScore: 1, multipoint: true, battery: 34, lowLatency: false, comfortScore: 4, sportFit: true, waterResistance: "IPX5", delivery: "2 days", returnRate: 4.1, sellerScore: 93, recommendationMix: ["Relevant to open-ear searches", "Good value for the feature mix", "Reliable availability"] },
  { id: "p14", brand: "Kite Audio", name: "Game Arc", price: 7999, mrp: 10499, rating: 4.4, reviews: 1990, sold: 8900, badge: "Sponsored", sponsored: true, image: productImages.overEarBlack, productType: "Over-ear", description: "Wireless gaming over-ear headphones with low latency and a 45-hour battery.", color: "Black", callScore: 3, ancScore: 3, multipoint: false, battery: 45, lowLatency: true, comfortScore: 4, sportFit: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 4.8, sellerScore: 90, recommendationMix: ["Seller paid for placement", "Strong latency match", "High stock availability"] },
  { id: "p15", brand: "Sona Labs", name: "Voice Clear", price: 11499, mrp: 13999, rating: 4.7, reviews: 870, sold: 3600, sponsored: false, image: productImages.earbudsBurgundy, productType: "In-ear", description: "In-ear earbuds tuned for calls with strong microphones, ANC and multipoint.", color: "Black", callScore: 5, ancScore: 4, multipoint: true, battery: 31, lowLatency: false, comfortScore: 4, sportFit: false, waterResistance: "IPX4", delivery: "2 days", returnRate: 1.9, sellerScore: 97, recommendationMix: ["Top call-quality feedback", "Strong query relevance", "High seller reliability"] },
  { id: "p16", brand: "Vektor", name: "Motion Hook", price: 5499, mrp: 7499, rating: 4.2, reviews: 4150, sold: 15100, sponsored: false, image: productImages.sportEarhookBlack, productType: "In-ear", description: "Secure sport ear-hook earbuds for running, workouts and low-latency audio.", color: "Black", callScore: 3, ancScore: 2, multipoint: true, battery: 37, lowLatency: true, comfortScore: 3, sportFit: true, waterResistance: "IPX6", delivery: "Tomorrow", returnRate: 5.9, sellerScore: 88, recommendationMix: ["Strong workout fit", "High add-to-bag rate", "Recent price drop"] },
  { id: "p17", brand: "Morrow", name: "Calm Studio", price: 9299, mrp: 11999, rating: 4.5, reviews: 1210, sold: 4900, sponsored: false, image: productImages.overEarSage, productType: "Over-ear", description: "Soft over-ear headphones with strong ANC, multipoint and comfortable cushions.", color: "Sage", callScore: 4, ancScore: 5, multipoint: true, battery: 36, lowLatency: false, comfortScore: 5, sportFit: false, waterResistance: "IPX4", delivery: "2 days", returnRate: 2.7, sellerScore: 96, recommendationMix: ["Strong needs match", "Better ANC at this price", "No paid placement"] },
  { id: "p18", brand: "Nimbo", name: "Pods Loop", price: 3499, mrp: 4999, rating: 4.1, reviews: 9200, sold: 26000, badge: "Best Seller", sponsored: false, image: productImages.neckbandBlack, productType: "Neckband", description: "Affordable neckband earphones with a secure workout fit and sweat resistance.", color: "Black", callScore: 3, ancScore: 1, multipoint: false, battery: 22, lowLatency: false, comfortScore: 3, sportFit: true, waterResistance: "IPX5", delivery: "Tomorrow", returnRate: 8.1, sellerScore: 86, recommendationMix: ["Most units sold", "Lowest entry price", "Broad availability"] },
  { id: "p19", brand: "Auraloop", name: "Deep Quiet", price: 17999, mrp: 21999, rating: 4.8, reviews: 540, sold: 2100, sponsored: false, image: productImages.overEarBurgundy, productType: "Over-ear", description: "Premium over-ear headphones with maximum ANC, clear calls and 46-hour battery.", color: "Burgundy", callScore: 5, ancScore: 5, multipoint: true, battery: 46, lowLatency: true, comfortScore: 5, sportFit: false, waterResistance: "IPX4", delivery: "3 days", returnRate: 1.4, sellerScore: 99, recommendationMix: ["Highest satisfaction score", "Premium feature coverage", "Very low return rate"] },
  { id: "p20", brand: "Kite Audio", name: "Metro Lite", price: 10499, mrp: 13499, rating: 4.4, reviews: 1520, sold: 6100, sponsored: false, image: productImages.onEarCharcoal, productType: "On-ear", description: "Lightweight on-ear headphones for commuting, calls and easy multipoint switching.", color: "Charcoal", callScore: 4, ancScore: 3, multipoint: true, battery: 33, lowLatency: false, comfortScore: 4, sportFit: false, waterResistance: "IPX4", delivery: "Tomorrow", returnRate: 3.2, sellerScore: 94, recommendationMix: ["Good query relevance", "Often chosen in this price range", "Dependable seller score"] },
  { id: "p21", brand: "Sona Labs", name: "Sync Open", price: 12499, mrp: 15999, rating: 4.6, reviews: 910, sold: 4100, sponsored: false, image: productImages.openEarPearl, productType: "Open-ear", description: "Open-ear clip headphones for calls and workouts while keeping surroundings audible.", color: "Pearl", callScore: 5, ancScore: 1, multipoint: true, battery: 39, lowLatency: true, comfortScore: 4, sportFit: true, waterResistance: "IPX5", delivery: "2 days", returnRate: 2.0, sellerScore: 98, recommendationMix: ["Matches open-ear searches", "Strong call quality", "No payment influenced rank"] },
  { id: "p22", brand: "Vektor", name: "Rush Sport", price: 6999, mrp: 9499, rating: 4.2, reviews: 2750, sold: 11200, badge: "Sponsored", sponsored: true, image: productImages.sportEarhookBlack, productType: "In-ear", description: "Sport ear-hook earbuds for running with sweat resistance, ANC and low latency.", color: "Black", callScore: 3, ancScore: 4, multipoint: false, battery: 41, lowLatency: true, comfortScore: 3, sportFit: true, waterResistance: "IPX6", delivery: "Tomorrow", returnRate: 5.4, sellerScore: 89, recommendationMix: ["Seller paid for placement", "Price and workout fit are relevant", "High campaign budget"] },
  { id: "p23", brand: "Morrow", name: "Daylong Open", price: 8999, mrp: 11499, rating: 4.5, reviews: 1680, sold: 7200, sponsored: false, image: productImages.openEarBoneCharcoal, productType: "Open-ear", description: "Open-ear sport headphones with a stable fit and 48-hour battery life.", color: "Graphite", callScore: 4, ancScore: 1, multipoint: true, battery: 48, lowLatency: false, comfortScore: 4, sportFit: true, waterResistance: "IPX5", delivery: "Tomorrow", returnRate: 3.4, sellerScore: 95, recommendationMix: ["Strong battery match", "Stable workout fit", "Strong availability"] },
  { id: "p24", brand: "Nimbo", name: "Daily Move", price: 6499, mrp: 8499, rating: 4.3, reviews: 3070, sold: 10100, sponsored: false, image: productImages.openEarBoneCharcoal, productType: "Open-ear", description: "Light open-ear headphones for walking, everyday calls and awareness outdoors.", color: "Graphite", callScore: 4, ancScore: 1, multipoint: true, battery: 30, lowLatency: false, comfortScore: 4, sportFit: true, waterResistance: "IPX5", delivery: "2 days", returnRate: 4.6, sellerScore: 92, recommendationMix: ["Strong match for outdoor use", "Inside your usual price range", "Consistent stock"] },
];

const labelLogic: Record<Badge, { means: string; optimizedFor: string; canBeDistortedBy: string; doesNotMean: string }> = {
  Sponsored: {
    means: "The seller paid for a chance to appear in a promoted position. The product still had to pass a basic relevance check.",
    optimizedFor: "Paid visibility and the likelihood of a sale.",
    canBeDistortedBy: "Seller budget, campaign bids and the platform's conversion target.",
    doesNotMean: "Best product, best value or best fit for you.",
  },
  "Best Seller": {
    means: "One of the highest unit-selling products in wireless headphones during the last 30 days.",
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

const needOptions: Record<NeedKey, { label: string; detail: string; matches: (product: Product) => boolean }> = {
  calls: { label: "Clear calls", detail: "Good microphones for work and meetings", matches: (product) => product.callScore >= 4 && /call|meeting|work|microphone/.test(product.description.toLowerCase()) },
  multipoint: { label: "Multipoint", detail: "Switch between phone and laptop", matches: (product) => product.multipoint && /multipoint|switch/.test(product.description.toLowerCase()) },
  anc: { label: "Strong ANC", detail: "Reduce noise while commuting or travelling", matches: (product) => product.ancScore >= 4 && /anc|noise cancellation/.test(product.description.toLowerCase()) },
  battery: { label: "32h+ battery", detail: "Long battery life for full-day use", matches: (product) => product.battery >= 32 },
  gaming: { label: "Low latency", detail: "Faster audio response for games", matches: (product) => product.lowLatency && /gaming|low.latency/.test(product.description.toLowerCase()) },
  comfort: { label: "Comfortable for long use", detail: "Lightweight or cushioned for long sessions", matches: (product) => product.comfortScore >= 4 && /comfort|lightweight|soft/.test(product.description.toLowerCase()) },
  workout: { label: "Secure for workouts", detail: "Stable fit with sweat resistance", matches: (product) => product.sportFit && /workout|running|sport|walking|outdoor/.test(product.description.toLowerCase()) },
  overEar: { label: "Over-ear", detail: "Full-size headphones around the ears", matches: (product) => product.productType === "Over-ear" },
  inEar: { label: "In-ear", detail: "Compact earbuds worn inside the ear", matches: (product) => product.productType === "In-ear" },
  openEar: { label: "Open-ear", detail: "Keep awareness of your surroundings", matches: (product) => product.productType === "Open-ear" },
};

const suggestedNeeds: NeedKey[] = ["calls", "anc", "multipoint", "battery", "comfort", "workout", "gaming", "overEar", "inEar", "openEar"];

const defaultPreferences: Preferences = {
  budget: 12000,
  needs: ["calls", "multipoint", "anc", "battery"],
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
    ...(preferences.budget ? [{ label: `Under ${money(preferences.budget)}`, pass: product.price <= preferences.budget }] : []),
    ...preferences.needs.map((need) => ({ label: needOptions[need].label, pass: needOptions[need].matches(product) })),
  ];
  const matches = checks.filter((check) => check.pass);
  const misses = checks.filter((check) => !check.pass);
  const needScore = checks.length ? matches.length / checks.length : 0.5;
  const score = Math.round(needScore * 90 + (product.rating / 5) * 10);
  return { checks, matches, misses, score: Math.min(100, score) };
}

function extractPreferences(input: string) {
  const normalized = input.toLowerCase();
  const needs = new Set<NeedKey>();
  const keywordGroups: Array<[NeedKey, RegExp]> = [
    ["calls", /\b(call|calls|meeting|meetings|microphone|mic|office|work)\b/],
    ["multipoint", /\b(multipoint|multiple devices?|two devices?|phone and laptop|switch devices?)\b/],
    ["anc", /\b(anc|noise cancellation|noise cancelling|commute|commuting|flight|travel)\b/],
    ["battery", /\b(battery|long lasting|long-lasting|all day|full day)\b/],
    ["gaming", /\b(gaming|games?|low latency|lag)\b/],
    ["comfort", /\b(comfort|comfortable|lightweight|long hours?|soft cushions?)\b/],
    ["workout", /\b(workout|gym|running|run|sport|exercise|sweat|walking)\b/],
    ["overEar", /\b(over ear|over-ear|headband|full size|full-size)\b/],
    ["inEar", /\b(in ear|in-ear|earbuds?|compact buds?)\b/],
    ["openEar", /\b(open ear|open-ear|bone conduction|surroundings|awareness)\b/],
  ];
  keywordGroups.forEach(([key, pattern]) => {
    if (pattern.test(normalized)) needs.add(key);
  });

  const budgetMatch = normalized.match(/(?:under|below|within|up to|budget(?: of| is| around)?)[^\d]{0,12}(?:₹|rs\.?|inr)?\s*([\d,.]+)\s*(k)?/) ?? normalized.match(/(?:₹|rs\.?|inr)\s*([\d,.]+)\s*(k)?/);
  const budgetNumber = budgetMatch ? Number(budgetMatch[1].replace(/[,]/g, "")) * (budgetMatch[2] ? 1000 : 1) : null;
  const budget = budgetNumber && budgetNumber >= 1000 && budgetNumber <= 100000 ? Math.round(budgetNumber) : null;
  return { needs: Array.from(needs), budget };
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
      if (query && !`${product.brand} ${product.name} ${product.badge ?? ""} ${product.color} ${product.productType} ${product.description}`.toLowerCase().includes(query)) return false;
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

  function removeNeed(need: NeedKey) {
    setPreferences((current) => ({ ...current, needs: current.needs.filter((item) => item !== need) }));
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

  const needsChanged = preferences.budget !== defaultPreferences.budget || preferences.needs.join("|") !== defaultPreferences.needs.join("|");
  const hasChanges = search || activeFilterCount > 0 || savedOnly || rankMode !== "match" || needsChanged;

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-[#17211f]">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-[1500px] items-center gap-3 px-4 sm:px-6">
          <div className="flex shrink-0 items-center gap-2 text-[15px] font-semibold tracking-[-0.02em]">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#17211f] text-xs text-white">A</span>
            <span>Arc Audio</span>
            <span className="hidden rounded-full border border-violet-200 bg-violet-50 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-violet-700 sm:inline-flex">Prototype</span>
          </div>
          <label className="mx-auto hidden w-full max-w-2xl md:block">
            <span className="sr-only">Search wireless headphones</span>
            <span className="relative block">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search wireless headphones" className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100" />
            </span>
          </label>
          <div className="ml-auto flex items-center gap-1">
            <Link href="/contact" className="mr-1 inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-[#17211f] px-3 py-2.5 text-[10px] font-semibold text-white transition hover:bg-violet-800 sm:px-4"><span className="hidden xl:inline">Want to discuss this? Talk to me</span><span className="xl:hidden">Talk to me</span><span aria-hidden="true">→</span></Link>
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
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search wireless headphones" className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-violet-400" />
          </label>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">Wireless headphones</h1>
              <span className="text-xs text-slate-500">24 products</span>
            </div>
            <p className="mt-1 max-w-3xl text-xs leading-5 text-slate-500 sm:text-sm">Some products carry a marketplace label; many do not. Open any product explanation to see its placement and how it fits your needs.</p>
          </div>

          <div className="mt-4 grid gap-4 rounded-2xl border border-slate-200 bg-[#fbfbfd] p-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
              <div className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-100 text-violet-700 sm:grid"><Check className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Your needs</div>
                  <button onClick={() => setShowNeeds(true)} className="text-[10px] font-semibold text-violet-700 underline decoration-violet-200 underline-offset-4 hover:text-violet-900">Edit needs</button>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                  {preferences.budget ? <PriorityChip removeLabel={`Under ${money(preferences.budget)}`} onRemove={() => setPreferences((current) => ({ ...current, budget: null }))}>Under {money(preferences.budget)}</PriorityChip> : null}
                  {preferences.needs.map((need) => <PriorityChip key={need} removeLabel={needOptions[need].label} onRemove={() => removeNeed(need)}>{needOptions[need].label}</PriorityChip>)}
                  <button onClick={() => setShowNeeds(true)} className="rounded-full border border-dashed border-violet-300 bg-violet-50 px-2.5 py-1 font-semibold text-violet-700 hover:border-violet-500">+ Add need</button>
                </div>
              </div>
            </div>
            <div className="min-w-0 border-t border-slate-200 pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Rank products by</span>
                {(Object.keys(rankCopy) as RankMode[]).map((mode) => <button key={mode} onClick={() => setRankMode(mode)} className={`shrink-0 rounded-full px-3 py-2.5 text-[11px] font-semibold transition ${rankMode === mode ? "bg-violet-700 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-violet-300"}`}>{rankCopy[mode].label}</button>)}
              </div>
              <p className="mt-2 text-[10px] leading-4 text-slate-500"><span className="font-semibold text-slate-700">Optimized for {rankCopy[rankMode].optimized}.</span> {rankCopy[rankMode].detail}</p>
            </div>
          </div>
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
                return <ProductCard key={product.id} product={product} index={index} fit={fit} saved={saved.includes(product.id)} onSave={() => toggleSaved(product.id)} onWhy={() => setReasonId(product.id)} onDetails={() => setDetailId(product.id)} onAdd={() => addToBag(product)} />;
              })}
            </div>
          ) : (
            <div className="grid min-h-[420px] place-items-center rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <div><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100"><Search className="h-5 w-5 text-slate-500" /></div><h2 className="mt-4 text-lg font-semibold">No headphones match these filters</h2><p className="mt-2 text-sm text-slate-500">Clear a filter or reset the catalogue to see all 24 products.</p><button onClick={resetAll} className="mt-4 rounded-full bg-[#17211f] px-4 py-2.5 text-xs font-semibold text-white">Show all products</button></div>
            </div>
          )}
        </section>
      </div>

      <section className="mx-auto max-w-[1500px] px-4 pb-8 sm:px-6">
        <div className="grid gap-6 overflow-hidden rounded-3xl bg-[#17211f] px-6 py-7 text-white shadow-[0_20px_60px_rgba(23,33,31,0.16)] sm:px-8 sm:py-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-violet-300">For ecommerce and marketplace teams</div>
            <h2 className="mt-2 max-w-3xl text-xl font-semibold tracking-[-0.03em] sm:text-2xl">Customers should not have to decode why a product is being pushed.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">I help teams redesign product discovery so recommendations balance customer fit, commercial goals and clear evidence.</p>
          </div>
          <div className="lg:text-right">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#17211f] transition hover:bg-violet-100">Want to discuss this? Talk to me <span aria-hidden="true">→</span></Link>
            <p className="mt-2 text-[10px] text-slate-400">Strategy, product design and implementation support.</p>
          </div>
        </div>
      </section>

      {reasonProduct ? <WhyPanel product={reasonProduct} preferences={preferences} onClose={() => setReasonId(null)} onAdd={() => addToBag(reasonProduct)} /> : null}
      {detailProduct ? <ProductDetails product={detailProduct} preferences={preferences} saved={saved.includes(detailProduct.id)} onClose={() => setDetailId(null)} onSave={() => toggleSaved(detailProduct.id)} onWhy={() => { setDetailId(null); setReasonId(detailProduct.id); }} onAdd={() => addToBag(detailProduct)} /> : null}
      {showNeeds ? <NeedsPanel preferences={preferences} setPreferences={setPreferences} rankMode={rankMode} setRankMode={setRankMode} onClose={() => setShowNeeds(false)} /> : null}
      {showFilters ? <Drawer title="Filters" onClose={() => setShowFilters(false)}><Filters priceFilter={priceFilter} setPriceFilter={setPriceFilter} features={features} toggleFeature={toggleFeature} labelFilter={labelFilter} setLabelFilter={setLabelFilter} clear={() => { setPriceFilter("all"); setFeatures([]); setLabelFilter("All"); }} /><button onClick={() => setShowFilters(false)} className="mt-6 w-full rounded-xl bg-[#17211f] py-3 text-sm font-semibold text-white">Show {visibleProducts.length} results</button></Drawer> : null}
      {showBag ? <BagPanel bag={bag} products={bagProducts} subtotal={bagSubtotal} onRemove={removeOneFromBag} onAdd={addToBag} onClose={() => setShowBag(false)} /> : null}
      {toast ? <div role="status" className="fixed bottom-5 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-[#17211f] px-4 py-2.5 text-xs font-semibold text-white shadow-xl">{toast}</div> : null}
    </main>
  );
}

function ProductCard({ product, index, fit, saved, onSave, onWhy, onDetails, onAdd }: { product: Product; index: number; fit: ReturnType<typeof getFit>; saved: boolean; onSave: () => void; onWhy: () => void; onDetails: () => void; onAdd: () => void }) {
  const discount = Math.round((1 - product.price / product.mrp) * 100);
  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(23,33,31,0.08)]">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <CatalogueProductImage product={product} priority={index < 4} />
        {product.badge ? <span className={`absolute left-3 top-3 rounded-full border px-2.5 py-1.5 text-[9px] font-bold shadow-sm ${badgeStyle(product.badge)}`}>{product.badge}</span> : null}
        <button onClick={onSave} aria-label={saved ? `Remove ${product.name} from saved` : `Save ${product.name}`} className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border shadow-sm transition ${saved ? "border-rose-200 bg-rose-50 text-rose-600" : "border-white bg-white/95 text-slate-600 hover:text-rose-600"}`}><Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} /></button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">{product.brand} · {product.productType} · {product.color}</div>
        <h2 className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-slate-900">{product.name}</h2>
        <p className="mt-1 line-clamp-2 min-h-8 text-[10px] leading-4 text-slate-500">{product.description}</p>
        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-500"><span className="flex items-center gap-0.5 font-semibold text-slate-800"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {product.rating.toFixed(1)}</span><span>({product.reviews.toLocaleString("en-IN")})</span><span>· {product.sold >= 1000 ? `${(product.sold / 1000).toFixed(1)}k` : product.sold} bought</span></div>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1"><span className="text-lg font-bold tracking-[-0.03em]">{money(product.price)}</span><span className="text-[10px] text-slate-400 line-through">{money(product.mrp)}</span><span className="text-[10px] font-semibold text-emerald-700">{discount}% off</span></div>
        <div className="mt-1 text-[10px] text-slate-500">Free delivery · {product.delivery}</div>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[9px] text-slate-600"><Feature>{product.battery}h battery</Feature>{product.ancScore >= 4 ? <Feature>Strong ANC</Feature> : null}{product.multipoint ? <Feature>Multipoint</Feature> : null}{product.lowLatency ? <Feature>Low latency</Feature> : null}</div>
        <button onClick={onWhy} aria-label={product.badge ? `Explain ${product.badge} label for ${product.name}` : `Explain why ${product.name} appears`} className="mt-3 flex w-full items-center justify-between gap-3 rounded-xl border border-violet-200 bg-violet-50 px-3 py-2.5 text-left transition hover:border-violet-400 hover:bg-violet-100">
          <span><span className="block text-[10px] font-bold text-violet-900">{product.badge ? `Explain ${product.badge}` : "Why this result?"}</span><span className="mt-0.5 block text-[9px] text-violet-700">{product.sponsored ? "Paid placement" : "Organic result"} · {fit.checks.length ? `${fit.matches.length}/${fit.checks.length} needs matched` : "No needs set"}</span></span>
          <span className="text-sm text-violet-700" aria-hidden="true">→</span>
        </button>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-4"><button onClick={onDetails} className="rounded-xl border border-slate-200 py-2.5 text-[10px] font-semibold text-slate-700 transition hover:border-slate-400">View details</button><button onClick={onAdd} className="rounded-xl bg-[#17211f] py-2.5 text-[10px] font-semibold text-white transition hover:bg-violet-800">Add to bag</button></div>
      </div>
    </article>
  );
}

function CatalogueProductImage({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Image
      src={product.image}
      alt={`${product.brand} ${product.name} ${product.productType.toLowerCase()} wireless headphones`}
      fill
      sizes="(min-width: 1536px) 280px, (min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
      priority={priority}
      quality={90}
      className="object-cover"
    />
  );
}

function WhyPanel({ product, preferences, onClose, onAdd }: { product: Product; preferences: Preferences; onClose: () => void; onAdd: () => void }) {
  const fit = getFit(product, preferences);
  const logic = product.badge ? labelLogic[product.badge] : null;
  return (
    <Modal onClose={onClose} maxWidth="max-w-3xl">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5 sm:p-6">
        <div><div className="text-[10px] font-bold uppercase tracking-[0.15em] text-violet-700">Why you are seeing this</div><h2 className="mt-1 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">{product.brand} {product.name}</h2><p className="mt-1 text-xs text-slate-500">The badge, placement and fit are separate signals. A product may appear without a badge.</p></div>
        <CloseButton onClick={onClose} />
      </div>
      <div className="max-h-[78vh] overflow-y-auto p-5 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <SignalCard label="Badge" value={product.badge ?? "No badge"} tone={product.sponsored ? "amber" : product.badge ? "violet" : "slate"} />
          <SignalCard label="Placement" value={product.sponsored ? "Paid" : "Organic"} tone={product.sponsored ? "amber" : "green"} />
          <SignalCard label="Your fit" value={`${fit.matches.length} of ${fit.checks.length} needs`} tone={fit.misses.length <= 1 ? "green" : "slate"} />
        </div>

        {logic && product.badge ? (
          <section className="mt-5 rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center gap-2"><span className={`rounded-full border px-2.5 py-1 text-[9px] font-bold ${badgeStyle(product.badge)}`}>{product.badge}</span><h3 className="text-sm font-semibold">What this badge actually means</h3></div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{logic.means}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ExplanationBlock label="Optimized for" text={logic.optimizedFor} />
              <ExplanationBlock label="What can shape it" text={logic.canBeDistortedBy} warning />
            </div>
            <div className="mt-3 rounded-xl bg-slate-100 px-3 py-2.5 text-[11px] text-slate-600"><strong className="text-slate-900">It does not mean:</strong> {logic.doesNotMean}</div>
          </section>
        ) : (
          <section className="mt-5 rounded-2xl border border-slate-200 p-4">
            <h3 className="text-sm font-semibold">Why there is no badge</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">This is a regular catalogue result. It has no “Best Seller,” “Top Rated” or other marketplace claim attached to it, but its position is still shaped by the ranking mode you selected.</p>
          </section>
        )}

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
      <div className="flex items-start justify-between gap-4 p-5 sm:p-6"><div><div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">{product.brand} · {product.productType}</div><h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">{product.name}</h2></div><CloseButton onClick={onClose} /></div>
      <div className="grid max-h-[78vh] overflow-y-auto border-t border-slate-200 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-square overflow-hidden bg-slate-100"><CatalogueProductImage product={product} />{product.badge ? <span className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-[10px] font-bold shadow-sm ${badgeStyle(product.badge)}`}>{product.badge}</span> : null}</div>
        <div className="p-5 sm:p-6">
          <p className="text-sm leading-6 text-slate-600">{product.description}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500"><span className="flex items-center gap-1 font-semibold text-slate-900"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {product.rating}</span><span>{product.reviews.toLocaleString("en-IN")} reviews</span><span>·</span><span>{product.sold.toLocaleString("en-IN")} bought</span></div>
          <div className="mt-3 flex items-baseline gap-2"><span className="text-2xl font-bold">{money(product.price)}</span><span className="text-sm text-slate-400 line-through">{money(product.mrp)}</span></div>
          <p className="mt-1 text-xs text-slate-500">Free delivery · {product.delivery} · 7-day returns</p>
          <button onClick={onWhy} className="mt-5 w-full rounded-2xl border border-violet-200 bg-violet-50 p-4 text-left hover:border-violet-400"><div className="flex items-center justify-between"><span className="text-xs font-bold text-violet-900">{product.badge ? `Explain ${product.badge}` : "Why this product appears here"}</span><span className="text-violet-700">→</span></div><div className="mt-1 text-[11px] leading-5 text-violet-700">{product.sponsored ? "Paid placement with a relevance check." : "Organic placement based on the selected ranking."} Matches {fit.matches.length} of {fit.checks.length} of your needs.</div></button>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3"><Spec label="Call quality" value={`${product.callScore}/5`} /><Spec label="Noise cancelling" value={`${product.ancScore}/5`} /><Spec label="Battery" value={`${product.battery} hours`} /><Spec label="Multipoint" value={product.multipoint ? "Yes" : "No"} /><Spec label="Low latency" value={product.lowLatency ? "Yes" : "No"} /><Spec label="Water resistance" value={product.waterResistance} /></div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4"><div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Other marketplace signals</div><div className="mt-3 grid grid-cols-2 gap-3 text-xs"><div><div className="text-slate-400">Return rate</div><div className="mt-1 font-semibold">{product.returnRate}%</div></div><div><div className="text-slate-400">Seller score</div><div className="mt-1 font-semibold">{product.sellerScore}/100</div></div></div></div>
          <div className="mt-6 grid grid-cols-[auto_1fr] gap-2"><button onClick={onSave} aria-label={saved ? "Remove from saved" : "Save product"} className={`grid h-12 w-12 place-items-center rounded-xl border ${saved ? "border-rose-200 bg-rose-50 text-rose-600" : "border-slate-200"}`}><Heart className={`h-5 w-5 ${saved ? "fill-current" : ""}`} /></button><button onClick={onAdd} className="rounded-xl bg-[#17211f] text-sm font-semibold text-white">Add to bag</button></div>
        </div>
      </div>
    </Modal>
  );
}

function NeedsPanel({ preferences, setPreferences, rankMode, setRankMode, onClose }: { preferences: Preferences; setPreferences: (preferences: Preferences) => void; rankMode: RankMode; setRankMode: (mode: RankMode) => void; onClose: () => void }) {
  const [request, setRequest] = useState("");
  const [message, setMessage] = useState("");

  function addNeed(need: NeedKey) {
    if (preferences.needs.includes(need)) return;
    setPreferences({ ...preferences, needs: [...preferences.needs, need] });
  }

  function removeNeed(need: NeedKey) {
    setPreferences({ ...preferences, needs: preferences.needs.filter((item) => item !== need) });
  }

  function applyRequest() {
    const extracted = extractPreferences(request);
    const nextNeeds = Array.from(new Set([...preferences.needs, ...extracted.needs]));
    setPreferences({ budget: extracted.budget ?? preferences.budget, needs: nextNeeds });
    setRankMode("match");
    const changes = extracted.needs.length + (extracted.budget ? 1 : 0);
    setMessage(changes ? `Extracted ${extracted.needs.length} need${extracted.needs.length === 1 ? "" : "s"}${extracted.budget ? ` and a ${money(extracted.budget)} budget` : ""}.` : "No known needs found. Try mentioning budget, calls, ANC, battery, comfort, workouts or headphone type.");
  }

  return (
    <Drawer title="What matters to you?" onClose={onClose}>
      <p className="text-sm leading-6 text-slate-500">Describe what you need in your own words. The prototype extracts recognised requirements and matches them against each product description and specification.</p>

      <div className="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-3.5">
        <label htmlFor="needs-request" className="text-[10px] font-bold uppercase tracking-[0.12em] text-violet-700">Describe what you need</label>
        <textarea id="needs-request" value={request} onChange={(event) => { setRequest(event.target.value); setMessage(""); }} rows={4} placeholder="Example: Comfortable over-ear headphones for work calls, under ₹10,000, with strong noise cancellation." className="mt-2 w-full resize-none rounded-xl border border-violet-200 bg-white p-3 text-sm leading-5 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
        <button onClick={applyRequest} disabled={!request.trim()} className="mt-2 w-full rounded-xl bg-violet-700 px-4 py-3 text-xs font-semibold text-white transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-40">Extract and add needs</button>
        {message ? <p role="status" className="mt-2 text-[11px] leading-4 text-violet-800">{message}</p> : null}
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between gap-3"><div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Your active needs</div>{preferences.budget || preferences.needs.length ? <button onClick={() => setPreferences({ budget: null, needs: [] })} className="text-[10px] font-semibold text-slate-500 hover:text-slate-900">Clear all</button> : null}</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {preferences.budget ? <PriorityChip removeLabel={`Under ${money(preferences.budget)}`} onRemove={() => setPreferences({ ...preferences, budget: null })}>Under {money(preferences.budget)}</PriorityChip> : null}
          {preferences.needs.map((need) => <PriorityChip key={need} removeLabel={needOptions[need].label} onRemove={() => removeNeed(need)}>{needOptions[need].label}</PriorityChip>)}
          {!preferences.budget && !preferences.needs.length ? <span className="text-xs text-slate-400">No needs added yet.</span> : null}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Budget</div>
        <div className="mt-2 grid grid-cols-3 gap-2">{[8000, 12000, 16000].map((budget) => <button key={budget} onClick={() => setPreferences({ ...preferences, budget })} className={`rounded-xl border px-2 py-2.5 text-xs font-semibold ${preferences.budget === budget ? "border-violet-600 bg-violet-50 text-violet-800" : "border-slate-200 hover:border-violet-300"}`}>Under {money(budget)}</button>)}</div>
      </div>

      <div className="mt-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Recommended needs</div>
        <div className="mt-2 space-y-2">{suggestedNeeds.map((need) => {
          const selected = preferences.needs.includes(need);
          return <button key={need} onClick={() => selected ? removeNeed(need) : addNeed(need)} className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-3.5 text-left transition ${selected ? "border-violet-200 bg-violet-50" : "border-slate-200 hover:border-violet-300"}`}><span><span className="block text-sm font-semibold">{needOptions[need].label}</span><span className="mt-0.5 block text-[11px] text-slate-500">{needOptions[need].detail}</span></span><span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-base font-medium ${selected ? "bg-violet-700 text-white" : "border border-slate-200 text-violet-700"}`}>{selected ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}</span></button>;
        })}</div>
      </div>

      {rankMode !== "match" ? <button onClick={() => setRankMode("match")} className="mt-5 w-full rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-xs font-semibold text-violet-800">Use these needs to rank products</button> : null}
      <button onClick={onClose} className="mt-3 w-full rounded-xl bg-[#17211f] py-3 text-sm font-semibold text-white">Show my best options</button>
    </Drawer>
  );
}

function BagPanel({ bag, products: bagProducts, subtotal, onRemove, onAdd, onClose }: { bag: string[]; products: Product[]; subtotal: number; onRemove: (id: string) => void; onAdd: (product: Product) => void; onClose: () => void }) {
  return (
    <Drawer title={`Your bag · ${bag.length}`} onClose={onClose}>
      {bag.length ? <><div className="space-y-3">{bagProducts.map((product) => { const quantity = bag.filter((id) => id === product.id).length; return <div key={product.id} className="flex gap-3 rounded-2xl border border-slate-200 p-3"><div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100"><CatalogueProductImage product={product} /></div><div className="min-w-0 flex-1"><div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{product.brand}</div><div className="mt-0.5 truncate text-sm font-semibold">{product.name}</div><div className="mt-1 text-xs font-semibold">{money(product.price)}</div><div className="mt-2 flex items-center gap-2"><button onClick={() => onRemove(product.id)} className="grid h-7 w-7 place-items-center rounded-full border border-slate-200" aria-label={`Remove one ${product.name}`}><Minus className="h-3 w-3" /></button><span className="text-xs">{quantity}</span><button onClick={() => onAdd(product)} className="grid h-7 w-7 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-700" aria-label={`Add one ${product.name}`}><Plus className="h-3 w-3" /></button></div></div></div>; })}</div><div className="mt-6 border-t border-slate-200 pt-4"><div className="flex items-center justify-between text-sm"><span className="text-slate-500">Subtotal</span><strong>{money(subtotal)}</strong></div><button onClick={onClose} className="mt-4 w-full rounded-xl bg-[#17211f] py-3 text-sm font-semibold text-white">Continue shopping</button><p className="mt-2 text-center text-[10px] text-slate-400">Checkout is outside this prototype.</p></div></> : <div className="grid min-h-[320px] place-items-center text-center"><div><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100"><ShoppingBag className="h-5 w-5 text-slate-500" /></div><h3 className="mt-4 font-semibold">Your bag is empty</h3><p className="mt-1 text-sm text-slate-500">Add an option to keep exploring the flow.</p></div></div>}
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

function PriorityChip({ children, onRemove, removeLabel }: { children: React.ReactNode; onRemove?: () => void; removeLabel?: string }) {
  return <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1">{children}{onRemove ? <button onClick={onRemove} aria-label={`Remove ${removeLabel ?? "need"}`} className="grid h-4 w-4 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-900"><X className="h-2.5 w-2.5" /></button> : null}</span>;
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
