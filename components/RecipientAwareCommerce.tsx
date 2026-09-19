"use client";

import {
  Battery,
  Check,
  ChevronDown,
  ChevronRight,
  Gift,
  Heart,
  Info,
  MapPin,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Star,
  User,
  Users,
  X
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type RecipientId = "myself" | "dad" | "mom" | "riya" | "gift";
type View = "home" | "results" | "people";
type MemoryMode = "remember" | "session" | "none";
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

type Profile = {
  id: RecipientId;
  label: string;
  relation: string;
  initials: string;
  mission: string;
  saved: string[];
  budget: number;
  weights: PriorityWeights;
  temporary?: boolean;
  color: string;
};

type Product = {
  id: string;
  brand: string;
  name: string;
  image: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  deliveryDays: number;
  batteryText: string;
  displayText: string;
  supportText: string;
  cameraText: string;
  processorText: string;
  chargingText: string;
  scores: PriorityWeights;
  unknown?: string;
  badge?: string;
};

type CartItem = {
  productId: string;
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
  reliability: "Reliability"
};

const neutralWeights: PriorityWeights = {
  battery: 1,
  display: 1,
  ease: 1,
  support: 1,
  camera: 1,
  performance: 1,
  charging: 1,
  delivery: 1,
  reliability: 1
};

const profiles: Record<RecipientId, Profile> = {
  myself: {
    id: "myself",
    label: "Myself",
    relation: "Account owner",
    initials: "MS",
    mission:
      "Phone under ₹20,000. Performance, camera and fast charging matter most. Average battery is fine.",
    saved: ["Android", "Performance first", "Camera matters", "Fast charging"],
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
      reliability: 3
    },
    color: "bg-slate-900 text-white"
  },
  dad: {
    id: "dad",
    label: "Dad",
    relation: "Father",
    initials: "D",
    mission:
      "Phone for Dad under ₹20,000. Large screen and strong battery matter. Keep it easy to use. Camera is low priority.",
    saved: ["Android", "Large screen", "Strong battery", "Simple experience"],
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
      reliability: 4
    },
    color: "bg-emerald-100 text-emerald-900"
  },
  mom: {
    id: "mom",
    label: "Mom",
    relation: "Mother",
    initials: "M",
    mission:
      "Phone for Mom under ₹20,000. Reliable, easy to use and good camera. She keeps phones for years, so long software support matters.",
    saved: ["Simple setup", "Good camera", "Long support", "Reliability"],
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
      reliability: 5
    },
    color: "bg-rose-100 text-rose-900"
  },
  riya: {
    id: "riya",
    label: "Riya",
    relation: "Partner",
    initials: "R",
    mission:
      "Phone for Riya under ₹20,000. Camera and display quality matter a lot. Fast charging is a strong preference.",
    saved: ["Camera first", "Bright display", "Fast charging"],
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
      reliability: 3
    },
    color: "bg-violet-100 text-violet-900"
  },
  gift: {
    id: "gift",
    label: "One-time gift",
    relation: "Temporary",
    initials: "G",
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
      reliability: 5
    },
    color: "bg-amber-100 text-amber-900"
  }
};

const products: Product[] = [
  {
    id: "aster-one",
    brand: "Aster",
    name: "One 5G",
    image: "/products/phones/aster-one.svg",
    price: 18999,
    mrp: 22999,
    rating: 4.6,
    reviews: 2841,
    deliveryDays: 2,
    batteryText: "5,200 mAh",
    displayText: "6.72 inch FHD+",
    supportText: "4 years",
    cameraText: "50 MP",
    processorText: "Dimensity 7200",
    chargingText: "45W",
    scores: {
      battery: 5,
      display: 5,
      ease: 5,
      support: 5,
      camera: 3,
      performance: 3,
      charging: 3,
      delivery: 3,
      reliability: 5
    },
    unknown: "Local service-centre experience",
    badge: "Low return rate"
  },
  {
    id: "nova-pulse",
    brand: "Nova",
    name: "Pulse X",
    image: "/products/phones/nova-pulse.svg",
    price: 19999,
    mrp: 24999,
    rating: 4.5,
    reviews: 5312,
    deliveryDays: 1,
    batteryText: "4,800 mAh",
    displayText: "6.67 inch AMOLED",
    supportText: "3 years",
    cameraText: "64 MP OIS",
    processorText: "Snapdragon 7s",
    chargingText: "80W",
    scores: {
      battery: 3,
      display: 4,
      ease: 3,
      support: 4,
      camera: 5,
      performance: 5,
      charging: 5,
      delivery: 5,
      reliability: 4
    },
    badge: "Fast delivery"
  },
  {
    id: "mira-lite",
    brand: "Mira",
    name: "Lite 12",
    image: "/products/phones/mira-lite.svg",
    price: 16999,
    mrp: 19999,
    rating: 4.7,
    reviews: 1678,
    deliveryDays: 1,
    batteryText: "5,000 mAh",
    displayText: "6.55 inch OLED",
    supportText: "5 years",
    cameraText: "50 MP",
    processorText: "Tensor Lite",
    chargingText: "33W",
    scores: {
      battery: 4,
      display: 4,
      ease: 5,
      support: 5,
      camera: 4,
      performance: 3,
      charging: 3,
      delivery: 5,
      reliability: 5
    },
    badge: "Top rated"
  },
  {
    id: "volt-x",
    brand: "Volt",
    name: "X5",
    image: "/products/phones/volt-x.svg",
    price: 17999,
    mrp: 21999,
    rating: 4.3,
    reviews: 6451,
    deliveryDays: 1,
    batteryText: "5,000 mAh",
    displayText: "6.64 inch 120Hz",
    supportText: "3 years",
    cameraText: "50 MP",
    processorText: "Dimensity 8300",
    chargingText: "90W",
    scores: {
      battery: 4,
      display: 4,
      ease: 2,
      support: 3,
      camera: 3,
      performance: 5,
      charging: 5,
      delivery: 5,
      reliability: 3
    },
    badge: "Performance pick"
  },
  {
    id: "luma-max",
    brand: "Luma",
    name: "Max S",
    image: "/products/phones/luma-max.svg",
    price: 19499,
    mrp: 23999,
    rating: 4.6,
    reviews: 2194,
    deliveryDays: 2,
    batteryText: "5,500 mAh",
    displayText: "6.78 inch AMOLED",
    supportText: "4 years",
    cameraText: "50 MP",
    processorText: "Snapdragon 6 Gen 2",
    chargingText: "33W",
    scores: {
      battery: 5,
      display: 5,
      ease: 4,
      support: 4,
      camera: 4,
      performance: 3,
      charging: 2,
      delivery: 3,
      reliability: 4
    },
    unknown: "One-handed comfort"
  },
  {
    id: "nexo-cam",
    brand: "Nexo",
    name: "Cam 5",
    image: "/products/phones/nexo-cam.svg",
    price: 18499,
    mrp: 22499,
    rating: 4.4,
    reviews: 3490,
    deliveryDays: 3,
    batteryText: "4,700 mAh",
    displayText: "6.70 inch AMOLED",
    supportText: "4 years",
    cameraText: "108 MP OIS",
    processorText: "Snapdragon 7 Gen 1",
    chargingText: "67W",
    scores: {
      battery: 3,
      display: 5,
      ease: 3,
      support: 4,
      camera: 5,
      performance: 4,
      charging: 4,
      delivery: 2,
      reliability: 4
    },
    badge: "Camera pick"
  },
  {
    id: "kite-core",
    brand: "Kite",
    name: "Core 8",
    image: "/products/phones/kite-core.svg",
    price: 14999,
    mrp: 17999,
    rating: 4.5,
    reviews: 8240,
    deliveryDays: 1,
    batteryText: "5,000 mAh",
    displayText: "6.60 inch FHD+",
    supportText: "3 years",
    cameraText: "50 MP",
    processorText: "Snapdragon 6",
    chargingText: "33W",
    scores: {
      battery: 4,
      display: 4,
      ease: 5,
      support: 3,
      camera: 3,
      performance: 3,
      charging: 3,
      delivery: 5,
      reliability: 5
    },
    badge: "Value pick"
  },
  {
    id: "orbit-plus",
    brand: "Orbit",
    name: "5G Plus",
    image: "/products/phones/orbit-plus.svg",
    price: 15999,
    mrp: 18999,
    rating: 4.2,
    reviews: 4371,
    deliveryDays: 2,
    batteryText: "5,300 mAh",
    displayText: "6.68 inch FHD+",
    supportText: "3 years",
    cameraText: "50 MP",
    processorText: "Dimensity 7050",
    chargingText: "44W",
    scores: {
      battery: 5,
      display: 4,
      ease: 4,
      support: 3,
      camera: 2,
      performance: 4,
      charging: 4,
      delivery: 3,
      reliability: 4
    }
  }
];

function money(value: number) {
  return "₹" + value.toLocaleString("en-IN");
}

function scoreProduct(product: Product, weights: PriorityWeights) {
  const entries = Object.entries(weights) as Array<[PriorityKey, number]>;
  let earned = 0;
  let total = 0;
  entries.forEach(([key, weight]) => {
    earned += product.scores[key] * weight;
    total += 5 * weight;
  });
  return Math.round((earned / total) * 100);
}

function fitDetails(product: Product, weights: PriorityWeights) {
  const important = (Object.entries(weights) as Array<[PriorityKey, number]>)
    .filter(([, weight]) => weight >= 4)
    .sort((a, b) => b[1] - a[1]);
  const matches = important.filter(([key]) => product.scores[key] >= 4);
  const misses = important.filter(([key]) => product.scores[key] < 4);
  return { important, matches, misses };
}

function parseMission(text: string, fallback: Profile) {
  const lower = text.toLowerCase();
  const next: PriorityWeights = { ...neutralWeights };

  const set = (key: PriorityKey, value = 5) => {
    next[key] = Math.max(next[key], value);
  };

  if (/battery|long lasting|last all day/.test(lower)) set("battery");
  if (/screen|display|large/.test(lower)) set("display");
  if (/easy|simple|clean interface|simple controls/.test(lower)) set("ease");
  if (/support|updates|software/.test(lower)) set("support");
  if (/camera|photo|photos/.test(lower)) set("camera");
  if (/performance|fast phone|speed|gaming/.test(lower)) set("performance");
  if (/charging|fast charge/.test(lower)) set("charging");
  if (/delivery|tomorrow|quickly|quick delivery/.test(lower)) set("delivery");
  if (/reliable|reliability|strong ratings|well rated/.test(lower)) set("reliability");

  if (/camera.{0,28}(not important|low priority)|not important.{0,28}camera/.test(lower)) {
    next.camera = 1;
  }
  if (/battery.{0,28}(average|not important|low priority)/.test(lower)) {
    next.battery = 2;
  }

  const detected = (Object.keys(next) as PriorityKey[]).some((key) => next[key] > 1);
  const weights = detected ? next : { ...fallback.weights };

  const match = text.match(/(?:₹|rs\.?\s*)?(\d{1,2})(?:[,\s]?000|k)\b/i);
  let budget = fallback.budget;
  if (match) {
    const base = Number(match[1]);
    if (Number.isFinite(base) && base >= 5 && base <= 99) budget = base * 1000;
  }

  return { weights, budget };
}

function productById(id: string) {
  return products.find((product) => product.id === id);
}

export default function RecipientAwareCommerce() {
  const [view, setView] = useState<View>("home");
  const [recipientId, setRecipientId] = useState<RecipientId>("dad");
  const [recipientMenuOpen, setRecipientMenuOpen] = useState(false);
  const [query, setQuery] = useState("smartphone under 20000");
  const [missionText, setMissionText] = useState(profiles.dad.mission);
  const [weights, setWeights] = useState<PriorityWeights>({ ...profiles.dad.weights });
  const [budget, setBudget] = useState(profiles.dad.budget);
  const [missionOpen, setMissionOpen] = useState(true);
  const [clarification, setClarification] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [memoryModes, setMemoryModes] = useState<Record<RecipientId, MemoryMode>>({
    myself: "remember",
    dad: "remember",
    mom: "remember",
    riya: "remember",
    gift: "none"
  });

  const profile = profiles[recipientId];

  const ranked = useMemo(() => {
    return products
      .filter((product) => product.price <= budget)
      .map((product) => ({ product, score: scoreProduct(product, weights) }))
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (b.product.rating !== a.product.rating) return b.product.rating - a.product.rating;
        return a.product.price - b.product.price;
      });
  }, [budget, weights]);

  const changeRecipient = (id: RecipientId) => {
    const next = profiles[id];
    setRecipientId(id);
    setMissionText(next.mission);
    setWeights({ ...next.weights });
    setBudget(next.budget);
    setClarification(null);
    setRecipientMenuOpen(false);
  };

  const search = (event?: FormEvent) => {
    event?.preventDefault();
    const parsed = parseMission(missionText, profile);
    setWeights(parsed.weights);
    setBudget(parsed.budget);
    setView("results");
  };

  const applyMission = () => {
    const parsed = parseMission(missionText, profile);
    setWeights(parsed.weights);
    setBudget(parsed.budget);
  };

  const addToCart = (productId: string) => {
    setCart((current) => [...current, { productId, recipientId }]);
  };

  const toggleSaved = (productId: string) => {
    setSaved((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  return (
    <main className="min-h-screen bg-[#f4f5f3] text-[#17211f]">
      <CommerceHeader
        query={query}
        setQuery={setQuery}
        onSearch={search}
        onNavigate={setView}
        recipientId={recipientId}
        onRecipientChange={changeRecipient}
        recipientMenuOpen={recipientMenuOpen}
        setRecipientMenuOpen={setRecipientMenuOpen}
        cartCount={cart.length}
        onCart={() => setCartOpen(true)}
      />

      {view === "home" ? (
        <HomeView
          recipientId={recipientId}
          ranked={ranked}
          onSearch={() => setView("results")}
          onRecipientChange={changeRecipient}
          onOpenProduct={setSelectedProduct}
          onAdd={addToCart}
          saved={saved}
          onToggleSaved={toggleSaved}
        />
      ) : null}

      {view === "results" ? (
        <ResultsView
          recipientId={recipientId}
          query={query}
          missionText={missionText}
          setMissionText={setMissionText}
          weights={weights}
          budget={budget}
          ranked={ranked}
          missionOpen={missionOpen}
          setMissionOpen={setMissionOpen}
          onApplyMission={applyMission}
          clarification={clarification}
          setClarification={setClarification}
          onOpenProduct={setSelectedProduct}
          onAdd={addToCart}
          saved={saved}
          onToggleSaved={toggleSaved}
        />
      ) : null}

      {view === "people" ? (
        <PeopleView
          recipientId={recipientId}
          onRecipientChange={changeRecipient}
          memoryModes={memoryModes}
          onMemoryMode={(id, mode) =>
            setMemoryModes((current) => ({ ...current, [id]: mode }))
          }
          onShop={() => setView("results")}
        />
      ) : null}

      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          recipientId={recipientId}
          weights={weights}
          budget={budget}
          memoryMode={memoryModes[recipientId]}
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
          memoryModes={memoryModes}
          onClose={() => setCartOpen(false)}
          onRemove={(index) =>
            setCart((current) => current.filter((_, itemIndex) => itemIndex !== index))
          }
          onReassign={(index, nextId) =>
            setCart((current) =>
              current.map((item, itemIndex) =>
                itemIndex === index ? { ...item, recipientId: nextId } : item
              )
            )
          }
          onCheckout={() => {
            setCartOpen(false);
            setFeedbackOpen(true);
          }}
        />
      ) : null}

      {feedbackOpen ? (
        <FeedbackModal cart={cart} onClose={() => setFeedbackOpen(false)} />
      ) : null}
    </main>
  );
}

function CommerceHeader({
  query,
  setQuery,
  onSearch,
  onNavigate,
  recipientId,
  onRecipientChange,
  recipientMenuOpen,
  setRecipientMenuOpen,
  cartCount,
  onCart
}: {
  query: string;
  setQuery: (value: string) => void;
  onSearch: (event?: FormEvent) => void;
  onNavigate: (view: View) => void;
  recipientId: RecipientId;
  onRecipientChange: (id: RecipientId) => void;
  recipientMenuOpen: boolean;
  setRecipientMenuOpen: (value: boolean) => void;
  cartCount: number;
  onCart: () => void;
}) {
  const profile = profiles[recipientId];

  return (
    <>
      <header className="bg-[#112521] text-white">
        <div className="mx-auto flex max-w-[1500px] items-center gap-3 px-4 py-3 sm:px-6">
          <button className="md:hidden" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>

          <button
            onClick={() => onNavigate("home")}
            className="flex shrink-0 items-center gap-2 text-left"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f3d46b] text-sm font-black text-[#112521]">
              A
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-bold leading-none">Arc Market</span>
              <span className="mt-1 block text-[9px] text-white/55">prototype store</span>
            </span>
          </button>

          <div className="hidden items-center gap-1.5 px-2 text-[10px] text-white/70 lg:flex">
            <MapPin className="h-3.5 w-3.5" />
            Deliver to Ahmedabad
          </div>

          <form
            onSubmit={(event) => onSearch(event)}
            className="flex min-w-0 flex-1 overflow-hidden rounded-lg bg-white"
          >
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-w-0 flex-1 px-3 py-2.5 text-sm text-slate-800 outline-none"
              placeholder="Search products"
            />
            <button
              type="submit"
              className="grid w-11 place-items-center bg-[#f3d46b] text-[#112521]"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          <div className="relative">
            <button
              onClick={() => setRecipientMenuOpen(!recipientMenuOpen)}
              className="flex items-center gap-2 rounded-lg border border-white/15 px-2.5 py-2 hover:bg-white/5"
            >
              <span className={"grid h-7 w-7 place-items-center rounded-full text-[10px] font-bold " + profile.color}>
                {profile.initials}
              </span>
              <span className="hidden text-left md:block">
                <span className="block text-[9px] text-white/55">Shopping for</span>
                <span className="block text-xs font-semibold">{profile.label}</span>
              </span>
              <ChevronDown className="hidden h-3.5 w-3.5 text-white/60 md:block" />
            </button>

            {recipientMenuOpen ? (
              <RecipientMenu
                recipientId={recipientId}
                onRecipientChange={onRecipientChange}
              />
            ) : null}
          </div>

          <button
            onClick={() => onNavigate("people")}
            className="hidden px-2 text-left text-xs font-semibold lg:block"
          >
            <span className="block text-[9px] font-normal text-white/55">Profiles &</span>
            memory
          </button>

          <button onClick={onCart} className="relative flex items-end gap-1 px-1">
            <ShoppingCart className="h-6 w-6" />
            <span className="hidden text-xs font-bold md:inline">Cart</span>
            {cartCount ? (
              <span className="absolute -right-1 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-[#f3d46b] px-1 text-[9px] font-black text-[#112521]">
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </header>

      <nav className="border-b border-[#244038] bg-[#18352f] text-white">
        <div className="mx-auto flex max-w-[1500px] items-center gap-5 overflow-x-auto px-4 py-2 text-[11px] font-medium sm:px-6">
          {["Mobiles", "Electronics", "Fashion", "Home", "Beauty", "Appliances", "Grocery", "Pet care", "Deals"].map(
            (category) => (
              <button
                key={category}
                onClick={() => category === "Mobiles" && onNavigate("results")}
                className="whitespace-nowrap text-white/85 hover:text-white"
              >
                {category}
              </button>
            )
          )}
          <span className="ml-auto hidden whitespace-nowrap text-[#f3d46b] lg:block">
            Context-aware shopping demo
          </span>
        </div>
      </nav>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1500px] items-center gap-2 px-4 py-2 sm:px-6">
          <span className="text-[10px] font-semibold text-slate-400">Shopping context:</span>
          <button
            onClick={() => setRecipientMenuOpen(!recipientMenuOpen)}
            className="flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold"
          >
            <span className={"grid h-5 w-5 place-items-center rounded-full text-[8px] " + profile.color}>
              {profile.initials}
            </span>
            {profile.label}
          </button>
          <span className="text-[10px] text-slate-400">·</span>
          <span className="truncate text-[10px] text-slate-500">
            {profile.temporary
              ? "temporary recipient · nothing remembered after this purchase"
              : profile.saved.slice(0, 3).join(" · ")}
          </span>
        </div>
      </div>
    </>
  );
}

function RecipientMenu({
  recipientId,
  onRecipientChange
}: {
  recipientId: RecipientId;
  onRecipientChange: (id: RecipientId) => void;
}) {
  return (
    <div className="absolute right-0 top-[52px] z-50 w-[310px] overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-2xl">
      <div className="border-b border-slate-100 px-4 py-3">
        <div className="text-xs font-bold">Who are you shopping for?</div>
        <p className="mt-1 text-[10px] leading-4 text-slate-500">
          This changes recommendations without changing the account.
        </p>
      </div>
      <div className="p-2">
        {(Object.keys(profiles) as RecipientId[]).map((id) => {
          const item = profiles[id];
          return (
            <button
              key={id}
              onClick={() => onRecipientChange(id)}
              className={
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left hover:bg-slate-50 " +
                (id === recipientId ? "bg-emerald-50" : "")
              }
            >
              <span className={"grid h-8 w-8 shrink-0 place-items-center rounded-full text-[10px] font-bold " + item.color}>
                {item.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold">{item.label}</span>
                <span className="block truncate text-[10px] text-slate-400">
                  {item.temporary ? "Temporary recipient" : item.saved.join(" · ")}
                </span>
              </span>
              {id === recipientId ? <Check className="h-4 w-4 text-emerald-700" /> : null}
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center gap-2 border-t border-slate-100 px-4 py-3 text-xs font-semibold text-emerald-800">
        <Users className="h-4 w-4" />
        Add person or pet
      </button>
    </div>
  );
}

function HomeView({
  recipientId,
  ranked,
  onSearch,
  onRecipientChange,
  onOpenProduct,
  onAdd,
  saved,
  onToggleSaved
}: {
  recipientId: RecipientId;
  ranked: Array<{ product: Product; score: number }>;
  onSearch: () => void;
  onRecipientChange: (id: RecipientId) => void;
  onOpenProduct: (product: Product) => void;
  onAdd: (id: string) => void;
  saved: string[];
  onToggleSaved: (id: string) => void;
}) {
  const profile = profiles[recipientId];
  const top = ranked[0]?.product;

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6">
      <section className="grid overflow-hidden rounded-2xl bg-[#dfeae4] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-800">
            <Sparkles className="h-4 w-4" />
            Shopping for {profile.label}
          </div>
          <h1 className="mt-3 max-w-xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            {recipientId === "dad"
              ? "A phone that fits Dad, not just your account history."
              : recipientId === "myself"
                ? "Your phone recommendations, using your own priorities."
                : recipientId === "gift"
                  ? "Find the gift. Keep it out of your long-term profile."
                  : "Recommendations built around " + profile.label + "'s needs."}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            {profile.mission}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.saved.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-900/10 bg-white/70 px-3 py-1.5 text-[10px] font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
            {profile.temporary ? (
              <span className="rounded-full bg-amber-100 px-3 py-1.5 text-[10px] font-semibold text-amber-900">
                Do not learn from this purchase
              </span>
            ) : null}
          </div>
          <button
            onClick={onSearch}
            className="mt-6 rounded-lg bg-[#112521] px-5 py-3 text-sm font-semibold text-white"
          >
            Shop smartphones for {profile.label}
          </button>
        </div>

        <div className="relative min-h-[340px] bg-gradient-to-br from-white/40 to-emerald-900/10">
          {top ? (
            <img
              src={top.image}
              alt={top.brand + " " + top.name}
              className="absolute inset-0 h-full w-full object-contain p-4"
            />
          ) : null}
        </div>
      </section>

      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-bold">Shopping profiles</div>
            <p className="mt-1 text-xs text-slate-500">
              Switch context before you shop. The account, payment and delivery stay the same.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(profiles) as RecipientId[]).map((id) => {
              const item = profiles[id];
              return (
                <button
                  key={id}
                  onClick={() => onRecipientChange(id)}
                  className={
                    "flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-semibold " +
                    (id === recipientId
                      ? "border-emerald-700 bg-emerald-50 text-emerald-900"
                      : "border-slate-200 bg-white text-slate-600")
                  }
                >
                  <span className={"grid h-6 w-6 place-items-center rounded-full text-[8px] " + item.color}>
                    {item.initials}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-7">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-[-0.03em]">
              Recommended for {profile.label}
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Ranked using the current recipient context, not the account as one blended identity.
            </p>
          </div>
          <button onClick={onSearch} className="text-xs font-semibold text-emerald-800">
            See all <ChevronRight className="inline h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ranked.slice(0, 4).map(({ product, score }, index) => (
            <StoreProductCard
              key={product.id}
              product={product}
              score={score}
              rank={index + 1}
              recipientId={recipientId}
              onOpen={() => onOpenProduct(product)}
              onAdd={() => onAdd(product.id)}
              saved={saved.includes(product.id)}
              onSave={() => onToggleSaved(product.id)}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <ContextCard
          icon={<User className="h-4 w-4" />}
          title="Recipient profile"
          text="Stable context that may still matter next time, such as device ecosystem, size preferences or recurring needs."
        />
        <ContextCard
          icon={<Search className="h-4 w-4" />}
          title="Current shopping mission"
          text="Temporary context for this decision, such as category, budget, occasion and current priorities."
        />
        <ContextCard
          icon={<ShieldCheck className="h-4 w-4" />}
          title="Memory control"
          text="The shopper decides whether an outcome becomes future memory, stays session-only or is forgotten."
        />
      </section>
    </div>
  );
}

function ContextCard({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-sm font-bold">
        {icon}
        {title}
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
    </div>
  );
}

function ResultsView({
  recipientId,
  query,
  missionText,
  setMissionText,
  weights,
  budget,
  ranked,
  missionOpen,
  setMissionOpen,
  onApplyMission,
  clarification,
  setClarification,
  onOpenProduct,
  onAdd,
  saved,
  onToggleSaved
}: {
  recipientId: RecipientId;
  query: string;
  missionText: string;
  setMissionText: (value: string) => void;
  weights: PriorityWeights;
  budget: number;
  ranked: Array<{ product: Product; score: number }>;
  missionOpen: boolean;
  setMissionOpen: (value: boolean) => void;
  onApplyMission: () => void;
  clarification: string | null;
  setClarification: (value: string | null) => void;
  onOpenProduct: (product: Product) => void;
  onAdd: (id: string) => void;
  saved: string[];
  onToggleSaved: (id: string) => void;
}) {
  const profile = profiles[recipientId];
  const top = ranked[0]?.product;
  const hardExcluded = products.length - ranked.length;

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-4 sm:px-6">
      <div className="text-[10px] text-slate-500">
        Home <span className="mx-1">›</span> Mobiles <span className="mx-1">›</span> Smartphones
      </div>

      <div className="mt-3 grid gap-5 xl:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="hidden self-start border border-slate-200 bg-white xl:block">
          <div className="border-b border-slate-200 p-4">
            <div className="flex items-center gap-2 text-sm font-bold">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </div>
          </div>
          <FilterGroup title="Price">
            <FilterCheck checked label={"Under " + money(budget)} />
            <FilterCheck label="₹10,000 – ₹15,000" />
            <FilterCheck label="₹15,000 – ₹20,000" />
          </FilterGroup>
          <FilterGroup title="Customer rating">
            <FilterCheck label="4★ & above" />
            <FilterCheck label="4.5★ & above" />
          </FilterGroup>
          <FilterGroup title="Features">
            <FilterCheck checked={weights.battery >= 4} label="Strong battery" />
            <FilterCheck checked={weights.display >= 4} label="Large display" />
            <FilterCheck checked={weights.camera >= 4} label="Camera" />
            <FilterCheck checked={weights.charging >= 4} label="Fast charging" />
          </FilterGroup>
          <FilterGroup title={"Saved for " + profile.label}>
            {profile.saved.slice(0, 4).map((item) => (
              <FilterCheck key={item} checked label={item} />
            ))}
          </FilterGroup>
        </aside>

        <section className="min-w-0">
          <div className="border border-slate-200 bg-white">
            <div className="border-b border-slate-100 p-4 sm:p-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h1 className="text-xl font-bold tracking-[-0.03em] sm:text-2xl">
                    Smartphones under {money(budget)}
                  </h1>
                  <p className="mt-1 text-xs text-slate-500">
                    {ranked.length} results for “{query}” · ranked for <strong>{profile.label}</strong>
                  </p>
                </div>
                <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold">
                  <option>Best fit for {profile.label}</option>
                  <option>Price: Low to High</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => setMissionOpen(!missionOpen)}
              className="flex w-full items-center justify-between gap-4 border-b border-slate-200 bg-[#f8fbf9] p-4 text-left"
            >
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-800">
                  Shopping mission · {profile.label}
                </span>
                <span className="mt-1 block text-xs text-slate-600">
                  {missionText}
                </span>
              </span>
              <ChevronDown className={"h-4 w-4 shrink-0 text-slate-400 transition " + (missionOpen ? "rotate-180" : "")} />
            </button>

            {missionOpen ? (
              <div className="border-b border-slate-200 p-4 sm:p-5">
                <div className="grid gap-4 lg:grid-cols-[1fr_330px]">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Tell us what matters for this purchase
                    </label>
                    <textarea
                      rows={4}
                      value={missionText}
                      onChange={(event) => setMissionText(event.target.value)}
                      className="mt-2 w-full resize-none rounded-lg border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-emerald-500"
                    />
                    <button
                      onClick={onApplyMission}
                      className="mt-2 rounded-lg bg-[#112521] px-4 py-2.5 text-xs font-semibold text-white"
                    >
                      Update recommendations
                    </button>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Interpreted context
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(Object.entries(weights) as Array<[PriorityKey, number]>)
                        .filter(([, weight]) => weight >= 4)
                        .map(([key, weight]) => (
                          <span
                            key={key}
                            className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-800"
                          >
                            {priorityLabels[key]} · {weight === 5 ? "high" : "medium"}
                          </span>
                        ))}
                      <span className="rounded-full bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600">
                        Budget {money(budget)}
                      </span>
                    </div>
                    <p className="mt-3 text-[10px] leading-4 text-slate-400">
                      Profile and current mission stay separate. A one-time budget does not become a permanent preference.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="mt-3 border border-slate-200 bg-white p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs font-bold">One detail is still ambiguous</div>
                <p className="mt-1 text-[11px] text-slate-500">
                  “Easy to use” can mean different things. Asking is more reliable than silently guessing.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Clean interface", "Larger controls", "Simple setup"].map((choice) => (
                  <button
                    key={choice}
                    onClick={() => setClarification(choice)}
                    className={
                      "rounded-full border px-3 py-1.5 text-[10px] font-semibold " +
                      (clarification === choice
                        ? "border-emerald-700 bg-emerald-50 text-emerald-900"
                        : "border-slate-200 text-slate-600")
                    }
                  >
                    {choice}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 border border-slate-200 bg-white">
            <div className="flex flex-col gap-2 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-bold">
                  Results ordered for {profile.label}
                </div>
                <div className="mt-1 text-[10px] text-slate-500">
                  Hard requirement first: {hardExcluded} product{hardExcluded === 1 ? "" : "s"} excluded above budget.
                  Then mission fit, saved recipient preferences, quality, price and availability.
                </div>
              </div>
              {top ? (
                <div className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-800">
                  #1 now: {top.brand} {top.name}
                </div>
              ) : null}
            </div>

            <div className="divide-y divide-slate-100">
              {ranked.map(({ product, score }, index) => (
                <SearchResultCard
                  key={product.id}
                  product={product}
                  score={score}
                  rank={index + 1}
                  recipientId={recipientId}
                  weights={weights}
                  onOpen={() => onOpenProduct(product)}
                  onAdd={() => onAdd(product.id)}
                  saved={saved.includes(product.id)}
                  onSave={() => onToggleSaved(product.id)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SearchResultCard({
  product,
  score,
  rank,
  recipientId,
  weights,
  onOpen,
  onAdd,
  saved,
  onSave
}: {
  product: Product;
  score: number;
  rank: number;
  recipientId: RecipientId;
  weights: PriorityWeights;
  onOpen: () => void;
  onAdd: () => void;
  saved: boolean;
  onSave: () => void;
}) {
  const profile = profiles[recipientId];
  const fit = fitDetails(product, weights);

  return (
    <article className="grid gap-4 p-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:p-5">
      <button onClick={onOpen} className="relative overflow-hidden rounded-lg bg-slate-50">
        <img
          src={product.image}
          alt={product.brand + " " + product.name}
          className="aspect-square h-full w-full object-contain"
        />
        {product.badge ? (
          <span className="absolute left-2 top-2 rounded bg-white/95 px-2 py-1 text-[9px] font-bold shadow">
            {product.badge}
          </span>
        ) : null}
      </button>

      <div className="min-w-0">
        <div className="flex items-start gap-3">
          <button onClick={onOpen} className="min-w-0 flex-1 text-left">
            <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">{product.brand}</div>
            <h2 className="mt-1 text-lg font-semibold leading-6 hover:text-emerald-800">
              {product.name} 5G Smartphone, {product.displayText}, {product.batteryText}
            </h2>
          </button>
          <button onClick={onSave} className="p-1.5 text-slate-400" aria-label="Save product">
            <Heart className={"h-5 w-5 " + (saved ? "fill-rose-500 text-rose-500" : "")} />
          </button>
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
          <span className="rounded bg-emerald-700 px-1.5 py-0.5 font-bold text-white">{product.rating} ★</span>
          <span>{product.reviews.toLocaleString("en-IN")} ratings</span>
          <span>·</span>
          <span>{product.deliveryDays === 1 ? "Delivery tomorrow" : "Delivery in " + product.deliveryDays + " days"}</span>
        </div>

        <div className="mt-3 flex flex-wrap items-baseline gap-2">
          <span className="text-2xl font-bold">{money(product.price)}</span>
          <span className="text-xs text-slate-400 line-through">{money(product.mrp)}</span>
          <span className="text-xs font-semibold text-emerald-700">
            {Math.round((1 - product.price / product.mrp) * 100)}% off
          </span>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-600">
            <SpecLine label="Battery" value={product.batteryText} />
            <SpecLine label="Display" value={product.displayText} />
            <SpecLine label="Camera" value={product.cameraText} />
            <SpecLine label="Processor" value={product.processorText} />
            <SpecLine label="Updates" value={product.supportText} />
            <SpecLine label="Charging" value={product.chargingText} />
          </div>

          <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-emerald-900">
                {rank === 1 ? "Best fit for " + profile.label : "Fit for " + profile.label}
              </span>
              <span className="text-[10px] font-bold text-emerald-700">{score}%</span>
            </div>
            <div className="mt-2 space-y-1">
              {fit.matches.slice(0, 3).map(([key]) => (
                <div key={key} className="flex items-center gap-1.5 text-[10px] text-emerald-800">
                  <Check className="h-3 w-3" />
                  {priorityLabels[key]}
                </div>
              ))}
              {fit.misses.slice(0, 1).map(([key]) => (
                <div key={key} className="flex items-center gap-1.5 text-[10px] text-amber-800">
                  <Info className="h-3 w-3" />
                  Weaker on {priorityLabels[key].toLowerCase()}
                </div>
              ))}
              {product.unknown ? (
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <span className="font-bold">?</span>
                  Unknown: {product.unknown}
                </div>
              ) : null}
            </div>
            <button
              onClick={onOpen}
              className="mt-2 text-[10px] font-bold text-emerald-900 underline underline-offset-2"
            >
              Why this fits
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={onAdd}
            className="rounded-lg bg-[#ffd814] px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-[#f7ca00]"
          >
            Add to cart · for {profile.label}
          </button>
          <button onClick={onOpen} className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold">
            View details
          </button>
        </div>
      </div>
    </article>
  );
}

function StoreProductCard({
  product,
  score,
  rank,
  recipientId,
  onOpen,
  onAdd,
  saved,
  onSave
}: {
  product: Product;
  score: number;
  rank: number;
  recipientId: RecipientId;
  onOpen: () => void;
  onAdd: () => void;
  saved: boolean;
  onSave: () => void;
}) {
  const profile = profiles[recipientId];

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative bg-slate-50">
        <button onClick={onOpen} className="block w-full">
          <img
            src={product.image}
            alt={product.brand + " " + product.name}
            className="aspect-square w-full object-contain"
          />
          <span className="absolute left-2 top-2 rounded bg-white/95 px-2 py-1 text-[9px] font-bold shadow">
            #{rank} for {profile.label}
          </span>
        </button>
        <button
          onClick={onSave}
          className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white shadow"
          aria-label="Save"
        >
          <Heart className={"h-4 w-4 " + (saved ? "fill-rose-500 text-rose-500" : "text-slate-400")} />
        </button>
      </div>
      <div className="p-3.5">
        <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">{product.brand}</div>
        <button onClick={onOpen} className="mt-1 text-left text-sm font-semibold hover:text-emerald-800">
          {product.name}
        </button>
        <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-500">
          <span className="rounded bg-emerald-700 px-1.5 py-0.5 font-bold text-white">{product.rating} ★</span>
          {product.reviews.toLocaleString("en-IN")}
        </div>
        <div className="mt-2">
          <span className="text-lg font-bold">{money(product.price)}</span>
          <span className="ml-2 text-[10px] text-slate-400 line-through">{money(product.mrp)}</span>
        </div>
        <div className="mt-3 rounded-lg bg-emerald-50 p-2.5">
          <div className="flex items-center justify-between text-[10px] font-bold text-emerald-900">
            <span>{rank === 1 ? "Best fit for " + profile.label : "Fit for " + profile.label}</span>
            <span>{score}%</span>
          </div>
        </div>
        <button
          onClick={onAdd}
          className="mt-3 w-full rounded-lg bg-[#ffd814] py-2 text-xs font-semibold text-slate-900"
        >
          Add for {profile.label}
        </button>
      </div>
    </article>
  );
}

function ProductDetail({
  product,
  recipientId,
  weights,
  budget,
  memoryMode,
  onClose,
  onAdd
}: {
  product: Product;
  recipientId: RecipientId;
  weights: PriorityWeights;
  budget: number;
  memoryMode: MemoryMode;
  onClose: () => void;
  onAdd: () => void;
}) {
  const profile = profiles[recipientId];
  const fit = fitDetails(product, weights);
  const score = scoreProduct(product, weights);

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-white">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
        <div className="text-sm font-bold">Product details</div>
        <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mx-auto max-w-[1350px] px-4 py-6 sm:px-6">
        <div className="text-[10px] text-slate-500">
          Mobiles › Smartphones › {product.brand} › {product.name}
        </div>

        <div className="mt-4 grid gap-7 lg:grid-cols-[520px_minmax(0,1fr)]">
          <div className="self-start lg:sticky lg:top-20">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img src={product.image} alt={product.brand + " " + product.name} className="aspect-square w-full object-contain" />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={product.image} alt="" className="aspect-square w-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{product.brand}</div>
            <h1 className="mt-1 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              {product.name} 5G Smartphone
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="rounded bg-emerald-700 px-2 py-1 font-bold text-white">{product.rating} ★</span>
              <span>{product.reviews.toLocaleString("en-IN")} ratings</span>
              <span>·</span>
              <span>Free delivery</span>
            </div>

            <div className="mt-4 border-y border-slate-200 py-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{money(product.price)}</span>
                <span className="text-sm text-slate-400 line-through">{money(product.mrp)}</span>
                <span className="text-sm font-semibold text-emerald-700">
                  {Math.round((1 - product.price / product.mrp) * 100)}% off
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Inclusive of all taxes</p>
            </div>

            <section className="mt-5 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-4 sm:p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">
                    <Sparkles className="h-4 w-4" />
                    Fit for {profile.label}
                  </div>
                  <h2 className="mt-1 text-lg font-bold text-emerald-950">
                    {score}% match to this shopping mission
                  </h2>
                </div>
                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-emerald-900">
                  Shopping for {profile.label}
                </span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {fit.matches.map(([key]) => (
                  <div key={key} className="flex items-center gap-2 rounded-lg bg-white p-3 text-xs text-emerald-900">
                    <Check className="h-4 w-4" />
                    <span className="flex-1">{priorityLabels[key]}</span>
                    <strong>{product.scores[key]}/5</strong>
                  </div>
                ))}
                {fit.misses.map(([key]) => (
                  <div key={key} className="flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
                    <Info className="h-4 w-4" />
                    <span className="flex-1">{priorityLabels[key]}</span>
                    <strong>{product.scores[key]}/5</strong>
                  </div>
                ))}
              </div>

              {product.unknown ? (
                <div className="mt-3 rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-600">
                  <strong className="text-slate-900">Unknown:</strong> {product.unknown}. This should remain unknown rather than be inferred as fact.
                </div>
              ) : null}
            </section>

            <section className="mt-5">
              <h2 className="text-base font-bold">Key specifications</h2>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                <PdpSpec icon={<Battery className="h-4 w-4" />} label="Battery" value={product.batteryText} />
                <PdpSpec icon={<SmartphoneIcon />} label="Display" value={product.displayText} />
                <PdpSpec icon={<PackageCheck className="h-4 w-4" />} label="Updates" value={product.supportText} />
                <PdpSpec icon={<Sparkles className="h-4 w-4" />} label="Camera" value={product.cameraText} />
                <PdpSpec icon={<SlidersHorizontal className="h-4 w-4" />} label="Processor" value={product.processorText} />
                <PdpSpec icon={<Battery className="h-4 w-4" />} label="Charging" value={product.chargingText} />
              </div>
            </section>

            <section className="mt-5 border-t border-slate-200 pt-5">
              <div className="grid gap-3 sm:grid-cols-[1fr_220px]">
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="text-xs font-bold">This purchase will be attributed to {profile.label}</div>
                  <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    Product views, cart, purchase and outcome can stay attached to the recipient context instead of automatically becoming your own preference history.
                  </p>
                  <div className="mt-2 inline-flex rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                    {memoryMode === "remember"
                      ? "Remember outcomes for " + profile.label
                      : memoryMode === "session"
                        ? "Use only for this purchase"
                        : "Do not learn from this purchase"}
                  </div>
                </div>
                <button
                  onClick={onAdd}
                  disabled={product.price > budget}
                  className="rounded-xl bg-[#ffd814] px-5 py-4 text-sm font-bold text-slate-900 disabled:opacity-50"
                >
                  Add to cart
                  <span className="mt-1 block text-[10px] font-medium">for {profile.label}</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function PeopleView({
  recipientId,
  onRecipientChange,
  memoryModes,
  onMemoryMode,
  onShop
}: {
  recipientId: RecipientId;
  onRecipientChange: (id: RecipientId) => void;
  memoryModes: Record<RecipientId, MemoryMode>;
  onMemoryMode: (id: RecipientId, mode: MemoryMode) => void;
  onShop: () => void;
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-800">
            Profiles & memory
          </div>
          <h1 className="mt-1 text-3xl font-bold tracking-[-0.04em]">People you shop for</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            See what the platform remembers, who each preference belongs to and whether future purchases can update that context.
          </p>
        </div>
        <button className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold">
          + Add person or pet
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {(Object.keys(profiles) as RecipientId[]).map((id) => {
          const profile = profiles[id];
          return (
            <section
              key={id}
              className={
                "rounded-2xl border bg-white p-5 " +
                (id === recipientId ? "border-emerald-500 ring-2 ring-emerald-100" : "border-slate-200")
              }
            >
              <div className="flex items-center gap-3">
                <span className={"grid h-11 w-11 place-items-center rounded-full text-sm font-bold " + profile.color}>
                  {profile.initials}
                </span>
                <div className="flex-1">
                  <div className="text-base font-bold">{profile.label}</div>
                  <div className="text-[10px] text-slate-400">{profile.relation}</div>
                </div>
                {profile.temporary ? <Gift className="h-5 w-5 text-amber-600" /> : <User className="h-5 w-5 text-slate-300" />}
              </div>

              {profile.saved.length ? (
                <>
                  <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Remembered preferences
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.saved.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <div className="mt-4 rounded-lg bg-amber-50 p-3 text-[11px] leading-5 text-amber-900">
                  Temporary shopping context. Nothing needs to be permanently stored.
                </div>
              )}

              <div className="mt-4 rounded-lg border border-slate-200 p-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Learning control
                </div>
                <select
                  value={memoryModes[id]}
                  onChange={(event) => onMemoryMode(id, event.target.value as MemoryMode)}
                  className="mt-2 w-full bg-transparent text-xs font-semibold outline-none"
                >
                  <option value="remember">Remember useful outcomes</option>
                  <option value="session">Use only for current purchase</option>
                  <option value="none">Do not learn from purchases</option>
                </select>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    onRecipientChange(id);
                    onShop();
                  }}
                  className="flex-1 rounded-lg bg-[#112521] px-3 py-2.5 text-xs font-semibold text-white"
                >
                  Shop for {profile.label}
                </button>
                <button className="rounded-lg border border-slate-300 px-3 py-2.5 text-xs font-semibold">
                  Edit
                </button>
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2 text-sm font-bold">
          <ShieldCheck className="h-4 w-4" />
          What this avoids
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <MemoryPrinciple
            title="Gift ≠ preference"
            text="A one-time gift can disappear from personalization after the purchase."
          />
          <MemoryPrinciple
            title="Mission ≠ profile"
            text="A ₹20,000 budget for one phone does not become a permanent assumption about Dad."
          />
          <MemoryPrinciple
            title="Purchase ≠ satisfaction"
            text="Outcome feedback can update the correct recipient instead of treating every purchase as a preference."
          />
        </div>
      </div>
    </div>
  );
}

function CartDrawer({
  cart,
  memoryModes,
  onClose,
  onRemove,
  onReassign,
  onCheckout
}: {
  cart: CartItem[];
  memoryModes: Record<RecipientId, MemoryMode>;
  onClose: () => void;
  onRemove: (index: number) => void;
  onReassign: (index: number, id: RecipientId) => void;
  onCheckout: () => void;
}) {
  const subtotal = cart.reduce((sum, item) => sum + (productById(item.productId)?.price ?? 0), 0);

  return (
    <div className="fixed inset-0 z-[90] flex justify-end bg-black/45" onMouseDown={onClose}>
      <aside
        className="h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800">
              Cart
            </div>
            <h2 className="text-lg font-bold">{cart.length} item{cart.length === 1 ? "" : "s"}</h2>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        {cart.length ? (
          <div className="p-4">
            <div className="space-y-4">
              {cart.map((item, index) => {
                const product = productById(item.productId);
                if (!product) return null;
                const recipient = profiles[item.recipientId];
                const memoryMode = memoryModes[item.recipientId];

                return (
                  <div key={item.productId + "-" + index} className="rounded-xl border border-slate-200 p-3">
                    <div className="flex gap-3">
                      <img src={product.image} alt="" className="h-24 w-24 rounded-lg bg-slate-50 object-contain" />
                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">{product.brand}</div>
                        <div className="text-sm font-semibold">{product.name}</div>
                        <div className="mt-1 text-sm font-bold">{money(product.price)}</div>
                        <button onClick={() => onRemove(index)} className="mt-2 text-[10px] font-semibold text-rose-600">
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 grid gap-2 rounded-lg bg-slate-50 p-3">
                      <label className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Who is this for?
                      </label>
                      <select
                        value={item.recipientId}
                        onChange={(event) => onReassign(index, event.target.value as RecipientId)}
                        className="bg-transparent text-xs font-semibold outline-none"
                      >
                        {(Object.keys(profiles) as RecipientId[]).map((id) => (
                          <option key={id} value={id}>
                            {profiles[id].label}
                          </option>
                        ))}
                      </select>
                      <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-500">
                        <ShieldCheck className="h-3 w-3" />
                        {memoryMode === "remember"
                          ? "Outcome can update " + recipient.label + "'s profile"
                          : memoryMode === "session"
                            ? "Use only for this purchase"
                            : "Do not learn from this item"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <strong className="text-lg">{money(subtotal)}</strong>
              </div>
              <button
                onClick={onCheckout}
                className="mt-4 w-full rounded-lg bg-[#ffd814] py-3 text-sm font-bold text-slate-900"
              >
                Proceed to simulated checkout
              </button>
              <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
                Payment is skipped. The demo continues to post-purchase outcome learning.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid min-h-[70vh] place-items-center p-6 text-center">
            <div>
              <ShoppingCart className="mx-auto h-9 w-9 text-slate-300" />
              <h3 className="mt-3 text-base font-bold">Your cart is empty</h3>
              <p className="mt-1 text-xs text-slate-500">Add a phone to see recipient attribution continue into cart.</p>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

function FeedbackModal({
  cart,
  onClose
}: {
  cart: CartItem[];
  onClose: () => void;
}) {
  const [done, setDone] = useState(false);
  const item = cart[0];
  const product = item ? productById(item.productId) : undefined;
  const recipient = item ? profiles[item.recipientId] : undefined;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/50 p-4" onMouseDown={onClose}>
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800">
              After delivery
            </div>
            <h2 className="mt-1 text-xl font-bold">
              Did this work for {recipient?.label ?? "the recipient"}?
            </h2>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        {product ? (
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 p-3">
            <img src={product.image} alt="" className="h-20 w-20 rounded-lg bg-slate-50 object-contain" />
            <div>
              <div className="text-[9px] font-bold uppercase text-slate-400">{product.brand}</div>
              <div className="text-sm font-semibold">{product.name}</div>
              <div className="mt-1 text-[10px] text-slate-500">
                Purchased for {recipient?.label}
              </div>
            </div>
          </div>
        ) : null}

        {!done ? (
          <>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Purchase tells the platform what was chosen. Outcome feedback tells it whether the decision actually worked.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button onClick={() => setDone(true)} className="rounded-lg border border-emerald-300 bg-emerald-50 py-3 text-xs font-semibold text-emerald-900">
                Worked well
              </button>
              <button onClick={() => setDone(true)} className="rounded-lg border border-slate-200 py-3 text-xs font-semibold">
                Some issues
              </button>
            </div>
          </>
        ) : (
          <div className="mt-4 rounded-xl bg-emerald-50 p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
              <Check className="h-4 w-4" />
              Outcome attached to {recipient?.label}
            </div>
            <p className="mt-2 text-xs leading-5 text-emerald-800">
              This signal can improve future shopping for {recipient?.label} without automatically changing the account holder's own preferences.
            </p>
          </div>
        )}

        <button onClick={onClose} className="mt-5 w-full rounded-lg bg-[#112521] py-3 text-sm font-semibold text-white">
          Close
        </button>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-slate-100 p-4">
      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{title}</div>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}

function FilterCheck({
  label,
  checked = false
}: {
  label: string;
  checked?: boolean;
}) {
  return (
    <label className="flex items-center gap-2 text-xs text-slate-600">
      <input type="checkbox" checked={checked} readOnly className="h-3.5 w-3.5 accent-emerald-700" />
      {label}
    </label>
  );
}

function SpecLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-slate-400">{label}: </span>
      <span className="font-medium text-slate-700">{value}</span>
    </div>
  );
}

function PdpSpec({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-3">
      <div className="flex items-center gap-2 text-slate-400">
        {icon}
        <span className="text-[9px] font-bold uppercase tracking-[0.1em]">{label}</span>
      </div>
      <div className="mt-2 text-sm font-semibold">{value}</div>
    </div>
  );
}

function MemoryPrinciple({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-xs font-bold">{title}</div>
      <p className="mt-2 text-[11px] leading-5 text-slate-500">{text}</p>
    </div>
  );
}

function SmartphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
