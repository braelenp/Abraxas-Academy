import { useWallet } from '@solana/wallet-adapter-react';
import { useMembership } from '../providers/MembershipProvider';
import { useGenesisNFT } from '../hooks/useGenesisNFT';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';

export function NFTPage() {
  const { connected } = useWallet();
  const { isMember, memberRune, memberNumber, blessing } = useMembership();
  const { hasGenesisNFT, genesisNFT, isLoading } = useGenesisNFT();

  if (!connected) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-bold text-cyan-100">Your NFTs</h1>
          <p className="text-sm text-slate-400">Genesis & La Casa Collection</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-violet-300/20 bg-violet-500/[0.04] p-8 text-center">
          <p className="text-slate-300">Connect your wallet to view your NFTs</p>
          <p className="text-sm text-slate-400">
            Genesis and La Casa NFTs will appear here once you're connected
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-bold text-cyan-100">Your NFTs</h1>
          <p className="text-sm text-slate-400">Genesis & La Casa Collection</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-violet-300/20 bg-violet-500/[0.04] p-8 text-center">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <p className="text-slate-300">Loading your NFTs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-cyan-100">Your NFTs</h1>
        <p className="text-sm text-slate-400">Genesis & La Casa Collection</p>
      </div>

      {hasGenesisNFT && isMember ? (
        <Card>
          <Badge className="border-cyan-300/20 bg-cyan-500/12 text-cyan-100/80">Genesis NFT</Badge>
          <div className="mt-4 rounded-[1.75rem] border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(0,245,255,0.14),rgba(5,5,5,0.82),rgba(153,69,255,0.22))] p-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-100/65">Member Number</p>
                <p className="mt-3 text-4xl font-bold text-cyan-100 drop-shadow-lg">#{memberNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-100/65">Sovereign Rune</p>
                <p className="mt-3 text-4xl text-cyan-100 drop-shadow-lg">{memberRune}</p>
              </div>
            </div>

            <div className="rounded-xl border border-cyan-300/15 bg-white/[0.02] p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-100/65 mb-2">Your Blessing</p>
              <p className="text-sm leading-6 text-cyan-100/90">{blessing}</p>
            </div>

            {genesisNFT?.mint && (
              <div className="mt-4 rounded-xl border border-cyan-300/15 bg-white/[0.02] p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-100/65 mb-2">Mint Address</p>
                <p className="text-xs font-mono text-cyan-100/70 break-all">{genesisNFT.mint.toString()}</p>
              </div>
            )}
          </div>
        </Card>
      ) : (
        <div className="rounded-2xl border border-violet-300/20 bg-violet-500/[0.04] p-8 text-center">
          <p className="text-slate-300">No Genesis NFT yet</p>
          <p className="text-sm text-slate-400">
            Visit the Join page to mint your Genesis NFT
          </p>
        </div>
      )}
    </div>
  );
}
