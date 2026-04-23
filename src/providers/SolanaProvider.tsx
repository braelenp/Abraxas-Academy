import { useMemo, useCallback } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import type { WalletError } from '@solana/wallet-adapter-base';

// Get RPC endpoint from environment variables
const primaryEndpoint = import.meta.env.VITE_SOLANA_RPC || 'https://api.devnet.solana.com';
const network = import.meta.env.VITE_SOLANA_NETWORK || 'devnet';

// Backup endpoints in case primary fails
const backupEndpoints = [
  network === 'devnet' 
    ? 'https://api.devnet.solana.com'
    : 'https://solana-mainnet.rpc.extrnode.com:8899',
  'https://rpc.ankr.com/solana',
];

type SolanaProviderProps = {
  children: React.ReactNode;
};

export function SolanaProvider({ children }: SolanaProviderProps) {
  const wallets = useMemo(() => {
    const phantomAdapter = new PhantomWalletAdapter();
    return [phantomAdapter];
  }, []);

  const onError = useCallback((error: WalletError) => {
    console.error('Wallet error:', error);
    // Silently log, don't crash
  }, []);

  return (
    <ConnectionProvider endpoint={primaryEndpoint}>
      <WalletProvider 
        wallets={wallets} 
        autoConnect={false}
        onError={onError}
      >
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
