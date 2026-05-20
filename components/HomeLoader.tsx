"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "djitugo_intro_seen";

export default function HomeLoader() {
  const [stage, setStage] = useState<"hidden" | "showing" | "fading">("hidden");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem(SESSION_KEY);
    if (seen) return;

    setStage("showing");
    document.documentElement.style.overflow = "hidden";

    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setStage("fading");
        window.sessionStorage.setItem(SESSION_KEY, "1");
        setTimeout(() => {
          setStage("hidden");
          document.documentElement.style.overflow = "";
        }, 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (stage === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[color:var(--color-ink)] text-[color:var(--color-paper)] transition-opacity duration-700 ${
        stage === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={stage === "fading"}
    >
      <div className="container-x w-full">
        <div className="flex flex-col items-start gap-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-60">
            Djitugo · Bali · Est. 2018
          </div>

          {/* Logo + wordmark, large for intro */}
          <div className="flex items-center gap-6">
            <img
              src="/logo.png"
              alt=""
              width="84"
              height="84"
              className="rounded-[14px]"
            />
            <span
              className="font-display tracking-[-0.04em] leading-[0.9] text-[clamp(3rem,9vw,7.5rem)]"
              style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
            >
              djitugo
            </span>
          </div>

          {/* Progress + counter */}
          <div className="w-full max-w-3xl">
            <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.28em] opacity-70 mb-3">
              <span>Where creativity meets technology</span>
              <span className="tabular-nums">{String(progress).padStart(3, "0")} / 100</span>
            </div>
            <div className="h-px w-full bg-[color:var(--color-paper)]/15 overflow-hidden">
              <div
                className="h-full bg-[color:var(--color-paper)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative ring system, bottom right */}
      <svg
        viewBox="0 0 600 600"
        aria-hidden
        className="absolute right-[-12vw] bottom-[-10vw] w-[40vw] max-w-[480px] opacity-30"
      >
        {Array.from({ length: 22 }).map((_, i) => (
          <circle
            key={i}
            cx="300"
            cy="300"
            r={20 + i * 13}
            fill="none"
            stroke="rgba(246,245,241,0.4)"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  );
}
