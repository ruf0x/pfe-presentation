interface SectionDividerSlideProps {
  num: string;
  title: string;
}

function CircuitLines({ position }: { position: 'top-left' | 'bottom-right' }) {
  const isTopLeft = position === 'top-left';

  return (
    <svg
      className={`absolute h-20 w-80 text-cyan-400/30 ${isTopLeft ? 'left-0 top-0' : 'bottom-0 right-0 rotate-180'}`}
      viewBox="0 0 320 80"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 18H38L62 38H116L142 18H210" stroke="currentColor" strokeWidth="2" />
      <path d="M0 32H28L46 48H94" stroke="currentColor" strokeWidth="2" />
      <path d="M88 64L116 44H190" stroke="currentColor" strokeWidth="2" />
      <path d="M142 18H188L214 42H282" stroke="currentColor" strokeWidth="2" />
      <circle cx="116" cy="44" r="4" fill="currentColor" />
      <circle cx="214" cy="42" r="4" fill="currentColor" />
      <circle cx="282" cy="42" r="4" fill="currentColor" />
    </svg>
  );
}

export function SectionDividerSlide({ num, title }: SectionDividerSlideProps) {
  return (
    <div className="relative h-full min-h-[240px] w-full overflow-hidden text-cyan-200 sm:min-h-[320px] md:min-h-[420px]">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-12 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-[12%] top-1/2 h-[44%] w-[78%] origin-left -translate-y-1/2 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-transparent [clip-path:polygon(0_50%,100%_0,100%_100%)]" />
      <div className="absolute left-[12%] top-1/2 h-[24%] w-[80%] origin-left -translate-y-1/2 bg-gradient-to-r from-blue-500/10 via-cyan-300/10 to-transparent [clip-path:polygon(0_50%,100%_34%,100%_66%)]" />

      <CircuitLines position="top-left" />
      <CircuitLines position="bottom-right" />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:gap-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-300/50 bg-gradient-to-br from-cyan-400 to-blue-500 text-xl font-black text-slate-950 shadow-lg shadow-cyan-400/25 sm:h-12 sm:w-12 sm:text-2xl md:h-14 md:w-14">
            {num}
          </div>
          <h2 className="bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-300 bg-clip-text text-center text-2xl font-black uppercase tracking-normal text-transparent drop-shadow-lg sm:text-left sm:text-4xl md:text-6xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
