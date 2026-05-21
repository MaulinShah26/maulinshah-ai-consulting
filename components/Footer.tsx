import { meta, social } from "@/lib/data";

export function Footer() {
  return (
    <footer className="px-6 py-6 text-[12px] text-ink-500">
      <div className="max-w-content mx-auto flex flex-wrap justify-between gap-3">
        <span>
          © {new Date().getFullYear()} {meta.author} · {meta.location}
        </span>
        <span>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
