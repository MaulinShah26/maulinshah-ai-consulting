import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { social } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy | Maulin Shah",
  description:
    "How analytics and privacy preferences work on Maulin Shah's portfolio website.",
};

export default function PrivacyPage() {
  const email = `${social.emailUser}@${social.emailDomain}`;

  return (
    <>
      <Nav />
      <main className="px-6 pb-14 pt-12 md:pb-20 md:pt-16">
        <article className="mx-auto max-w-[880px]">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
            Privacy
          </p>
          <h1 className="mb-5 font-serif text-[38px] font-medium leading-[1.05] tracking-[-0.03em] text-ink md:text-[52px]">
            A clear account of what this site measures.
          </h1>
          <p className="mb-12 max-w-[760px] text-[15px] leading-relaxed text-ink-600 md:text-[16px]">
            This portfolio uses analytics only after you choose to allow them.
            The information is used to understand which pages are useful and
            where the experience can be improved. It is not sold or used for
            advertising.
          </p>

          <div className="space-y-10 text-[14px] leading-[1.75] text-ink-600 md:text-[15px]">
            <section>
              <h2 className="mb-3 font-serif text-[25px] font-medium leading-tight text-ink">
                What may be collected
              </h2>
              <p>
                If you allow analytics, the site may collect page views,
                referring source and campaign information, approximate
                location, device and browser details, clicks, scrolling and
                navigation patterns. Contact messages are sent through the
                channel you choose and are not submitted through an analytics
                form on this site.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-[25px] font-medium leading-tight text-ink">
                Services used
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-ink-200 bg-surface p-5">
                  <h3 className="mb-2 font-medium text-ink">Google Analytics 4</h3>
                  <p>
                    Used for aggregated traffic, acquisition and conversion
                    reporting. Event data retention is configured for 14 months.
                  </p>
                  <Link
                    className="mt-3 inline-block text-accent underline decoration-accent/35 underline-offset-4"
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google privacy policy
                  </Link>
                </div>
                <div className="rounded-2xl border border-ink-200 bg-surface p-5">
                  <h3 className="mb-2 font-medium text-ink">Microsoft Clarity</h3>
                  <p>
                    Used for session recordings, heatmaps and interaction
                    patterns that help identify usability problems.
                  </p>
                  <Link
                    className="mt-3 inline-block text-accent underline decoration-accent/35 underline-offset-4"
                    href="https://privacy.microsoft.com/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft privacy statement
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-[25px] font-medium leading-tight text-ink">
                Your choice
              </h2>
              <p>
                Google Analytics and Microsoft Clarity do not load before you
                allow analytics. If you decline, no analytics data is sent. You
                can change your choice at any time through Analytics preferences
                in the footer. Withdrawing consent reloads the page and stops the
                analytics scripts.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-[25px] font-medium leading-tight text-ink">
                Questions
              </h2>
              <p>
                For privacy questions, email{" "}
                <a
                  className="text-accent underline decoration-accent/35 underline-offset-4"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
                .
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-400">
                Last updated 22 August 2026
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
