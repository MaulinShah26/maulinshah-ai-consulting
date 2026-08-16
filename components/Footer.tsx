import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import { meta, social } from "@/lib/data";
import { BrandLockup } from "./BrandLockup";

export function Footer() {
  const email = `${social.emailUser}@${social.emailDomain}`;

  return (
    <footer className="px-4 pb-4 pt-10 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-ink text-page">
        <div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-end lg:px-10 lg:py-10">
          <div className="min-w-0">
            <BrandLockup inverse />
            <p className="mt-7 max-w-[700px] font-serif text-[clamp(26px,3vw,42px)] font-medium leading-[1.06] tracking-[-0.03em] text-page">
              Have an important decision that needs better data or AI behind it?
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href={social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full bg-page px-5 text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5 sm:w-auto sm:min-w-[250px]"
            >
              <span className="inline-flex items-center gap-2">
                <Calendar size={15} aria-hidden />
                Book a fit call
              </span>
              <ArrowUpRight size={15} aria-hidden />
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex min-h-11 w-full items-center justify-between gap-4 rounded-full border border-page/20 px-5 text-[12px] text-page/78 transition-colors hover:border-accent hover:text-page sm:w-auto sm:min-w-[250px]"
            >
              <span className="inline-flex items-center gap-2">
                <Mail size={14} aria-hidden />
                {email}
              </span>
              <ArrowUpRight size={14} aria-hidden />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-between gap-4 rounded-full border border-page/20 px-5 text-[12px] text-page/78 transition-colors hover:border-accent hover:text-page sm:w-auto sm:min-w-[250px]"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
        </div>

        <div className="mx-6 flex flex-col gap-2 border-t border-page/12 py-4 text-[10px] text-page/48 sm:mx-8 sm:flex-row sm:items-center sm:justify-between lg:mx-10">
          <span>© {new Date().getFullYear()} {meta.author}</span>
          <span>{meta.location}</span>
        </div>
      </div>
    </footer>
  );
}
