import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, ExternalLink } from 'lucide-react';
import {
  manifestoLines,
  sovereignLifestyleManifesto,
  sovereignLifestyleSlideshow,
  digitalTwinManifesto,
  digitalTwinSlideshow,
} from '../lib/data';
import { BrandLogo } from '../components/BrandLogo';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { CosmicBackground } from '../components/CosmicBackground';
import { Slideshow } from '../components/Slideshow';
import { DMFounderModal } from '../components/DMFounderModal';

// Add subtle glow effect styles
const glitchStyles = `
  @keyframes subtleGlow {
    0%, 100% {
      text-shadow: 0 0 20px rgba(153, 69, 255, 0.4), 0 0 40px rgba(153, 69, 255, 0.2);
    }
    50% {
      text-shadow: 0 0 30px rgba(153, 69, 255, 0.6), 0 0 60px rgba(153, 69, 255, 0.3);
    }
  }

  @keyframes pulsingGlow {
    0%, 100% {
      text-shadow: 0 0 20px rgba(153, 69, 255, 0.6), 0 0 40px rgba(153, 69, 255, 0.4), 0 0 60px rgba(153, 69, 255, 0.2);
      filter: brightness(1);
    }
    50% {
      text-shadow: 0 0 40px rgba(153, 69, 255, 1), 0 0 60px rgba(153, 69, 255, 0.8), 0 0 80px rgba(153, 69, 255, 0.4);
      filter: brightness(1.1);
    }
  }

  .glitch-title {
    animation: subtleGlow 4s ease-in-out infinite;
  }

  .pulsing-glow {
    animation: pulsingGlow 2.5s ease-in-out infinite;
    font-weight: 900;
  }
`;

const WHITEPAPER_CONTENT = `Sovereign Regime Whitepaper
Version 2.0 – May 2026
Led by Founder Acey (@cryptoac3y)

1. EXECUTIVE SUMMARY

The Sovereign Regime is the escape velocity.

We do not ask for permission.
We do not wait for the system to catch up.
We build the parallel economy that renders the old one obsolete.

The fiat world is a slow erosion machine. Every second your capital sits in dollars, it loses value to inflation, taxes, and hidden dilution.

Centralized platforms extract, control, and gatekeep. Legacy finance sells you the illusion of safety while quietly bleeding your future.

The Sovereign Regime is not a product. It is not another DeFi app or RWA project.

This is capital formation disguised as culture.

2. THE SIX COMPONENTS

Masters NFT – Your permanent on-chain Master Card. The first 100 only. 15 SOL. Lifetime access to the Regime. This is not a ticket. It is your sovereign identity etched into the ledger.

BlackBox NFT – Your on-chain Black Card. Tokenize any real-world asset — real estate, watches, jets, art, music rights, carbon credits, invoices, or your own brand and network. No lawyers. No middlemen. Instant, immutable ownership.

Sophia Vaults – Intelligent capital containers. Your tokenized assets go here. They are not passive. They are alive.

The Species – Autonomous AI agents (Raido, Tide, Circuit, King AI, and the rest). They work 24/7. They monitor, compound, de-risk, and grow your holdings while you live your life.

ALLURE – The native yield layer. Passive, sovereign income generated from the entire ecosystem.

Sovereign Spatial Protocol – The un-killable backbone. Terrestrial AirNode mesh + celestial orbital relay + biological state persistence. Your data, your lore, your digital twin — secured beyond any single point of failure.

3. OUR PHILOSOPHY

We build the people.
The people build the business.

We do not chase hype. We do not rely on ads. We move through word of mouth, real relationships, and unbreakable results.

4. THE REGIME FLOW

You generate capital outside the system first.
You harden it on-chain.
You let intelligent agents compound it forever.

5. WHY NOW

The wealth transfer is accelerating. Institutions are moving onto Solana. The window for early, sovereign participation is open — but it will not stay open forever.

We do not fight the old system. We outpace it.

6. CALL TO ACTION

The Regime is already here.

The only question is whether you step in now… or watch from the outside.

Masters NFT • BlackBox • Sophia Vaults • The Species • ALLURE • Spatial Protocol

We do not ask.
We do not wait.
We build.`;;

export function LandingPage() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [showManifestoModal, setShowManifestoModal] = useState<'regime' | 'lifestyle' | 'digital-twin' | null>(null);
  const [showWhitepaperModal, setShowWhitepaperModal] = useState(false);
  const [showDMModal, setShowDMModal] = useState(false);

  const WHITEPAPER_CONTENT = `Sovereign Regime Whitepaper
Version 2.0 – May 2026
Led by Founder Acey (@cryptoac3y)

1. EXECUTIVE SUMMARY

The Sovereign Regime is the escape velocity.

We do not ask for permission.
We do not wait for the system to catch up.
We build the parallel economy that renders the old one obsolete.

The fiat world is a slow erosion machine. Every second your capital sits in dollars, it loses value to inflation, taxes, and hidden dilution.

Centralized platforms extract, control, and gatekeep. Legacy finance sells you the illusion of safety while quietly bleeding your future.

The Sovereign Regime is not a product. It is not another DeFi app or RWA project.

This is capital formation disguised as culture.

2. THE SIX COMPONENTS

Masters NFT – Your permanent on-chain Master Card. The first 100 only. 15 SOL. Lifetime access to the Regime. This is not a ticket. It is your sovereign identity etched into the ledger.

BlackBox NFT – Your on-chain Black Card. Tokenize any real-world asset — real estate, watches, jets, art, music rights, carbon credits, invoices, or your own brand and network. No lawyers. No middlemen. Instant, immutable ownership.

Sophia Vaults – Intelligent capital containers. Your tokenized assets go here. They are not passive. They are alive.

The Species – Autonomous AI agents (Raido, Tide, Circuit, King AI, and the rest). They work 24/7. They monitor, compound, de-risk, and grow your holdings while you live your life.

ALLURE – The native yield layer. Passive, sovereign income generated from the entire ecosystem.

Sovereign Spatial Protocol – The un-killable backbone. Terrestrial AirNode mesh + celestial orbital relay + biological state persistence. Your data, your lore, your digital twin — secured beyond any single point of failure.

3. OUR PHILOSOPHY

We build the people.
The people build the business.

We do not chase hype. We do not rely on ads. We move through word of mouth, real relationships, and unbreakable results.

4. THE REGIME FLOW

You generate capital outside the system first.
You harden it on-chain.
You let intelligent agents compound it forever.

5. WHY NOW

The wealth transfer is accelerating. Institutions are moving onto Solana. The window for early, sovereign participation is open — but it will not stay open forever.

We do not fight the old system. We outpace it.

6. CALL TO ACTION

The Regime is already here.

The only question is whether you step in now… or watch from the outside.

Masters NFT • BlackBox • Sophia Vaults • The Species • ALLURE • Spatial Protocol

We do not ask.
We do not wait.
We build.`;

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  const renderManifestoModal = (content: string[], title: string) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4">
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowManifestoModal(null)}
        />
        <div className="relative z-51 mx-auto flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-purple-300/30 bg-black/85 shadow-[0_0_80px_rgba(153,69,255,0.2)] backdrop-blur-2xl">
          <div className="sticky top-0 z-10 flex flex-none items-center justify-between border-b border-purple-300/15 bg-black/90 px-6 py-4 backdrop-blur-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-purple-200/70">Academy Reference</p>
              <h2 className="mt-1 text-lg font-bold text-purple-100">{title}</h2>
            </div>
            <button
              onClick={() => setShowManifestoModal(null)}
              className="flex-none rounded-lg bg-purple-500/10 p-2 text-purple-300 transition hover:bg-purple-500/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="text-sm leading-relaxed text-slate-200">
              {content.map((line, idx) => (
                <div
                  key={idx}
                  className={line === '' ? 'h-3' : line === line.toUpperCase() && line.length > 1 ? 'mt-4 font-bold uppercase tracking-wider text-purple-300 mb-2' : 'mb-2'}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden text-slate-50">
      <style>{glitchStyles}</style>
      
      {/* Cosmic Background */}
      <CosmicBackground />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col gap-4 p-4">
        {/* Header with Logo and Title */}
        <Card>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-black leading-tight tracking-tight mb-4">
              <span className="pulsing-glow text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500">
                SOVEREIGN REGIME
              </span>
            </h1>
            <img 
              src="/assets/official-logo-graphic.jpg" 
              alt="Sovereign Regime Logo"
              className="w-56 h-56 object-contain rounded-lg border border-purple-300/40"
            />
            <p className="mt-4 text-xs tracking-[0.15em] text-purple-300/80 uppercase font-bold">
              The Escape Velocity
            </p>
          </div>
        </Card>

        {/* Top DApp Button */}
        <Link to="/app/home" className="block">
          <Button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600">
            Enter the DApp →
          </Button>
        </Link>

        {/* Hero CTA */}
        <Card className="border-purple-300/30 bg-purple-500/8">
          <h2 className="text-xl font-bold text-purple-200">Enter the Sovereign Regime</h2>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Capital formation engine. Proven trading edge. On-chain Black Card tokenization. The Species AI agents. Your sovereignty, automated.
          </p>
          <Button onClick={() => setShowDMModal(true)} className="w-full mt-4">Purchase Genesis NFT (15 SOL)</Button>
        </Card>

        {/* ============ SECTION 1: SOVEREIGN REGIME MANIFESTO ============ */}
        <Card className="border-purple-300/30 bg-purple-500/8">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300/70 mb-3">Reference Material</p>
          <button
            onClick={() => setShowManifestoModal('regime')}
            className="w-full rounded-lg border border-purple-300/20 bg-purple-500/15 px-4 py-3 text-left transition hover:bg-purple-500/25"
          >
            <p className="font-semibold text-purple-200">Sovereign Regime Manifesto</p>
            <p className="mt-1 text-xs text-slate-400">The six components. The philosophy. The call to action.</p>
          </button>
        </Card>

        {/* ============ SECTION 2: SOVEREIGN LIFESTYLE ============ */}
        <Card className="border-purple-300/30 bg-purple-500/8">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300/70 mb-3">Reference Material</p>
          <button
            onClick={() => setShowManifestoModal('lifestyle')}
            className="w-full rounded-lg border border-purple-300/20 bg-purple-500/15 px-4 py-3 text-left transition hover:bg-purple-500/25"
          >
            <p className="font-semibold text-purple-200">Sovereign Lifestyle Manifesto</p>
            <p className="mt-1 text-xs text-slate-400">Capital sovereignty. Optionality. Discipline. Tribe.</p>
          </button>
          <div className="mt-4">
            <p className="text-xs text-slate-400 mb-3">Visual Journey</p>
            <Slideshow slides={sovereignLifestyleSlideshow} />
          </div>
        </Card>

        {/* ============ SECTION 3: DIGITAL TWIN ============ */}
        <Card className="border-purple-300/30 bg-purple-500/8">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300/70 mb-3">Reference Material</p>
          <button
            onClick={() => setShowManifestoModal('digital-twin')}
            className="w-full rounded-lg border border-purple-300/20 bg-purple-500/15 px-4 py-3 text-left transition hover:bg-purple-500/25"
          >
            <p className="font-semibold text-purple-200">Digital Twin Architecture</p>
            <p className="mt-1 text-xs text-slate-400">Why on-chain parallels matter. The 4 layers. Your path.</p>
          </button>
          <div className="mt-4">
            <p className="text-xs text-slate-400 mb-3">Visual Journey</p>
            <Slideshow slides={digitalTwinSlideshow} />
          </div>
        </Card>

        {/* ============ SECTION 4: GENESIS PRESALE CTA ============ */}
        <Card className="border-amber-300/30 bg-amber-500/8">
          <Badge className="border-amber-300/30 bg-amber-500/15 text-amber-100/80 text-[10px]">Limited Time</Badge>
          <h3 className="mt-3 text-lg font-bold text-amber-100">Genesis NFT: First 100 Only</h3>
          <p className="mt-2 text-xs text-slate-400 font-semibold">Masters NFT • 15 SOL</p>
          <div className="mt-3 space-y-2 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <span className="mt-1 text-amber-400">✦</span>
              <span>Lifetime Academy access (14 modules, 250+ hours)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 text-amber-400">✦</span>
              <span>Sovereign ID card with unique rune + blessing</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 text-amber-400">✦</span>
              <span>Cadabra elite feed (trading signals, opportunity calls)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 text-amber-400">✦</span>
              <span>Baseline yield distribution from ecosystem</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 text-amber-400">✦</span>
              <span>Founding member status (lifetime recognition)</span>
            </div>
          </div>
          <Button onClick={() => setShowDMModal(true)} className="w-full mt-4">Claim Your Spot Now</Button>
        </Card>

        {/* ============ QUICK LINKS ============ */}
        <Card className="border-purple-300/30">
          <div className="space-y-3">
            <button
              onClick={() => setShowWhitepaperModal(true)}
              className="w-full rounded-lg border border-purple-300/20 bg-purple-500/15 px-4 py-3 text-left transition hover:bg-purple-500/25 font-semibold text-purple-200"
            >
              Read Full Whitepaper
            </button>
            <a
              href="https://twitter.com/cryptoac3y"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm font-semibold text-purple-200 hover:text-purple-100 transition"
            >
              <span>Follow Founder on X (@cryptoac3y)</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </Card>

        {/* Bottom DApp Button */}
        <Link to="/app/home" className="block">
          <Button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600">
            Launch DApp →
          </Button>
        </Link>

        {/* Footer */}
        <div className="text-center text-xs text-slate-500 pb-4">
          <p>Sovereign Regime • Born from first 100 founders</p>
        </div>
      </div>

      {/* ============ MANIFESTO MODALS ============ */}
      {showManifestoModal === 'regime' && renderManifestoModal(manifestoLines, 'Sovereign Regime Manifesto')}
      {showManifestoModal === 'lifestyle' && renderManifestoModal(sovereignLifestyleManifesto, 'Sovereign Lifestyle Manifesto')}
      {showManifestoModal === 'digital-twin' && renderManifestoModal(digitalTwinManifesto, 'Digital Twin Architecture')}

      {/* ============ WHITEPAPER MODAL ============ */}
      {showWhitepaperModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowWhitepaperModal(false)}
          />
          <div className="relative z-51 mx-auto flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-purple-300/30 bg-black/85 shadow-[0_0_80px_rgba(153,69,255,0.2)] backdrop-blur-2xl">
            <div className="sticky top-0 z-10 flex flex-none items-center justify-between border-b border-purple-300/15 bg-black/90 px-6 py-4 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-purple-200/70">Complete Documentation</p>
                <h2 className="mt-1 text-lg font-bold text-purple-100">Sovereign Regime Whitepaper</h2>
              </div>
              <button
                onClick={() => setShowWhitepaperModal(false)}
                className="flex-none rounded-lg bg-purple-500/10 p-2 text-purple-300 transition hover:bg-purple-500/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="whitespace-pre-line text-sm leading-relaxed text-slate-200">
                {WHITEPAPER_CONTENT.split('\n').map((line, idx) => (
                  <div key={idx} className={line.trim() === '' ? 'h-2' : ''}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DM Founder Modal */}
      <DMFounderModal isOpen={showDMModal} onClose={() => setShowDMModal(false)} />
    </div>
  );
}
