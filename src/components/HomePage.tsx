import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function HomePage() {
  return (
    <div className="relative space-y-4">
      {/* Hero Section - First 100 Genesis */}
      <section className="relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-black/50 shadow-[0_0_35px_rgba(153,69,255,0.1)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,69,255,0.18),transparent_42%)]" />
        <div className="absolute -right-16 top-4 h-32 w-32 rounded-full border border-violet-300/12" />
        <div className="absolute left-0 top-0 h-14 w-14 rounded-full border border-cyan-300/15" />
        <div className="relative px-5 py-5">
          <Badge className="border-red-400/20 bg-red-500/8 text-red-300/80 text-[8px]">GENESIS</Badge>
          <h1 className="mt-2.5 text-4xl font-bold leading-tight text-white">
            First 100.<br />
            Only once.
          </h1>

          <p className="mt-3 text-[11px] leading-5 text-slate-300">
            Doors opening to 100 Genesis NFT members. Founding cohort. Early to the Sovereign Regime.
          </p>

          <div className="mt-3.5 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-200">
              <span className="inline-block h-0.5 w-2 bg-cyan-400" />
              <span>100 spots in first wave</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-200">
              <span className="inline-block h-0.5 w-2 bg-cyan-400" />
              <span>Elite humans who move first</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-200">
              <span className="inline-block h-0.5 w-2 bg-cyan-400" />
              <span>Academy + Cadabra + ID + Yields</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button className="rounded-lg border-cyan-300/30 bg-cyan-500/15 text-[11px] text-cyan-100 hover:bg-cyan-500/22 h-7 font-medium px-6">
              Buy Genesis
            </Button>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative overflow-hidden rounded-2xl border border-violet-300/12 bg-black/40 shadow-[0_0_25px_rgba(99,102,241,0.06)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_48%)]" />
        <div className="relative px-5 py-5">
          <p className="text-[9px] uppercase tracking-[0.25em] text-violet-300/50">Sovereignty</p>
          <h2 className="mt-1.5 text-xl font-bold leading-tight text-white">
            Capital Formation
          </h2>
          <p className="mt-2.5 text-[10px] leading-5 text-slate-300">
            Not DeFi. Not RWA. A capital formation engine disguised as culture. Genesis holders access Academy, ID card, rune, blessing, yields.
          </p>
        </div>
      </section>

      {/* What You Get - Genesis */}
      <section className="space-y-2">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-200/80">Genesis Unlocks</h3>

        <Card className="border-cyan-300/12 bg-black/40 backdrop-blur-sm">
          <div className="space-y-2 p-3">
            <div className="flex gap-2">
              <div className="mt-0.5 flex-none">
                <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 text-sm">
                  📚
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-cyan-100">Academy</p>
                <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                  Five-module curriculum with trading edge, homework, quizzes, badges.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-violet-300/12 bg-black/40 backdrop-blur-sm">
          <div className="space-y-2 p-3">
            <div className="flex gap-2">
              <div className="mt-0.5 flex-none">
                <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300 text-sm">
                  ✦
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-violet-100">Abraxas ID</p>
                <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                  Rune, number, blessing. Proof of Genesis membership.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-amber-300/12 bg-black/40 backdrop-blur-sm">
          <div className="space-y-2 p-3">
            <div className="flex gap-2">
              <div className="mt-0.5 flex-none">
                <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300 text-sm">
                  💰
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-amber-100">Yields</p>
                <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                  Baseline passive income from the entire ecosystem.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-red-300/12 bg-black/40 backdrop-blur-sm">
          <div className="space-y-2 p-3">
            <div className="flex gap-2">
              <div className="mt-0.5 flex-none">
                <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-red-500/15 text-red-300 text-sm">
                  🎭
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-red-100">Cadabra</p>
                <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                  Elite social feed. Trading setups, gaming clips, member content.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* The Sovereign Path */}
      <section className="relative overflow-hidden rounded-lg border border-slate-500/15 bg-black/40 px-4 py-4 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.04),transparent_50%)]" />
        <div className="relative space-y-2">
          <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400/70">Later Phase</p>
          <h3 className="text-sm font-semibold text-slate-100">La Casa Tokenization</h3>
          <p className="text-[9px] leading-4 text-slate-400">
            Assets become on-chain operating objects. Sophia Vaults. The Species. Sovereign yields.
          </p>
        </div>
      </section>

      {/* How to Join */}
      <section className="space-y-2">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300/80">How to Join</h3>
        <Card className="border-cyan-300/10 bg-black/40 backdrop-blur-sm p-3">
          <ol className="space-y-1.5 text-[10px]">
            <li className="flex gap-2">
              <span className="flex-none rounded-md bg-cyan-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-cyan-300">1</span>
              <span className="text-slate-300">Connect Phantom wallet</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none rounded-md bg-cyan-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-cyan-300">2</span>
              <span className="text-slate-300">Mint Genesis NFT</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none rounded-md bg-cyan-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-cyan-300">3</span>
              <span className="text-slate-300">Instant full access</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none rounded-md bg-cyan-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-cyan-300">4</span>
              <span className="text-slate-300">Doors close at 100</span>
            </li>
          </ol>
        </Card>
      </section>

      {/* Urgency Callout */}
      <section className="relative overflow-hidden rounded-lg border border-red-400/25 bg-red-500/6 px-4 py-4 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_50%)]" />
        <div className="relative">
          <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-red-300/90">Limited Window</p>
          <p className="mt-1.5 text-[10px] leading-4 text-slate-200">
            Only 100 Genesis. Once doors close, next wave launches in the main dApp. Join the founding cohort.
          </p>
        </div>
      </section>

      {/* Buy Genesis CTA */}
      <Button className="w-full rounded-lg border-cyan-300/30 bg-cyan-500/15 text-[11px] text-cyan-100 hover:bg-cyan-500/22 h-9 font-medium">
        Buy Genesis
      </Button>
    </div>
  );
}
