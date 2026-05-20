export default function Loading() {
  return (
    <div className="min-h-[100vh] bg-[color:var(--color-paper)]">
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent overflow-hidden">
        <div
          className="h-full bg-[color:var(--color-ink)] route-progress"
          style={{ width: "30%" }}
        />
      </div>

      {/* Centered minimal loader */}
      <div className="pt-36 md:pt-44 pb-24">
        <div className="container-x">
          <div className="flex flex-col items-start gap-8 animate-pulse-slow">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-4)]">
              ( Loading )
            </div>

            {/* Skeleton heading */}
            <div className="space-y-4 w-full max-w-4xl">
              <div className="h-[clamp(2.5rem,8vw,7rem)] w-[80%] rounded-md bg-[color:var(--color-ink)]/8" />
              <div className="h-[clamp(2.5rem,8vw,7rem)] w-[55%] rounded-md bg-[color:var(--color-ink)]/8" />
            </div>

            {/* Skeleton lede */}
            <div className="space-y-2 w-full max-w-md mt-8">
              <div className="h-3 w-full rounded-full bg-[color:var(--color-ink)]/8" />
              <div className="h-3 w-[88%] rounded-full bg-[color:var(--color-ink)]/8" />
              <div className="h-3 w-[60%] rounded-full bg-[color:var(--color-ink)]/8" />
            </div>

            {/* Tiny brand mark, centered fallback */}
            <div className="mt-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink)] animate-pulse" />
              djitugo · loading next page
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .route-progress {
          animation: route-progress 1.6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        @keyframes route-progress {
          0% { transform: translateX(-100%); width: 30%; }
          50% { transform: translateX(150%); width: 50%; }
          100% { transform: translateX(350%); width: 30%; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 1.6s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
