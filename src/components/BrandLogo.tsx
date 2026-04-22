import { cn } from '../lib/utils';

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLogo({ className, compact = false }: BrandLogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/35 bg-black/70 shadow-[0_0_20px_rgba(153,69,255,0.18)]">
        <div className="absolute inset-1 rounded-[1rem] border border-violet-400/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,245,255,0.22),transparent_58%)]" />
        <span className="relative text-xl font-bold text-cyan-200 drop-shadow-[0_0_14px_rgba(0,245,255,0.8)]">Ψ</span>
      </div>
      {!compact ? (
        <div>
          <p className="text-[10px] uppercase tracking-[0.38em] text-cyan-200/70">Sovereign Regime</p>
          <p className="text-sm font-semibold tracking-[0.2em] text-white">ABRAXAS ACADEMY</p>
        </div>
      ) : null}
    </div>
  );
}
