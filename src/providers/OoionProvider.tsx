import { createContext, useContext, useState, ReactNode } from 'react';

interface OoionContextType {
  isOpen: boolean;
  openOoion: () => void;
  closeOoion: () => void;
}

const OoionContext = createContext<OoionContextType | undefined>(undefined);

export function OoionProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openOoion = () => setIsOpen(true);
  const closeOoion = () => setIsOpen(false);

  return (
    <OoionContext.Provider value={{ isOpen, openOoion, closeOoion }}>
      {children}
    </OoionContext.Provider>
  );
}

export function useOoion() {
  const context = useContext(OoionContext);
  if (context === undefined) {
    throw new Error('useOoion must be used within OoionProvider');
  }
  return context;
}
