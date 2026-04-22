import { createContext, useContext, useMemo, ReactNode } from 'react';
import { useConnection } from '@solana/wallet-adapter-react';
import { Metaplex } from '@metaplex-foundation/js';

interface MetaplexContextType {
  metaplex: Metaplex | null;
}

const MetaplexContext = createContext<MetaplexContextType | undefined>(undefined);

export function MetaplexProvider({ children }: { children: ReactNode }) {
  const { connection } = useConnection();

  const metaplex = useMemo(() => {
    if (!connection) return null;
    try {
      return new Metaplex(connection);
    } catch (error) {
      console.error('Failed to initialize Metaplex:', error);
      return null;
    }
  }, [connection]);

  return (
    <MetaplexContext.Provider value={{ metaplex }}>
      {children}
    </MetaplexContext.Provider>
  );
}

export function useMetaplex(): Metaplex | null {
  const context = useContext(MetaplexContext);
  if (context === undefined) {
    throw new Error('useMetaplex must be used within MetaplexProvider');
  }
  return context.metaplex;
}
