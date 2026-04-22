import { ExternalLink } from 'lucide-react';
import { cadabraPosts } from '../lib/data';
import { useMembership } from '../providers/MembershipProvider';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function CadabraPage() {
  const { isMember } = useMembership();

  return (
    <div className="space-y-4">
      <Card>
        <Badge>Cadabra Feed</Badge>
        <h1 className="mt-4 text-2xl font-semibold text-white">Trading setups, vault threads, and gaming clips.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Cadabra is the cultural feed inside the chamber. Public signals establish taste. Genesis-gated threads carry the higher-order execution context.
        </p>
      </Card>

      {isMember && (
        <Button
          className="w-full flex items-center justify-center gap-2 rounded-lg border-cyan-300/40 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25 h-11 font-semibold"
          onClick={() => window.open('https://cadabra-eight.vercel.app/', '_blank')}
        >
          <ExternalLink className="h-4 w-4" />
          Open Cadabra
        </Button>
      )}

      {cadabraPosts.map((post) => {
        const locked = post.membersOnly && !isMember;
        return (
          <Card key={post.id} className="relative overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-200/60">{post.tag}</p>
                <h2 className="mt-2 text-lg font-semibold text-white">{post.title}</h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/12 text-lg text-violet-100">
                {post.rune}
              </div>
            </div>

            <p className={`mt-4 text-sm leading-6 ${locked ? 'select-none blur-[3px]' : 'text-slate-300'}`}>{post.excerpt}</p>

            <div className="mt-5 flex items-center justify-between gap-3 text-xs text-slate-400">
              <span>{post.author}</span>
              <span>{post.metrics}</span>
            </div>

            {locked ? (
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-cyan-300/20 bg-black/82 px-4 py-3 text-xs uppercase tracking-[0.24em] text-cyan-100/85 backdrop-blur-xl">
                Genesis holders only
              </div>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}
