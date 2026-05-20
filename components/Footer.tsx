"use client";

import { useEffect, useState } from "react";

const services = [
  { label: "All-in-One Digital Marketing", href: "/services#all-in-one" },
  { label: "Social Media Management", href: "/services#social" },
  { label: "Ads Management", href: "/services#ads" },
  { label: "Web Development", href: "/services#web" },
  { label: "Branding & Design", href: "/services#branding" },
  { label: "Commercial Photography", href: "/services#photography" },
];

const company = [
  { label: "Studio", href: "/studio" },
  { label: "Works", href: "/works" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];
const socials = [
  { label: "Instagram", href: "https://instagram.com/djitugo" },
  { label: "@djitugopictures", href: "https://instagram.com/djitugopictures" },
  { label: "LinkedIn", href: "https://linkedin.com/company/djitugo" },
  { label: "Facebook", href: "https://facebook.com/djitugo.official" },
];

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Makassar",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain"
    >
      <div className="container-x relative z-10 pt-28 pb-12">
        <div className="grid grid-cols-12 gap-y-16 gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-60">
              ( Let&apos;s build something )
            </p>
            <h2 className="text-display mt-6 font-display">
              Have a brand <br />
              <em className="not-italic underline decoration-1 underline-offset-[14px]">worth scaling?</em>
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hello@djitugo.com"
                className="group inline-flex items-center gap-3 bg-[color:var(--color-paper)] text-[color:var(--color-ink)] rounded-full pl-6 pr-2 py-2 text-sm tracking-wide"
              >
                hello@djitugo.com
                <span className="h-10 w-10 grid place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-paper)] transition-transform group-hover:rotate-45">
                  →
                </span>
              </a>
              <a
                href="https://wa.me/6281337329381"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-[color:var(--color-paper)]/30 hover:border-[color:var(--color-paper)] rounded-full px-6 py-3 text-sm tracking-wide transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <FootCol
              title="Services"
              items={services.map((s) => s.label)}
              hrefs={services.map((s) => s.href)}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-1">
            <FootCol
              title="Studio"
              items={company.map((c) => c.label)}
              hrefs={company.map((c) => c.href)}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <FootCol title="Social" items={socials.map((s) => s.label)} hrefs={socials.map((s) => s.href)} />
          </div>
        </div>

        <div className="mt-24 pt-8 border-t hairline-light grid grid-cols-12 gap-4 text-[11px] font-mono uppercase tracking-[0.22em] opacity-70">
          <div className="col-span-12 md:col-span-4">
            Studio · Jl. Bukit Sari Utara 88X, Denpasar, Bali
          </div>
          <div className="col-span-6 md:col-span-4 md:text-center tabular-nums">
            Denpasar · {time} WITA
          </div>
          <div className="col-span-6 md:col-span-4 md:text-right">
            © {new Date().getFullYear()} Djitugo — All rights reserved
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative overflow-hidden"
      >
        <div className="font-display text-[clamp(6rem,28vw,28rem)] leading-[0.82] text-center -mb-[8vw] tracking-[-0.06em] text-[color:var(--color-paper)]/10 select-none">
          DJITUGO
        </div>
      </div>
    </footer>
  );
}

function FootCol({
  title,
  items,
  hrefs,
}: {
  title: string;
  items: string[];
  hrefs?: string[];
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-60 mb-5">
        {title}
      </p>
      <ul className="space-y-3 text-sm">
        {items.map((it, i) => (
          <li key={it}>
            {hrefs?.[i] ? (
              <a
                href={hrefs[i]}
                target="_blank"
                rel="noreferrer"
                className="underline-grow"
              >
                {it}
              </a>
            ) : (
              <a href="#" className="underline-grow">
                {it}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
