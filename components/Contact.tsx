"use client";

import { Calendar, Linkedin } from "lucide-react";
import { contact, social } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Gmail brand mark (single-color, matches the minimal icon set used elsewhere)
function GmailIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

export function Contact() {
  // Build the Gmail compose URL at click time, not at render time.
  // This keeps the email out of the static HTML so that browser
  // extensions doing Cloudflare-style email obfuscation cannot
  // replace it with "[email protected]" placeholder text.
  const openGmail = () => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${social.email}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Reveal id="contact" className="py-14 px-6 border-b border-ink-200/70">
      <div className="max-w-content mx-auto">
        <div className="reveal-child">
          <SectionHeader number={contact.sectionNumber} label={contact.sectionLabel} />
        </div>
        <h2 className="reveal-child text-[19px] font-medium text-ink mb-4">{contact.heading}</h2>
        <p className="reveal-child text-[14px] text-ink-600 leading-[1.75] mb-6 max-w-prose">
          {contact.body}
        </p>
        <div className="reveal-child flex flex-wrap items-center gap-2">
          <a
            href={social.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-ink text-white rounded-md text-[13px] font-medium hover:bg-ink-800 transition-colors"
          >
            <Calendar size={14} aria-hidden />
            {contact.bookingLabel}
          </a>
          <button
            type="button"
            onClick={openGmail}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-ink-300 text-ink rounded-md text-[13px] font-medium hover:border-ink-500 hover:bg-ink-50 transition-colors"
          >
            <GmailIcon size={14} />
            {contact.emailLabel}
          </button>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-ink-300 text-ink rounded-md text-[13px] font-medium hover:border-ink-500 hover:bg-ink-50 transition-colors"
          >
            <Linkedin size={14} aria-hidden />
            {contact.linkedinLabel}
          </a>
        </div>
      </div>
    </Reveal>
  );
}
