import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { manifestoLines } from '../lib/data';
import { BrandLogo } from '../components/BrandLogo';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const WHITEPAPER_CONTENT = `Sovereign Regime Whitepaper
Version 1.0 – April 2026
Led by Founder Acey (@Ac3yway)

1. EXECUTIVE SUMMARY
The Sovereign Regime is a private, sovereign community and infrastructure layer on Solana designed for the real wealth transfer.

We do not sell hype. We do not chase trends. We build the people, and the people build the business.

Our model is simple and closed-loop:
• Generate capital outside of crypto using a proven trading edge
• Tokenize real-world assets into BlackBox NFTs (the on-chain Black Card)
• Place those assets into intelligent Sophia Vaults managed by The Species — a family of autonomous AI agents
• Earn compounded yields in ALLURE, our native stablecoin, while retaining full ownership of your assets

Entry is through the Genesis NFT (first 100 cohort only).

Everything runs parallel to your current life — zero extra time required.

This is not another DeFi project.
This is a sovereign regime built for those who want to own their value and participate in the wealth transfer without becoming dependent on it.

2. VISION & PHILOSOPHY
We believe the greatest leverage in this cycle is not found in chasing the next token — it is found in building sovereign systems that outlast market cycles.

Core Philosophy
"We build the people. The people build the business."
We do not advertise. We do not beg for attention. Growth happens through word-of-mouth among serious individuals who recognize the opportunity and choose to participate.

Our edge is not secret. It is disciplined execution of proven trading frameworks combined with institutional-grade on-chain infrastructure (BlackBox NFT tokenization + Sophia Vaults + The Species AI agents).

We exist to create a parallel economy where participants:
• Keep full ownership of their assets
• Harden their capital against inflation and tax erosion
• Compound value through intelligent automation
• Build generational wealth without selling their time or soul

3. THE PROBLEM
Most people in crypto are still playing the old game:
• Chasing hype tokens
• Relying on centralized exchanges and custodians
• Exposing capital to single points of failure (hacks, freezes, rugs)
• Lacking real education or infrastructure to turn trading profits into lasting wealth

Even sophisticated participants often miss the bigger picture: the real wealth transfer is not just about holding tokens — it is about owning the rails that move value in the new economy.

Traditional finance is slow, expensive, and permissioned.
Most DeFi is fast but still speculative and fragile.
We solve both by creating a sovereign middle path.

4. THE SOVEREIGN REGIME SOLUTION
The Sovereign Regime is a complete ecosystem consisting of four integrated layers:

Layer 1 – Academy
Proven trading curriculum (Market Maker Method, 50Bounce, TDI, multi-timeframe confirmation) taught in a structured, results-oriented format.

Participants learn to generate consistent capital outside of crypto so they never have to liquidate or risk their tokenized assets.

Layer 2 – BlackBox NFT (The On-Chain Black Card)
The gateway for tokenizing real-world assets (real estate fractions, luxury watches, art, yachts, private jets, collectibles, and more).

Each BlackBox NFT represents verifiable ownership and serves as the secure container for your asset in the Sophia Vault system.

Layer 3 – Sophia Vaults + The Species
Intelligent, autonomous AI agents (Raido, Tide, Circuit, King AI, and others) that actively manage tokenized assets 24/7.

They handle rebalancing, yield optimization, de-risking, and compounding — all while you retain full ownership.

Layer 4 – ALLURE Stablecoin
Our native, over-collateralized stablecoin used for yields, liquidity, and silent capital movement. Stakeable and designed for stability and deflationary mechanics through ecosystem activity.

5. HOW IT WORKS – THE USER JOURNEY
Onboard → Purchase Genesis NFT (first 100 cohort only)
Learn → Complete Academy curriculum and develop trading edge
Generate → Create capital outside of crypto using the edge
Tokenize → Convert real-world assets into BlackBox NFTs
Vault → Deposit into Sophia Vaults
Compound → Let The Species AI agents manage and grow value
Retain & Scale → Keep ownership, earn ALLURE yields, repeat

The entire process runs parallel to your current life. No full-time commitment required.

6. COHORT STRUCTURE (FIRST 100 ONLY)
• Global Leader Package – $497 Higher profit share on referrals, priority access, direct mentorship, leadership perks.
• Member Package – $247 Full Academy access, curriculum, community, and pathway to everything else.

30-Day Money-Back Guarantee
If your life does not change in the first 30 days, you get every penny back — no questions asked.

7. TOKEN & ECONOMIC DESIGN
• Genesis NFT — Limited first-cohort access + baseline benefits
• BlackBox NFT — The actual tokenization vehicle for real assets (stakeable into Sophia Vaults)
• ALLURE — The native stablecoin used for yields and liquidity (stakeable, deflationary mechanics via ecosystem activity)

No forced token purchases for users. The focus remains on real asset ownership and intelligent compounding.

8. TEAM
Founder – Acey (@Ac3yway)
Co-Founders – Neo & Chris
Global Leaders – Swiss & Nick
All decisions are made with long-term sovereignty and community ownership in mind.

9. WHY NOW
The wealth transfer is accelerating. Institutions are moving onto Solana. Tokenization infrastructure is being built at breakneck speed. The window for early, sovereign participation is open — but it will not stay open forever.

We are not here to speculate.
We are here to own the rails.

10. CALL TO ACTION
The first 100 spots are being closed personally by the founder.

If you are serious about participating in the real wealth transfer without selling your time or becoming dependent on market hype, the Sovereign Regime is open to you.
We build the people. The people build the business.

Ready to begin?`;

export function LandingPage() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [showWhitepaper, setShowWhitepaper] = useState(false);

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-hidden px-4 pb-8 pt-5 text-slate-50" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #050505 50%, #0d0a15 100%)'
    }}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0),rgba(0,0,0,0.8))]" />
      <div className="relative z-10 flex items-center justify-between">
        <BrandLogo />
      </div>

      <section className="relative z-10 mt-8 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-black/55 px-5 py-7 shadow-[0_0_52px_rgba(153,69,255,0.14)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,69,255,0.18),transparent_38%)]" />
        <div className="absolute -right-10 top-6 h-28 w-28 rounded-full border border-violet-300/20" />
        <div className="absolute left-4 top-4 h-16 w-16 rounded-full border border-cyan-300/20" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/70">Sovereign Regime Manifesto</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white">
            Join the chamber where culture becomes capital formation.
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Buy the Genesis NFT. Enter the Academy. Receive your Sovereign Regime ID card, your baseline ecosystem yields, your rune, and your blessing. Later, scale assets through Black Card tokenization inside the main dApp.
          </p>

          <div className="mt-6 space-y-6">
            {(() => {
              const sections: { title?: string; subtitle?: string; lines: string[] }[] = [];
              let currentSection: { title?: string; subtitle?: string; lines: string[] } = { lines: [] };

              manifestoLines.forEach((line) => {
                const isMainTitle = line === 'SOVEREIGN REGIME';
                const isSubtitle = line === 'The Sovereign Regime' && sections.length === 0;
                const isSection = line && line === line.toUpperCase() && line.length > 1 && line !== '';

                if (isMainTitle) {
                  currentSection.title = line;
                } else if (isSubtitle) {
                  currentSection.subtitle = line;
                } else if (isSection) {
                  if (currentSection.lines.length > 0 || currentSection.title) {
                    sections.push(currentSection);
                  }
                  currentSection = { title: line, lines: [] };
                } else {
                  currentSection.lines.push(line as string);
                }
              });

              if (currentSection.lines.length > 0 || currentSection.title) {
                sections.push(currentSection);
              }

              return sections.map((section, idx) => (
                <div key={idx}>
                  {section.title && section.title === 'SOVEREIGN REGIME' && (
                    <div className="text-center mb-2">
                      <h2 className="text-2xl font-black tracking-[0.1em] text-cyan-300">
                        {section.title}
                      </h2>
                    </div>
                  )}

                  {section.subtitle && (
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold tracking-[0.08em] text-violet-300/90">
                        {section.subtitle}
                      </h3>
                    </div>
                  )}

                  {section.title && section.title !== 'SOVEREIGN REGIME' && section.lines.length > 0 && (
                    <div className="rounded-lg border border-cyan-300/30 overflow-hidden bg-cyan-500/[0.04]">
                      <button
                        onClick={() => toggleSection(section.title!)}
                        className="w-full px-4 py-3 border-b border-cyan-300/20 flex items-center justify-between hover:bg-cyan-500/[0.06] transition"
                      >
                        <p className="text-sm font-bold tracking-[0.12em] text-cyan-200/70 uppercase text-left">
                          {section.title}
                        </p>
                        <ChevronDown 
                          size={18} 
                          className={`flex-none text-cyan-300/70 transition-transform ${expandedSections.has(section.title) ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {expandedSections.has(section.title) && (
                        <div className="space-y-2 p-4 animate-in fade-in duration-200">
                          {section.lines.map((line) => {
                            if (line === '') {
                              return <div key={Math.random()} className="h-2" />;
                            }
                            return (
                              <div key={line} className="rounded-lg border border-white/6 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-slate-200/92">
                                {line}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {section.title && section.title !== 'SOVEREIGN REGIME' && section.lines.length === 0 && (
                    <div className="mb-3">
                      <p className="text-sm font-bold tracking-[0.12em] text-cyan-200/70 uppercase">
                        {section.title}
                      </p>
                    </div>
                  )}
                </div>
              ));
            })()}
          </div>

          <div className="mt-7 space-y-2">
            <Link to="/app/home">
              <Button className="w-full">Join the Sovereign Regime</Button>
            </Link>
            <button
              onClick={() => setShowWhitepaper(true)}
              className="w-full rounded-lg border border-violet-300/30 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/15"
            >
              Read Whitepaper
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-6 grid gap-4">
        <Card>
          <Badge>Genesis NFT First</Badge>
          <h2 className="mt-4 text-xl font-semibold text-white">Membership is the key, not an afterthought.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Phantom wallet purchase unlocks lifetime access to the Academy, baseline ecosystem yields, the Sovereign Regime ID card, and sovereign-only Cadabra transmissions.
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

      {/* Whitepaper Modal */}
      {showWhitepaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowWhitepaper(false)}
          />

          {/* Modal Content */}
          <div className="relative z-51 mx-4 flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-cyan-300/30 bg-black/85 shadow-[0_0_80px_rgba(0,245,255,0.2)] backdrop-blur-2xl">
            {/* Header */}
            <div className="sticky top-0 z-10 flex flex-none items-center justify-between border-b border-cyan-300/15 bg-black/90 px-6 py-4 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">Complete Documentation</p>
                <h2 className="mt-1 text-lg font-bold text-cyan-100">Sovereign Regime Whitepaper</h2>
              </div>
              <button
                onClick={() => setShowWhitepaper(false)}
                className="flex-none rounded-lg bg-violet-500/10 p-2 text-violet-300 transition hover:bg-violet-500/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
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
    </div>
  );
}
