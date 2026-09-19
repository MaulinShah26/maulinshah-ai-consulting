"use client";

import {
  Battery,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Gift,
  Heart,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  User,
  Users,
  X
} from "lucide-react";
import { FormEvent, ReactNode, useMemo, useState } from "react";

type RecipientId = "myself" | "dad" | "mom" | "riya" | "gift";
type Screen = "home" | "results" | "profiles";
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
  avatarStyle: string;
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
  battery: "Strong battery",
  display: "Large display",
  ease: "Easy to use",
  support: "Long software support",
  camera: "Camera quality",
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
    avatarStyle: "bg-[#1d1f1d] text-white"
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
    avatarStyle: "bg-[#e9f7bf] text-[#2e3c12]"
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
    avatarStyle: "bg-[#ffe4df] text-[#7c3d34]"
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
    avatarStyle: "bg-[#e8e2ff] text-[#524681]"
  },
  gift: {
    id: "gift",
    label: "One-time gift",
    relation: "Temporary recipient",
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
    avatarStyle: "bg-[#fff0b8] text-[#6e5200]"
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

  return {
    important,
    matches: important.filter(([key]) => product.scores[key] >= 4),
    misses: important.filter(([key]) => product.scores[key] < 4)
  };
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

  const detected = (Object.keys(next) as PriorityKey[]).some((key) => next[key] > 1);
  const weights = detected ? next : { ...fallback.weights };

  const match = text.match(/(?:₹|rs\.?\s*)?(\d{1,2})(?:[,\s]?000|k)\b/i);
  let budget = fallback.budget;

  if (match) {
    const base = Number(match[1]);
    if (Number.isFinite(base) && base >= 5 && base <= 99) {
      budget = base * 1000;
    }
  }

  return { weights, budget };
}

function productById(id: string) {
  return products.find((product) => product.id === id);
}

export default function RecipientAwareCommerce() {
  const [screen, setScreen] = useState<Screen>("home");
  const [recipientId, setRecipientId] = useState<RecipientId>("dad");
  const [recipientOpen, setRecipientOpen] = useState(false);
  const [missionText, setMissionText] = useState(profiles.dad.mission);
  const [weights, setWeights] = useState<PriorityWeights>({ ...profiles.dad.weights });
  const [budget, setBudget] = useState(profiles.dad.budget);
  const [missionOpen, setMissionOpen] = useState(false);
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
      .map((product) => ({
        product,
        score: scoreProduct(product, weights)
      }))
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
    setRecipientOpen(false);
  };

  const applyMission = () => {
    const parsed = parseMission(missionText, profile);
    setWeights(parsed.weights);
    setBudget(parsed.budget);
    setMissionOpen(false);
  };

  const search = (event?: FormEvent) => {
    event?.preventDefault();
    applyMission();
    setScreen("results");
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
    <main className="min-h-screen bg-[#f6f6f3] text-[#1d1f1d]">
      <Header
        screen={screen}
        setScreen={setScreen}
        profile={profile}
        recipientId={recipientId}
        recipientOpen={recipientOpen}
        setRecipientOpen={setRecipientOpen}
        onRecipientChange={changeRecipient}
        onSearch={search}
        cartCount={cart.length}
        onCart={() => setCartOpen(true)}
      />

      <ContextStrip
        profile={profile}
        budget={budget}
        weights={weights}
        onEdit={() => setMissionOpen(true)}
        onRecipient={() => setRecipientOpen(true)}
      />

      {screen === "home" ? (
        <HomeScreen
          profile={profile}
          recipientId={recipientId}
          ranked={ranked}
          missionText={missionText}
          setMissionText={setMissionText}
          onSearch={search}
          onRecipientChange={changeRecipient}
          onProduct={setSelectedProduct}
          onAdd={addToCart}
          saved={saved}
          onSave={toggleSaved}
        />
      ) : null}

      {screen === "results" ? (
        <ResultsScreen
          profile={profile}
          recipientId={recipientId}
          ranked={ranked}
          weights={weights}
          budget={budget}
          missionText={missionText}
          onEditMission={() => setMissionOpen(true)}
          onProduct={setSelectedProduct}
          onAdd={addToCart}
          saved={saved}
          onSave={toggleSaved}
        />
      ) : null}

      {screen === "profiles" ? (
        <ProfilesScreen
          recipientId={recipientId}
          onRecipientChange={changeRecipient}
          memoryModes={memoryModes}
          onMemoryMode={(id, mode) =>
            setMemoryModes((current) => ({ ...current, [id]: mode }))
          }
          onShop={() => setScreen("results")}
        />
      ) : null}

      {missionOpen ? (
        <MissionEditor
          profile={profile}
          missionText={missionText}
          setMissionText={setMissionText}
          weights={weights}
          budget={budget}
          onApply={applyMission}
          onClose={() => setMissionOpen(false)}
        />
      ) : null}

      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          recipientId={recipientId}
          weights={weights}
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
          items={cart}
          memoryModes={memoryModes}
          onClose={() => setCartOpen(false)}
          onRemove={(index) =>
            setCart((current) => current.filter((_, itemIndex) => itemIndex !== index))
          }
          onReassign={(index, id) =>
            setCart((current) =>
              current.map((item, itemIndex) =>
                itemIndex === index ? { ...item, recipientId: id } : item
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
        <OutcomeModal
          items={cart}
          onClose={() => setFeedbackOpen(false)}
        />
      ) : null}
    </main>
  );
}

function Header({
  screen,
  setScreen,
  profile,
  recipientId,
  recipientOpen,
  setRecipientOpen,
  onRecipientChange,
  onSearch,
  cartCount,
  onCart
}: {
  screen: Screen;
  setScreen: (screen: Screen) => void;
  profile: Profile;
  recipientId: RecipientId;
  recipientOpen: boolean;
  setRecipientOpen: (value: boolean) => void;
  onRecipientChange: (id: RecipientId) => void;
  onSearch: (event?: FormEvent) => void;
  cartCount: number;
  onCart: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => setScreen("home")}
          className="flex shrink-0 items-center gap-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1d1f1d] text-xs font-black text-white">
            N
          </span>
          <span className="hidden text-sm font-black tracking-[-0.03em] sm:block">
            NOVA
          </span>
        </button>

        <form
          onSubmit={(event) => onSearch(event)}
          className="flex min-w-0 flex-1 items-center gap-2 rounded-2xl border border-black/[0.08] bg-[#f7f7f4] px-3"
        >
          <Search className="h-4 w-4 shrink-0 text-black/35" />
          <input
            defaultValue="smartphone under ₹20,000"
            className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none"
            aria-label="Search products"
          />
          <button
            type="submit"
            className="rounded-xl bg-[#1d1f1d] px-3 py-2 text-[10px] font-black text-white"
          >
            Search
          </button>
        </form>

        <div className="relative">
          <button
            onClick={() => setRecipientOpen(!recipientOpen)}
            className="flex items-center gap-2 rounded-2xl border border-black/[0.08] bg-white px-2.5 py-2"
          >
            <span className={"grid h-8 w-8 place-items-center rounded-full text-[10px] font-black " + profile.avatarStyle}>
              {profile.initials}
            </span>
            <span className="hidden text-left md:block">
              <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-black/35">
                Shopping for
              </span>
              <span className="block text-xs font-black">{profile.label}</span>
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-black/35" />
          </button>

          {recipientOpen ? (
            <RecipientMenu
              recipientId={recipientId}
              onSelect={onRecipientChange}
            />
          ) : null}
        </div>

        <button
          onClick={() => setScreen("profiles")}
          className={
            "hidden rounded-xl px-3 py-2 text-xs font-black lg:block " +
            (screen === "profiles" ? "bg-[#eef6cd]" : "text-black/55")
          }
        >
          Profiles
        </button>

        <button
          onClick={onCart}
          className="relative grid h-11 w-11 place-items-center rounded-2xl bg-[#1d1f1d] text-white"
          aria-label="Open cart"
        >
          <ShoppingBag className="h-4 w-4" />
          {cartCount ? (
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#dff168] px-1 text-[9px] font-black text-[#1d1f1d]">
              {cartCount}
            </span>
          ) : null}
        </button>
      </div>

      <div className="border-t border-black/[0.04] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center gap-5 overflow-x-auto px-4 py-2.5 text-[11px] font-bold text-black/50 sm:px-6 lg:px-8">
          {["Mobiles", "Audio", "Wearables", "Computing", "Home", "Beauty", "Fashion", "Pet care"].map((item) => (
            <button
              key={item}
              onClick={() => item === "Mobiles" && setScreen("results")}
              className="whitespace-nowrap hover:text-black"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function RecipientMenu({
  recipientId,
  onSelect
}: {
  recipientId: RecipientId;
  onSelect: (id: RecipientId) => void;
}) {
  return (
    <div className="absolute right-0 top-[56px] z-50 w-[320px] rounded-3xl border border-black/[0.08] bg-white p-3 shadow-2xl">
      <div className="px-2 pb-2">
        <div className="text-xs font-black">Who are you shopping for?</div>
        <p className="mt-1 text-[10px] leading-4 text-black/40">
          Change the person without changing the account.
        </p>
      </div>

      <div className="space-y-1">
        {(Object.keys(profiles) as RecipientId[]).map((id) => {
          const item = profiles[id];
          return (
            <button
              key={id}
              onClick={() => onSelect(id)}
              className={
                "flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left hover:bg-black/[0.03] " +
                (id === recipientId ? "bg-[#f1f6df]" : "")
              }
            >
              <span className={"grid h-9 w-9 shrink-0 place-items-center rounded-full text-[10px] font-black " + item.avatarStyle}>
                {item.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-black">{item.label}</span>
                <span className="block truncate text-[10px] text-black/35">
                  {item.temporary ? "One-time context" : item.saved.join(" · ")}
                </span>
              </span>
              {id === recipientId ? <Check className="h-4 w-4" /> : null}
            </button>
          );
        })}
      </div>

      <button className="mt-2 flex w-full items-center gap-2 rounded-2xl border border-dashed border-black/15 px-3 py-3 text-xs font-black">
        <Users className="h-4 w-4" />
        Add person or pet
      </button>
    </div>
  );
}

function ContextStrip({
  profile,
  budget,
  weights,
  onEdit,
  onRecipient
}: {
  profile: Profile;
  budget: number;
  weights: PriorityWeights;
  onEdit: () => void;
  onRecipient: () => void;
}) {
  const priorities = (Object.entries(weights) as Array<[PriorityKey, number]>)
    .filter(([, weight]) => weight >= 4)
    .slice(0, 4);

  return (
    <div className="border-b border-black/[0.06] bg-[#fbfbf8]">
      <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-4 py-2.5 sm:px-6 lg:px-8">
        <span className="shrink-0 text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
          Current context
        </span>

        <button
          onClick={onRecipient}
          className="flex shrink-0 items-center gap-2 rounded-full bg-[#1d1f1d] px-3 py-1.5 text-[10px] font-black text-white"
        >
          <span className={"grid h-5 w-5 place-items-center rounded-full text-[8px] " + profile.avatarStyle}>
            {profile.initials}
          </span>
          {profile.label}
        </button>

        <ContextPill>Smartphone</ContextPill>
        <ContextPill>Under {money(budget)}</ContextPill>

        {priorities.map(([key]) => (
          <ContextPill key={key}>{priorityLabels[key]}</ContextPill>
        ))}

        <button
          onClick={onEdit}
          className="ml-auto shrink-0 rounded-full border border-black/[0.1] bg-white px-3 py-1.5 text-[10px] font-black"
        >
          Edit needs
        </button>
      </div>
    </div>
  );
}

function ContextPill({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-[10px] font-semibold text-black/55">
      {children}
    </span>
  );
}

function HomeScreen({
  profile,
  recipientId,
  ranked,
  missionText,
  setMissionText,
  onSearch,
  onRecipientChange,
  onProduct,
  onAdd,
  saved,
  onSave
}: {
  profile: Profile;
  recipientId: RecipientId;
  ranked: Array<{ product: Product; score: number }>;
  missionText: string;
  setMissionText: (value: string) => void;
  onSearch: (event?: FormEvent) => void;
  onRecipientChange: (id: RecipientId) => void;
  onProduct: (product: Product) => void;
  onAdd: (id: string) => void;
  saved: string[];
  onSave: (id: string) => void;
}) {
  const top = ranked[0];

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[34px] bg-[#1d1f1d] p-6 text-white sm:p-8 lg:p-10">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#dff168]">
            <Sparkles className="h-4 w-4" />
            Shopping for {profile.label}
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-5xl">
            Tell us who it is for. We will keep the context with the shopping journey.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
            The account stays the same. The recipient, current need and learning context change.
          </p>

          <form
            onSubmit={(event) => onSearch(event)}
            className="mt-7 rounded-[28px] bg-white p-3 text-[#1d1f1d]"
          >
            <div className="flex items-center gap-3 px-2 pt-1">
              <span className={"grid h-10 w-10 place-items-center rounded-full text-xs font-black " + profile.avatarStyle}>
                {profile.initials}
              </span>
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                  Shopping need
                </div>
                <div className="text-xs font-black">
                  What does {profile.label} need right now?
                </div>
              </div>
            </div>

            <textarea
              value={missionText}
              onChange={(event) => setMissionText(event.target.value)}
              rows={4}
              className="mt-3 w-full resize-none rounded-2xl bg-[#f6f6f3] p-4 text-sm leading-6 outline-none"
            />

            <button
              type="submit"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#dff168] px-4 py-3 text-sm font-black"
            >
              Show products for {profile.label}
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="overflow-hidden rounded-[34px] bg-[#e9f7bf]">
          {top ? (
            <div className="grid h-full min-h-[420px] grid-rows-[1fr_auto]">
              <button
                onClick={() => onProduct(top.product)}
                className="relative min-h-[280px]"
              >
                <img
                  src={top.product.image}
                  alt={top.product.brand + " " + top.product.name}
                  className="absolute inset-0 h-full w-full object-contain p-5"
                />
              </button>

              <div className="m-4 rounded-[24px] bg-white/80 p-4 backdrop-blur">
                <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                  Current best fit
                </div>
                <div className="mt-1 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xl font-black">
                      {top.product.brand} {top.product.name}
                    </div>
                    <div className="mt-1 text-xs text-black/45">
                      {top.score}% fit for {profile.label}
                    </div>
                  </div>
                  <span className="text-lg font-black">{money(top.product.price)}</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mt-6 rounded-[28px] border border-black/[0.07] bg-white p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm font-black">Switch who you are shopping for</div>
            <p className="mt-1 text-xs text-black/40">
              Watch the same category re-rank without mixing everyone into one profile.
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
                    "flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-black " +
                    (id === recipientId
                      ? "border-[#1d1f1d] bg-[#1d1f1d] text-white"
                      : "border-black/[0.08] bg-[#f8f8f5]")
                  }
                >
                  <span className={"grid h-6 w-6 place-items-center rounded-full text-[8px] " + item.avatarStyle}>
                    {item.initials}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
              Recommended for {profile.label}
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
              Products that fit this need
            </h2>
          </div>

          <button
            onClick={() => onSearch()}
            className="text-xs font-black underline underline-offset-4"
          >
            View all
          </button>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ranked.slice(0, 4).map(({ product, score }, index) => (
            <ProductCard
              key={product.id}
              product={product}
              score={score}
              rank={index + 1}
              profile={profile}
              weights={profile.weights}
              onOpen={() => onProduct(product)}
              onAdd={() => onAdd(product.id)}
              saved={saved.includes(product.id)}
              onSave={() => onSave(product.id)}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <SimpleInfo
          icon={<User className="h-4 w-4" />}
          title="Profile"
          text="Stable preferences that may remain useful next time."
        />
        <SimpleInfo
          icon={<Search className="h-4 w-4" />}
          title="Current need"
          text="Temporary budget and priorities for this purchase."
        />
        <SimpleInfo
          icon={<ShieldCheck className="h-4 w-4" />}
          title="Memory"
          text="The shopper controls what gets remembered after the purchase."
        />
      </section>
    </div>
  );
}

function SimpleInfo({
  icon,
  title,
  text
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-black/[0.07] bg-white p-5">
      <div className="flex items-center gap-2 text-sm font-black">
        {icon}
        {title}
      </div>
      <p className="mt-2 text-xs leading-5 text-black/40">{text}</p>
    </div>
  );
}

function ResultsScreen({
  profile,
  recipientId,
  ranked,
  weights,
  budget,
  missionText,
  onEditMission,
  onProduct,
  onAdd,
  saved,
  onSave
}: {
  profile: Profile;
  recipientId: RecipientId;
  ranked: Array<{ product: Product; score: number }>;
  weights: PriorityWeights;
  budget: number;
  missionText: string;
  onEditMission: () => void;
  onProduct: (product: Product) => void;
  onAdd: (id: string) => void;
  saved: string[];
  onSave: (id: string) => void;
}) {
  const excluded = products.length - ranked.length;

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="self-start rounded-[28px] border border-black/[0.07] bg-white p-4 lg:sticky lg:top-[148px]">
          <div className="flex items-center gap-2 text-sm font-black">
            <SlidersHorizontal className="h-4 w-4" />
            Refine
          </div>

          <FilterSection title="Budget">
            <FilterRow checked label={"Under " + money(budget)} />
            <FilterRow label="₹10,000 – ₹15,000" />
            <FilterRow label="₹15,000 – ₹20,000" />
          </FilterSection>

          <FilterSection title={"Important for " + profile.label}>
            {(Object.entries(weights) as Array<[PriorityKey, number]>)
              .filter(([, weight]) => weight >= 4)
              .map(([key]) => (
                <FilterRow key={key} checked label={priorityLabels[key]} />
              ))}
          </FilterSection>

          <FilterSection title="Other filters">
            <FilterRow label="4.5★ & above" />
            <FilterRow label="Delivery by tomorrow" />
            <FilterRow label="In stock" />
          </FilterSection>
        </aside>

        <section className="min-w-0">
          <div className="rounded-[28px] border border-black/[0.07] bg-white p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                  Smartphone recommendations
                </div>
                <h1 className="mt-1 text-3xl font-black tracking-[-0.045em]">
                  Best matches for {profile.label}
                </h1>
                <p className="mt-2 max-w-2xl text-xs leading-5 text-black/40">
                  {missionText}
                </p>
              </div>

              <button
                onClick={onEditMission}
                className="rounded-2xl border border-black/[0.1] px-4 py-2.5 text-xs font-black"
              >
                Edit this need
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-black/[0.06] pt-4">
              <span className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                How ranking works
              </span>
              <span className="rounded-full bg-[#f3f3ef] px-3 py-1.5 text-[10px] font-semibold text-black/50">
                {excluded} outside budget removed first
              </span>
              <span className="rounded-full bg-[#f3f3ef] px-3 py-1.5 text-[10px] font-semibold text-black/50">
                Current need
              </span>
              <span className="rounded-full bg-[#f3f3ef] px-3 py-1.5 text-[10px] font-semibold text-black/50">
                Saved context for {profile.label}
              </span>
              <span className="rounded-full bg-[#f3f3ef] px-3 py-1.5 text-[10px] font-semibold text-black/50">
                Quality + availability
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-[24px] border border-[#ecd58c] bg-[#fff8dc] p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-[#6e5200]" />
                <div>
                  <div className="text-xs font-black text-[#5f4900]">
                    One thing is still unclear
                  </div>
                  <p className="mt-1 text-[10px] leading-4 text-[#6e5200]/70">
                    “Easy to use” could mean a clean interface, larger controls or simpler setup.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Clean interface", "Larger controls", "Simple setup"].map((item) => (
                  <button
                    key={item}
                    className="rounded-full bg-white px-3 py-1.5 text-[10px] font-black text-[#5f4900]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ranked.map(({ product, score }, index) => (
              <ProductCard
                key={product.id}
                product={product}
                score={score}
                rank={index + 1}
                profile={profile}
                weights={weights}
                onOpen={() => onProduct(product)}
                onAdd={() => onAdd(product.id)}
                saved={saved.includes(product.id)}
                onSave={() => onSave(product.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  score,
  rank,
  profile,
  weights,
  onOpen,
  onAdd,
  saved,
  onSave
}: {
  product: Product;
  score: number;
  rank: number;
  profile: Profile;
  weights: PriorityWeights;
  onOpen: () => void;
  onAdd: () => void;
  saved: boolean;
  onSave: () => void;
}) {
  const fit = fitDetails(product, weights);
  const best = fit.matches.slice(0, 2);
  const miss = fit.misses[0];

  return (
    <article className="overflow-hidden rounded-[28px] border border-black/[0.07] bg-white">
      <div className="relative bg-[#f1f1ed]">
        <button onClick={onOpen} className="block w-full p-3">
          <img
            src={product.image}
            alt={product.brand + " " + product.name}
            className="aspect-square w-full object-contain"
          />
        </button>

        <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[9px] font-black shadow-sm">
          #{rank} for {profile.label}
        </span>

        <button
          onClick={onSave}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm"
          aria-label="Save product"
        >
          <Heart className={"h-4 w-4 " + (saved ? "fill-rose-500 text-rose-500" : "text-black/35")} />
        </button>
      </div>

      <div className="p-4">
        <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
          {product.brand}
        </div>

        <button
          onClick={onOpen}
          className="mt-1 text-left text-lg font-black tracking-[-0.02em]"
        >
          {product.name}
        </button>

        <div className="mt-2 flex items-center gap-2 text-[10px] text-black/40">
          <span className="flex items-center gap-1 font-black text-black/70">
            <Star className="h-3.5 w-3.5 fill-[#1d1f1d] text-[#1d1f1d]" />
            {product.rating}
          </span>
          <span>{product.reviews.toLocaleString("en-IN")} reviews</span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-black">{money(product.price)}</span>
          <span className="text-[10px] text-black/30 line-through">{money(product.mrp)}</span>
        </div>

        <div className="mt-4 rounded-[18px] bg-[#f4f8e7] p-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-black text-[#31410d]">
              {score}% fit for {profile.label}
            </span>
            <Sparkles className="h-4 w-4 text-[#526c1d]" />
          </div>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {best.map(([key]) => (
              <span
                key={key}
                className="rounded-full bg-white px-2 py-1 text-[9px] font-bold text-[#405418]"
              >
                ✓ {priorityLabels[key]}
              </span>
            ))}

            {miss ? (
              <span className="rounded-full bg-[#fff2cb] px-2 py-1 text-[9px] font-bold text-[#725600]">
                Trade-off · {priorityLabels[miss[0]]}
              </span>
            ) : null}
          </div>

          <button
            onClick={onOpen}
            className="mt-2 text-[10px] font-black text-[#405418] underline underline-offset-2"
          >
            Why this fits
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] text-black/45">
          <MiniSpec label="Battery" value={product.batteryText} />
          <MiniSpec label="Display" value={product.displayText} />
          <MiniSpec label="Camera" value={product.cameraText} />
          <MiniSpec label="Support" value={product.supportText} />
        </div>

        <button
          onClick={onAdd}
          className="mt-4 w-full rounded-2xl bg-[#1d1f1d] py-2.5 text-xs font-black text-white"
        >
          Add for {profile.label}
        </button>
      </div>
    </article>
  );
}

function MiniSpec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block text-[8px] font-black uppercase tracking-[0.1em] text-black/25">
        {label}
      </span>
      <span className="mt-0.5 block font-bold text-black/55">{value}</span>
    </div>
  );
}

function MissionEditor({
  profile,
  missionText,
  setMissionText,
  weights,
  budget,
  onApply,
  onClose
}: {
  profile: Profile;
  missionText: string;
  setMissionText: (value: string) => void;
  weights: PriorityWeights;
  budget: number;
  onApply: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/45 p-4 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-[32px] bg-white p-5 shadow-2xl sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
              Current shopping need
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
              What matters for {profile.label} right now?
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f3ef]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_300px]">
          <div>
            <textarea
              value={missionText}
              onChange={(event) => setMissionText(event.target.value)}
              rows={7}
              className="w-full resize-none rounded-3xl border border-black/[0.08] bg-[#f8f8f5] p-4 text-sm leading-6 outline-none"
            />

            <div className="mt-3 rounded-2xl bg-[#fff8dc] p-4">
              <div className="flex items-start gap-3">
                <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-[#6e5200]" />
                <div>
                  <div className="text-xs font-black text-[#5f4900]">
                    Ask when the meaning is unclear
                  </div>
                  <p className="mt-1 text-[10px] leading-4 text-[#6e5200]/70">
                    “Easy to use” should not silently become a guessed assumption.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#1d1f1d] p-4 text-white">
            <div className="text-[9px] font-black uppercase tracking-[0.12em] text-white/30">
              Interpreted context
            </div>

            <div className="mt-3 space-y-2">
              <Fact label="Person" value={profile.label} />
              <Fact label="Category" value="Smartphone" />
              <Fact label="Budget" value={"Under " + money(budget)} />
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {(Object.entries(weights) as Array<[PriorityKey, number]>)
                .filter(([, weight]) => weight >= 4)
                .map(([key]) => (
                  <span
                    key={key}
                    className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold text-white/65"
                  >
                    {priorityLabels[key]}
                  </span>
                ))}
            </div>

            <div className="mt-5 rounded-2xl bg-white/10 p-3 text-[10px] leading-4 text-white/50">
              This budget belongs to this purchase, not permanently to {profile.label}.
            </div>
          </div>
        </div>

        <button
          onClick={onApply}
          className="mt-5 w-full rounded-2xl bg-[#dff168] py-3 text-sm font-black"
        >
          Update recommendations
        </button>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2 text-xs">
      <span className="text-white/35">{label}</span>
      <span className="font-black">{value}</span>
    </div>
  );
}

function ProductDetail({
  product,
  recipientId,
  weights,
  memoryMode,
  onClose,
  onAdd
}: {
  product: Product;
  recipientId: RecipientId;
  weights: PriorityWeights;
  memoryMode: MemoryMode;
  onClose: () => void;
  onAdd: () => void;
}) {
  const profile = profiles[recipientId];
  const fit = fitDetails(product, weights);
  const score = scoreProduct(product, weights);

  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto bg-[#f6f6f3]">
      <div className="sticky top-0 z-20 border-b border-black/[0.06] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-4 sm:px-6">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-black"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>

          <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
            Product details
          </div>

          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f3ef]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1380px] px-4 py-6 sm:px-6">
        <div className="grid gap-7 lg:grid-cols-[560px_minmax(0,1fr)]">
          <div className="self-start rounded-[32px] bg-[#efefeb] p-5 lg:sticky lg:top-24">
            <img
              src={product.image}
              alt={product.brand + " " + product.name}
              className="aspect-square w-full object-contain"
            />
          </div>

          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
              {product.brand}
            </div>

            <h1 className="mt-1 text-4xl font-black tracking-[-0.05em]">
              {product.name}
            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-black/40">
              <span className="flex items-center gap-1 font-black text-black/75">
                <Star className="h-4 w-4 fill-[#1d1f1d] text-[#1d1f1d]" />
                {product.rating}
              </span>
              <span>{product.reviews.toLocaleString("en-IN")} reviews</span>
              <span>·</span>
              <span>{product.deliveryDays === 1 ? "Delivery tomorrow" : "Delivery in " + product.deliveryDays + " days"}</span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-3xl font-black">{money(product.price)}</span>
              <span className="text-sm text-black/30 line-through">{money(product.mrp)}</span>
            </div>

            <section className="mt-6 rounded-[28px] border border-[#d9e9a6] bg-[#f4f8e7] p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em] text-[#526c1d]">
                    <Sparkles className="h-4 w-4" />
                    Fit for {profile.label}
                  </div>
                  <div className="mt-1 text-3xl font-black tracking-[-0.04em]">
                    {score}% match
                  </div>
                </div>

                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-black text-[#405418]">
                  Shopping for {profile.label}
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <FitPanel
                  title="Matches"
                  items={fit.matches.map(([key]) => priorityLabels[key])}
                  tone="bg-white"
                />
                <FitPanel
                  title="Trade-offs"
                  items={fit.misses.map(([key]) => priorityLabels[key])}
                  tone="bg-[#fff8dc]"
                />
                <FitPanel
                  title="Unknown"
                  items={[product.unknown || "No important unknown flagged"]}
                  tone="bg-[#f0f0ec]"
                />
              </div>
            </section>

            <section className="mt-5">
              <h2 className="text-base font-black">Key specifications</h2>

              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <SpecTile icon={<Battery className="h-4 w-4" />} label="Battery" value={product.batteryText} />
                <SpecTile icon={<PackageCheck className="h-4 w-4" />} label="Display" value={product.displayText} />
                <SpecTile icon={<Sparkles className="h-4 w-4" />} label="Camera" value={product.cameraText} />
                <SpecTile icon={<SlidersHorizontal className="h-4 w-4" />} label="Processor" value={product.processorText} />
                <SpecTile icon={<ShieldCheck className="h-4 w-4" />} label="Support" value={product.supportText} />
                <SpecTile icon={<Battery className="h-4 w-4" />} label="Charging" value={product.chargingText} />
              </div>
            </section>

            <section className="mt-5 grid gap-3 sm:grid-cols-[1fr_230px]">
              <div className="rounded-[24px] border border-black/[0.07] bg-white p-4">
                <div className="flex items-center gap-2 text-xs font-black">
                  <ShieldCheck className="h-4 w-4" />
                  How this purchase will be learned
                </div>

                <p className="mt-2 text-[11px] leading-5 text-black/40">
                  The interaction stays attached to {profile.label} rather than automatically changing your own preference history.
                </p>

                <div className="mt-3 inline-flex rounded-full bg-[#f3f3ef] px-3 py-1.5 text-[10px] font-black">
                  {memoryMode === "remember"
                    ? "Remember useful outcomes for " + profile.label
                    : memoryMode === "session"
                      ? "Use only for this purchase"
                      : "Do not learn from this purchase"}
                </div>
              </div>

              <button
                onClick={onAdd}
                className="rounded-[24px] bg-[#1d1f1d] p-5 text-sm font-black text-white"
              >
                Add to cart
                <span className="mt-1 block text-[10px] font-semibold text-white/45">
                  for {profile.label}
                </span>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function FitPanel({
  title,
  items,
  tone
}: {
  title: string;
  items: string[];
  tone: string;
}) {
  return (
    <div className={"rounded-2xl p-3 " + tone}>
      <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
        {title}
      </div>

      <div className="mt-2 space-y-1.5">
        {items.length ? (
          items.map((item) => (
            <div key={item} className="text-[10px] leading-4 text-black/55">
              {item}
            </div>
          ))
        ) : (
          <div className="text-[10px] text-black/30">None flagged</div>
        )}
      </div>
    </div>
  );
}

function SpecTile({
  icon,
  label,
  value
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-black/[0.07] bg-white p-4">
      <div className="flex items-center gap-2 text-black/30">
        {icon}
        <span className="text-[9px] font-black uppercase tracking-[0.1em]">{label}</span>
      </div>
      <div className="mt-2 text-sm font-black">{value}</div>
    </div>
  );
}

function ProfilesScreen({
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
    <div className="mx-auto max-w-[1200px] px-4 py-7 sm:px-6">
      <div className="max-w-3xl">
        <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
          Shopping profiles
        </div>
        <h1 className="mt-1 text-4xl font-black tracking-[-0.05em]">
          What the platform remembers, by person.
        </h1>
        <p className="mt-3 text-sm leading-6 text-black/40">
          Stable context stays separate from one-time shopping needs. You can see, edit or disable what gets learned.
        </p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {(Object.keys(profiles) as RecipientId[]).map((id) => {
          const profile = profiles[id];
          const active = id === recipientId;

          return (
            <section
              key={id}
              className={
                "rounded-[28px] border p-5 " +
                (active
                  ? "border-[#1d1f1d] bg-[#1d1f1d] text-white"
                  : "border-black/[0.07] bg-white")
              }
            >
              <div className="flex items-center gap-3">
                <span className={"grid h-11 w-11 place-items-center rounded-full text-xs font-black " + profile.avatarStyle}>
                  {profile.initials}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="text-lg font-black">{profile.label}</div>
                  <div className={active ? "text-[10px] text-white/35" : "text-[10px] text-black/30"}>
                    {profile.relation}
                  </div>
                </div>

                {profile.temporary ? (
                  <Gift className="h-5 w-5 opacity-35" />
                ) : (
                  <User className="h-5 w-5 opacity-25" />
                )}
              </div>

              {profile.saved.length ? (
                <div className="mt-5">
                  <div className={active ? "text-[9px] font-black uppercase tracking-[0.12em] text-white/30" : "text-[9px] font-black uppercase tracking-[0.12em] text-black/30"}>
                    Remembered preferences
                  </div>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {profile.saved.map((item) => (
                      <span
                        key={item}
                        className={
                          active
                            ? "rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold text-white/60"
                            : "rounded-full bg-[#f3f3ef] px-2.5 py-1 text-[9px] font-bold text-black/50"
                        }
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={active ? "mt-5 rounded-2xl bg-white/10 p-3 text-[10px] leading-4 text-white/50" : "mt-5 rounded-2xl bg-[#fff8dc] p-3 text-[10px] leading-4 text-[#6e5200]"}>
                  This is a temporary recipient. Nothing needs to become permanent memory.
                </div>
              )}

              <div className={active ? "mt-5 rounded-2xl bg-white/10 p-3" : "mt-5 rounded-2xl border border-black/[0.07] p-3"}>
                <div className={active ? "text-[9px] font-black uppercase tracking-[0.12em] text-white/30" : "text-[9px] font-black uppercase tracking-[0.12em] text-black/30"}>
                  Learning control
                </div>

                <select
                  value={memoryModes[id]}
                  onChange={(event) => onMemoryMode(id, event.target.value as MemoryMode)}
                  className={active ? "mt-2 w-full bg-transparent text-xs font-black text-white outline-none" : "mt-2 w-full bg-transparent text-xs font-black outline-none"}
                >
                  <option className="text-black" value="remember">Remember useful outcomes</option>
                  <option className="text-black" value="session">Use only for current purchase</option>
                  <option className="text-black" value="none">Do not learn from purchases</option>
                </select>
              </div>

              <button
                onClick={() => {
                  onRecipientChange(id);
                  onShop();
                }}
                className={
                  "mt-4 w-full rounded-2xl py-2.5 text-xs font-black " +
                  (active ? "bg-[#dff168] text-[#1d1f1d]" : "bg-[#1d1f1d] text-white")
                }
              >
                Shop for {profile.label}
              </button>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function CartDrawer({
  items,
  memoryModes,
  onClose,
  onRemove,
  onReassign,
  onCheckout
}: {
  items: CartItem[];
  memoryModes: Record<RecipientId, MemoryMode>;
  onClose: () => void;
  onRemove: (index: number) => void;
  onReassign: (index: number, id: RecipientId) => void;
  onCheckout: () => void;
}) {
  const subtotal = items.reduce(
    (sum, item) => sum + (productById(item.productId)?.price ?? 0),
    0
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end bg-black/45 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <aside
        className="h-full w-full max-w-lg overflow-y-auto bg-[#f6f6f3] shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 border-b border-black/[0.06] bg-white/95 p-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                Cart
              </div>
              <h2 className="mt-1 text-2xl font-black">
                {items.length} item{items.length === 1 ? "" : "s"}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f3ef]"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-2 text-xs text-black/40">
            Each item keeps its recipient context into checkout.
          </p>
        </div>

        {items.length ? (
          <div className="p-5">
            <div className="space-y-4">
              {items.map((item, index) => {
                const product = productById(item.productId);
                if (!product) return null;

                const recipient = profiles[item.recipientId];
                const memoryMode = memoryModes[item.recipientId];

                return (
                  <div
                    key={item.productId + "-" + index}
                    className="rounded-[26px] border border-black/[0.07] bg-white p-4"
                  >
                    <div className="flex gap-3">
                      <img
                        src={product.image}
                        alt=""
                        className="h-24 w-24 rounded-2xl bg-[#f1f1ed] object-contain"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                          {product.brand}
                        </div>
                        <div className="text-sm font-black">{product.name}</div>
                        <div className="mt-1 text-sm font-black">{money(product.price)}</div>

                        <button
                          onClick={() => onRemove(index)}
                          className="mt-2 text-[10px] font-black text-rose-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-[#f4f4f0] p-3">
                      <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                        This item is for
                      </div>

                      <div className="mt-2 flex items-center gap-2">
                        <span className={"grid h-7 w-7 place-items-center rounded-full text-[9px] font-black " + recipient.avatarStyle}>
                          {recipient.initials}
                        </span>

                        <select
                          value={item.recipientId}
                          onChange={(event) => onReassign(index, event.target.value as RecipientId)}
                          className="min-w-0 flex-1 bg-transparent text-xs font-black outline-none"
                        >
                          {(Object.keys(profiles) as RecipientId[]).map((id) => (
                            <option key={id} value={id}>
                              {profiles[id].label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-[10px] text-black/40">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {memoryMode === "remember"
                          ? "Outcome can improve future shopping for " + recipient.label
                          : memoryMode === "session"
                            ? "Use only for this purchase"
                            : "Do not learn from this item"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[26px] bg-[#1d1f1d] p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/45">Subtotal</span>
                <strong className="text-2xl">{money(subtotal)}</strong>
              </div>

              <button
                onClick={onCheckout}
                className="mt-4 w-full rounded-2xl bg-[#dff168] py-3 text-sm font-black text-[#1d1f1d]"
              >
                Simulate checkout
              </button>

              <p className="mt-2 text-center text-[10px] text-white/30">
                Payment is skipped in the prototype.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid min-h-[70vh] place-items-center p-6 text-center">
            <div>
              <ShoppingBag className="mx-auto h-8 w-8 text-black/20" />
              <div className="mt-3 text-lg font-black">Your cart is empty</div>
              <p className="mt-1 text-xs text-black/40">
                Add a product to see recipient context continue into checkout.
              </p>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

function OutcomeModal({
  items,
  onClose
}: {
  items: CartItem[];
  onClose: () => void;
}) {
  const [done, setDone] = useState(false);

  const item = items[0];
  const product = item ? productById(item.productId) : undefined;
  const recipient = item ? profiles[item.recipientId] : undefined;

  return (
    <div
      className="fixed inset-0 z-[110] grid place-items-center bg-black/45 p-4 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-xl rounded-[32px] bg-white p-5 shadow-2xl sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
              After delivery
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
              Did this work for {recipient?.label ?? "the recipient"}?
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f3ef]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {product ? (
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-black/[0.07] p-3">
            <img
              src={product.image}
              alt=""
              className="h-20 w-20 rounded-2xl bg-[#f1f1ed] object-contain"
            />

            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                {product.brand}
              </div>
              <div className="text-sm font-black">{product.name}</div>
              <div className="mt-1 text-[10px] text-black/40">
                Purchased for {recipient?.label}
              </div>
            </div>
          </div>
        ) : null}

        {!done ? (
          <>
            <p className="mt-5 text-xs leading-5 text-black/40">
              A purchase tells the platform what was chosen. Outcome feedback tells it whether the decision actually worked.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                onClick={() => setDone(true)}
                className="rounded-2xl bg-[#e9f7bf] py-3 text-xs font-black"
              >
                Worked well
              </button>

              <button
                onClick={() => setDone(true)}
                className="rounded-2xl border border-black/[0.08] py-3 text-xs font-black"
              >
                Some issues
              </button>
            </div>
          </>
        ) : (
          <div className="mt-5 rounded-2xl bg-[#f4f8e7] p-4">
            <div className="flex items-center gap-2 text-sm font-black">
              <Check className="h-4 w-4" />
              Outcome attached to {recipient?.label}
            </div>

            <p className="mt-2 text-xs leading-5 text-black/45">
              This improves the correct recipient context instead of automatically changing the account holder's own preferences.
            </p>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-2xl bg-[#1d1f1d] py-3 text-sm font-black text-white"
        >
          Finish
        </button>
      </div>
    </div>
  );
}

function FilterSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-5 border-t border-black/[0.06] pt-4">
      <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
        {title}
      </div>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function FilterRow({
  label,
  checked = false
}: {
  label: string;
  checked?: boolean;
}) {
  return (
    <label className="flex items-center gap-2 text-xs text-black/55">
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="h-3.5 w-3.5 accent-[#1d1f1d]"
      />
      {label}
    </label>
  );
}
