import { ExternalLink, Lock } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useMembership } from '../providers/MembershipProvider';

export function RegimePage() {
  const { isMember } = useMembership();

  return (
    <div className="relative space-y-6 pb-2">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-black/60 shadow-[0_0_52px_rgba(217,119,6,0.12)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.18),transparent_40%)]" />
        <div className="absolute -left-12 top-8 h-40 w-40 rounded-full border border-amber-300/20" />
        <div className="relative px-6 py-8">
          <Badge className="border-amber-400/30 bg-amber-500/12 text-amber-300">MAIN PLATFORM</Badge>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white">
            The Capital Formation Engine
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-200">
            Genesis was the Academy. Abraxas dApp is where capital scales. La Casa tokenization. Species AI Agents. Sovereign yields. The full regime.
          </p>
        </div>
      </section>

      {/* Why Regime */}
      <section className="relative overflow-hidden rounded-2xl border border-amber-300/15 bg-black/50 px-6 py-7 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(217,119,6,0.08),transparent_45%)]" />
        <div className="relative space-y-4">
          <h2 className="text-lg font-semibold text-amber-100">What is the Sovereign Regime?</h2>
          <p className="text-sm leading-6 text-slate-300">
            The Sovereign Regime is not a DAO. It is not a protocol. It is a <span className="text-amber-200">capital formation engine</span> designed to:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
              <span>Vest your wealth creation in transparent tokenization</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
              <span>Deliver baseline yields to Genesis members forever</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
              <span>Harden your capital with AI agents (Sophia Vaults)</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
              <span>Lead the wealth transfer through La Casa NFTs</span>
            </li>
          </ul>
        </div>
      </section>

      {/* La Casa Tokenization */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">La Casa Tokenization</h3>

        <Card className="border-cyan-300/15 bg-black/40 backdrop-blur-sm">
          <div className="space-y-3 p-4">
            <p className="text-xs uppercase tracking-widest text-cyan-300">Phase 1</p>
            <p className="text-base font-semibold text-white">Assets Become Objects</p>
            <p className="text-xs leading-5 text-slate-400">
              Your trading positions, venture theses, and capital allocations tokenize as La Casa NFTs. On-chain operating objects that prove ownership and stake.
            </p>
          </div>
        </Card>

        <Card className="border-violet-300/15 bg-black/40 backdrop-blur-sm">
          <div className="space-y-3 p-4">
            <p className="text-xs uppercase tracking-widest text-violet-300">Phase 2</p>
            <p className="text-base font-semibold text-white">Leverage + Distribution</p>
            <p className="text-xs leading-5 text-slate-400">
              La Casa NFTs enable transparent leverage, fractional yield stacking, and direct member distribution without intermediaries.
            </p>
          </div>
        </Card>

        <Card className="border-red-300/15 bg-black/40 backdrop-blur-sm">
          <div className="space-y-3 p-4">
            <p className="text-xs uppercase tracking-widest text-red-300">Phase 3</p>
            <p className="text-base font-semibold text-white">Sovereign Finance</p>
            <p className="text-xs leading-5 text-slate-400">
              Once La Casa proves out, full Sovereign Finance: hardening capital against systemic risk, cross-cohort leverage, and regime-scale yields.
            </p>
          </div>
        </Card>
      </section>

      {/* Sophia Vaults */}
      <section className="relative overflow-hidden rounded-2xl border border-indigo-300/15 bg-black/50 px-6 py-6 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.1),transparent_45%)]" />
        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-indigo-300">The Species Layer</p>
          <h2 className="text-lg font-semibold text-indigo-100">Sophia Vaults & AI Agents</h2>
          <p className="text-xs leading-6 text-slate-400">
            Sophia Vaults are autonomous agents that manage capital on behalf of members. They read market structure, execute La Casa operations, and report yields back to the chamber. The first true on-chain operating entities.
          </p>
        </div>
      </section>

      {/* Access Path */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Your Path</h3>

        <Card className="border-cyan-300/15 bg-black/50 backdrop-blur-sm">
          <div className="space-y-4 p-4">
            <div>
              <p className="text-sm font-semibold text-cyan-100">Step 1: You are here (Genesis)</p>
              <p className="mt-1 text-xs text-slate-400">Academy access, ID card, baseline yields, understanding of the regime.</p>
            </div>
            <div className="h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
            <div>
              <p className="text-sm font-semibold text-amber-100">Step 2: Mint in the main dApp</p>
              <p className="mt-1 text-xs text-slate-400">
                Access full platform. Tokenize your first assets as La Casa NFTs. Deploy with Sophia Vaults.
              </p>
            </div>
            <div className="h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
            <div>
              <p className="text-sm font-semibold text-violet-100">Step 3: Scale into Sovereign Finance</p>
              <p className="mt-1 text-xs text-slate-400">
                Cross-cohort leverage, hardened capital structures, regime-scale yields, wealth transfer protocol.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-black/50 px-6 py-6 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,245,255,0.1),transparent_45%)]" />
        <div className="relative space-y-4">
          <h3 className="text-base font-semibold text-cyan-100">Ready for the Main Platform?</h3>
          <p className="text-xs leading-6 text-slate-400">
            Once you have Genesis, the main Abraxas dApp becomes your operating theatre. Tokenize assets. Deploy agents. Scale capital.
          </p>
          <button
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-300/40 bg-cyan-500/15 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/25"
            onClick={() => window.open('https://abraxas-ten.vercel.app/', '_blank')}
          >
            <ExternalLink className="h-4 w-4" />
            Enter Abraxas dApp
          </button>
        </div>
      </section>

      {/* Footer Info */}
      {!isMember && (
        <section className="relative overflow-hidden rounded-2xl border border-slate-500/20 bg-black/50 px-6 py-5 backdrop-blur-sm">
          <div className="flex gap-3">
            <Lock className="h-5 w-5 flex-none text-slate-400" />
            <p className="text-xs leading-5 text-slate-400">
              Full Regime access requires Genesis NFT. Mint first, then all features unlock.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
