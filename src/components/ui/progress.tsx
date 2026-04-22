type ProgressProps = {
  value: number;
};

export function Progress({ value }: ProgressProps) {
  return (
    <div className="h-2.5 overflow-hidden rounded-full border border-cyan-300/15 bg-white/5">
      <div
        className="h-full rounded-full bg-[linear-gradient(90deg,rgba(0,245,255,0.9),rgba(153,69,255,0.92),rgba(255,255,255,0.82))] shadow-[0_0_28px_rgba(153,69,255,0.28)] transition-all duration-500"
        style={{ width: `${Math.max(0, Math.min(value, 100))}%` }}
      />
    </div>
  );
}
