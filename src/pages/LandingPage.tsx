import { Link } from 'react-router-dom';
import { manifestoLines } from '../lib/data';
import { BrandLogo } from '../components/BrandLogo';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function LandingPage() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden px-4 pb-8 pt-5 text-slate-50">
      <div className="flex items-center justify-between">
        <BrandLogo />
        <Badge className="border-violet-300/20 bg-violet-500/12 text-violet-100/80">Official Front End</Badge>
      </div>

      <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-black/55 px-5 py-7 shadow-[0_0_52px_rgba(153,69,255,0.14)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,69,255,0.18),transparent_38%)]" />
        <div className="absolute -right-10 top-6 h-28 w-28 rounded-full border border-violet-300/20" />
        <div className="absolute left-4 top-4 h-16 w-16 rounded-full border border-cyan-300/20" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/70">Sovereign Regime Manifesto</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white">
            Join the chamber where culture becomes capital formation.
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Buy the Genesis NFT. Enter the Academy. Receive your Abraxas ID card, your baseline ecosystem yields, your rune, and your blessing. Later, scale assets through La Casa tokenization inside the main dApp.
          </p>

          <div className="mt-6 space-y-3">
            {manifestoLines.map((line) => (
              <div key={line} className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-200/92">
                {line}
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3">
            <Link to="/join">
              <Button className="w-full">Join the Sovereign Regime</Button>
            </Link>
            <Link to="/app/academy">
              <Button variant="secondary" className="w-full">Enter the Academy</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4">
        <Card>
          <Badge>Genesis NFT First</Badge>
          <h2 className="mt-4 text-xl font-semibold text-white">Membership is the key, not an afterthought.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Phantom wallet purchase unlocks lifetime access to the Academy, baseline ecosystem yields, the Abraxas ID card, and sovereign-only Cadabra transmissions.
          </p>
        </Card>

        <Card>
          <Badge className="border-violet-300/20 bg-violet-500/12 text-violet-100/80">Curriculum</Badge>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <p>Market Maker Method + Moving Averages</p>
            <p>TDI + 50Bounce Strategy</p>
            <p>Tokenization & La Casa NFTs</p>
            <p>Sophia Vaults & The Species AI Agents</p>
            <p>Sovereign Finance & Hardening Capital</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
