import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MANIFESTO_CONTENT = `
ABRAXAS
The Sovereign Regime

THE EDGE

If markets go flat, the system still produces.
If markets run, it accelerates.
That asymmetry is the edge.

SOVEREIGN FEW – LEADERSHIP LINEAGE

Ac3y
Built from a multi-layered Japanese, Native American, and Jewish Germanic bloodline — fishermen, survivors of Fukushima, rocket engineers, and chemical pioneers who understood systems, resilience, and turning raw resources into legacy.
I architect the frameworks, the education, the edge, and the infrastructure that compounds outcomes — not effort.
Solitude breeds clarity. Clarity breeds progress. Progress breeds success. I engineer the systems that make financial freedom inevitable for those ready to claim it.

Pablo Retro
I dedicate my life to increasing human earning power.
Not through motivation. Through systems.
Investment management that compounds outcomes, not effort.
Built from a Creole Mexican Native lineage where resourcefulness wasn't optional — it was survival.
Financial freedom isn't aspirational, it's engineered.
I build the infrastructure that makes it inevitable.

Neo
French lineage — ancestors who fought to the death for freedom and were willing to cut the king's head off if needed. A warrior spirit forged in revolution.
My mission is to help any member of the Abraxas Species reach financial freedom. My purpose is to fulfill my potential by affecting the masses in the most positive and profound way.
"You only become great to the degree to which you are able to lose yourself in something bigger, grander, and better than yourself."

Nick
From the Roseto family — one of the first Burroughs in America. Italian roots running deep through Roseto, Pennsylvania. A 16-year firefighter with a finance background who now owns and operates a towing company. A true Gen X'er and person of the people — grounded, resourceful, and built for real-world execution.
My purpose is service through strength and stability. I bring the operational backbone, the discipline of emergency response, and the practical finance and logistics mindset that turns vision into infrastructure that lasts. I stand for the Sovereign Regime by making sure the systems we build are not only visionary but executable, resilient, and rooted in the real world.

THE CALL

Abraxas is not a product.
It's a regime.
And regimes don't compete.
They absorb.
The hackathon brought the right humans together.
Now we build far beyond it.
Welcome to the Sovereign Regime.
Welcome to the next degree.

~ Sovereign Few
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
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">Welcome</p>
            <h2 className="mt-1 text-lg font-bold text-cyan-100">The Sovereign Regime</h2>
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
