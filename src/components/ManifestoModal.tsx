import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MANIFESTO_CONTENT = `
WELCOME TO ABRAXAS ACADEMY

You're now inside the sovereign chamber of culture and capital formation.

YOUR JOURNEY STARTS HERE

The Academy is a 5-module curriculum designed to teach you the edge:

Module 1 – Market Maker Method + Moving Averages
Learn to read liquidity patterns and confirm trends with the proven 13/50/200/800 EMA stack.

Module 2 – TDI + 50Bounce Strategy
Master momentum timing and identify high-conviction entry zones where retail hesitates.

Module 3 – Tokenization & La Casa NFTs
Bridge real-world assets on-chain. Turn property, watches, yachts, and art into operating capital.

Module 4 – Sophia Vaults & The Species AI Agents
Deploy capital into automated yield systems that compound 24/7 while you maintain full sovereignty.

Module 5 – Sovereign Finance & Hardening Capital
Protect what you've built. Write your capital constitution. Master the discipline of wealth.

WHAT TO DO NOW

1. Explore the Curriculum tab and begin Module 1
2. Complete lessons, homework, and quizzes
3. Earn badges as you progress
4. Join the Cadabra social feed to connect with other members
5. Attend weekly opportunity calls and IRL events in Miami

REMEMBER

This isn't theory. It's execution.
Community doesn't scroll faster than markets.
Your discipline compounds faster than algorithms.

The regime waits for no one. Move accordingly.

Welcome to the next degree.
`;

export function ManifestoModal({ isOpen, onClose }: ManifestoModalProps) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
      />

      {/* Modal Content */}
      <div className="relative z-51 mx-4 flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-cyan-300/30 bg-black/85 shadow-[0_0_80px_rgba(0,245,255,0.2)] backdrop-blur-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex flex-none items-center justify-between border-b border-cyan-300/15 bg-black/90 px-6 py-4 backdrop-blur-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">Getting Started</p>
            <h2 className="mt-1 text-lg font-bold text-cyan-100">Your Academy Journey</h2>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              onClose();
            }}
            className="flex-none rounded-lg bg-violet-500/10 p-2 text-violet-300 transition hover:bg-violet-500/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-2 whitespace-pre-line text-sm leading-relaxed text-slate-200">
            {MANIFESTO_CONTENT.split('\n').map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={idx} className="h-2" />;

              // Title styling
              if (trimmed === 'ABRAXAS') {
                return (
                  <div key={idx} className="pt-4 text-center">
                    <p className="text-3xl font-bold text-cyan-100">ABRAXAS</p>
                  </div>
                );
              }

              // Section headings
              if (trimmed.match(/^[A-Z][\w\s–-]{5,}$/) && trimmed === trimmed.toUpperCase()) {
                return (
                  <div key={idx} className="mt-6 pt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">{trimmed}</p>
                    <div className="mt-2 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
                  </div>
                );
              }

              // Subheading styling (bold with dashes)
              if (trimmed.includes('–')) {
                return (
                  <p key={idx} className="mt-3 font-semibold text-violet-200">
                    {trimmed}
                  </p>
                );
              }

              // Bullet points
              if (trimmed.startsWith('•')) {
                return (
                  <p key={idx} className="ml-2 text-slate-300">
                    {trimmed}
                  </p>
                );
              }

              // Numbered points
              if (trimmed.match(/^\d+\./)) {
                return (
                  <p key={idx} className="ml-2 text-slate-300">
                    {trimmed}
                  </p>
                );
              }

              // Regular text
              return (
                <p key={idx} className="text-slate-300">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none border-t border-cyan-300/15 bg-black/90 px-6 py-4 backdrop-blur-xl">
          <button
            onClick={() => {
              setIsVisible(false);
              onClose();
            }}
            className="w-full rounded-xl border border-cyan-300/40 bg-cyan-500/15 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/25"
          >
            Enter the Chamber
          </button>
          <p className="mt-3 text-center text-xs text-slate-500">
            You can revisit this anytime from settings
          </p>
        </div>
      </div>
    </div>
  );
}
