import { ExternalLink, ChevronRight } from 'lucide-react';
import { useMembership } from '../providers/MembershipProvider';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function TokenizationPage() {
  const { isMember } = useMembership();

  const tokenizationSteps = [
    {
      number: '01',
      title: 'Generate Capital',
      description: 'Apply the Market Maker Method and trading edge taught in the Academy to generate real, clean capital outside the cryptosphere. Build discipline, build wealth.',
      rune: '💎',
    },
    {
      number: '02',
      title: 'Black Card Tokenization',
      description: 'Convert your real-world assets into BlackBox NFTs—your on-chain Black Card. Cryptographic proof of sovereign ownership. No middleman. No dilution.',
      rune: '🔐',
    },
    {
      number: '03',
      title: 'Sophia Vaults',
      description: 'Deposit your tokenized assets into Sophia Vaults. Structured, hardened, positioned for growth. Your assets maintain full ownership while gaining access to 24/7 portfolio optimization.',
      rune: '⬚',
    },
    {
      number: '04',
      title: 'The Species AI',
      description: 'Let The Species AI agents compound your portfolio autonomously. Portfolio positioning. Market defense. Derisking. Growth. All while you maintain complete control and visibility.',
      rune: '🤖',
    },
  ];

  const principles = [
    {
      title: 'Seamless Sovereignty',
      description: 'From trading profits to cryptographic ownership. One unified loop. No friction. No compromise.',
    },
    {
      title: 'Control is Non-Negotiable',
      description: 'You own the keys. You hold the assets. You direct the strategy. AI enhances, never replaces.',
    },
    {
      title: 'Derisking Without Dependency',
      description: 'Automated compounding doesn\'t mean giving up control. It means working smarter while you focus on the bigger game.',
    },
    {
      title: 'Built by People, for People',
      description: 'We build the people first. Let the people build the business. This engine scales through genuine network trust, not hype or marketing spend.',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card>
        <Badge>Tokenization Engine</Badge>
        <h1 className="mt-4 text-2xl font-semibold text-white">The Sovereign Asset Loop</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          You generate capital. We secure it on-chain. The Species compounds it. Control never leaves your hands.
        </p>
      </Card>

      {/* The Complete Loop */}
      <Card className="border-cyan-300/20 bg-cyan-500/5">
        <div className="space-y-4">
          <div>
            <Badge className="border-cyan-300/20 bg-cyan-500/10 text-cyan-100/80">The Four Stages</Badge>
            <h2 className="mt-4 text-lg font-semibold text-white">From Trading Profits to Autonomous Compounding</h2>
          </div>

          {tokenizationSteps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-500/12 text-xl">
                    {step.rune}
                  </div>
                  {idx < tokenizationSteps.length - 1 && (
                    <div className="my-2 h-12 w-0.5 bg-gradient-to-b from-cyan-300/40 to-cyan-300/0" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200/70">{step.number}</p>
                  <h3 className="mt-1 text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-5 text-slate-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Why This Matters */}
      <Card className="border-violet-300/20 bg-violet-500/5">
        <Badge className="border-violet-300/20 bg-violet-500/10 text-violet-100/80">The Philosophy</Badge>
        <h2 className="mt-4 text-lg font-semibold text-white">Why Tokenization Completes the Loop</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          The Academy teaches you how to generate real capital. But real capital sitting in traditional systems doesn't compound. It doesn't move. It doesn't work for you 24/7.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Tokenization is the bridge. Convert your hard-won profits into cryptographic ownership. Place them in Sophia Vaults. Let The Species work while you sleep.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          You never give up control. You never trust a third party with your keys. You just gain access to AI-powered portfolio management that operates 24/7, executing strategy at machine speed while you maintain complete transparency and authority.
        </p>
      </Card>

      {/* The Principles */}
      <div className="space-y-3">
        {principles.map((principle, idx) => (
          <Card key={idx}>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-200">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">{principle.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">{principle.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Genesis Member Exclusive */}
      {isMember && (
        <Card className="border-amber-300/20 bg-amber-500/5">
          <Badge className="border-amber-300/20 bg-amber-500/10 text-amber-100/80">Founding Member Access</Badge>
          <h2 className="mt-4 text-base font-semibold text-white">Ready to Tokenize Your Assets?</h2>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            As a founding member of the Sovereign Regime, you have priority access to BlackBox NFT minting and Sophia Vault structuring. The tokenization engine is built for you first.
          </p>
          <div className="mt-4 flex gap-2">
            <Button
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border-cyan-300/40 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25 h-10 font-semibold text-sm"
              onClick={() => window.open('https://sophia-vaults.vercel.app/', '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              Access Sophia Vaults
            </Button>
          </div>
        </Card>
      )}

      {/* Non-Member Info */}
      {!isMember && (
        <Card className="border-violet-300/20 bg-violet-500/8">
          <Badge className="border-violet-300/20 bg-violet-500/10 text-violet-100/80">Genesis NFT Required</Badge>
          <h2 className="mt-4 text-base font-semibold text-white">Tokenization is a Founding Member Privilege</h2>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Full access to the tokenization engine, BlackBox NFT minting, Sophia Vaults, and The Species AI is exclusive to Genesis NFT holders. Join the first 100 to unlock this complete capital formation loop.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Learn the trading edge in the Academy. Master the system. Then tokenize your profits and let AI compound them 24/7.
          </p>
        </Card>
      )}

      {/* The Bigger Picture */}
      <Card className="border-slate-400/10 bg-slate-400/5">
        <h2 className="text-base font-semibold text-white">The Bigger Picture</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          <span className="font-semibold text-white">Academy</span> teaches you the edge.
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          <span className="font-semibold text-white">Tokenization</span> converts your profits.
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          <span className="font-semibold text-white">Sophia Vaults</span> protect your assets.
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          <span className="font-semibold text-white">The Species</span> compounds them.
        </p>
        <p className="mt-4 text-xs leading-5 text-slate-400">
          This is not a pipeline. It's a loop. You iterate. You refine. You compound. One day your initial capital is working so hard for you that you're effectively retired, still holding the keys, still in control, still growing.
        </p>
        <p className="mt-3 text-xs leading-5 text-slate-400">
          We build the people. The people build the business. The business builds the future.
        </p>
      </Card>
    </div>
  );
}
