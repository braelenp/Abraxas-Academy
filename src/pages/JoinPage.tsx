import { Link } from 'react-router-dom';
import { useMembership } from '../providers/MembershipProvider';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function JoinPage() {
  const { isConnected, isMember, isActivating, activateMembership, memberRune, memberNumber, blessing } = useMembership();

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <Badge className="border-violet-300/20 bg-violet-500/12 text-violet-100/80">Genesis Access</Badge>
        <h1 className="mt-4 text-2xl font-semibold text-white">Sovereign Regime Membership</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          The Genesis NFT is the first door. Mint it with Phantom wallet to open lifetime Academy access, baseline ecosystem yields, an Abraxas ID card, and sovereign-only channels.
        </p>

        <div className="mt-5 grid gap-3 text-sm text-slate-200/90">
          <div className="rounded-2xl border border-cyan-300/15 bg-white/[0.03] px-4 py-3">Instant Academy unlock across all five modules</div>
          <div className="rounded-2xl border border-cyan-300/15 bg-white/[0.03] px-4 py-3">Abraxas ID card with rune, member number, and blessing</div>
          <div className="rounded-2xl border border-cyan-300/15 bg-white/[0.03] px-4 py-3">Cadabra members-only setups, vault strategy threads, and future yield layers</div>
        </div>

        <div className="mt-6 grid gap-3">
          <Button onClick={() => void activateMembership()} disabled={!isConnected || isMember || isActivating}>
            {isMember ? 'Genesis NFT Active' : isActivating ? 'Forging Membership...' : 'Buy Genesis NFT'}
          </Button>
          {!isConnected ? <p className="text-xs uppercase tracking-[0.24em] text-amber-200/70">Connect Phantom to activate membership.</p> : null}
          {isMember ? <Link to="/app/academy"><Button variant="secondary" className="w-full">Open Full Curriculum</Button></Link> : null}
        </div>
      </Card>

      <Card>
        <Badge>Issued Identity</Badge>
        <div className="mt-4 rounded-[1.75rem] border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(153,69,255,0.22),rgba(5,5,5,0.82),rgba(0,245,255,0.14))] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-100/65">Abraxas ID</p>
              <p className="mt-2 text-2xl text-cyan-100">{memberRune}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-100/65">Member No.</p>
              <p className="mt-2 text-xl font-semibold text-white">#{memberNumber}</p>
            </div>
          </div>
          <p className="mt-6 max-w-[16rem] text-sm leading-6 text-slate-100/90">{blessing}</p>
        </div>
      </Card>
    </div>
  );
}
