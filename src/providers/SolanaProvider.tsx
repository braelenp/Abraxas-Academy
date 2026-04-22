import { useMemo, useCallback } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import type { WalletError } from '@solana/wallet-adapter-base';

// Use a reliable RPC endpoint with better uptime
const endpoint = 'https://api.mainnet-beta.solana.com';

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
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
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
