"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Stage = "hidden" | "in" | "out";

export default function RouteTransition() {
  const pathname = usePathname();
  const [stage, setStage] = useState<Stage>("hidden");
  const prevPath = useRef(pathname);
  const showTimeout = useRef<number | null>(null);
  const hideTimeout = useRef<number | null>(null);

  // Listen for clicks on internal links to fire the loader immediately
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = (e.target as HTMLElement | null)?.closest("a[href]");
      if (!(target instanceof HTMLAnchorElement)) return;

      const href = target.getAttribute("href") || "";
      if (!href.startsWith("/") || href.startsWith("//")) return;
      if (target.target === "_blank") return;

      // Strip hash/query to compare paths
      const nextPath = href.split("?")[0].split("#")[0];
      if (nextPath === pathname) return;

      setStage("in");
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  // When the path actually changes, hold the loader for a minimum duration then fade out
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    setStage("in");

    if (showTimeout.current) window.clearTimeout(showTimeout.current);
    if (hideTimeout.current) window.clearTimeout(hideTimeout.current);

    // Hold "in" for 500ms, then fade out for 350ms, then hide
    showTimeout.current = window.setTimeout(() => setStage("out"), 500);
    hideTimeout.current = window.setTimeout(() => setStage("hidden"), 850);

    return () => {
      if (showTimeout.current) window.clearTimeout(showTimeout.current);
      if (hideTimeout.current) window.clearTimeout(hideTimeout.current);
    };
  }, [pathname]);

  if (stage === "hidden") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[90] grid place-items-center bg-[color:var(--color-ink)] transition-opacity duration-[350ms] ease-out ${
        stage === "out" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="container-x w-full">
        <div className="flex flex-col items-center gap-6 text-[color:var(--color-paper)]">
          <div className="route-loader-mark">
            {/* Logo monogram drawn with strokes for clean scaling at any size */}
            <svg width="64" height="64" viewBox="0 0 100 100" aria-hidden>
              <g
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              >
                <path
                  d="M 25 27 L 58 27 A 23 23 0 0 1 58 73 L 25 73"
                  className="route-stroke route-stroke-d"
                />
                <path d="M 25 50 L 48 50" className="route-stroke route-stroke-bar" />
              </g>
            </svg>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.32em] opacity-60">
            loading
            <span className="inline-block w-6 text-left ml-1 route-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </div>

          {/* Slim progress sweep */}
          <div className="w-44 h-px bg-[color:var(--color-paper)]/15 overflow-hidden mt-2">
            <div className="h-full w-1/3 bg-[color:var(--color-paper)] route-sweep" />
          </div>
        </div>
      </div>

      <style>{`
        .route-loader-mark { animation: route-loader-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes route-loader-in {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }

        .route-stroke {
          stroke-dasharray: 220;
          stroke-dashoffset: 220;
          animation: route-stroke-draw 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .route-stroke-d   { animation-delay: 0.05s; }
        .route-stroke-bar { animation-delay: 0.25s; }
        @keyframes route-stroke-draw {
          to { stroke-dashoffset: 0; }
        }

        .route-sweep {
          animation: route-sweep 0.9s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        @keyframes route-sweep {
          from { transform: translateX(-100%); }
          to   { transform: translateX(300%); }
        }

        .route-dots > span {
          opacity: 0;
          animation: route-dot 1.2s steps(1, end) infinite;
        }
        .route-dots > span:nth-child(1) { animation-delay: 0s; }
        .route-dots > span:nth-child(2) { animation-delay: 0.3s; }
        .route-dots > span:nth-child(3) { animation-delay: 0.6s; }
        @keyframes route-dot {
          0%, 75%  { opacity: 1; }
          76%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
