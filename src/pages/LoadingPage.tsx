import { useEffect, useRef, useState } from 'react';

const bootMessages = [
  '> ALIGNING_SOVEREIGN_SIGNAL...',
  '> OPENING_GENESIS_GATE...',
  '> LOADING_CADABRA_TRANSMISSIONS...',
  '> SYNCING_SPECIES_PROTOCOLS...',
  '> HARDENING_CAPITAL_CONTEXT...',
  '> [SYSTEM_READY] ABRAXAS_ACADEMY',
];

export function LoadingPage() {
  const [displayedText, setDisplayedText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const startRef = useRef(Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setGlitchActive(true);
      window.setTimeout(() => setGlitchActive(false), 120);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (messageIndex >= bootMessages.length) {
      return;
    }

    const current = bootMessages[messageIndex];
    if (displayedText.length < current.length) {
      const timer = window.setTimeout(() => {
        setDisplayedText(current.slice(0, displayedText.length + 1));
      }, 35);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setDisplayedText('');
      setMessageIndex((value) => value + 1);
    }, 420);
    return () => window.clearTimeout(timer);
  }, [displayedText, messageIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      setProgress(Math.min(100, (elapsed / 2600) * 100));
    }, 40);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-4">
      <div className="absolute inset-0 opacity-20 [background:linear-gradient(rgba(0,245,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(153,69,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,69,255,0.24),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.14),transparent_20%)]" />
      <div className="film-grain absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-md rounded-[2rem] border border-cyan-300/20 bg-black/72 p-6 shadow-[0_0_60px_rgba(153,69,255,0.18)] backdrop-blur-2xl">
        <div className="flex justify-center">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/35 bg-black/60">
            <div className="absolute inset-2 rounded-full border border-violet-400/30 animate-spin" />
            <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
            <span className="text-4xl text-cyan-200 drop-shadow-[0_0_20px_rgba(0,245,255,0.8)]">Ψ</span>
            {glitchActive ? <div className="absolute inset-0 rounded-full border border-violet-300/50 translate-x-[1px] -translate-y-[1px]" /> : null}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/70">Abraxas Academy</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Welcome to the next degree</h1>
          <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-violet-200/60">Sovereign Regime Chamber</p>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-cyan-300/15 bg-black/60 p-4 font-mono text-[11px] text-cyan-200/80">
          {bootMessages.slice(0, messageIndex).map((message) => (
            <p key={message} className="mb-2 opacity-40 last:mb-0">{message}</p>
          ))}
          <p className="min-h-[18px] font-semibold text-cyan-100 drop-shadow-[0_0_14px_rgba(0,245,255,0.6)]">
            {displayedText}
            <span className="ml-1 inline-block h-3 w-2 animate-pulse bg-cyan-300" />
          </p>
        </div>

        <div className="mt-6">
          <div className="h-2 overflow-hidden rounded-full border border-cyan-300/15 bg-white/5">
            <div className="h-full bg-[linear-gradient(90deg,rgba(0,245,255,0.9),rgba(153,69,255,0.95))] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200/60">System initialization: {Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  );
}
