import { useWallet } from '@solana/wallet-adapter-react';

export function NFTPage() {
  const { connected } = useWallet();

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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-cyan-100">Your NFTs</h1>
        <p className="text-sm text-slate-400">Genesis & La Casa Collection</p>
      </div>

      <div className="rounded-2xl border border-violet-300/20 bg-violet-500/[0.04] p-8 text-center">
        <p className="text-slate-300">No NFTs yet</p>
        <p className="text-sm text-slate-400">
          Mint a Genesis or La Casa NFT to get started
        </p>
      </div>
    </div>
  );
}
