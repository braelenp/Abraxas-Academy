import { useEffect, useRef, useState, useCallback } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';
import { BottomNav } from './components/BottomNav';
import { ChamberBackground } from './components/ChamberBackground';
import { ManifestoModal } from './components/ManifestoModal';
import { OrionFloat } from './components/OrionFloat';
import { OrionChat } from './components/OrionChat';
import { useManifesto } from './providers/ManifestoProvider';
import { AcademyPage } from './pages/AcademyPage';
import { CadabraPage } from './pages/CadabraPage';
import { LoadingPage } from './pages/LoadingPage';
import { ProfilePage } from './pages/ProfilePage';
import { HomeTabPage } from './pages/HomeTabPage';
import { RegimePage } from './pages/RegimePage';

function AppShell() {
  const location = useLocation();
  const contentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const resetScroll = () => {
      contentRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    resetScroll();
    const frame = requestAnimationFrame(resetScroll);
    return () => cancelAnimationFrame(frame);
  }, [location.pathname]);

  return (
    <div className="tech-distortion relative mx-auto flex min-h-[100dvh] w-full max-w-md flex-col overflow-hidden text-slate-100">
      <ChamberBackground />
      <AppHeader />

      <div className="z-20 mx-auto flex w-full max-w-md flex-none border-b border-violet-300/12 bg-violet-500/[0.06] px-4 py-2 backdrop-blur-sm">
        <p className="text-[10px] uppercase tracking-[0.26em] text-violet-100/72">Genesis unlocks Academy, Cadabra, ID, and baseline ecosystem yields.</p>
      </div>

      <main ref={contentRef} className="flex-1 overflow-y-auto px-4 py-4 pb-40">
        <Routes>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<HomeTabPage />} />
          <Route path="curriculum" element={<AcademyPage />} />
          <Route path="cadabra" element={<CadabraPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="regime" element={<RegimePage />} />
          <Route path="*" element={<Navigate to="home" replace />} />
        </Routes>
      </main>

      <div className="fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 transform">
        <BottomNav />
      </div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { showManifesto, openManifesto, closeManifesto } = useManifesto();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
      // Check if user has seen manifesto before
      const hasSeenManifesto = localStorage.getItem('hasSeenManifesto');
      if (!hasSeenManifesto) {
        openManifesto();
      }
    }, 2600);
    return () => window.clearTimeout(timer);
  }, [openManifesto]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <ManifestoModal isOpen={showManifesto} onClose={closeManifesto} />
      <OrionFloat />
      <OrionChat />
      <Routes>
        <Route path="/" element={<Navigate to="/app/home" replace />} />
        <Route path="/app/*" element={<AppShell />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
