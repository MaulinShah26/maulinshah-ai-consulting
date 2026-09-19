"use client";

import {
  ArrowRight,
  Battery,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Gift,
  Heart,
  Info,
  Layers3,
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
type Screen = "home" | "board" | "library";
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
};

type CartItem = {
  productId: string;
  recipientId: RecipientId;
};

const priorityLabels: Record<PriorityKey, string> = {
  battery: "Battery",
  display: "Display",
  ease: "Ease of use",
  support: "Software support",
  camera: "Camera",
  performance: "Performance",
  charging: "Charging",
  delivery: "Delivery",
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
    avatarStyle: "bg-[#171816] text-white"
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
    avatarStyle: "bg-[#DFFD67] text-[#171816]"
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
    avatarStyle: "bg-[#FFD8D2] text-[#5E2F2A]"
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
    avatarStyle: "bg-[#D8D1FF] text-[#443B78]"
  },
  gift: {
    id: "gift",
    label: "One-time gift",
    relation: "Disposable context",
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
    avatarStyle: "bg-[#FFE7A3] text-[#6A4B00]"
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
    unknown: "Local service-centre experience"
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
    }
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
    }
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
    }
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
    }
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
    }
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
  const [missionText, setMissionText] = useState(profiles.dad.mission);
  const [weights, setWeights] = useState<PriorityWeights>({ ...profiles.dad.weights });
  const [budget, setBudget] = useState(profiles.dad.budget);
  const [recipientPickerOpen, setRecipientPickerOpen] = useState(false);
  const [lensEditorOpen, setLensEditorOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [trayOpen, setTrayOpen] = useState(false);
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
    setRecipientPickerOpen(false);
  };

  const applyMission = () => {
    const parsed = parseMission(missionText, profile);
    setWeights(parsed.weights);
    setBudget(parsed.budget);
    setLensEditorOpen(false);
  };

  const openBoard = (event?: FormEvent) => {
    event?.preventDefault();
    applyMission();
    setScreen("board");
  };

  const addToTray = (productId: string) => {
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
    <main className="min-h-screen bg-[#F3F1EA] text-[#171816]">
      <VelaHeader
        screen={screen}
        setScreen={setScreen}
        profile={profile}
        recipientId={recipientId}
        pickerOpen={recipientPickerOpen}
        setPickerOpen={setRecipientPickerOpen}
        onRecipientChange={changeRecipient}
        trayCount={cart.length}
        onTray={() => setTrayOpen(true)}
      />

      <LensBar
        profile={profile}
        budget={budget}
        weights={weights}
        onEdit={() => setLensEditorOpen(true)}
        onChangeRecipient={() => setRecipientPickerOpen(true)}
      />

      {screen === "home" ? (
        <Home
          profile={profile}
          recipientId={recipientId}
          ranked={ranked}
          missionText={missionText}
          setMissionText={setMissionText}
          onOpenBoard={openBoard}
          onRecipientChange={changeRecipient}
          onProduct={setSelectedProduct}
          saved={saved}
          onSave={toggleSaved}
          onAdd={addToTray}
        />
      ) : null}

      {screen === "board" ? (
        <DecisionBoard
          profile={profile}
          recipientId={recipientId}
          ranked={ranked}
          weights={weights}
          budget={budget}
          onEditLens={() => setLensEditorOpen(true)}
          onRecipientChange={changeRecipient}
          onProduct={setSelectedProduct}
          saved={saved}
          onSave={toggleSaved}
          onAdd={addToTray}
        />
      ) : null}

      {screen === "library" ? (
        <LensLibrary
          recipientId={recipientId}
          onRecipientChange={changeRecipient}
          memoryModes={memoryModes}
          onMemoryMode={(id, mode) =>
            setMemoryModes((current) => ({ ...current, [id]: mode }))
          }
          onOpenBoard={() => setScreen("board")}
        />
      ) : null}

      {lensEditorOpen ? (
        <LensEditor
          profile={profile}
          missionText={missionText}
          setMissionText={setMissionText}
          budget={budget}
          weights={weights}
          onApply={applyMission}
          onClose={() => setLensEditorOpen(false)}
        />
      ) : null}

      {selectedProduct ? (
        <ProductView
          product={selectedProduct}
          recipientId={recipientId}
          weights={weights}
          memoryMode={memoryModes[recipientId]}
          onClose={() => setSelectedProduct(null)}
          onAdd={() => {
            addToTray(selectedProduct.id);
            setSelectedProduct(null);
            setTrayOpen(true);
          }}
        />
      ) : null}

      {trayOpen ? (
        <DecisionTray
          items={cart}
          memoryModes={memoryModes}
          onClose={() => setTrayOpen(false)}
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
          onFinish={() => {
            setTrayOpen(false);
            setFeedbackOpen(true);
          }}
        />
      ) : null}

      {feedbackOpen ? (
        <OutcomeLoop
          items={cart}
          onClose={() => setFeedbackOpen(false)}
        />
      ) : null}
    </main>
  );
}

function VelaHeader({
  screen,
  setScreen,
  profile,
  recipientId,
  pickerOpen,
  setPickerOpen,
  onRecipientChange,
  trayCount,
  onTray
}: {
  screen: Screen;
  setScreen: (screen: Screen) => void;
  profile: Profile;
  recipientId: RecipientId;
  pickerOpen: boolean;
  setPickerOpen: (value: boolean) => void;
  onRecipientChange: (id: RecipientId) => void;
  trayCount: number;
  onTray: () => void;
}) {
  return (
    <header className="border-b border-black/10 bg-[#F3F1EA]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setScreen("home")}
          className="flex shrink-0 items-center gap-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#171816] text-xs font-black text-[#DFFD67]">
            V
          </span>
          <span className="text-sm font-black tracking-[0.15em]">VELA</span>
        </button>

        <nav className="hidden items-center gap-2 rounded-full bg-white/60 p-1 text-xs font-semibold md:flex">
          <NavPill active={screen === "home"} onClick={() => setScreen("home")}>
            Discover
          </NavPill>
          <NavPill active={screen === "board"} onClick={() => setScreen("board")}>
            Decision board
          </NavPill>
          <NavPill active={screen === "library"} onClick={() => setScreen("library")}>
            Lens library
          </NavPill>
        </nav>

        <div className="relative ml-auto">
          <button
            onClick={() => setPickerOpen(!pickerOpen)}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-2 py-1.5"
          >
            <span className={"grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold " + profile.avatarStyle}>
              {profile.initials}
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-[9px] uppercase tracking-[0.12em] text-black/40">
                Shopping for
              </span>
              <span className="block text-xs font-bold">{profile.label}</span>
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-black/40" />
          </button>

          {pickerOpen ? (
            <RecipientPicker
              recipientId={recipientId}
              onSelect={onRecipientChange}
            />
          ) : null}
        </div>

        <button
          onClick={onTray}
          className="relative grid h-11 w-11 place-items-center rounded-full bg-[#171816] text-white"
          aria-label="Open decision tray"
        >
          <ShoppingBag className="h-4 w-4" />
          {trayCount ? (
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#DFFD67] px-1 text-[9px] font-black text-[#171816]">
              {trayCount}
            </span>
          ) : null}
        </button>
      </div>
    </header>
  );
}

function NavPill({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full px-3 py-2 transition " +
        (active ? "bg-[#171816] text-white" : "text-black/50 hover:text-black")
      }
    >
      {children}
    </button>
  );
}

function RecipientPicker({
  recipientId,
  onSelect
}: {
  recipientId: RecipientId;
  onSelect: (id: RecipientId) => void;
}) {
  return (
    <div className="absolute right-0 top-[56px] z-50 w-[320px] rounded-[24px] border border-black/10 bg-[#FBFAF6] p-3 shadow-2xl">
      <div className="px-2 pb-2">
        <div className="text-xs font-black">Switch shopping lens</div>
        <p className="mt-1 text-[10px] leading-4 text-black/45">
          Same account. Different person, mission and memory.
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
                "flex w-full items-center gap-3 rounded-[18px] px-3 py-3 text-left transition hover:bg-black/[0.04] " +
                (id === recipientId ? "bg-[#E8E6DE]" : "")
              }
            >
              <span className={"grid h-9 w-9 shrink-0 place-items-center rounded-full text-[10px] font-bold " + item.avatarStyle}>
                {item.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold">{item.label}</span>
                <span className="block truncate text-[10px] text-black/40">
                  {item.temporary ? "Disposable lens" : item.saved.join(" · ")}
                </span>
              </span>
              {id === recipientId ? <Check className="h-4 w-4" /> : null}
            </button>
          );
        })}
      </div>
      <button className="mt-2 flex w-full items-center gap-2 rounded-[18px] border border-dashed border-black/15 px-3 py-3 text-xs font-bold">
        <Users className="h-4 w-4" />
        Add person or pet
      </button>
    </div>
  );
}

function LensBar({
  profile,
  budget,
  weights,
  onEdit,
  onChangeRecipient
}: {
  profile: Profile;
  budget: number;
  weights: PriorityWeights;
  onEdit: () => void;
  onChangeRecipient: () => void;
}) {
  const priorities = (Object.entries(weights) as Array<[PriorityKey, number]>)
    .filter(([, weight]) => weight >= 4)
    .slice(0, 4);

  return (
    <div className="border-b border-black/10 bg-[#FBFAF6]">
      <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        <span className="shrink-0 text-[9px] font-black uppercase tracking-[0.14em] text-black/35">
          Active lens
        </span>
        <button
          onClick={onChangeRecipient}
          className="flex shrink-0 items-center gap-2 rounded-full bg-[#171816] px-3 py-2 text-[10px] font-bold text-white"
        >
          <span className={"grid h-5 w-5 place-items-center rounded-full text-[8px] " + profile.avatarStyle}>
            {profile.initials}
          </span>
          {profile.label}
        </button>
        <LensToken>Smartphone</LensToken>
        <LensToken>Under {money(budget)}</LensToken>
        {priorities.map(([key]) => (
          <LensToken key={key}>{priorityLabels[key]}</LensToken>
        ))}
        <button
          onClick={onEdit}
          className="ml-auto shrink-0 rounded-full border border-black/15 px-3 py-2 text-[10px] font-bold"
        >
          Edit lens
        </button>
      </div>
    </div>
  );
}

function LensToken({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-semibold text-black/65">
      {children}
    </span>
  );
}

function Home({
  profile,
  recipientId,
  ranked,
  missionText,
  setMissionText,
  onOpenBoard,
  onRecipientChange,
  onProduct,
  saved,
  onSave,
  onAdd
}: {
  profile: Profile;
  recipientId: RecipientId;
  ranked: Array<{ product: Product; score: number }>;
  missionText: string;
  setMissionText: (value: string) => void;
  onOpenBoard: (event?: FormEvent) => void;
  onRecipientChange: (id: RecipientId) => void;
  onProduct: (product: Product) => void;
  saved: string[];
  onSave: (id: string) => void;
  onAdd: (id: string) => void;
}) {
  const top = ranked[0];
  const alternateIds: RecipientId[] = ["dad", "myself", "riya", "gift"];

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[36px] bg-[#171816] p-6 text-white sm:p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold">
            <Sparkles className="h-3.5 w-3.5 text-[#DFFD67]" />
            Context-first commerce
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Shopping should know who the decision is for.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/60">
            Vela does not start with your account history. It starts with a Shopping Lens:
            who this is for, what they need now, what is non-negotiable and what should be remembered later.
          </p>

          <form onSubmit={onOpenBoard} className="mt-8 rounded-[28px] bg-[#F7F5EE] p-3 text-[#171816]">
            <div className="flex items-center gap-3 px-2 pt-1">
              <span className={"grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-bold " + profile.avatarStyle}>
                {profile.initials}
              </span>
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.14em] text-black/35">
                  Current mission for {profile.label}
                </div>
                <div className="text-xs font-bold">Say what matters. Not how to filter it.</div>
              </div>
            </div>

            <textarea
              value={missionText}
              onChange={(event) => setMissionText(event.target.value)}
              rows={4}
              className="mt-3 w-full resize-none rounded-[20px] border border-black/10 bg-white p-4 text-sm leading-6 outline-none focus:border-black/30"
            />

            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-[18px] bg-[#DFFD67] px-4 py-3 text-xs font-black text-[#171816]"
              >
                Open decision board
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onRecipientChange("gift")}
                className="rounded-[18px] border border-black/10 px-4 py-3 text-xs font-bold"
              >
                Start a one-time gift lens
              </button>
            </div>
          </form>
        </div>

        <div className="relative overflow-hidden rounded-[36px] bg-[#DFFD67] p-6 sm:p-8">
          <div className="absolute right-5 top-5 rounded-full bg-[#171816] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-white">
            Live lens
          </div>

          <div className="max-w-sm">
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-black/45">
              What Vela sees right now
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">
              {profile.label} + this mission, not one blended profile.
            </h2>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ContextTile label="Person" value={profile.label} />
            <ContextTile label="Mode" value={profile.temporary ? "Disposable" : "Rememberable"} />
            <ContextTile label="Budget" value="Under ₹20K" />
            <ContextTile label="Goal" value="Choose well, not click fast" />
          </div>

          {top ? (
            <button
              onClick={() => onProduct(top.product)}
              className="mt-6 grid w-full grid-cols-[120px_1fr] items-center gap-4 rounded-[28px] bg-[#F7F5EE] p-3 text-left"
            >
              <img
                src={top.product.image}
                alt={top.product.brand + " " + top.product.name}
                className="aspect-square w-full rounded-[20px] object-contain"
              />
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.14em] text-black/35">
                  Leading option
                </div>
                <div className="mt-1 text-lg font-black">
                  {top.product.brand} {top.product.name}
                </div>
                <div className="mt-2 text-xs text-black/55">
                  {top.score}% fit to this lens
                </div>
              </div>
            </button>
          ) : null}
        </div>
      </section>

      <section className="mt-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
              Same catalogue, different lens
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
              Switching the person changes the decision, not the account.
            </h2>
          </div>
          <button
            onClick={() => onOpenBoard()}
            className="text-xs font-black underline underline-offset-4"
          >
            Open full board
          </button>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-4">
          {alternateIds.map((id) => (
            <LensPreview
              key={id}
              id={id}
              active={id === recipientId}
              onSelect={() => onRecipientChange(id)}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
              Shortlist for {profile.label}
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
              A few options worth looking at
            </h2>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {ranked.slice(0, 4).map(({ product, score }, index) => (
            <EditorialProductCard
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

      <section className="mt-10 grid gap-3 md:grid-cols-3">
        <PrincipleCard
          number="01"
          title="Profile"
          text="What may remain useful across purchases."
        />
        <PrincipleCard
          number="02"
          title="Mission"
          text="What matters for this decision right now."
        />
        <PrincipleCard
          number="03"
          title="Outcome"
          text="What actually worked after the purchase."
        />
      </section>
    </div>
  );
}

function ContextTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] bg-white/60 p-4">
      <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/35">
        {label}
      </div>
      <div className="mt-1 text-sm font-black">{value}</div>
    </div>
  );
}

function LensPreview({
  id,
  active,
  onSelect
}: {
  id: RecipientId;
  active: boolean;
  onSelect: () => void;
}) {
  const profile = profiles[id];
  const top = products
    .filter((product) => product.price <= profile.budget)
    .map((product) => ({ product, score: scoreProduct(product, profile.weights) }))
    .sort((a, b) => b.score - a.score)[0];

  return (
    <button
      onClick={onSelect}
      className={
        "rounded-[28px] border p-4 text-left transition " +
        (active
          ? "border-[#171816] bg-[#171816] text-white"
          : "border-black/10 bg-[#FBFAF6] hover:-translate-y-0.5")
      }
    >
      <div className="flex items-center gap-3">
        <span className={"grid h-10 w-10 place-items-center rounded-full text-xs font-bold " + profile.avatarStyle}>
          {profile.initials}
        </span>
        <div>
          <div className="text-sm font-black">{profile.label}</div>
          <div className={active ? "text-[10px] text-white/45" : "text-[10px] text-black/35"}>
            {profile.relation}
          </div>
        </div>
      </div>

      {top ? (
        <div className={"mt-4 rounded-[20px] p-3 " + (active ? "bg-white/10" : "bg-white")}>
          <div className="flex items-center gap-3">
            <img
              src={top.product.image}
              alt=""
              className="h-16 w-16 rounded-[14px] object-contain"
            />
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.12em] opacity-45">
                Top changes to
              </div>
              <div className="mt-1 text-xs font-black">
                {top.product.brand} {top.product.name}
              </div>
              <div className="mt-1 text-[10px] opacity-55">
                {top.score}% fit
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </button>
  );
}

function PrincipleCard({
  number,
  title,
  text
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-black/10 bg-[#FBFAF6] p-5">
      <div className="text-[10px] font-black text-black/25">{number}</div>
      <div className="mt-8 text-xl font-black">{title}</div>
      <p className="mt-2 text-xs leading-5 text-black/45">{text}</p>
    </div>
  );
}

function DecisionBoard({
  profile,
  recipientId,
  ranked,
  weights,
  budget,
  onEditLens,
  onRecipientChange,
  onProduct,
  saved,
  onSave,
  onAdd
}: {
  profile: Profile;
  recipientId: RecipientId;
  ranked: Array<{ product: Product; score: number }>;
  weights: PriorityWeights;
  budget: number;
  onEditLens: () => void;
  onRecipientChange: (id: RecipientId) => void;
  onProduct: (product: Product) => void;
  saved: string[];
  onSave: (id: string) => void;
  onAdd: (id: string) => void;
}) {
  const strong = ranked.slice(0, 2);
  const tradeoffs = ranked.slice(2, 5);
  const alternatives = ranked.slice(5);
  const excluded = products.length - ranked.length;

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-black/10 bg-[#FBFAF6] p-5 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
              Decision board
            </div>
            <h1 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.045em] sm:text-4xl">
              Not a results page. A view of the decision.
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-black/45">
              First remove what clearly fails the lens. Then surface the strongest fits,
              useful trade-offs and remaining alternatives. The catalogue stays the same;
              the decision context changes.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#171816] p-4 text-white">
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-white/35">
              Lens summary
            </div>
            <div className="mt-2 text-sm font-black">{profile.label}</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <TinyToken>{money(budget)} max</TinyToken>
              {(Object.entries(weights) as Array<[PriorityKey, number]>)
                .filter(([, weight]) => weight >= 4)
                .slice(0, 4)
                .map(([key]) => (
                  <TinyToken key={key}>{priorityLabels[key]}</TinyToken>
                ))}
            </div>
            <button
              onClick={onEditLens}
              className="mt-4 w-full rounded-[16px] bg-[#DFFD67] px-3 py-2.5 text-xs font-black text-[#171816]"
            >
              Refine lens
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-black/10 pt-4">
          <span className="mr-1 text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
            Compare lens
          </span>
          {(Object.keys(profiles) as RecipientId[]).map((id) => {
            const item = profiles[id];
            return (
              <button
                key={id}
                onClick={() => onRecipientChange(id)}
                className={
                  "flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-bold " +
                  (id === recipientId
                    ? "border-[#171816] bg-[#171816] text-white"
                    : "border-black/10 bg-white")
                }
              >
                <span className={"grid h-5 w-5 place-items-center rounded-full text-[8px] " + item.avatarStyle}>
                  {item.initials}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>
      </section>

      <div className="mt-5 flex items-center gap-2 rounded-[20px] bg-[#E8E6DE] px-4 py-3 text-[11px] text-black/55">
        <ShieldCheck className="h-4 w-4" />
        {excluded} product{excluded === 1 ? "" : "s"} excluded before ranking because they fail the hard budget.
      </div>

      <BoardLane
        index="A"
        eyebrow="Strongest fits"
        title="These satisfy the lens with the fewest compromises."
        products={strong}
        profile={profile}
        weights={weights}
        onProduct={onProduct}
        saved={saved}
        onSave={onSave}
        onAdd={onAdd}
        accent="bg-[#DFFD67]"
      />

      <BoardLane
        index="B"
        eyebrow="Trade-offs worth considering"
        title="Not perfect fits, but the compromise may be worth it."
        products={tradeoffs}
        profile={profile}
        weights={weights}
        onProduct={onProduct}
        saved={saved}
        onSave={onSave}
        onAdd={onAdd}
        accent="bg-[#D8D1FF]"
      />

      {alternatives.length ? (
        <BoardLane
          index="C"
          eyebrow="Still valid"
          title="Useful alternatives once the main trade-offs are understood."
          products={alternatives}
          profile={profile}
          weights={weights}
          onProduct={onProduct}
          saved={saved}
          onSave={onSave}
          onAdd={onAdd}
          accent="bg-[#FFD8D2]"
        />
      ) : null}
    </div>
  );
}

function TinyToken({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold text-white/70">
      {children}
    </span>
  );
}

function BoardLane({
  index,
  eyebrow,
  title,
  products: laneProducts,
  profile,
  weights,
  onProduct,
  saved,
  onSave,
  onAdd,
  accent
}: {
  index: string;
  eyebrow: string;
  title: string;
  products: Array<{ product: Product; score: number }>;
  profile: Profile;
  weights: PriorityWeights;
  onProduct: (product: Product) => void;
  saved: string[];
  onSave: (id: string) => void;
  onAdd: (id: string) => void;
  accent: string;
}) {
  return (
    <section className="mt-10">
      <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
        <div className="lg:sticky lg:top-6 lg:self-start">
          <span className={"grid h-10 w-10 place-items-center rounded-full text-xs font-black " + accent}>
            {index}
          </span>
          <div className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
            {eyebrow}
          </div>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {laneProducts.map(({ product, score }, indexWithinLane) => (
            <DecisionCard
              key={product.id}
              product={product}
              score={score}
              order={indexWithinLane + 1}
              profile={profile}
              weights={weights}
              onOpen={() => onProduct(product)}
              onAdd={() => onAdd(product.id)}
              saved={saved.includes(product.id)}
              onSave={() => onSave(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DecisionCard({
  product,
  score,
  order,
  profile,
  weights,
  onOpen,
  onAdd,
  saved,
  onSave
}: {
  product: Product;
  score: number;
  order: number;
  profile: Profile;
  weights: PriorityWeights;
  onOpen: () => void;
  onAdd: () => void;
  saved: boolean;
  onSave: () => void;
}) {
  const fit = fitDetails(product, weights);
  const topMatches = fit.matches.slice(0, 3);
  const topMiss = fit.misses[0];

  return (
    <article className="grid overflow-hidden rounded-[30px] border border-black/10 bg-[#FBFAF6] lg:grid-cols-[260px_minmax(0,1fr)_230px]">
      <button
        onClick={onOpen}
        className="relative bg-[#EEECE5] p-4"
      >
        <span className="absolute left-4 top-4 rounded-full bg-[#171816] px-2.5 py-1 text-[9px] font-black text-white">
          {order}
        </span>
        <img
          src={product.image}
          alt={product.brand + " " + product.name}
          className="aspect-square w-full object-contain"
        />
      </button>

      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-black/30">
              {product.brand}
            </div>
            <button
              onClick={onOpen}
              className="mt-1 text-left text-xl font-black tracking-[-0.03em]"
            >
              {product.name}
            </button>
          </div>
          <button
            onClick={onSave}
            className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white"
            aria-label="Save"
          >
            <Heart className={"h-4 w-4 " + (saved ? "fill-rose-500 text-rose-500" : "text-black/35")} />
          </button>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-black/45">
          <span className="flex items-center gap-1 font-black text-black/70">
            <Star className="h-3.5 w-3.5 fill-black text-black" />
            {product.rating}
          </span>
          <span>{product.reviews.toLocaleString("en-IN")} reviews</span>
          <span>·</span>
          <span>{product.deliveryDays === 1 ? "tomorrow" : product.deliveryDays + " days"}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {topMatches.map(([key]) => (
            <span
              key={key}
              className="rounded-full bg-[#E4F4C8] px-2.5 py-1.5 text-[10px] font-bold text-[#2B4A1F]"
            >
              ✓ {priorityLabels[key]}
            </span>
          ))}
          {topMiss ? (
            <span className="rounded-full bg-[#FFE7A3] px-2.5 py-1.5 text-[10px] font-bold text-[#6A4B00]">
              Trade-off · {priorityLabels[topMiss[0]]}
            </span>
          ) : null}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] text-black/45 sm:grid-cols-3">
          <MiniSpec label="Battery" value={product.batteryText} />
          <MiniSpec label="Display" value={product.displayText} />
          <MiniSpec label="Camera" value={product.cameraText} />
          <MiniSpec label="Support" value={product.supportText} />
          <MiniSpec label="Processor" value={product.processorText} />
          <MiniSpec label="Charging" value={product.chargingText} />
        </div>
      </div>

      <div className="flex flex-col justify-between border-t border-black/10 bg-white p-5 lg:border-l lg:border-t-0">
        <div>
          <div className="text-[9px] font-black uppercase tracking-[0.14em] text-black/30">
            Fit to {profile.label}
          </div>
          <div className="mt-1 text-4xl font-black tracking-[-0.06em]">{score}%</div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-xl font-black">{money(product.price)}</span>
            <span className="text-[10px] text-black/30 line-through">{money(product.mrp)}</span>
          </div>
          {product.unknown ? (
            <div className="mt-4 rounded-[16px] bg-[#EEECE5] p-3 text-[10px] leading-4 text-black/50">
              <strong className="text-black/75">Unknown:</strong> {product.unknown}
            </div>
          ) : null}
        </div>

        <div className="mt-5 grid gap-2">
          <button
            onClick={onOpen}
            className="rounded-[16px] border border-black/15 px-3 py-2.5 text-xs font-black"
          >
            Open decision view
          </button>
          <button
            onClick={onAdd}
            className="rounded-[16px] bg-[#171816] px-3 py-2.5 text-xs font-black text-white"
          >
            Add to tray · for {profile.label}
          </button>
        </div>
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
      <span className="mt-0.5 block font-bold text-black/60">{value}</span>
    </div>
  );
}

function EditorialProductCard({
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

  return (
    <article className="overflow-hidden rounded-[28px] border border-black/10 bg-[#FBFAF6]">
      <div className="relative bg-[#EEECE5]">
        <button onClick={onOpen} className="block w-full p-3">
          <img
            src={product.image}
            alt={product.brand + " " + product.name}
            className="aspect-square w-full object-contain"
          />
        </button>
        <span className="absolute left-3 top-3 rounded-full bg-[#171816] px-2.5 py-1 text-[9px] font-black text-white">
          #{rank}
        </span>
        <button
          onClick={onSave}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white"
          aria-label="Save"
        >
          <Heart className={"h-4 w-4 " + (saved ? "fill-rose-500 text-rose-500" : "text-black/35")} />
        </button>
      </div>

      <div className="p-4">
        <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
          {product.brand}
        </div>
        <button onClick={onOpen} className="mt-1 text-left text-lg font-black">
          {product.name}
        </button>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-black">{money(product.price)}</span>
          <span className="text-[10px] font-black">{score}% fit</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {fit.matches.slice(0, 2).map(([key]) => (
            <span key={key} className="rounded-full bg-[#E4F4C8] px-2 py-1 text-[9px] font-bold">
              {priorityLabels[key]}
            </span>
          ))}
        </div>
        <button
          onClick={onAdd}
          className="mt-4 w-full rounded-[16px] bg-[#171816] py-2.5 text-xs font-black text-white"
        >
          Add for {profile.label}
        </button>
      </div>
    </article>
  );
}

function LensEditor({
  profile,
  missionText,
  setMissionText,
  budget,
  weights,
  onApply,
  onClose
}: {
  profile: Profile;
  missionText: string;
  setMissionText: (value: string) => void;
  budget: number;
  weights: PriorityWeights;
  onApply: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-[#171816]/55 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div
        className="w-full max-w-3xl rounded-[34px] bg-[#F7F5EE] p-5 shadow-2xl sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
              Edit shopping lens
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
              What matters for {profile.label} today?
            </h2>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-white" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_300px]">
          <div>
            <textarea
              value={missionText}
              onChange={(event) => setMissionText(event.target.value)}
              rows={7}
              className="w-full resize-none rounded-[24px] border border-black/10 bg-white p-4 text-sm leading-6 outline-none focus:border-black/30"
            />

            <div className="mt-3 rounded-[22px] bg-[#FFE7A3] p-4">
              <div className="flex items-start gap-3">
                <CircleHelp className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <div className="text-xs font-black">One thing may still need clarification</div>
                  <p className="mt-1 text-[10px] leading-4 text-black/55">
                    “Easy to use” could mean a cleaner interface, larger controls or simpler setup.
                    A real system should ask when the answer can change the recommendation.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Clean interface", "Larger controls", "Simple setup"].map((option) => (
                      <button
                        key={option}
                        className="rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-bold"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-[#171816] p-4 text-white">
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-white/35">
              Interpreted lens
            </div>
            <div className="mt-3 space-y-2">
              <LensFact label="Person" value={profile.label} />
              <LensFact label="Category" value="Smartphone" />
              <LensFact label="Budget" value={"Under " + money(budget)} />
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {(Object.entries(weights) as Array<[PriorityKey, number]>)
                .filter(([, weight]) => weight >= 4)
                .map(([key]) => (
                  <span key={key} className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold text-white/70">
                    {priorityLabels[key]}
                  </span>
                ))}
            </div>
            <div className="mt-5 rounded-[18px] bg-white/10 p-3 text-[10px] leading-4 text-white/55">
              Profile ≠ mission. This budget and category belong to this decision, not permanently to {profile.label}.
            </div>
          </div>
        </div>

        <button
          onClick={onApply}
          className="mt-5 w-full rounded-[18px] bg-[#DFFD67] py-3 text-sm font-black"
        >
          Apply lens
        </button>
      </div>
    </div>
  );
}

function LensFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2 text-xs">
      <span className="text-white/35">{label}</span>
      <span className="font-black">{value}</span>
    </div>
  );
}

function ProductView({
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

  const compareIds: RecipientId[] = ["myself", "dad", "riya", "gift"];

  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto bg-[#F3F1EA]">
      <div className="sticky top-0 z-20 border-b border-black/10 bg-[#F3F1EA]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6">
          <button onClick={onClose} className="flex items-center gap-2 text-xs font-black">
            <ChevronLeft className="h-4 w-4" />
            Back to board
          </button>
          <div className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
            Decision view
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-white" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-7 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[560px_minmax(0,1fr)]">
          <div className="rounded-[36px] bg-[#EEECE5] p-5 lg:sticky lg:top-24 lg:self-start">
            <img
              src={product.image}
              alt={product.brand + " " + product.name}
              className="aspect-square w-full object-contain"
            />
          </div>

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
              {product.brand}
            </div>
            <h1 className="mt-1 text-4xl font-black tracking-[-0.055em]">
              {product.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-black/45">
              <span className="flex items-center gap-1 font-black text-black">
                <Star className="h-4 w-4 fill-black" />
                {product.rating}
              </span>
              <span>{product.reviews.toLocaleString("en-IN")} reviews</span>
              <span>·</span>
              <span>{product.deliveryDays === 1 ? "arrives tomorrow" : "arrives in " + product.deliveryDays + " days"}</span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-3xl font-black">{money(product.price)}</span>
              <span className="text-sm text-black/30 line-through">{money(product.mrp)}</span>
            </div>

            <section className="mt-6 rounded-[30px] bg-[#171816] p-5 text-white sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.14em] text-[#DFFD67]">
                    Why it fits this lens
                  </div>
                  <div className="mt-1 text-3xl font-black">{score}% fit for {profile.label}</div>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white/65">
                  {profile.temporary ? "Disposable lens" : "Rememberable lens"}
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <FitColumn
                  title="Matches"
                  tone="bg-[#DFFD67] text-[#171816]"
                  items={fit.matches.map(([key]) => priorityLabels[key])}
                />
                <FitColumn
                  title="Trade-offs"
                  tone="bg-[#FFE7A3] text-[#171816]"
                  items={fit.misses.map(([key]) => priorityLabels[key])}
                />
                <FitColumn
                  title="Unknown"
                  tone="bg-white/10 text-white"
                  items={[product.unknown || "No material unknown flagged"]}
                />
              </div>
            </section>

            <section className="mt-5 rounded-[30px] border border-black/10 bg-[#FBFAF6] p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
                Same phone, different person
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-4">
                {compareIds.map((id) => {
                  const person = profiles[id];
                  const compareScore = scoreProduct(product, person.weights);
                  return (
                    <div
                      key={id}
                      className={
                        "rounded-[20px] border p-3 " +
                        (id === recipientId ? "border-black bg-[#171816] text-white" : "border-black/10 bg-white")
                      }
                    >
                      <div className="flex items-center gap-2">
                        <span className={"grid h-6 w-6 place-items-center rounded-full text-[8px] font-bold " + person.avatarStyle}>
                          {person.initials}
                        </span>
                        <span className="text-[10px] font-black">{person.label}</span>
                      </div>
                      <div className="mt-3 text-2xl font-black">{compareScore}%</div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <SpecBlock label="Battery" value={product.batteryText} />
              <SpecBlock label="Display" value={product.displayText} />
              <SpecBlock label="Camera" value={product.cameraText} />
              <SpecBlock label="Processor" value={product.processorText} />
              <SpecBlock label="Support" value={product.supportText} />
              <SpecBlock label="Charging" value={product.chargingText} />
            </section>

            <section className="mt-5 grid gap-3 sm:grid-cols-[1fr_230px]">
              <div className="rounded-[26px] border border-black/10 bg-[#FBFAF6] p-4">
                <div className="flex items-center gap-2 text-xs font-black">
                  <ShieldCheck className="h-4 w-4" />
                  What happens to the signal?
                </div>
                <p className="mt-2 text-[11px] leading-5 text-black/45">
                  Views, cart and purchase stay attached to {profile.label}'s lens rather than automatically becoming your own preference history.
                </p>
                <div className="mt-3 inline-flex rounded-full bg-[#EEECE5] px-3 py-1.5 text-[10px] font-bold">
                  {memoryMode === "remember"
                    ? "Can improve future shopping for " + profile.label
                    : memoryMode === "session"
                      ? "Use only for this decision"
                      : "Do not learn from this purchase"}
                </div>
              </div>

              <button
                onClick={onAdd}
                className="rounded-[26px] bg-[#DFFD67] px-5 py-5 text-sm font-black"
              >
                Add to decision tray
                <span className="mt-1 block text-[10px] font-semibold opacity-55">
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

function FitColumn({
  title,
  tone,
  items
}: {
  title: string;
  tone: string;
  items: string[];
}) {
  return (
    <div className="rounded-[22px] bg-white/5 p-3">
      <div className={"inline-flex rounded-full px-2.5 py-1 text-[9px] font-black " + tone}>
        {title}
      </div>
      <div className="mt-3 space-y-2">
        {items.length ? (
          items.map((item) => (
            <div key={item} className="text-[11px] leading-4 text-white/70">
              {item}
            </div>
          ))
        ) : (
          <div className="text-[11px] text-white/35">None flagged</div>
        )}
      </div>
    </div>
  );
}

function SpecBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-black/10 bg-[#FBFAF6] p-4">
      <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
        {label}
      </div>
      <div className="mt-1 text-sm font-black">{value}</div>
    </div>
  );
}

function LensLibrary({
  recipientId,
  onRecipientChange,
  memoryModes,
  onMemoryMode,
  onOpenBoard
}: {
  recipientId: RecipientId;
  onRecipientChange: (id: RecipientId) => void;
  memoryModes: Record<RecipientId, MemoryMode>;
  onMemoryMode: (id: RecipientId, mode: MemoryMode) => void;
  onOpenBoard: () => void;
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6">
      <div className="max-w-3xl">
        <div className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
          Lens library
        </div>
        <h1 className="mt-2 text-4xl font-black tracking-[-0.05em]">
          Memory you can see, correct and turn off.
        </h1>
        <p className="mt-3 text-sm leading-6 text-black/45">
          A recipient profile is not a hidden shadow profile. It is a shopper-controlled memory layer that can be edited, made temporary or disabled.
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
                "rounded-[30px] border p-5 " +
                (active
                  ? "border-[#171816] bg-[#171816] text-white"
                  : "border-black/10 bg-[#FBFAF6]")
              }
            >
              <div className="flex items-center gap-3">
                <span className={"grid h-11 w-11 place-items-center rounded-full text-xs font-black " + profile.avatarStyle}>
                  {profile.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-lg font-black">{profile.label}</div>
                  <div className={active ? "text-[10px] text-white/35" : "text-[10px] text-black/35"}>
                    {profile.relation}
                  </div>
                </div>
                {profile.temporary ? <Gift className="h-5 w-5 opacity-40" /> : <User className="h-5 w-5 opacity-30" />}
              </div>

              {profile.saved.length ? (
                <div className="mt-5">
                  <div className={active ? "text-[9px] font-black uppercase tracking-[0.12em] text-white/30" : "text-[9px] font-black uppercase tracking-[0.12em] text-black/30"}>
                    Remembered
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {profile.saved.map((item) => (
                      <span
                        key={item}
                        className={active ? "rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold text-white/65" : "rounded-full bg-[#EEECE5] px-2.5 py-1 text-[9px] font-bold text-black/55"}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={active ? "mt-5 rounded-[18px] bg-white/10 p-3 text-[10px] leading-4 text-white/55" : "mt-5 rounded-[18px] bg-[#FFE7A3] p-3 text-[10px] leading-4 text-[#6A4B00]"}>
                  No permanent recipient memory. This lens disappears after the decision.
                </div>
              )}

              <div className={active ? "mt-5 rounded-[18px] bg-white/10 p-3" : "mt-5 rounded-[18px] border border-black/10 p-3"}>
                <div className={active ? "text-[9px] font-black uppercase tracking-[0.12em] text-white/30" : "text-[9px] font-black uppercase tracking-[0.12em] text-black/30"}>
                  Outcome learning
                </div>
                <select
                  value={memoryModes[id]}
                  onChange={(event) => onMemoryMode(id, event.target.value as MemoryMode)}
                  className={active ? "mt-2 w-full bg-transparent text-xs font-black text-white outline-none" : "mt-2 w-full bg-transparent text-xs font-black outline-none"}
                >
                  <option className="text-black" value="remember">Remember useful outcomes</option>
                  <option className="text-black" value="session">Use only for current decision</option>
                  <option className="text-black" value="none">Do not learn from purchases</option>
                </select>
              </div>

              <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
                <button
                  onClick={() => {
                    onRecipientChange(id);
                    onOpenBoard();
                  }}
                  className={
                    "rounded-[16px] px-3 py-2.5 text-xs font-black " +
                    (active ? "bg-[#DFFD67] text-[#171816]" : "bg-[#171816] text-white")
                  }
                >
                  Open lens
                </button>
                <button
                  className={
                    "rounded-[16px] border px-3 py-2.5 text-xs font-black " +
                    (active ? "border-white/15" : "border-black/15")
                  }
                >
                  Edit
                </button>
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-7 grid gap-3 md:grid-cols-3">
        <PrincipleCard
          number="A"
          title="Gift ≠ preference"
          text="A one-time gift should not permanently change your profile."
        />
        <PrincipleCard
          number="B"
          title="Mission ≠ profile"
          text="One budget or one category should not become a permanent assumption."
        />
        <PrincipleCard
          number="C"
          title="Purchase ≠ success"
          text="Outcome feedback is a better learning signal than the purchase alone."
        />
      </section>
    </div>
  );
}

function DecisionTray({
  items,
  memoryModes,
  onClose,
  onRemove,
  onReassign,
  onFinish
}: {
  items: CartItem[];
  memoryModes: Record<RecipientId, MemoryMode>;
  onClose: () => void;
  onRemove: (index: number) => void;
  onReassign: (index: number, id: RecipientId) => void;
  onFinish: () => void;
}) {
  const subtotal = items.reduce(
    (sum, item) => sum + (productById(item.productId)?.price ?? 0),
    0
  );

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-[#171816]/50 backdrop-blur-sm" onMouseDown={onClose}>
      <aside
        className="h-full w-full max-w-lg overflow-y-auto bg-[#F3F1EA] shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 border-b border-black/10 bg-[#F3F1EA]/95 p-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.14em] text-black/35">
                Decision tray
              </div>
              <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
                {items.length} option{items.length === 1 ? "" : "s"}
              </h2>
            </div>
            <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-white" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-xs leading-5 text-black/45">
            The tray keeps the recipient context attached to each product before purchase.
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
                  <div key={item.productId + "-" + index} className="rounded-[28px] border border-black/10 bg-[#FBFAF6] p-4">
                    <div className="flex gap-3">
                      <img
                        src={product.image}
                        alt=""
                        className="h-24 w-24 rounded-[18px] bg-[#EEECE5] object-contain"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                          {product.brand}
                        </div>
                        <div className="text-base font-black">{product.name}</div>
                        <div className="mt-1 text-sm font-black">{money(product.price)}</div>
                        <button
                          onClick={() => onRemove(index)}
                          className="mt-2 text-[10px] font-black text-rose-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 rounded-[20px] bg-[#EEECE5] p-3">
                      <div className="text-[9px] font-black uppercase tracking-[0.12em] text-black/30">
                        Lens attached to this item
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className={"grid h-7 w-7 place-items-center rounded-full text-[9px] font-bold " + recipient.avatarStyle}>
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
                      <div className="mt-2 flex items-center gap-2 text-[10px] text-black/45">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {memoryMode === "remember"
                          ? "Outcome can update " + recipient.label + "'s lens"
                          : memoryMode === "session"
                            ? "Use only for this decision"
                            : "Do not learn from this purchase"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[28px] bg-[#171816] p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">Subtotal</span>
                <strong className="text-2xl">{money(subtotal)}</strong>
              </div>
              <button
                onClick={onFinish}
                className="mt-4 w-full rounded-[18px] bg-[#DFFD67] py-3 text-sm font-black text-[#171816]"
              >
                Simulate purchase
              </button>
              <p className="mt-2 text-center text-[10px] leading-4 text-white/35">
                Payment is skipped. The prototype jumps to the outcome loop.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid min-h-[70vh] place-items-center p-6 text-center">
            <div>
              <ShoppingBag className="mx-auto h-8 w-8 text-black/20" />
              <div className="mt-3 text-lg font-black">Your tray is empty</div>
              <p className="mt-1 text-xs text-black/40">
                Add a product from the decision board to carry its lens into the next step.
              </p>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

function OutcomeLoop({
  items,
  onClose
}: {
  items: CartItem[];
  onClose: () => void;
}) {
  const [state, setState] = useState<"ask" | "saved">("ask");
  const item = items[0];
  const product = item ? productById(item.productId) : undefined;
  const recipient = item ? profiles[item.recipientId] : undefined;

  return (
    <div className="fixed inset-0 z-[110] grid place-items-center bg-[#171816]/55 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div
        className="w-full max-w-xl rounded-[34px] bg-[#F7F5EE] p-5 shadow-2xl sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-black/35">
              Outcome loop
            </div>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
              Did this actually work for {recipient?.label ?? "the recipient"}?
            </h2>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-white" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        {product ? (
          <div className="mt-5 flex items-center gap-3 rounded-[22px] border border-black/10 bg-white p-3">
            <img
              src={product.image}
              alt=""
              className="h-20 w-20 rounded-[16px] bg-[#EEECE5] object-contain"
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

        {state === "ask" ? (
          <>
            <p className="mt-5 text-xs leading-5 text-black/45">
              Purchase only tells the system what was chosen. Outcome tells it whether the decision was actually good.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                onClick={() => setState("saved")}
                className="rounded-[18px] bg-[#DFFD67] py-3 text-xs font-black"
              >
                Worked well
              </button>
              <button
                onClick={() => setState("saved")}
                className="rounded-[18px] border border-black/15 py-3 text-xs font-black"
              >
                Some trade-offs
              </button>
            </div>
          </>
        ) : (
          <div className="mt-5 rounded-[24px] bg-[#E4F4C8] p-4">
            <div className="flex items-center gap-2 text-sm font-black">
              <Check className="h-4 w-4" />
              Outcome stored in the right place
            </div>
            <p className="mt-2 text-xs leading-5 text-black/55">
              The signal belongs to {recipient?.label}'s lens, not automatically to the account holder's own profile.
            </p>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-[18px] bg-[#171816] py-3 text-sm font-black text-white"
        >
          Finish
        </button>
      </div>
    </div>
  );
}
