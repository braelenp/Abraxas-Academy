import { academyModules } from '../lib/data';
import { useMembership } from '../providers/MembershipProvider';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

export function ProfilePage() {
  const { isConnected, isMember, memberRune, memberNumber, blessing, completionRate, completedBadges } = useMembership();

  return (
    <div className="space-y-4">
      <Card>
        <Badge>Abraxas ID Card</Badge>
        <div className="mt-4 rounded-[1.9rem] border border-cyan-300/20 bg-[linear-gradient(150deg,rgba(153,69,255,0.24),rgba(5,5,5,0.94),rgba(0,245,255,0.16))] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-100/65">Rune</p>
              <p className="mt-2 text-3xl text-cyan-100">{memberRune}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-100/65">Sovereign No.</p>
              <p className="mt-2 text-xl font-semibold text-white">#{memberNumber}</p>
            </div>
          </div>
          <p className="mt-6 max-w-[15rem] text-sm leading-6 text-slate-100/92">{blessing}</p>
          <div className="mt-6 flex items-center gap-2">
            <Badge className={isMember ? '' : 'border-amber-300/20 bg-amber-500/10 text-amber-100/80'}>{isMember ? 'Genesis Active' : 'Unissued'}</Badge>
            <Badge className="border-violet-300/20 bg-violet-500/12 text-violet-100/80">{isConnected ? 'Wallet Linked' : 'Wallet Pending'}</Badge>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between gap-3">
          <div>
            <Badge>Progress</Badge>
            <h2 className="mt-4 text-xl font-semibold text-white">Curriculum completion</h2>
          </div>
          <p className="text-2xl font-semibold text-cyan-100">{completionRate}%</p>
        </div>
        <div className="mt-4"><Progress value={completionRate} /></div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{completedBadges.length} of {academyModules.length} completion badges forged.</p>
      </Card>

      <Card>
        <Badge>Badges</Badge>
        <div className="mt-4 flex flex-wrap gap-2">
          {academyModules.map((module) => {
            const earned = completedBadges.includes(module.badge);
            return (
              <span key={module.id} className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.24em] ${earned ? 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100' : 'border-white/10 bg-white/5 text-slate-400'}`}>
                {module.badge}
              </span>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
