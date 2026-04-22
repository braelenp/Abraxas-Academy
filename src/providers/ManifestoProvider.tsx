import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ManifestoContextType {
  showManifesto: boolean;
  openManifesto: () => void;
  closeManifesto: () => void;
}

const ManifestoContext = createContext<ManifestoContextType | undefined>(undefined);

export function ManifestoProvider({ children }: { children: ReactNode }) {
  const [showManifesto, setShowManifesto] = useState(false);

  const openManifesto = useCallback(() => {
    setShowManifesto(true);
  }, []);

  const closeManifesto = useCallback(() => {
    localStorage.setItem('hasSeenManifesto', 'true');
    setShowManifesto(false);
  }, []);

  return (
    <ManifestoContext.Provider value={{ showManifesto, openManifesto, closeManifesto }}>
      {children}
    </ManifestoContext.Provider>
  );
}

export function useManifesto() {
  const context = useContext(ManifestoContext);
  if (context === undefined) {
    throw new Error('useManifesto must be used within ManifestoProvider');
  }
  return context;
}
