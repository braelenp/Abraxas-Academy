import { MessageCircle } from 'lucide-react';
import { useOoion } from '../providers/OoionProvider';

export function OoionFloat() {
  const { isOpen, openOoion } = useOoion();

  if (isOpen) return null;

  return (
    <div className="pointer-events-none fixed bottom-20 left-1/2 z-30 w-full max-w-md -translate-x-1/2 px-4 flex justify-end">
      <button
        onClick={openOoion}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-500/15 shadow-[0_0_24px_rgba(0,245,255,0.18)] transition hover:bg-cyan-500/25 hover:shadow-[0_0_32px_rgba(0,245,255,0.25)]"
        title="Open Ooion Assistant"
      >
        <div className="relative">
          <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-400/20" />
          <MessageCircle className="relative h-6 w-6 text-cyan-300" />
        </div>
      </button>
    </div>
  );
}
