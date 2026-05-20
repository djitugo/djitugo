"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "djitugo_cookie_consent";

type Choice = "accepted" | "essential" | null;

export default function CookieConsent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Choice;
    if (stored === "accepted" || stored === "essential") {
      setChoice(stored);
    }
  }, []);

  function decide(value: Exclude<Choice, null>) {
    setChoice(value);
    window.localStorage.setItem(STORAGE_KEY, value);
    window.localStorage.setItem(
      STORAGE_KEY + "_at",
      new Date().toISOString()
    );
  }

  if (!mounted || choice) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md z-[80] animate-cookie-in"
    >
      <div className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)] rounded-2xl border border-[color:var(--color-paper)]/10 p-6 md:p-7 shadow-2xl grain">
        <div className="flex items-start gap-3 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60">
            ( Cookies )
          </span>
        </div>

        <h2 className="font-display text-2xl md:text-[1.75rem] leading-[1.05] tracking-tight">
          We use a few cookies to make this site work.
        </h2>

        <p className="mt-4 text-[13.5px] leading-relaxed opacity-75">
          Essentials are always on. Analytics help us understand which pages people read, so we can improve the studio site. No third-party advertising trackers — ever.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="group inline-flex items-center gap-3 bg-[color:var(--color-paper)] text-[color:var(--color-ink)] rounded-full pl-5 pr-1.5 py-1.5 text-[13px] tracking-wide"
          >
            Accept all
            <span className="h-8 w-8 grid place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-paper)] transition-transform group-hover:rotate-45">
              →
            </span>
          </button>
          <button
            type="button"
            onClick={() => decide("essential")}
            className="inline-flex items-center gap-2 border border-[color:var(--color-paper)]/25 hover:border-[color:var(--color-paper)] rounded-full px-5 py-2 text-[13px] tracking-wide transition-colors"
          >
            Essentials only
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">
          <Link href="/privacy" className="underline-grow">
            Privacy policy
          </Link>
          <Link href="/terms" className="underline-grow">
            Terms of use
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes cookie-in {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-cookie-in {
          animation: cookie-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
      `}</style>
    </div>
  );
}
