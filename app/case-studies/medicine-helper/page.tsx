import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Camera,
  ShieldCheck,
  Gauge,
  Replace,
  Database,
  Lock,
  HeartHandshake,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "Medicine Helper · Maulin Shah",
  description:
    "A medicine label scanner built as a native mobile app. Camera-first scanning, curated medicine knowledge base, safety scoring, side effects, and alternatives. Built solo. In active development with Play Store prep in progress.",
};

const features = [
  {
    icon: <Camera size={18} aria-hidden />,
    title: "Camera-first scanning",
    body: "Point the camera at the medicine label. The app handles OCR via OpenAI GPT-4 Vision, extracts the key fields (brand name, generic name, strength, manufacturer), and surfaces them in a clean format. No typing. No manual uploads. No chat prompts.",
  },
  {
    icon: <ShieldCheck size={18} aria-hidden />,
    title: "Medicine validation",
    body: "Before any analysis, the system validates that what was scanned is actually a medicinal product. Point at a soda can or a food label by mistake and the response is clear: this is not a medicinal product, please scan something else. No invented analysis, no false confidence on a wrong input.",
  },
  {
    icon: <Gauge size={18} aria-hidden />,
    title: "Safety scoring across multiple dimensions",
    body: "Each medicine gets a 0 to 100 safety score across drug composition, manufacturer credibility, and ingredient quality. The score is interpretable, not opaque. The dimensions are surfaced so the user understands what is feeding the rating.",
  },
  {
    icon: <Replace size={18} aria-hidden />,
    title: "Alternatives, side by side",
    body: "For every analyzed medicine, comparable alternatives are surfaced in a clear table format. Name. Manufacturer. Safety score. Price when available. Intended use. The kind of comparison most patients only get when they specifically ask a pharmacist.",
  },
  {
    icon: <Database size={18} aria-hidden />,
    title: "Curated knowledge base + LLM grounding",
    body: "The system doesn't rely on the LLM alone. A curated medicine knowledge base (seeded with verified medicine data, growing) provides the facts. The LLM is used for OCR extraction and synthesis; the knowledge base provides the ground truth. The combination protects against hallucination on critical medical information.",
  },
  {
    icon: <Lock size={18} aria-hidden />,
    title: "Privacy by default",
    body: "Images are deleted after processing unless the user explicitly consents to retention. No raw OCR text in logs. GDPR-aligned consent flow during onboarding. Privacy policy is part of the build, not an afterthought added before submission.",
  },
  {
    icon: <HeartHandshake size={18} aria-hidden />,
    title: "Persistent medical disclaimers",
    body: "Every screen carries a medical disclaimer. This app provides general information only, and the doctor or pharmacist is always the right next step. Content is written at B1 reading level. Accessibility targeted at WCAG AA. Built to inform, not to replace healthcare professionals.",
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} · {label}
    </div>
  );
}

export default function MedicineHelperPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      {/* Back link */}
      <div className="max-w-content mx-auto px-6 pt-8 pb-2">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-wider text-ink-500 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Back to selected work
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-content mx-auto px-6 pt-6 pb-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent font-medium mb-4">
          Personal project · In active development · Play Store prep in progress
        </div>
        <h1 className="font-serif text-[36px] md:text-[44px] font-medium text-ink leading-[1.1] mb-5">
          Medicine Helper
        </h1>
        <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.6] mb-6">
          A medicine label scanner built as a native mobile app. Snap the
          label, validate that it&apos;s actually a medicine, get a safety
          score, side effects, and alternatives without typing a word. Backed
          by a curated medicine knowledge base, not just an LLM.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Camera-First OCR
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Curated Knowledge Base
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Safety Scoring
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Privacy-First Architecture
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Mobile-Native
          </span>
        </div>
        <a
          href="https://medicine-helper-2.preview.emergentagent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ink text-page font-medium text-[14px] px-5 py-3 rounded hover:bg-accent transition-colors"
        >
          Try the live preview
          <ExternalLink size={14} aria-hidden />
        </a>
      </header>

      <hr className="border-ink-200" />

      {/* 01 Why I built this */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="Why I built this" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Medicine information shouldn&apos;t feel like reading a legal
          document
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Medicine labels are dense, intimidating, and most people
            don&apos;t read them. The information is there. The format
            isn&apos;t. A patient holding a strip of tablets can&apos;t
            quickly answer the questions that actually matter: is this safe,
            what are the side effects, who made it, is there a better
            alternative.
          </p>
          <p>
            I first built this as a Custom GPT to validate the concept.
            Upload a label inside ChatGPT, get safety scores, ingredient
            breakdowns, and alternatives in one structured response. The
            framing worked. People who tried it understood their medicines
            in a way they hadn&apos;t before.
          </p>
          <p>
            But the GPT lived inside ChatGPT. Open the app, find Medicine
            Helper, upload a photo, type a prompt. Three layers of friction
            sit between the user and the answer. Half the value of instant
            medicine information gets eaten by the workflow before it
            starts.
          </p>
          <p>
            Medicine Helper as a native app removes that friction. Open the
            app, point the camera, get the answer. The knowledge base and
            LLM analysis happen behind a clean mobile interface, with
            privacy and medical safety baked in by default. The Custom GPT
            was the proof of concept. The app is the production-grade
            version of the idea.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 What's in the app */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="What's in the app" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Seven things that make this more than a prompt wrapper
        </h2>
        <p className="text-[15px] text-ink-700 leading-[1.7] mb-8">
          Anyone can pipe an image into GPT-4 Vision and call it a medicine
          scanner. Medicine Helper is built differently. These are the
          pieces that take it from a prompt to a product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-surface border-[0.5px] border-ink-200 rounded-md p-4 flex gap-3 items-start"
            >
              <div className="w-9 h-9 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                {f.icon}
              </div>
              <div>
                <div className="font-serif text-[15px] font-medium text-ink leading-tight mb-1.5">
                  {f.title}
                </div>
                <p className="text-[12.5px] text-ink-600 leading-[1.55]">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 03 How it's being built */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="03" label="How it's being built" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Built solo, with AI agents as collaborators
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Built solo with AI agents collaborating across frontend, backend,
            and content. The same operating discipline I bring into a
            Fractional engagement. Sequential, validated, one thing at a
            time.
          </p>
          <p>
            The stack: <strong>Expo React Native</strong> with{" "}
            <strong>TypeScript</strong> and Expo Router on the frontend.{" "}
            <strong>FastAPI</strong> in Python on the backend.{" "}
            <strong>MongoDB</strong> for scan history and state.{" "}
            <strong>OpenAI GPT-4 Vision</strong> for OCR and label analysis.
            A curated medicine knowledge base sits alongside the LLM,
            grounding the analysis with verified facts. The mobile build is
            targeted at Android first, with the Play Store checklist in
            progress.
          </p>
          <p>
            The Custom GPT that started this is still live in OpenAI&apos;s
            GPT marketplace. The native app is the production-grade
            evolution of that idea, currently in active development with
            Play Store submission as the next milestone.
          </p>
        </div>
      </section>

      {/* Technical detail (collapsible) */}
      <section className="max-w-content mx-auto px-6 py-12">
        <details className="group bg-surface border-[0.5px] border-ink-200 rounded-md">
          <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between hover:bg-ink-50 transition-colors">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-0.5">
                For depth
              </div>
              <div className="font-serif text-[16px] font-medium text-ink">
                Technical detail
              </div>
            </div>
            <ChevronDown
              size={18}
              className="text-ink-500 group-open:rotate-180 transition-transform"
              aria-hidden
            />
          </summary>

          <div className="px-5 pb-5 pt-3 space-y-6 border-t border-ink-100">
            <TechBlock title="Production stack">
              <p>
                <strong>Frontend</strong>: Expo React Native with TypeScript
                and Expo Router for file-based navigation. Mobile-first,
                Android targeted.{" "}
                <strong>Backend</strong>: FastAPI in Python.{" "}
                <strong>Database</strong>: MongoDB for scan history,
                user-scoped state, and knowledge base mirror.{" "}
                <strong>AI layer</strong>: OpenAI GPT-4 Vision for OCR
                extraction and structured analysis.{" "}
                <strong>Orchestration</strong>: Docker Compose for local
                development; deployment via a managed container platform.
              </p>
            </TechBlock>

            <TechBlock title="Camera to result data flow">
              <p>
                User points the camera at a medicine label. The image is
                sent to the FastAPI backend. The backend asks GPT-4 Vision
                to confirm this is a medicinal product before doing any
                analysis. If it isn&apos;t, the flow stops with a clear
                rejection.
              </p>
              <p>
                If it passes validation, GPT-4 Vision extracts the label
                fields (brand, generic, strength, manufacturer). The
                extracted fields are matched against the curated knowledge
                base. The KB record provides the verified medicine data
                (purpose, dosage range, side effects, manufacturer
                reputation, alternatives), and the LLM synthesizes a clear
                user-facing response on top of that grounding.
              </p>
              <p>
                The image is discarded after processing unless the user has
                explicitly opted into retention during onboarding.
              </p>
            </TechBlock>

            <TechBlock title="Knowledge base design">
              <p>
                The knowledge base is a structured corpus of medicine
                records, each carrying verified fields: brand and generic
                names, strength, manufacturer with credibility score,
                ingredient breakdown, common and serious side effects,
                indicative price range, alternatives with rationale, and
                content review metadata.
              </p>
              <p>
                Each record is loaded into MongoDB via a dedicated KB
                loader. The seed corpus covers common over-the-counter
                medicines and grows with each release. The KB exists so the
                app does not hallucinate critical medical information.
              </p>
            </TechBlock>

            <TechBlock title="Privacy architecture">
              <p>
                Default behavior: scanned images are processed in-memory and
                discarded immediately after analysis. Raw OCR text is not
                logged. Consent for any retention is gated through the
                onboarding flow and is revocable at any time.
              </p>
              <p>
                The backend operates with input validation and sanitization,
                rate limiting on the public API surface, and structured logs
                that omit sensitive content. The privacy policy is part of
                the repo, not an artifact written for app store submission.
              </p>
            </TechBlock>
          </div>
        </details>
      </section>

      <hr className="border-ink-200" />

      {/* Footer */}
      <footer className="max-w-content mx-auto px-6 py-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-wider text-ink-500 hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Back to selected work
        </Link>
      </footer>
    </main>
  );
}

/* ---------- Sub-components ---------- */

function TechBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
        {title}
      </div>
      <div className="space-y-2 text-[13px] text-ink-700 leading-[1.65]">
        {children}
      </div>
    </div>
  );
}
