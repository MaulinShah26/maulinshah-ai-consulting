import { Calendar, Linkedin } from "lucide-react";
import { contact, social } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
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
        <div className="reveal-child flex flex-col items-start gap-4">
          <a
            href={social.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-ink text-white rounded-md text-[13px] font-medium hover:bg-ink-800 transition-colors"
          >
            <Calendar size={14} aria-hidden />
            {contact.bookingLabel}
          </a>
          <p className="text-[13.5px] text-ink-600 leading-[1.6]">
            {contact.emailPrefix}{" "}
            <a
              href={`mailto:${social.email}`}
              className="text-accent hover:underline"
            >
              {social.email}
            </a>
          </p>
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
