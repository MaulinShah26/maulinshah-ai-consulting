"use client";

import {
  Battery,
  Check,
  ChevronDown,
  Gift,
  Heart,
  Info,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Smartphone,
  Truck,
  User,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type RecipientId = "myself" | "dad" | "mom" | "riya" | "gift";
type PriorityKey =
  | "battery"
  | "display"
  | "ease"
  | "support"
  | "camera"
  | "performance"
  | "charging"
  | "delivery"
  | "reliability";

type PriorityWeights = Record<PriorityKey, number>;
type MemoryMode = "remember" | "session" | "none";

type Profile = {
  id: RecipientId;
  label: string;
  shortLabel: string;
  relation: string;
  avatar: string;
  mission: string;
  saved: string[];
  weights: PriorityWeights;
  budget: number;
  temporary?: boolean;
};

type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  deliveryDays: number;
  screen: string;
  batteryText: string;
  supportText: string;
  tone: "violet" | "blue" | "green" | "amber" | "rose" | "slate";
  scores: PriorityWeights;
  unknown?: string;
};

type CartItem = {
  id: string;
  recipientId: RecipientId;
};

const priorityLabels: Record<PriorityKey, string> = {
  battery: "Battery",
  display: "Large display",
  ease: "Easy to use",
  support: "Software support",
  camera: "Camera",
  performance: "Performance",
  charging: "Fast charging",
  delivery: "Fast delivery",
  reliability: "Reliability",
};

const defaultWeights: PriorityWeights = {
  battery: 1,
  display: 1,
  ease: 1,
  support: 1,
  camera: 1,
  performance: 1,
  charging: 1,
  delivery: 1,
  reliability: 1,
};

const profiles: Record<RecipientId, Profile> = {
  myself: {
    id: "myself",
    label: "Myself",
    shortLabel: "Me",
    relation: "Account owner",
    avatar: "MS",
    mission:
      "Phone under ₹20,000. Performance, camera and fast charging matter most. I am fine with average battery life.",
    saved: ["Prefers Android", "Performance matters", "Camera matters"],
    budget: 20000,
    weights: {
      battery: 2,
      display: 3,
      ease: 2,
      support: 3,
      camera: 5,
      performance: 5,
      charging: 5,
      delivery: 2,
      reliability: 3,
    },
  },
  dad: {
    id: "dad",
    label: "Dad",
    shortLabel: "Dad",
    relation: "Father",
    avatar: "D",
    mission:
      "Phone for Dad under ₹20,000. Large screen and strong battery matter. Keep it easy to use. Camera is low priority.",
    saved: ["Uses Android", "Prefers larger screens", "Values battery life"],
    budget: 20000,
    weights: {
      battery: 5,
      display: 5,
      ease: 5,
      support: 4,
      camera: 1,
      performance: 2,
      charging: 2,
      delivery: 2,
      reliability: 4,
    },
  },
  mom: {
    id: "mom",
    label: "Mom",
    shortLabel: "Mom",
    relation: "Mother",
    avatar: "M",
    mission:
      "Phone for Mom under ₹20,000. It should be reliable, easy to use and not too heavy. Good camera and long support are useful.",
    saved: ["Prefers simple setup", "Keeps phones for years", "Takes lots of photos"],
    budget: 20000,
    weights: {
      battery: 3,
      display: 3,
      ease: 5,
      support: 5,
      camera: 4,
      performance: 2,
      charging: 2,
      delivery: 2,
      reliability: 5,
    },
  },
  riya: {
    id: "riya",
    label: "Riya",
    shortLabel: "Riya",
    relation: "Partner",
    avatar: "R",
    mission:
      "Phone for Riya under ₹20,000. Camera and display quality matter a lot, with fast charging as a strong preference.",
    saved: ["Camera matters", "Prefers vivid displays", "Fast charging preferred"],
    budget: 20000,
    weights: {
      battery: 2,
      display: 5,
      ease: 3,
      support: 3,
      camera: 5,
      performance: 3,
      charging: 5,
      delivery: 2,
      reliability: 3,
    },
  },
  gift: {
    id: "gift",
    label: "One-time gift",
    shortLabel: "Gift",
    relation: "Temporary recipient",
    avatar: "G",
    mission:
      "A phone gift under ₹20,000. Prioritize reliability, strong ratings and quick delivery. Do not learn from this purchase.",
    saved: [],
    budget: 20000,
    temporary: true,
    weights: {
      battery: 3,
      display: 3,
      ease: 4,
      support: 4,
      camera: 3,
      performance: 3,
      charging: 2,
      delivery: 5,
      reliability: 5,
    },
  },
};

const products: Product[] = [
  {
    id: "aster-one",
    brand: "Aster",
    name: "One 5G",
    price: 18999,
    mrp: 22999,
    rating: 4.6,
    reviews: 2841,
    deliveryDays: 2,
    screen: "6.72 inch",
    batteryText: "5,200 mAh",
    supportText: "4 years",
    tone: "green",
    scores: {
      battery: 5,
      display: 5,
      ease: 5,
      support: 5,
      camera: 3,
      performance: 3,
      charging: 3,
      delivery: 3,
      reliability: 5,
    },
    unknown: "Local service-centre experience",
  },
  {
    id: "nova-pulse",
    brand: "Nova",
    name: "Pulse X",
    price: 19999,
    mrp: 24999,
    rating: 4.5,
    reviews: 5312,
    deliveryDays: 1,
    screen: "6.67 inch",
    batteryText: "4,800 mAh",
    supportText: "3 years",
    tone: "violet",
    scores: {
      battery: 3,
      display: 4,
      ease: 3,
      support: 4,
      camera: 5,
      performance: 5,
      charging: 5,
      delivery: 5,
      reliability: 4,
    },
  },
  {
    id: "mira-lite",
    brand: "Mira",
    name: "Lite 12",
    price: 16999,
    mrp: 19999,
    rating: 4.7,
    reviews: 1678,
    deliveryDays: 1,
    screen: "6.55 inch",
    batteryText: "5,000 mAh",
    supportText: "5 years",
    tone: "blue",
    scores: {
      battery: 4,
      display: 4,
      ease: 5,
      support: 5,
      camera: 4,
      performance: 3,
      charging: 3,
      delivery: 5,
      reliability: 5,
    },
  },
  {
    id: "volt-x",
    brand: "Volt",
    name: "X5",
    price: 17999,
    mrp: 21999,
    rating: 4.3,
    reviews: 6451,
    deliveryDays: 1,
    screen: "6.64 inch",
    batteryText: "5,000 mAh",
    supportText: "3 years",
    tone: "amber",
    scores: {
      battery: 4,
      display: 4,
      ease: 2,
      support: 3,
      camera: 3,
      performance: 5,
      charging: 5,
      delivery: 5,
      reliability: 3,
    },
  },
  {
    id: "luma-max",
    brand: "Luma",
    name: "Max S",
    price: 19499,
    mrp: 23999,
    rating: 4.6,
    reviews: 2194,
    deliveryDays: 2,
    screen: "6.78 inch",
    batteryText: "5,500 mAh",
    supportText: "4 years",
    tone: "rose",
    scores: {
      battery: 5,
      display: 5,
      ease: 4,
      support: 4,
      camera: 4,
      performance: 3,
      charging: 2,
      delivery: 3,
      reliability: 4,
    },
    unknown: "One-handed comfort",
  },
  {
    id: "nexo-cam",
    brand: "Nexo",
    name: "Cam 5",
    price: 18499,
    mrp: 22499,
    rating: 4.4,
    reviews: 3490,
    deliveryDays: 3,
    screen: "6.70 inch",
    batteryText: "4,700 mAh",
    supportText: "4 years",
    tone: "slate",
    scores: {
      battery: 3,
      display: 5,
      ease: 3,
      support: 4,
      camera: 5,
      performance: 4,
      charging: 4,
      delivery: 2,
      reliability: 4,
    },
  },
  {
    id: "kite-core",
    brand: "Kite",
    name: "Core 8",
    price: 14999,
    mrp: 17999,
    rating: 4.5,
    reviews: 8240,
    deliveryDays: 1,
    screen: "6.60 inch",
    batteryText: "5,000 mAh",
    supportText: "3 years",
    tone: "blue",
    scores: {
      battery: 4,
      display: 4,
      ease: 5,
      support: 3,
      camera: 3,
      performance: 3,
      charging: 3,
      delivery: 5,
      reliability: 5,
    },
  },
  {
    id: "orbit-5g",
    brand: "Orbit",
    name: "5G Plus",
    price: 15999,
    mrp: 18999,
    rating: 4.2,
    reviews: 4371,
    deliveryDays: 2,
    screen: "6.68 inch",
    batteryText: "5,300 mAh",
    supportText: "3 years",
    tone: "green",
    scores: {
      battery: 5,
      display: 4,
      ease: 4,
      support: 3,
      camera: 2,
      performance: 4,
      charging: 4,
      delivery: 3,
      reliability: 4,
    },
  },
  {
    id: "nova-pro",
    brand: "Nova",
    name: "Pro Edge",
    price: 22999,
    mrp: 27999,
    rating: 4.8,
    reviews: 1942,
    deliveryDays: 1,
    screen: "6.73 inch",
    batteryText: "5,100 mAh",
    supportText: "5 years",
    tone: "violet",
    scores: {
      battery: 5,
      display: 5,
      ease: 4,
      support: 5,
      camera: 5,
      performance: 5,
      charging: 5,
      delivery: 5,
      reliability: 5,
    },
  },
];

function money(value: number) {
  return "₹" + value.toLocaleString("en-IN");
}

function productById(id: string) {
  return products.find((product) => product.id === id);
}

function recipientName(id: RecipientId) {
  return profiles[id].label;
}

function fitTitle(id: RecipientId) {
  if (id === "myself") return "Strong fit for you";
  if (id === "gift") return "Strong fit for this gift";
  return "Strong fit for " + profiles[id].shortLabel;
}

function scoreProduct(product: Product, weights: PriorityWeights) {
  const entries = Object.entries(weights) as Array<[PriorityKey, number]>;
  let weighted = 0;
  let max = 0;
  entries.forEach(([key, weight]) => {
    weighted += product.scores[key] * weight;
    max += 5 * weight;
  });
  return max ? Math.round((weighted / max) * 100) : 0;
}

function fitDetails(product: Product, weights: PriorityWeights) {
  const important = (Object.entries(weights) as Array<[PriorityKey, number]>)
    .filter(([, weight]) => weight >= 4)
    .sort((a, b) => b[1] - a[1]);
  const matches = important.filter(([key]) => product.scores[key] >= 4);
  const misses = important.filter(([key]) => product.scores[key] < 4);
  return { important, matches, misses };
}

function toneClasses(tone: Product["tone"]) {
  if (tone === "violet") return "from-violet-100 via-violet-50 to-slate-100";
  if (tone === "blue") return "from-sky-100 via-white to-slate-100";
  if (tone === "green") return "from-emerald-100 via-white to-slate-100";
  if (tone === "amber") return "from-amber-100 via-white to-slate-100";
  if (tone === "rose") return "from-rose-100 via-white to-slate-100";
  return "from-slate-200 via-white to-slate-100";
}

function extractMission(text: string, fallback: PriorityWeights, fallbackBudget: number) {
  const lower = text.toLowerCase();
  const next: PriorityWeights = { ...defaultWeights };

  const set = (key: PriorityKey, weight: number) => {
    next[key] = Math.max(next[key], weight);
  };

  if (/battery|long lasting|last all day/.test(lower)) set("battery", 5);
  if (/screen|display|large/.test(lower)) set("display", 5);
  if (/easy|simple|clean interface|simple controls/.test(lower)) set("ease", 5);
  if (/support|updates|software/.test(lower)) set("support", 5);
  if (/camera|photo|photos/.test(lower)) set("camera", 5);
  if (/performance|fast phone|speed|gaming/.test(lower)) set("performance", 5);
  if (/charging|fast charge/.test(lower)) set("charging", 5);
  if (/delivery|tomorrow|quickly|quick delivery/.test(lower)) set("delivery", 5);
  if (/reliable|reliability|strong ratings|well rated/.test(lower)) set("reliability", 5);

  if (/camera.{0,24}(not important|low priority)|not important.{0,24}camera/.test(lower)) {
    next.camera = 1;
  }
  if (/battery.{0,24}(average|not important|low priority)/.test(lower)) {
    next.battery = 2;
  }

  const hasAnySignal = (Object.keys(next) as PriorityKey[]).some((key) => next[key] > 1);
  const weights = hasAnySignal ? next : { ...fallback };

  const budgetMatch = text.match(/(?:₹|rs\.?\s*)?(\d{1,2})(?:[,\s]?000|k)\b/i);
  let budget = fallbackBudget;
  if (budgetMatch) {
    const base = Number(budgetMatch[1]);
    if (Number.isFinite(base) && base >= 5 && base <= 99) budget = base * 1000;
  }

  return { weights, budget };
}

function MemoryPill({ mode }: { mode: MemoryMode }) {
  const copy =
    mode === "remember"
      ? "Remember for future shopping"
      : mode === "session"
        ? "Use only for this purchase"
        : "Do not learn from this";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600">
      <ShieldCheck className="h-3 w-3" />
      {copy}
    </span>
  );
}

export default function RecipientAwareCommerce() {
  const [recipientId, setRecipientId] = useState<RecipientId>("dad");
  const [missionText, setMissionText] = useState(profiles.dad.mission);
  const [weights, setWeights] = useState<PriorityWeights>({ ...profiles.dad.weights });
  const [budget, setBudget] = useState(profiles.dad.budget);
  const [memoryModes, setMemoryModes] = useState<Record<RecipientId, MemoryMode>>({
    myself: "remember",
    dad: "remember",
    mom: "remember",
    riya: "remember",
    gift: "none",
  });
  const [saved, setSaved] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [memoryOpen, setMemoryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackSaved, setFeedbackSaved] = useState(false);
  const [showRecipientMenu, setShowRecipientMenu] = useState(false);
  const [missionApplied, setMissionApplied] = useState(false);

  const profile = profiles[recipientId];
  const memoryMode = memoryModes[recipientId];

  const ranked = useMemo(() => {
    return products
      .filter((product) => product.price <= budget)
      .map((product) => ({ product, score: scoreProduct(product, weights) }))
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (b.product.scores.reliability !== a.product.scores.reliability) {
          return b.product.scores.reliability - a.product.scores.reliability;
        }
        return a.product.price - b.product.price;
      });
  }, [budget, weights]);

  const excludedCount = products.filter((product) => product.price > budget).length;
  const activePriorities = (Object.entries(weights) as Array<[PriorityKey, number]>)
    .filter(([, weight]) => weight >= 4)
    .sort((a, b) => b[1] - a[1]);

  const changeRecipient = (id: RecipientId) => {
    const next = profiles[id];
    setRecipientId(id);
    setMissionText(next.mission);
    setWeights({ ...next.weights });
    setBudget(next.budget);
    setShowRecipientMenu(false);
    setMissionApplied(false);
    setFeedbackSaved(false);
  };

  const applyMission = () => {
    const parsed = extractMission(missionText, profile.weights, profile.budget);
    setWeights(parsed.weights);
    setBudget(parsed.budget);
    setMissionApplied(true);
  };

  const resetMission = () => {
    setMissionText(profile.mission);
    setWeights({ ...profile.weights });
    setBudget(profile.budget);
    setMissionApplied(false);
  };

  const toggleSaved = (id: string) => {
    setSaved((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    );
  };

  const addToCart = (id: string) => {
    setCart((current) => [...current, { id, recipientId }]);
  };

  const reassignCartItem = (index: number, nextId: RecipientId) => {
    setCart((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, recipientId: nextId } : item,
      ),
    );
  };

  const currentTop = ranked[0]?.product;

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1480px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-[-0.03em] text-slate-900">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#17211f] text-xs font-bold text-white">
              A
            </span>
            Arc Market
          </a>

          <div className="hidden flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-3 md:flex">
            <Search className="h-4 w-4 text-slate-400" />
            <div className="min-w-0 flex-1 px-3 py-2.5 text-sm text-slate-600">
              Smartphone under {money(budget)}
            </div>
          </div>

          <button
            onClick={() => setMemoryOpen(true)}
            className="ml-auto hidden rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:border-slate-300 sm:inline-flex"
          >
            What is remembered?
          </button>

          <button
            onClick={() => setCartOpen(true)}
            className="relative grid h-10 w-10 place-items-center rounded-xl bg-[#17211f] text-white"
            aria-label="Open shopping bag"
          >
            <ShoppingBag className="h-4 w-4" />
            {cart.length ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-violet-600 px-1 text-[9px] font-bold">
                {cart.length}
              </span>
            ) : null}
          </button>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1480px] px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.17em] text-violet-700">
                Interactive product concept
              </div>
              <h1 className="mt-2 max-w-3xl text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Same search. Different person. Different result.
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                The account stays the same. Change who you are shopping for and watch the
                recommendation context, ranking and learning change with it.
              </p>
            </div>

            <div className="relative shrink-0">
              <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                Shopping for
              </div>
              <button
                onClick={() => setShowRecipientMenu((value) => !value)}
                className="flex min-w-[230px] items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 shadow-sm"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-violet-100 text-xs font-bold text-violet-800">
                    {profile.avatar}
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold">{profile.label}</span>
                    <span className="block text-[10px] text-slate-400">{profile.relation}</span>
                  </span>
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>

              {showRecipientMenu ? (
                <div className="absolute right-0 top-[74px] z-40 w-[280px] rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                  {(Object.keys(profiles) as RecipientId[]).map((id) => {
                    const item = profiles[id];
                    return (
                      <button
                        key={id}
                        onClick={() => changeRecipient(id)}
                        className={
                          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-slate-50 " +
                          (id === recipientId ? "bg-violet-50" : "")
                        }
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-700">
                          {item.avatar}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-semibold">{item.label}</span>
                          <span className="block truncate text-[10px] text-slate-400">
                            {item.temporary ? "Temporary context" : item.saved.join(" · ")}
                          </span>
                        </span>
                        {id === recipientId ? <Check className="h-4 w-4 text-violet-700" /> : null}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-slate-500">
            <span className="rounded-full bg-slate-100 px-2.5 py-1.5">{profile.label}</span>
            <span>→</span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1.5">Current mission</span>
            <span>→</span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1.5">Ranked products</span>
            <span>→</span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1.5">Cart attribution</span>
            <span>→</span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1.5">Outcome learning</span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1480px] gap-5 px-4 py-6 sm:px-6 lg:px-8 xl:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="self-start xl:sticky xl:top-5">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  1 · Recipient profile
                </div>
                <h2 className="mt-1 text-lg font-semibold tracking-[-0.03em]">{profile.label}</h2>
              </div>
              <button
                onClick={() => setMemoryOpen(true)}
                className="text-[10px] font-semibold text-violet-700"
              >
                Manage
              </button>
            </div>

            {profile.saved.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.saved.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-2xl bg-amber-50 p-3 text-[11px] leading-5 text-amber-900">
                This is a temporary recipient. No permanent profile is required.
              </div>
            )}

            <div className="mt-5 border-t border-slate-200 pt-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                2 · Current shopping mission
              </div>
              <textarea
                value={missionText}
                onChange={(event) => {
                  setMissionText(event.target.value);
                  setMissionApplied(false);
                }}
                rows={5}
                className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700 outline-none focus:border-violet-400"
              />
              <div className="mt-3 flex gap-2">
                <button
                  onClick={applyMission}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#17211f] px-3 py-2.5 text-xs font-semibold text-white"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Apply mission
                </button>
                <button
                  onClick={resetMission}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500"
                  aria-label="Reset shopping mission"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
              {missionApplied ? (
                <div className="mt-2 text-[10px] font-medium text-emerald-700">
                  Mission updated. Rankings changed using the extracted context.
                </div>
              ) : null}
            </div>

            <div className="mt-5 border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  3 · Context used for ranking
                </div>
                <span className="text-[10px] font-semibold text-slate-500">
                  Budget {money(budget)}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {activePriorities.map(([key, weight]) => (
                  <span
                    key={key}
                    className="rounded-full bg-violet-50 px-2.5 py-1.5 text-[10px] font-semibold text-violet-800"
                  >
                    {priorityLabels[key]} · {weight === 5 ? "High" : "Medium"}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-slate-200 pt-5">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Memory
              </div>
              <select
                value={memoryMode}
                onChange={(event) =>
                  setMemoryModes((current) => ({
                    ...current,
                    [recipientId]: event.target.value as MemoryMode,
                  }))
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 outline-none"
              >
                <option value="remember">Remember for future shopping</option>
                <option value="session">Only use for this purchase</option>
                <option value="none">Do not learn from this</option>
              </select>
              <div className="mt-2">
                <MemoryPill mode={memoryMode} />
              </div>
            </div>
          </section>

          <section className="mt-4 rounded-3xl border border-slate-200 bg-[#17211f] p-5 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Info className="h-4 w-4" />
              What changed?
            </div>
            <p className="mt-2 text-xs leading-5 text-white/65">
              The account did not change. Only the recipient and current mission changed.
              Existing recommendation systems now receive cleaner context instead of mixing
              every interaction into one preference profile.
            </p>
          </section>
        </aside>

        <section className="min-w-0">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700">
                  <Search className="h-3.5 w-3.5" />
                  Smartphone under {money(budget)}
                </div>
                <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em]">
                  Ranked for {profile.label}
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  {ranked.length} eligible products · {excludedCount} outside the hard budget
                  excluded before ranking
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(Object.keys(profiles) as RecipientId[])
                  .filter((id) => id === "myself" || id === "dad" || id === "riya" || id === "gift")
                  .map((id) => (
                    <button
                      key={id}
                      onClick={() => changeRecipient(id)}
                      className={
                        "rounded-full border px-3 py-1.5 text-[10px] font-semibold transition " +
                        (id === recipientId
                          ? "border-violet-600 bg-violet-600 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-violet-300")
                      }
                    >
                      {profiles[id].label}
                    </button>
                  ))}
              </div>
            </div>

            {currentTop ? (
              <div className="mt-4 rounded-2xl border border-violet-100 bg-violet-50 p-3 text-xs text-violet-900">
                <strong>{currentTop.brand + " " + currentTop.name}</strong> is currently first because
                its attributes best match the active context for <strong>{profile.label}</strong>.
                Switch recipient above to see the order change.
              </div>
            ) : null}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
            {ranked.map(({ product, score }, index) => {
              const fit = fitDetails(product, weights);
              const isSaved = saved.includes(product.id);
              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className={
                      "relative block aspect-[4/3] w-full overflow-hidden bg-gradient-to-br " +
                      toneClasses(product.tone)
                    }
                  >
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold text-slate-700 shadow-sm">
                      #{index + 1} for {profile.shortLabel}
                    </span>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="relative h-[72%] w-[36%] rounded-[1.8rem] border-[5px] border-slate-900 bg-slate-950 shadow-2xl transition duration-300 group-hover:-rotate-2 group-hover:scale-[1.03]">
                        <div className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
                        <div className="absolute inset-[6px] overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-white via-slate-100 to-slate-300">
                          <div className="absolute -right-5 top-12 h-20 w-20 rounded-full bg-violet-300/60 blur-xl" />
                          <div className="absolute -left-4 bottom-10 h-16 w-16 rounded-full bg-emerald-300/50 blur-xl" />
                        </div>
                      </div>
                    </div>
                  </button>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          {product.brand}
                        </div>
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="mt-1 text-left text-base font-semibold tracking-[-0.02em] hover:text-violet-700"
                        >
                          {product.name}
                        </button>
                      </div>
                      <button
                        onClick={() => toggleSaved(product.id)}
                        className={
                          "grid h-9 w-9 place-items-center rounded-full border " +
                          (isSaved
                            ? "border-rose-200 bg-rose-50 text-rose-600"
                            : "border-slate-200 text-slate-400")
                        }
                        aria-label={isSaved ? "Remove from saved" : "Save product"}
                      >
                        <Heart className={"h-4 w-4 " + (isSaved ? "fill-current" : "")} />
                      </button>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-500">
                      <span className="flex items-center gap-1 font-semibold text-slate-800">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        {product.rating}
                      </span>
                      <span>{product.reviews.toLocaleString("en-IN")} reviews</span>
                      <span>·</span>
                      <span>{product.deliveryDays === 1 ? "Tomorrow" : product.deliveryDays + " days"}</span>
                    </div>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-xl font-bold">{money(product.price)}</span>
                      <span className="text-xs text-slate-400 line-through">{money(product.mrp)}</span>
                    </div>

                    <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-xs font-bold text-emerald-900">{fitTitle(recipientId)}</div>
                        <div className="text-[10px] font-bold text-emerald-700">{score}% fit</div>
                      </div>
                      <div className="mt-1 text-[10px] text-emerald-800">
                        Matches {fit.matches.length} of {fit.important.length} high-priority needs
                      </div>
                      <div className="mt-2 space-y-1">
                        {fit.matches.slice(0, 2).map(([key]) => (
                          <div key={key} className="flex items-center gap-1.5 text-[10px] text-emerald-800">
                            <Check className="h-3 w-3" />
                            {priorityLabels[key]}
                          </div>
                        ))}
                        {fit.misses.slice(0, 1).map(([key]) => (
                          <div key={key} className="flex items-center gap-1.5 text-[10px] text-amber-800">
                            <span className="grid h-3 w-3 place-items-center rounded-full border border-amber-500 text-[8px]">!</span>
                            Weaker on {priorityLabels[key].toLowerCase()}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
                      <MiniSpec icon={<Battery className="h-3.5 w-3.5" />} label={product.batteryText} />
                      <MiniSpec icon={<Smartphone className="h-3.5 w-3.5" />} label={product.screen} />
                      <MiniSpec icon={<ShieldCheck className="h-3.5 w-3.5" />} label={product.supportText} />
                    </div>

                    <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
                      <button
                        onClick={() => addToCart(product.id)}
                        className="rounded-xl bg-[#17211f] px-3 py-2.5 text-xs font-semibold text-white"
                      >
                        Add for {profile.shortLabel}
                      </button>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="rounded-xl border border-slate-200 px-3 py-2.5 text-[10px] font-semibold text-slate-600"
                      >
                        Why?
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 rounded-3xl border border-dashed border-slate-300 bg-white/70 p-5 text-center">
            <div className="text-sm font-semibold">The catalogue did not change.</div>
            <p className="mx-auto mt-1 max-w-2xl text-xs leading-5 text-slate-500">
              Recipient context changes which attributes matter, which products rank first and
              where the resulting behaviour should be learned. That is the layer this prototype is testing.
            </p>
          </div>
        </section>
      </div>

      {selectedProduct ? (
        <ProductModal
          product={selectedProduct}
          recipientId={recipientId}
          weights={weights}
          budget={budget}
          onClose={() => setSelectedProduct(null)}
          onAdd={() => {
            addToCart(selectedProduct.id);
            setSelectedProduct(null);
            setCartOpen(true);
          }}
        />
      ) : null}

      {cartOpen ? (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={(index) => setCart((current) => current.filter((_, itemIndex) => itemIndex !== index))}
          onReassign={reassignCartItem}
          onSimulate={() => {
            setCartOpen(false);
            setFeedbackOpen(true);
            setFeedbackSaved(false);
          }}
        />
      ) : null}

      {memoryOpen ? (
        <MemoryDrawer
          recipientId={recipientId}
          memoryModes={memoryModes}
          onChangeMode={(id, mode) =>
            setMemoryModes((current) => ({ ...current, [id]: mode }))
          }
          onClose={() => setMemoryOpen(false)}
        />
      ) : null}

      {feedbackOpen ? (
        <FeedbackModal
          cart={cart}
          saved={feedbackSaved}
          onSave={() => setFeedbackSaved(true)}
          onClose={() => setFeedbackOpen(false)}
        />
      ) : null}
    </main>
  );
}

function MiniSpec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl bg-slate-50 px-2 py-2 text-[9px] font-semibold text-slate-600">
      <div className="mx-auto mb-1 flex justify-center text-slate-400">{icon}</div>
      {label}
    </div>
  );
}

function ProductModal({
  product,
  recipientId,
  weights,
  budget,
  onClose,
  onAdd,
}: {
  product: Product;
  recipientId: RecipientId;
  weights: PriorityWeights;
  budget: number;
  onClose: () => void;
  onAdd: () => void;
}) {
  const fit = fitDetails(product, weights);
  const score = scoreProduct(product, weights);

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/55 p-3 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700">
              Why this ranks here
            </div>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">
              {product.brand + " " + product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-5 p-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className={"grid min-h-[300px] place-items-center rounded-3xl bg-gradient-to-br " + toneClasses(product.tone)}>
            <div className="relative h-[230px] w-[112px] rounded-[2rem] border-[6px] border-slate-900 bg-slate-950 shadow-2xl">
              <div className="absolute inset-[7px] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-white via-slate-100 to-slate-300">
                <div className="absolute -right-7 top-16 h-24 w-24 rounded-full bg-violet-300/60 blur-2xl" />
                <div className="absolute -left-7 bottom-14 h-20 w-20 rounded-full bg-emerald-300/50 blur-2xl" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{money(product.price)}</span>
              <span className="text-xs text-slate-400 line-through">{money(product.mrp)}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-semibold text-slate-800">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {product.rating}
              </span>
              <span>{product.reviews.toLocaleString("en-IN")} reviews</span>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="flex items-center justify-between">
                <strong className="text-sm text-emerald-900">{fitTitle(recipientId)}</strong>
                <span className="text-xs font-bold text-emerald-700">{score}% fit</span>
              </div>
              <p className="mt-1 text-xs leading-5 text-emerald-800">
                The explanation is based on the current mission for {recipientName(recipientId)},
                not the account holder's full browsing history.
              </p>
            </div>

            <div className="mt-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                High-priority requirements
              </div>
              <div className="mt-2 space-y-2">
                {fit.important.map(([key]) => {
                  const pass = product.scores[key] >= 4;
                  return (
                    <div
                      key={key}
                      className={
                        "flex items-center justify-between rounded-xl px-3 py-2.5 text-xs " +
                        (pass ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900")
                      }
                    >
                      <span className="flex items-center gap-2">
                        {pass ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          <span className="grid h-3.5 w-3.5 place-items-center rounded-full border border-amber-500 text-[8px]">!</span>
                        )}
                        {priorityLabels[key]}
                      </span>
                      <strong>{product.scores[key]}/5</strong>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <MiniDetail label="Battery" value={product.batteryText} />
              <MiniDetail label="Display" value={product.screen} />
              <MiniDetail label="Software support" value={product.supportText} />
              <MiniDetail
                label="Delivery"
                value={product.deliveryDays === 1 ? "Tomorrow" : product.deliveryDays + " days"}
              />
            </div>

            {product.unknown ? (
              <div className="mt-4 rounded-xl bg-slate-100 px-3 py-2.5 text-[11px] text-slate-600">
                <strong className="text-slate-900">Unknown:</strong> {product.unknown}. The system
                should not invent confidence where the catalogue cannot verify it.
              </div>
            ) : null}

            {product.price > budget ? (
              <div className="mt-4 rounded-xl bg-rose-50 px-3 py-2.5 text-xs text-rose-800">
                This product fails the hard budget requirement and should be excluded before ranking.
              </div>
            ) : null}

            <button
              onClick={onAdd}
              className="mt-5 w-full rounded-xl bg-[#17211f] py-3 text-sm font-semibold text-white"
            >
              Add for {profiles[recipientId].shortLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3">
      <div className="text-[9px] font-bold uppercase tracking-[0.11em] text-slate-400">{label}</div>
      <div className="mt-1 text-xs font-semibold text-slate-800">{value}</div>
    </div>
  );
}

function CartDrawer({
  cart,
  onClose,
  onRemove,
  onReassign,
  onSimulate,
}: {
  cart: CartItem[];
  onClose: () => void;
  onRemove: (index: number) => void;
  onReassign: (index: number, id: RecipientId) => void;
  onSimulate: () => void;
}) {
  const subtotal = cart.reduce((sum, item) => sum + (productById(item.id)?.price ?? 0), 0);

  return (
    <div className="fixed inset-0 z-[90] flex justify-end bg-slate-950/50 backdrop-blur-sm" onMouseDown={onClose}>
      <aside
        role="dialog"
        aria-modal="true"
        className="h-full w-full max-w-md overflow-y-auto bg-white p-5 shadow-2xl sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700">
              Context continues into cart
            </div>
            <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em]">Your bag · {cart.length}</h2>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        {cart.length ? (
          <>
            <div className="mt-6 space-y-3">
              {cart.map((item, index) => {
                const product = productById(item.id);
                if (!product) return null;
                return (
                  <div key={item.id + "-" + index} className="rounded-2xl border border-slate-200 p-3.5">
                    <div className="flex items-start gap-3">
                      <div className={"grid h-20 w-16 shrink-0 place-items-center rounded-xl bg-gradient-to-br " + toneClasses(product.tone)}>
                        <div className="h-14 w-7 rounded-lg border-[3px] border-slate-900 bg-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">{product.brand}</div>
                        <div className="truncate text-sm font-semibold">{product.name}</div>
                        <div className="mt-1 text-xs font-bold">{money(product.price)}</div>
                      </div>
                      <button onClick={() => onRemove(index)} className="text-slate-400 hover:text-rose-600" aria-label="Remove item">
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-3 rounded-xl bg-slate-50 p-2.5">
                      <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        This item is for
                      </label>
                      <select
                        value={item.recipientId}
                        onChange={(event) => onReassign(index, event.target.value as RecipientId)}
                        className="mt-1.5 w-full bg-transparent text-xs font-semibold text-slate-700 outline-none"
                      >
                        {(Object.keys(profiles) as RecipientId[]).map((id) => (
                          <option key={id} value={id}>
                            {profiles[id].label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <strong>{money(subtotal)}</strong>
              </div>
              <button
                onClick={onSimulate}
                className="mt-4 w-full rounded-xl bg-[#17211f] py-3 text-sm font-semibold text-white"
              >
                Simulate purchase & feedback
              </button>
              <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
                The demo skips payment and jumps to the post-purchase learning step.
              </p>
            </div>
          </>
        ) : (
          <div className="grid min-h-[360px] place-items-center text-center">
            <div>
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100">
                <ShoppingBag className="h-5 w-5 text-slate-400" />
              </div>
              <h3 className="mt-4 font-semibold">Your bag is empty</h3>
              <p className="mt-1 text-sm text-slate-500">Add a product to see recipient attribution.</p>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

function MemoryDrawer({
  recipientId,
  memoryModes,
  onChangeMode,
  onClose,
}: {
  recipientId: RecipientId;
  memoryModes: Record<RecipientId, MemoryMode>;
  onChangeMode: (id: RecipientId, mode: MemoryMode) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[90] flex justify-end bg-slate-950/50 backdrop-blur-sm" onMouseDown={onClose}>
      <aside
        role="dialog"
        aria-modal="true"
        className="h-full w-full max-w-lg overflow-y-auto bg-white p-5 shadow-2xl sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700">
              Visible, correctable memory
            </div>
            <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em]">People & shopping context</h2>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          The shopper can see what is remembered, who it belongs to and whether the next purchase should update that profile.
        </p>

        <div className="mt-6 space-y-3">
          {(Object.keys(profiles) as RecipientId[]).map((id) => {
            const profile = profiles[id];
            return (
              <div
                key={id}
                className={
                  "rounded-2xl border p-4 " +
                  (id === recipientId ? "border-violet-300 bg-violet-50/50" : "border-slate-200")
                }
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-bold text-slate-700 shadow-sm">
                    {profile.avatar}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold">{profile.label}</div>
                    <div className="text-[10px] text-slate-400">{profile.relation}</div>
                  </div>
                  {profile.temporary ? <Gift className="h-4 w-4 text-amber-600" /> : <User className="h-4 w-4 text-slate-400" />}
                </div>

                {profile.saved.length ? (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {profile.saved.map((item) => (
                      <span key={item} className="rounded-full bg-white px-2 py-1 text-[9px] font-medium text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="mt-3 text-[10px] text-amber-800">
                    No permanent recipient facts saved.
                  </div>
                )}

                <select
                  value={memoryModes[id]}
                  onChange={(event) => onChangeMode(id, event.target.value as MemoryMode)}
                  className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none"
                >
                  <option value="remember">Remember future outcomes</option>
                  <option value="session">Use only for this purchase</option>
                  <option value="none">Do not learn from this</option>
                </select>
              </div>
            );
          })}
        </div>

        <div className="mt-5 rounded-2xl bg-slate-100 p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
            <ShieldCheck className="h-4 w-4" />
            Guardrail
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            A temporary gift should not quietly become a permanent preference. Context can be useful without becoming permanent memory.
          </p>
        </div>
      </aside>
    </div>
  );
}

function FeedbackModal({
  cart,
  saved,
  onSave,
  onClose,
}: {
  cart: CartItem[];
  saved: boolean;
  onSave: () => void;
  onClose: () => void;
}) {
  const firstItem = cart[0];
  const product = firstItem ? productById(firstItem.id) : undefined;
  const target = firstItem ? profiles[firstItem.recipientId] : undefined;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/55 p-3 backdrop-blur-sm" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700">
              Post-purchase outcome
            </div>
            <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em]">
              Did this work for {target?.shortLabel ?? "the recipient"}?
            </h2>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        {product ? (
          <div className="mt-5 rounded-2xl border border-slate-200 p-4">
            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">{product.brand}</div>
            <div className="mt-0.5 text-sm font-semibold">{product.name}</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={onSave}
                className={
                  "rounded-xl border px-3 py-3 text-xs font-semibold " +
                  (saved ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-slate-200")
                }
              >
                Worked well
              </button>
              <button
                onClick={onSave}
                className="rounded-xl border border-slate-200 px-3 py-3 text-xs font-semibold"
              >
                Some issues
              </button>
            </div>
          </div>
        ) : null}

        {saved ? (
          <div className="mt-4 rounded-2xl bg-emerald-50 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
              <Check className="h-4 w-4" />
              Outcome attributed to {target?.label ?? "the recipient"}
            </div>
            <p className="mt-2 text-xs leading-5 text-emerald-800">
              The useful signal belongs to the recipient context, not automatically to the account holder. Whether it becomes long-term memory remains under shopper control.
            </p>
          </div>
        ) : (
          <div className="mt-4 rounded-2xl bg-slate-100 p-4 text-xs leading-5 text-slate-600">
            A purchase tells the platform what was chosen. Outcome feedback tells it whether the choice actually worked.
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-[#17211f] py-3 text-sm font-semibold text-white"
        >
          Finish demo
        </button>
      </div>
    </div>
  );
}
