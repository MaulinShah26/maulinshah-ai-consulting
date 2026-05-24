import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  UserCircle,
  ScanLine,
  ThumbsUp,
  Gauge,
  ListChecks,
  Scale,
  Replace,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "Packaged Food Label Analyzer · Maulin Shah",
  description:
    "A Custom GPT that turns dense packaged food labels into a clear health read, calibrated to age, BMI, dietary preferences, and health conditions. Built solo, grounded in USDA's FoodData Central nutrient database. Live in OpenAI's GPT marketplace.",
};

const features = [
  {
    icon: <UserCircle size={18} aria-hidden />,
    title: "Personalization first",
    body: "Before any label analysis, the GPT collects user details one at a time. Age, gender, weight, height, activity level, dietary preference (vegan, vegetarian, gluten-free, keto), and health conditions (diabetes, hypertension, allergies, kidney concerns, high cholesterol). Everything downstream is calibrated to this profile. The same product can be Moderately Healthy for one user and Not Healthy for another.",
  },
  {
    icon: <ScanLine size={18} aria-hidden />,
    title: "Image validation and quality gating",
    body: "When the user uploads an image, the GPT first checks whether it's actually a food product. If not, it asks for a re-upload. If it is, but ingredients or nutrition facts aren't visible, it asks for a clearer image. It then scores image quality out of 100. Below 80, it requests a sharper photo. The gates exist so the GPT doesn't generate confident analysis from a partial or wrong input.",
  },
  {
    icon: <ThumbsUp size={18} aria-hidden />,
    title: "One-word health verdict",
    body: "Every report leads with a single-word read. Healthy. Moderately Healthy. Not Healthy. Bad for Health. Designed to land instantly so a user reaching for a packet at the supermarket gets the answer in one glance, before reading any deeper.",
  },
  {
    icon: <Gauge size={18} aria-hidden />,
    title: "Four-dimensional product score",
    body: "The overall 0 to 100 score decomposes into four sub-scores. Ingredients evaluates additives, preservatives, oils, processing level. Nutrition evaluates the macro and micro nutrient profile. Healthiness summarizes the likely health impact. Trust evaluates label transparency itself, does the packaging hide things, is data missing. The Trust score is unusual: it scores the label, not just the product.",
  },
  {
    icon: <ListChecks size={18} aria-hidden />,
    title: "Ingredient and nutrition decoder",
    body: "Each major ingredient gets decoded in plain language. Beneficial, questionable, allergenic, high-risk for specific health conditions. The nutrition panel gets flagged: high added sugar, excess sodium, low protein, low fiber, poor calorie-to-nutrient ratio. Sources are provided where possible so users can verify the claims.",
  },
  {
    icon: <Scale size={18} aria-hidden />,
    title: "Portion size, calibrated to you",
    body: "A portion recommendation based on BMI, activity level, dietary preferences, and conditions. The same packet may be acceptable in a small serving for an active adult and inappropriate for someone managing diabetes or hypertension. Portion advice is personalized, not generic.",
  },
  {
    icon: <Replace size={18} aria-hidden />,
    title: "Healthier alternatives",
    body: "Concrete swap suggestions: unsweetened yogurt instead of flavored, whole-grain crackers instead of refined-flour, low-sodium versions, shorter ingredient lists, higher-fiber options. The alternatives come with rationale, not just product names.",
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} · {label}
    </div>
  );
}

export default function PackagedFoodLabelAnalyzerPage() {
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
          Personal project · Custom GPT · Live in OpenAI&apos;s GPT
          marketplace
        </div>
        <h1 className="font-serif text-[36px] md:text-[44px] font-medium text-ink leading-[1.1] mb-5">
          Packaged Food Label Analyzer
        </h1>
        <p className="text-[16px] md:text-[17px] text-ink-700 leading-[1.6] mb-6">
          A Custom GPT that turns dense food labels into a clear health
          read, calibrated to your age, BMI, dietary preferences, and
          health conditions. Built solo, grounded in USDA&apos;s FoodData
          Central nutrient database.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Food Label Recognizer
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Personalized Scoring
          </span>
          <span className="inline-block bg-surface text-ink-700 font-mono text-[10px] font-medium px-2.5 py-1 rounded border-[0.5px] border-ink-200">
            Healthier Alternatives
          </span>
        </div>
        <a
          href="https://chatgpt.com/g/g-67517ea5a680819191527c1065b1d2f5-packaged-food-label-analyzer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ink text-page font-medium text-[14px] px-5 py-3 rounded hover:bg-accent transition-colors"
        >
          Try the GPT
          <ExternalLink size={14} aria-hidden />
        </a>
      </header>

      <hr className="border-ink-200" />

      {/* 01 Why I built this */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="Why I built this" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          What&apos;s actually in the packet
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Packaged food labels are designed to obscure, not to inform.
            The marketing on the front says natural, healthy, high-protein.
            The ingredient list on the back reads like a chemistry textbook.
            The nutrition panel needs an interpretation framework that
            varies by age, BMI, activity level, and health condition. The
            gap between what the packaging promises and what the product
            actually is shows up over time in chronic disease statistics.
          </p>
          <p>
            Most consumers can&apos;t bridge that gap on their own. Asking
            a dietitian every time is impractical. Ignoring the label
            entirely is the default, and the long-term cost compounds
            quietly.
          </p>
          <p>
            Packaged Food Label Analyzer was built to close that gap.
            Upload a food label, share a few personal details once, and get
            a clear read on whether this product is good for you, what the
            ingredients actually mean, and what to choose instead.
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 What's in the GPT */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="What's in the GPT" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Seven pieces that make this more than a chat-style guesser
        </h2>
        <p className="text-[15px] text-ink-700 leading-[1.7] mb-8">
          Anyone can ask GPT-4 about a food product and get an opinion.
          This Custom GPT does something different: structured analysis,
          calibrated to who you are, grounded in authoritative reference
          data. These are the pieces that make it work.
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
          Built solo as a Custom GPT, grounded in authoritative reference
          data
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Built solo inside OpenAI&apos;s Custom GPT framework. The same
            operating discipline I bring into a Fractional engagement.
            Sequential, validated, one stage at a time.
          </p>
          <p>
            The implementation is deliberate prompt engineering. A
            multi-stage workflow lives inside the system prompt:
            personalization collection first, then image validation, then
            quality gating, then structured analysis, then personalized
            portion guidance, then alternatives. Each stage has explicit
            rejection paths so the GPT doesn&apos;t proceed past a check
            it shouldn&apos;t pass.
          </p>
          <p>
            A knowledge file (FoodData Central, USDA&apos;s public food and
            nutrient database) is attached to ground nutritional
            understanding in authoritative reference data rather than
            relying purely on the LLM&apos;s general knowledge. The
            combination of explicit workflow stages and grounded reference
            data makes the GPT behave like a domain-specialized assistant,
            not a chat-style guesser.
          </p>
          <p>
            Important framing: the GPT is a food-label decoder, not a
            doctor. For users with conditions like diabetes, hypertension,
            kidney concerns, allergies, or eating disorders, every
            analysis defers to a qualified health professional before any
            major diet change.
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
            <TechBlock title="Implementation framework">
              <p>
                Built on OpenAI&apos;s Custom GPT framework. Instructions
                defined as a structured system prompt. The GPT is published
                to OpenAI&apos;s GPT marketplace, accessible via the
                ChatGPT app and web interface to anyone with a ChatGPT
                account.
              </p>
            </TechBlock>

            <TechBlock title="Workflow design">
              <p>
                The system prompt runs as a sequential workflow. User
                personalization is collected first, one question at a time,
                before any image is processed. Once the profile is
                complete, image upload triggers a three-stage gate:
                food-product validation, ingredient-and-nutrition
                visibility check, and image quality scoring out of 100.
                Only after all three gates pass does structured analysis
                begin.
              </p>
              <p>
                The workflow exists so the GPT can&apos;t be tricked into
                analyzing a product image it shouldn&apos;t trust.
                Rejection paths are explicit and consistently worded.
              </p>
            </TechBlock>

            <TechBlock title="Knowledge base grounding">
              <p>
                The GPT is augmented with a FoodData Central knowledge
                file, derived from USDA&apos;s public food and nutrient
                database. Nutritional analysis pulls from this reference
                data when available, rather than relying purely on the
                LLM&apos;s general knowledge.
              </p>
              <p>
                The grounded data is the difference between &ldquo;the LLM
                probably knows this&rdquo; and &ldquo;the reference data
                says this&rdquo;. Particularly important for accurate
                nutrient values, where the LLM tends to approximate.
              </p>
            </TechBlock>

            <TechBlock title="Scoring methodology">
              <p>
                The product score decomposes into four orthogonal
                sub-scores. <strong>Ingredients</strong> evaluates
                additives, preservatives, oils, sweeteners, and processing
                level. <strong>Nutrition</strong> evaluates the macro and
                micro nutrient profile. <strong>Healthiness</strong>{" "}
                summarizes the likely health impact.{" "}
                <strong>Trust</strong> evaluates label transparency itself:
                does the packaging hide things, is data missing, are claims
                defensible.
              </p>
              <p>
                The four sub-scores together form a 0 to 100 product
                score with the dimensions exposed. The Trust score is
                unusual: it scores the label, not just the product. A
                packet with weak ingredients but transparent labeling
                rates higher on Trust than a packet with the same
                ingredients hidden behind marketing claims.
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
