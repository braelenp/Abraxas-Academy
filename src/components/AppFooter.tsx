import { Link } from 'react-router-dom';
import { useManifesto } from '../providers/ManifestoProvider';

export function AppFooter() {
  const { openManifesto } = useManifesto();

  return (
    <footer className="flex-none border-t border-purple-300/15 bg-black/40 px-4 py-4 backdrop-blur-sm">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-300/70">Resources</p>
        <div className="grid grid-cols-1 gap-2">
          <button
            onClick={openManifesto}
            className="rounded-lg border border-purple-300/20 bg-purple-500/8 px-3 py-2 text-xs text-left font-semibold text-purple-200 transition hover:bg-purple-500/15"
          >
            View Regime Manifesto
          </button>
          <Link to="/" className="rounded-lg border border-purple-300/20 bg-purple-500/8 px-3 py-2 text-xs text-left font-semibold text-purple-200 transition hover:bg-purple-500/15 block text-center">
            ← Return to Landing Page
          </Link>
        </div>
        <p className="text-[9px] text-slate-500/70 mt-3 pt-3 border-t border-purple-300/10">
          Sovereign Regime • Capital formation disguised as culture
        </p>
      </div>
    </footer>
  );
}
