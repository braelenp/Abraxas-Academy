import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Info } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useMembership } from '../providers/MembershipProvider';
import { useManifesto } from '../providers/ManifestoProvider';

export function AppHeader() {
  const { isMember } = useMembership();
  const { openManifesto } = useManifesto();

  return (
    <header className="sticky top-0 z-30 flex-none border-b border-cyan-300/10 bg-black/80 px-3 py-4 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-2">
        <BrandLogo compact={false} />
        <div className="flex items-center gap-1.5">
          <button
            onClick={openManifesto}
            className="flex-none rounded-lg bg-cyan-500/10 p-1.5 text-cyan-300/70 transition hover:bg-cyan-500/16 hover:text-cyan-300"
            title="View Manifesto"
          >
            <Info className="h-3.5 w-3.5" />
          </button>
          <div className="hidden rounded-full border border-violet-400/15 bg-violet-500/8 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-violet-100/60 sm:block">
            {isMember ? 'Genesis' : 'Guest'}
          </div>
          <div className="wallet-shell">
            <WalletMultiButton className="ui-action" />
          </div>
        </div>
      </div>
      <p className="mt-1.5 text-[9px] leading-4 tracking-[0.05em] text-slate-400/70">
        Sovereign Regime. Capital formation disguised as culture.
      </p>
    </header>
  );
}
