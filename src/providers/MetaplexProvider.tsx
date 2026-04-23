import { createContext, useContext, useMemo, ReactNode } from 'react';
import { useConnection } from '@solana/wallet-adapter-react';
import { Metaplex } from '@metaplex-foundation/js';

interface MetaplexContextType {
  metaplex: Metaplex | null;
  isInitialized: boolean;
  error: string | null;
}

const MetaplexContext = createContext<MetaplexContextType | undefined>(undefined);

export function MetaplexProvider({ children }: { children: ReactNode }) {
  const { connection } = useConnection();

  const { metaplex, isInitialized, error } = useMemo(() => {
    if (!connection) {
      return { metaplex: null, isInitialized: false, error: null };
    }
    
    try {
      return {
        metaplex: new Metaplex(connection),
        isInitialized: true,
        error: null,
      };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.warn('Metaplex initialization non-critical error (app will still work):', errorMsg);
      // Don't crash - app can work without Metaplex
      return { metaplex: null, isInitialized: false, error: errorMsg };
    }
  }, [connection]);

  return (
    <MetaplexContext.Provider value={{ metaplex, isInitialized, error }}>
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
