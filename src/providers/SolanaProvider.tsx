import { useMemo, useCallback } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import type { WalletError } from '@solana/wallet-adapter-base';

// Primary RPC endpoint
const primaryEndpoint = 'https://api.mainnet-beta.solana.com';

// Backup endpoints in case primary fails
const backupEndpoints = [
  'https://solana-mainnet.rpc.extrnode.com:8899',
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
