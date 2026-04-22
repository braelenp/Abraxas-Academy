import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MANIFESTO_CONTENT = `
ABRAXAS MANIFESTO
The Sovereign Regime

A capital formation engine disguised as a culture.

MANIFESTO

Abraxas isn't DeFi.

It's not RWA either.

It's a capital formation engine disguised as a culture.

2014 was the Young People Revolution.

Community first. Money second. Ownership never existed.

We fix that.

THE SOVEREIGN REGIME

We don't teach people how to trade crypto.

We teach them how to generate real capital outside the system so they never have to touch what they've already built.

No liquidation.

No dependency.

No begging for market conditions.

You become the whale before the wealth transfer.

THE FLOW (CLOSED LOOP)

Education → Capital → Tokenization → Automation

Not theory. A complete system.

1. Learn the edge (Abraxas Academy)
2. Produce fresh capital outside crypto
3. Bridge it on-chain through La Casa NFTs
4. Route it into Sophia Vaults
5. The Species (AI agents) compound it continuously

Human effort becomes machine persistence.

TWO ASSETS. NO CONFUSION.

Genesis NFT – Sovereign Regime Membership

• Access to Abraxas Academy
• Lifetime curriculum + Cadabra social feed
• Abraxas ID card with unique rune + blessing
• Baseline yields from the entire ecosystem

La Casa NFT – Tokenization & Scaling

• Bring real-world assets on-chain (real estate, watches, yachts, art, etc.)
• Deposit into Sophia Vaults for personalized higher yields
• Scale by acquiring more

That's it.
No tiers. No games.
If you want more yield, you bring more assets.

FIRST 100 COHORT – FOUNDING MEMBERS

We are opening the doors to the first 100 Genesis NFT members — the inaugural cohort of the Sovereign Regime.

These 100 will receive exclusive Sovereign Few founding-member perks:

• Founding Member status permanently displayed on their Abraxas ID card
• Special rune blessing — a unique, one-time generational rune tied to their entry
• Higher baseline yield multiplier across the entire ecosystem (tokenization fees, vault performance, Raido bot profits)
• Priority access to all IRL Miami events, private breakout sessions, and opportunity calls
• Early access to new daughters/sons of the Regime and future asset classes
• Lifetime recognition as the original 100 who helped birth the movement

This cohort is limited, intentional, and elite. Once the first 100 are claimed, the next wave will have different (and likely higher) entry terms.

ARCHITECTURE – TWO SURFACES, ONE SYSTEM

Abraxas Academy (Education + Community)

• Genesis NFT gated
• Full 5-module curriculum with real trading edge
• Progress tracking, homework, quizzes, badges
• Cadabra social feed (trading setups + gaming clips)
• Hybrid community: virtual opportunity calls + IRL Miami events and breakout sessions

Abraxas Protocol (Tokenization + Automation)

• La Casa Tokenization rails
• Sophia Vaults + The Species AI agents
• Yield dashboard and compounding
• ABRA staking and governance layer
Same environment. Same language. Same gravity.

THE CURRICULUM – THE REAL EDGE

Module 1 – Market Maker Method + Moving Averages
(13/50/200/800 EMA)

Module 2 – TDI + 50Bounce Strategy (MBL, SFA, CTSFA, MBLC, MBLB patterns)

Module 3 – Tokenization & La Casa NFTs

Module 4 – Sophia Vaults & The Species AI Agents

Module 5 – Sovereign Finance & Hardening Capital

This is not theory. It is the proven framework that lets you generate capital outside crypto before you ever step foot on-chain.

COMMUNITY – THE SOVEREIGN REGIME

Community isn't Discord.
It's coordination.

• Weekly opportunity calls
• Live trading execution
• Physical presence in homes and private sessions
• Digital scales. IRL converts.

This is modern YPR energy — upgraded with real edge and on-chain ownership.

TOKEN & YIELD LOGIC

Genesis NFT pays you for being early to the Regime.
La Casa NFT pays you for bringing assets into it.
ABRA exists as the optional equity layer — not the crutch.

Revenue hits first. Token comes second.
No forced buying. No exit liquidity games.

WHY THIS WORKS

It doesn't rely on crypto to work.
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

From the DeFranco family — one of the first families of the first 100% Italian boroughs in the United States in 1912 in Roseto, Pa. A 16-year fire fighter with a finance background who now owns and operates a towing company. As the only Gen X'er in the group, I bring the older common knowledge mixed with the new way of thinking — grounded, resourceful, and built for real-world execution.

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
