import { createContext, useContext, useMemo, ReactNode } from 'react';
import { useConnection } from '@solana/wallet-adapter-react';

interface MetaplexContextType {
  metaplex: any;
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
      // Late-bind import to ensure polyfills are ready
      const { Metaplex } = require('@metaplex-foundation/js') as typeof import('@metaplex-foundation/js');
      return {
        metaplex: new Metaplex(connection),
        isInitialized: true,
        error: null,
      };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.warn('Metaplex initialization error (app will still work):', errorMsg);
      return { metaplex: null, isInitialized: false, error: errorMsg };
    }
  }, [connection]);

  return (
    <MetaplexContext.Provider value={{ metaplex, isInitialized, error }}>
      {children}
    </MetaplexContext.Provider>
  );
}

export function useMetaplex(): any {
  const context = useContext(MetaplexContext);
  if (context === undefined) {
    throw new Error('useMetaplex must be used within MetaplexProvider');
  }
  return context.metaplex;
}
