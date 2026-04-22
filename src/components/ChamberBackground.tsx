const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: 2 + (index % 3),
  left: `${(index * 13) % 100}%`,
  top: `${(index * 17) % 100}%`,
  delay: `${(index % 5) * 0.6}s`,
}));

export function ChamberBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[#050505]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(153,69,255,0.28),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(0,245,255,0.14),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(153,69,255,0.18),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-30 [background:repeating-linear-gradient(90deg,rgba(0,245,255,0.05)_0px,rgba(0,245,255,0.05)_1px,transparent_1px,transparent_54px),repeating-linear-gradient(180deg,rgba(153,69,255,0.04)_0px,rgba(153,69,255,0.04)_1px,transparent_1px,transparent_54px)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-screen [background:linear-gradient(115deg,transparent_0%,rgba(0,245,255,0.16)_38%,transparent_60%)] chamber-scan" />
      <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/16 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-8 -z-10 h-36 w-36 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="pointer-events-none absolute right-2 top-40 -z-10 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="film-grain pointer-events-none absolute inset-0 -z-10 opacity-25" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle-orbit pointer-events-none absolute -z-10 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(0,245,255,0.8)]"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </>
  );
}
