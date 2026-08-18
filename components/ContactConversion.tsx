export function ContactConversion() {
  return (
    <main className="px-6 pb-5 pt-10 md:pb-7 md:pt-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <span className="h-px flex-1 bg-ink-200" aria-hidden />
        </div>

        <section className="py-8 md:py-12">
          <h1 className="max-w-[920px] font-serif text-[clamp(42px,5vw,72px)] font-medium leading-[0.98] tracking-[-0.04em] text-ink">
            Tell me what you are trying to solve.
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] leading-[1.7] text-ink-600 md:text-[16px]">
            Start with the business problem. We can work out whether the right next step is an audit, a focused build, ongoing ownership, or no engagement.
          </p>
        </section>
      </div>
    </main>
  );
}
