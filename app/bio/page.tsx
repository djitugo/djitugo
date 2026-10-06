import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_CONTACT } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bio",
  description:
    "We turn ideas into visual & digital impact. All Djitugo links in one place — website, WhatsApp, Instagram and Facebook.",
  alternates: { canonical: "/bio" },
};

type BioLink = {
  label: string;
  sub: string;
  href: string;
  icon: React.ReactNode;
  internal?: boolean;
};

const links: BioLink[] = [
  { label: "Website", sub: "djitugo.com", href: "/", icon: <GlobeIcon />, internal: true },
  { label: "WhatsApp", sub: BRAND_CONTACT.phone, href: BRAND_CONTACT.whatsapp, icon: <WhatsAppIcon /> },
  { label: "Instagram", sub: "@djitugo", href: BRAND_CONTACT.instagram, icon: <InstagramIcon /> },
  { label: "Behance", sub: "djitugoagency", href: BRAND_CONTACT.behance, icon: <BehanceIcon /> },
  { label: "Facebook", sub: "djitugo.official", href: BRAND_CONTACT.facebook, icon: <FacebookIcon /> },
];

const rowClass =
  "bio-item group flex items-center gap-4 rounded-full border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/[0.03] pl-2 pr-5 py-[clamp(4px,0.9dvh,8px)] hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)] transition-colors duration-300";

export default function BioPage() {
  return (
    <main className="relative flex h-[100dvh] flex-col overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain">
      <div className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-5 pt-[3dvh]">
        <img
          src="/logo.png"
          alt="Djitugo"
          width="88"
          height="88"
          className="bio-item h-[clamp(48px,9dvh,88px)] w-[clamp(48px,9dvh,88px)] rounded-[18px] border border-[color:var(--color-paper)]/15"
          style={{ animationDelay: "0s" }}
        />

        <h1 className="bio-item mt-[clamp(10px,2.5dvh,24px)] font-display text-[clamp(1.75rem,4.5dvh,2.25rem)] tracking-tight" style={{ animationDelay: "0.06s" }}>Djitugo</h1>
        <p style={{ animationDelay: "0.12s" }} className="bio-item mt-[clamp(4px,1dvh,8px)] font-mono text-[11px] uppercase tracking-[0.28em] opacity-60">
          Digital studio · Bali
        </p>
        <p style={{ animationDelay: "0.18s" }} className="bio-item mt-[clamp(8px,2dvh,20px)] max-w-xs text-center text-[14.5px] leading-relaxed opacity-80 [@media(max-height:520px)]:hidden">
          We turn ideas into visual &amp; digital impact.
          <span className="[@media(max-height:740px)]:hidden"> Brand visuals with purpose, digital presence that performs.</span>
        </p>

        <ul className="mt-[clamp(14px,4dvh,40px)] w-full space-y-[clamp(6px,1.2dvh,12px)]">
          {links.map((l, i) => {
            const inner = (
              <>
                <span className="grid h-[clamp(34px,5.5dvh,44px)] w-[clamp(34px,5.5dvh,44px)] shrink-0 place-items-center rounded-full bg-[color:var(--color-paper)]/10 transition-colors group-hover:bg-[color:var(--color-ink)]/10">
                  {l.icon}
                </span>
                <span className="flex-1">
                  <span className="block text-[15px] font-medium">{l.label}</span>
                  <span className="block font-mono text-[11px] tracking-[0.12em] opacity-60">{l.sub}</span>
                </span>
                <span aria-hidden className="transition-transform duration-300 group-hover:-rotate-45">
                  →
                </span>
              </>
            );
            return (
              <li key={l.label}>
                {l.internal ? (
                  <Link href={l.href} className={rowClass} style={{ animationDelay: `${0.25 + i * 0.07}s` }}>
                    {inner}
                  </Link>
                ) : (
                  <a href={l.href} target="_blank" rel="noreferrer" className={rowClass} style={{ animationDelay: `${0.25 + i * 0.07}s` }}>
                    {inner}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

      </div>

      <p style={{ animationDelay: "0.6s" }} className="bio-item relative z-10 shrink-0 py-[clamp(12px,3dvh,28px)] text-center font-mono text-[10px] uppercase tracking-[0.28em] opacity-40">
        © {new Date().getFullYear()} Djitugo · Bali
      </p>

      {/* Ring system, bottom right — same motif as the hero */}
      <svg
        viewBox="0 0 600 600"
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-40 w-[520px] opacity-40"
      >
        {Array.from({ length: 22 }).map((_, i) => (
          <circle key={i} cx="300" cy="300" r={20 + i * 13} fill="none" stroke="rgba(246,245,241,0.25)" strokeWidth="0.5" />
        ))}
      </svg>

      <style>{`
        html, body { height: 100%; overflow: hidden; overscroll-behavior: none; background: #0a0a0a; }
        .bio-item { animation: bio-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes bio-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M9.5 8.5c-.4 0-.9.4-.9 1.1 0 2.6 3.2 5.8 5.8 5.8.7 0 1.1-.5 1.1-.9v-1l-1.6-.8-.8.8c-1-.4-2.2-1.6-2.6-2.6l.8-.8-.8-1.6z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <span aria-hidden className="font-sans text-[14px] font-bold tracking-tight leading-none">
      Bē
    </span>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
