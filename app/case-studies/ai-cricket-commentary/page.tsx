import { Nav } from "@/components/Nav";
import { CaseNarrative } from "@/components/CaseNarrative";
import Link from "next/link";
import {
  ArrowLeft,
  Headphones,
  MessageCircle,
  Mic,
  Workflow,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Sparkles,
  AlertCircle,
  ChevronDown,
  Coins,
} from "lucide-react";

export const metadata = {
  title: "AI Commentary at CricHeroes · Maulin Shah",
  description:
    "A unified GenAI vision at CricHeroes to bring the international cricket experience, pre-match analysis, live ball-by-ball commentary, and post-match wrap-up, to grassroots cricketers. Three pilots evaluated in 2024, three different outcomes, three different lessons about evaluating GenAI bets.",
};

const components = [
  {
    icon: <Mic size={18} aria-hidden />,
    label: "Pre-match show",
    role: "Voice",
    body: "Expert-style studio analysis before the game: player form, ground history, conditions, why this match matters.",
  },
  {
    icon: <MessageCircle size={18} aria-hidden />,
    label: "Live commentary",
    role: "Text",
    body: "Existing ball-by-ball commentary was already in the app, but mechanical and technical. Upgrade to a Cricbuzz/Cricinfo-style narrative.",
  },
  {
    icon: <Headphones size={18} aria-hidden />,
    label: "Post-match show",
    role: "Voice",
    body: "Expert-style wrap-up after the game: key moments, milestones, top performances, what the result means.",
  },
];

const outcomes = [
  {
    label: "Pre-match show",
    type: "Voice",
    status: "Pilot · Killed on cost",
    tone: "muted" as const,
    metric: "₹5–6 / match",
    metricLabel: "Per match cost",
    note: "Projected ~₹50–60 lakh/month at full rollout. Engagement-only feature without direct revenue tie-in.",
  },
  {
    label: "Live commentary",
    type: "Text",
    status: "Pilot · Held on quality",
    tone: "accent" as const,
    metric: "+15%",
    metricLabel: "Engagement on commentary screen",
    note: "1-month pilot across ~25–30K matches. Economics worked at ~₹1–1.5/match. But the LLM produced repetitive sentences over time.",
  },
  {
    label: "Post-match show",
    type: "Voice",
    status: "Pilot · Killed on cost",
    tone: "muted" as const,
    metric: "₹5–6 / match",
    metricLabel: "Per match cost",
    note: "Same cost economics as pre-match. Voice synthesis dominated the unit cost regardless of content.",
  },
];

const costs = [
  {
    label: "Text generation (GPT)",
    value: "₹1–1.5",
    note: "Per match. Used in live commentary; also part of pre/post show inputs.",
    tone: "accent" as const,
  },
  {
    label: "Voice synthesis (ElevenLabs)",
    value: "₹3–4",
    note: "Per match. The dominant cost driver for any voice-based component.",
    tone: "muted" as const,
  },
  {
    label: "Combined voice show",
    value: "₹5–6",
    note: "Per match. Text + voice. Needed to drop to ~₹2–3 to be shippable as an engagement-only feature.",
    tone: "muted" as const,
  },
];

const lessons = [
  {
    title: "Three components, three different killers",
    body: "Pre and post died on cost economics. The math at scale couldn’t be defended for a non-revenue feature. Live died on quality. The LLM produced repetitive output that wouldn’t hold engagement long-term. Same vision, same team, same year, three completely different reasons to pause. The job is to evaluate each bet on its own terms, not bucket them into ‘GenAI worked’ or ‘GenAI didn’t.’",
  },
  {
    title: "Cost is not the same problem as cost-at-scale",
    body: "₹5–6 per match is nothing for a single match. The same number at 10 lakh matches per month becomes ₹50–60 lakh, a real budget conversation. Cost-at-scale is where most GenAI pilots fall down. Looks great in demo, painful in production.",
  },
  {
    title: "Engagement uplift isn’t enough by itself",
    body: "Live commentary moved its target metric 15%. That’s real. But the project surfaced an LLM limitation, repetition over time, that an engagement product can’t survive. Sometimes the headline number is right and the long-term durability isn’t. Both have to clear the bar before something ships.",
  },
  {
    title: "Architect for the revive",
    body: "All three pilots produced working code, defensible numbers, and clear conditions under which they become shippable: voice costs drop ~50%, or a revenue model (sponsored audio, premium tier) attaches; LLM repetition gets solved through better prompt diversification or model improvements. None of these are abstract. They’re tracked conditions. The decision is paused, not deleted.",
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-medium mb-3">
      {number} · {label}
    </div>
  );
}

export default function AICricketCommentaryPage() {
  return (
    <main className="bg-page text-ink min-h-screen">
      <Nav />
      <CaseNarrative slug="ai-cricket-commentary" />

      {/* 01 The situation */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="01" label="The situation" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          International cricket has a full experience. Grassroots didn’t.
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7]">
          <p>
            Every international cricket match comes wrapped in an experience.
            A pre-match show with experts breaking down conditions and
            previews. A rich, narrative live commentary. A post-match wrap-up
            walking through key moments and player performances. That
            wrap-around is half the reason fans tune in.
          </p>
          <p>
            CricHeroes had the match: live scoring, ball-by-ball tracking,
            player stats, profiles. But the moments around the match were
            quiet. The live commentary that did exist was mechanical and
            technical: accurate, but flat. Pre and post were dead air. The
            gap was clear: could GenAI bring the international experience to
            grassroots cricket?
          </p>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 02 The vision */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="02" label="The vision" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Three components of the international match experience
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            The hypothesis: bring all three components to every match scored
            on CricHeroes. Use OpenAI for text generation, ElevenLabs for
            voice, and feed the prompts with the kind of contextual data
            (ground history, player form, team head-to-head) that makes
            commentary feel earned rather than generic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {components.map((c, i) => (
            <div
              key={i}
              className="bg-surface border-[0.5px] border-ink-200 rounded-md p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                  {c.icon}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium">
                  {c.role}
                </span>
              </div>
              <div className="font-serif text-[16px] font-medium text-ink leading-tight mb-2">
                {c.label}
              </div>
              <p className="text-[13px] text-ink-600 leading-[1.6]">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 03 What we built */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="03" label="What we built" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Two distinct pipelines, voice and text, sharing a foundation
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            Architecturally there were two flavors. The{" "}
            <strong>voice pipeline</strong> (used for pre and post shows)
            assembled match-specific data into a prompt, sent it to GPT for a
            commentary script, then piped the text into ElevenLabs for voice
            synthesis. The output landed as an MP3 attached to the match
            profile.
          </p>
          <p>
            The <strong>text pipeline</strong> (used for live commentary) took
            the existing ball-by-ball mechanical text the app was already
            producing, “4 runs off the over,” “bowled,” “six over square leg”
            , and rewrote it in real time with GPT into richer, more
            narrative commentary in the Cricbuzz / Cricinfo style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Voice pipeline */}
          <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-3">
              Voice pipeline · Pre & Post
            </div>
            <div className="space-y-1.5 text-[12.5px] text-ink-700 leading-[1.55] font-mono">
              <div>Match data</div>
              <div className="text-ink-400">↓</div>
              <div>Prompt assembly</div>
              <div className="text-ink-400">↓</div>
              <div>GPT → text</div>
              <div className="text-ink-400">↓</div>
              <div>ElevenLabs → voice</div>
              <div className="text-ink-400">↓</div>
              <div>MP3 attached to match</div>
            </div>
          </div>

          {/* Text pipeline */}
          <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-3">
              Text pipeline · Live
            </div>
            <div className="space-y-1.5 text-[12.5px] text-ink-700 leading-[1.55] font-mono">
              <div>Mechanical ball-by-ball text</div>
              <div className="text-ink-400">↓</div>
              <div>Context assembly</div>
              <div className="text-ink-400">↓</div>
              <div>GPT → rewrite</div>
              <div className="text-ink-400">↓</div>
              <div>Enhanced commentary</div>
              <div className="text-ink-400">↓</div>
              <div>Surfaced in match screen</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 04 Three pilots, three outcomes - THE CENTERPIECE */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="04" label="Three pilots, three outcomes" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Same vision, same year, same team. Three completely different
          fates.
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            Each component was piloted and evaluated against the bar a
            production rollout would have to clear. The results split three
            ways, and the reasons were as different as the components
            themselves.
          </p>
        </div>

        <div className="space-y-3">
          {outcomes.map((o, i) => (
            <OutcomeCard key={i} {...o} />
          ))}
        </div>
      </section>

      <hr className="border-ink-200" />

      {/* 05 The economics */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="05" label="The economics" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          The cost structure split the project in half
        </h2>
        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-8">
          <p>
            The unit costs are what determined which components were
            shippable and which weren’t. Voice synthesis dominated, and it
            ran on a different cost curve than text generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {costs.map((c, i) => (
            <CostCard key={i} {...c} />
          ))}
        </div>

        {/* Volume math */}
        <h3 className="font-serif text-[18px] font-medium text-ink mb-4">
          The cost-at-scale math for voice
        </h3>
        <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-5 mb-6">
          <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-3">
            Projected monthly cost at full rollout (voice shows)
          </div>
          <div className="space-y-2 font-mono text-[13px] text-ink-700 leading-[1.7]">
            <div>~2.5 lakh matches / week × 4 weeks = <strong>~10 lakh matches / month</strong></div>
            <div>~10 lakh matches / month × ~₹5.5 / match = <strong className="text-accent">~₹50–60 lakh / month</strong></div>
          </div>
        </div>

        {/* The gap */}
        <div className="border-l-2 border-l-accent bg-accent-soft/40 pl-5 py-4 pr-4 rounded-r-md mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded flex items-center justify-center bg-accent-soft text-accent">
              <TrendingDown size={16} aria-hidden />
            </span>
            <h4 className="font-serif text-[16px] font-medium text-ink leading-tight">
              The blocker on voice components
            </h4>
          </div>
          <p className="text-[14px] text-ink-700 leading-[1.65]">
            The gap was about 2x: actual ₹5–6 per match vs. shippable ~₹2–3.
            But the deeper blocker wasn’t the number. The pre and post shows
            were engagement-only features with no direct revenue tie-in. The
            stakeholder conversation became “is this worth ₹50–60 lakh a
            month to grow engagement?” For an engagement-only feature at
            that scale, that argument is hard to win, and the right call
            was probably not to win it.
          </p>
        </div>

        <p className="text-[14px] text-ink-600 leading-[1.65]">
          Live commentary lived on the other side of this math. Text-only
          generation meant ~₹1–1.5 per match. The economics worked. Which
          is why the bet on live commentary failed for an entirely
          different reason.
        </p>
      </section>

      <hr className="border-ink-200" />

      {/* 06 The quality limit (live commentary) */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="06" label="The quality limit" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-5">
          Live commentary worked. Until it started repeating itself.
        </h2>

        {/* Result block */}
        <div className="bg-surface border-[0.5px] border-ink-200 border-l-2 border-l-accent rounded-r-md p-5 mb-6">
          <div className="flex items-start gap-3 mb-3">
            <span className="w-8 h-8 rounded bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
              <TrendingUp size={16} aria-hidden />
            </span>
            <div>
              <div className="font-serif text-[16px] font-medium text-ink leading-tight">
                What the live commentary pilot produced
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <ResultMetric value="~25–30K" label="Matches in pilot" />
            <ResultMetric value="1 month" label="Pilot duration" />
            <ResultMetric value="+15%" label="Engagement uplift on commentary screen" tone="accent" />
          </div>
        </div>

        <div className="space-y-4 text-[15px] text-ink-700 leading-[1.7] mb-6">
          <p>
            The pilot ran for one month across all matches of 20 overs and
            above, roughly 25–30 thousand matches. Engagement on the
            commentary screen rose 15% versus the prior month’s baseline.
            That signal was real.
          </p>
          <p>
            But the pilot also surfaced a 2024-era LLM limitation that an
            engagement product couldn’t carry into production:{" "}
            <em>over time, the model produced repetitive sentences.</em>{" "}
            Across hundreds of overs and tens of thousands of balls, the
            same phrasings began recurring. A user who watched a few matches
            in a row would start noticing the pattern.
          </p>
        </div>

        <div className="border-l-2 border-l-accent bg-accent-soft/40 pl-5 py-4 pr-4 rounded-r-md mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded flex items-center justify-center bg-accent-soft text-accent">
              <AlertCircle size={16} aria-hidden />
            </span>
            <h4 className="font-serif text-[16px] font-medium text-ink leading-tight">
              Why this killed the bet
            </h4>
          </div>
          <p className="text-[14px] text-ink-700 leading-[1.65]">
            Engagement products live or die on variety. Repetitive content
            loses users over time even when the initial signal is positive.
            For live commentary to scale into a permanent feature, the
            repetition problem had to be solved: either through better
            prompt diversification, a fundamentally different model
            architecture, or LLM improvements that hadn’t yet arrived in
            2024.
          </p>
        </div>

        <p className="text-[14px] text-ink-600 leading-[1.65]">
          Decision: hold. Strong engagement signal recorded, conditions for
          revival noted, pilot architecture preserved. The same way the
          voice components are paused for cost economics, live commentary is
          paused for LLM quality.
        </p>
      </section>

      <hr className="border-ink-200" />

      {/* 07 Reflections / Lessons */}
      <section className="max-w-content mx-auto px-6 py-12">
        <SectionEyebrow number="07" label="Reflections" />
        <h2 className="font-serif text-[24px] md:text-[28px] font-medium text-ink leading-tight mb-8">
          What this taught me about evaluating GenAI bets
        </h2>

        <div className="space-y-4">
          {lessons.map((l, i) => (
            <LessonBlock key={i} {...l} />
          ))}
        </div>
      </section>

      {/* Technical detail (collapsible) */}
      <section className="max-w-content mx-auto px-6 pb-12">
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
            <TechBlock title="Voice pipeline · Pre-match">
              <p>
                A nightly job identified matches scheduled for the next day,
                pulled the team and player lists, and assembled eight
                pre-match data inputs: innings totals on the same ground at
                the same over slot, run-scoring patterns on the ground, toss
                insights, last five match results on the ground, recent
                results for both teams, pace vs spin performance, top
                batters from each team, top bowlers from each team.
              </p>
              <p>
                A structured prompt was sent to GPT, which returned a
                90–120 second commentary script. The script was piped to
                ElevenLabs for voice synthesis. The resulting MP3 was
                attached to the match profile so users could play it from
                the scorecard screen before the game.
              </p>
            </TechBlock>

            <TechBlock title="Voice pipeline · Post-match">
              <p>
                Triggered on match completion. Pulled the final scorecard,
                top three batters, top three bowlers, run-scoring patterns
                by phase, and standout moments. Same prompt-to-voice flow:
                structured input → GPT script → ElevenLabs MP3 → attached
                to match profile within minutes of the game ending.
              </p>
            </TechBlock>

            <TechBlock title="Text pipeline · Live commentary">
              <p>
                The existing app-generated ball-by-ball commentary was
                mechanical: outcome of the ball, score state, basic context.
                The pilot intercepted that mechanical text, added match
                context (current run-rate, recent over patterns, player
                form), and sent the combined input to GPT for a rewrite
                into richer narrative commentary.
              </p>
              <p>
                The rewritten commentary surfaced in the live match screen,
                replacing the mechanical text without changing the
                underlying scoring pipeline. The pilot covered all matches
                of 20 overs and above, about 25–30 thousand matches in the
                pilot month.
              </p>
            </TechBlock>

            <TechBlock title="Cost decomposition">
              <p>
                Per match cost broke down roughly as:
              </p>
              <p>
                <strong>Text generation (GPT)</strong>: ~₹1–1.5 per match.
                Used as the only cost in live commentary, and as input to
                the voice synthesis in pre/post shows.
              </p>
              <p>
                <strong>Voice synthesis (ElevenLabs)</strong>: ~₹3–4 per
                match for a 90–120 second clip. Priced per character of
                output, which scaled directly with commentary length.
              </p>
              <p>
                Combined voice show cost: ~₹5–6 per match. Live commentary
                cost: ~₹1–1.5 per match.
              </p>
            </TechBlock>

            <TechBlock title="Volume math">
              <p>
                CricHeroes was scoring roughly 2–3 lakh matches per week at
                the time of the pilots. Conservatively assuming ~2.5 lakh
                matches per week × 4 weeks gave ~10 lakh matches per month.
                At ~₹5.5 average per match for voice shows, the monthly bill
                came to ~₹55 lakh, with the range ~₹50–60 lakh depending
                on exact format mix.
              </p>
              <p>
                The live commentary pilot ran on ~25–30K matches in one
                month, limited to matches of 20 overs and above, which was
                a fraction of total match volume but the right starting
                cohort for evaluating engagement.
              </p>
            </TechBlock>

            <TechBlock title="LLM repetition limit">
              <p>
                With a sufficiently large prompt context that included
                match-specific data, the GPT model produced rich,
                contextual commentary for individual balls. But across
                large volumes, the model defaulted to a finite set of
                phrasings. Boundary descriptions, dot-ball framing,
                wicket-fall reactions began recurring across different
                matches. Output was high-quality per instance but
                low-variety across instances.
              </p>
              <p>
                This is a known characteristic of 2024-era LLMs in
                high-volume, repeating-event domains. Solving it requires
                explicit prompt diversification, output deduplication
                logic, or model improvements, none of which were part of
                the pilot’s scope.
              </p>
            </TechBlock>

            <TechBlock title="Conditions for revival">
              <p>
                Each component has a tracked condition under which it
                becomes shippable again:
              </p>
              <p>
                <strong>Voice shows (pre + post)</strong>: voice synthesis
                cost drops ~50% to reach ~₹2–3 per match combined, OR a
                revenue model attaches to the audio (sponsored commentary,
                premium tier).
              </p>
              <p>
                <strong>Live commentary</strong>: prompt diversification
                or output deduplication solves the repetition pattern, OR
                a newer model demonstrates higher variety at similar cost.
              </p>
            </TechBlock>

            <TechBlock title="Tools used">
              <p>
                Python for orchestration. AWS RDS for source data. OpenAI
                for text generation (GPT). ElevenLabs for voice synthesis.
                Output: MP3 files attached to match profiles for voice
                shows; enhanced live commentary text in-app.
              </p>
            </TechBlock>
          </div>
        </details>
      </section>

      {/* Founder takeaway */}
      <section className="max-w-content mx-auto px-6 pb-4">
        <div className="bg-accent-soft/40 border-l-2 border-accent rounded-md px-5 py-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent font-medium mb-2">
            Founder takeaway
          </div>
          <p className="text-[15px] text-ink-800 leading-[1.6]">
            The senior call on AI is often what not to build. Killing two pilots early was worth more than shipping all three.
          </p>
        </div>
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

function OutcomeCard({
  label,
  type,
  status,
  tone,
  metric,
  metricLabel,
  note,
}: {
  label: string;
  type: string;
  status: string;
  tone: "accent" | "muted";
  metric: string;
  metricLabel: string;
  note: string;
}) {
  const borderClass =
    tone === "accent" ? "border-l-accent" : "border-l-ink-400";
  return (
    <div
      className={`bg-surface border-[0.5px] border-ink-200 border-l-2 ${borderClass} rounded-r-md p-5`}
    >
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-ink-500 font-medium mb-1">
            {type}
          </div>
          <div className="font-serif text-[18px] font-medium text-ink leading-tight">
            {label}
          </div>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-wider text-accent font-medium md:text-right">
          {status}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-start">
        <div className="bg-ink-50 rounded p-3 text-center">
          <div className="font-serif text-[22px] font-medium text-ink leading-tight mb-1">
            {metric}
          </div>
          <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 leading-tight">
            {metricLabel}
          </div>
        </div>
        <p className="text-[13.5px] text-ink-700 leading-[1.6]">{note}</p>
      </div>
    </div>
  );
}

function CostCard({
  label,
  value,
  note,
  tone,
}: {
  label: string;
  value: string;
  note: string;
  tone: "accent" | "muted";
}) {
  const classes =
    tone === "accent"
      ? "border-accent bg-accent-soft"
      : "border-ink-200 bg-surface";
  return (
    <div className={`border-[0.5px] rounded-md p-5 ${classes}`}>
      <div className="font-mono text-[10px] uppercase tracking-wider text-accent font-medium mb-2">
        <Coins size={12} className="inline mr-1 -mt-px" aria-hidden />
        {label}
      </div>
      <div className="font-serif text-[28px] font-medium text-ink leading-tight mb-2">
        {value}
      </div>
      <p className="text-[12px] text-ink-600 leading-[1.5]">{note}</p>
    </div>
  );
}

function ResultMetric({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone?: "accent";
}) {
  return (
    <div className="bg-ink-50 rounded p-3 text-center">
      <div
        className={`font-serif text-[22px] font-medium leading-tight mb-1 ${
          tone === "accent" ? "text-accent" : "text-ink"
        }`}
      >
        {value}
      </div>
      <div className="font-mono text-[9px] uppercase tracking-wider text-ink-500 leading-tight">
        {label}
      </div>
    </div>
  );
}

function LessonBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-surface border-[0.5px] border-ink-200 rounded-md p-5">
      <div className="font-serif text-[16px] font-medium text-ink leading-tight mb-2">
        {title}
      </div>
      <p className="text-[14px] text-ink-700 leading-[1.65]">{body}</p>
    </div>
  );
}

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
