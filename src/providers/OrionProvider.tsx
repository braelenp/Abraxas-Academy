import { createContext, useContext, useState, ReactNode } from 'react';

interface OrionContextType {
  isOpen: boolean;
  openOrion: () => void;
  closeOrion: () => void;
}

const OrionContext = createContext<OrionContextType | undefined>(undefined);

export function OrionProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openOrion = () => setIsOpen(true);
  const closeOrion = () => setIsOpen(false);

  return (
    <OrionContext.Provider value={{ isOpen, openOrion, closeOrion }}>
      {children}
    </OrionContext.Provider>
  );
}

export function useOrion() {
  const context = useContext(OrionContext);
  if (context === undefined) {
    throw new Error('useOrion must be used within OrionProvider');
  }
  return context;
}
