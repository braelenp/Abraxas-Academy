import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface DMFounderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DMFounderModal({ isOpen, onClose }: DMFounderModalProps) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative z-51 mx-4 w-full max-w-md overflow-hidden rounded-3xl border border-amber-300/40 bg-black/90 shadow-[0_0_80px_rgba(217,119,6,0.25),0_0_120px_rgba(153,69,255,0.15)] backdrop-blur-2xl">
        {/* Header */}
        <div className="flex flex-none items-center justify-between border-b border-amber-300/20 bg-black/95 px-6 py-5 backdrop-blur-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-amber-300/70">Next Step</p>
            <h2 className="mt-1 text-lg font-bold text-amber-100">Claim Your Spot</h2>
          </div>
          <button
            onClick={handleClose}
            className="flex-none rounded-lg bg-violet-500/10 p-2 text-violet-300 transition hover:bg-violet-500/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 px-6 py-6">
          {/* Body Text */}
          <div className="space-y-3">
            <p className="text-sm leading-6 text-slate-200">
              To join as an early adopter or founding member, DM <span className="font-semibold text-amber-200">@cryptoac3y</span> on X.
            </p>
            <p className="text-sm leading-6 text-slate-200">
              Screening is brief. The regime moves fast.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-amber-300/20 via-amber-300/10 to-transparent" />

          {/* Button */}
          <a
            href="https://x.com/cryptoac3y"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-amber-300/50 bg-gradient-to-r from-amber-500/20 to-amber-600/15 px-4 py-3 text-sm font-semibold text-amber-100 shadow-[0_0_24px_rgba(217,119,6,0.2)] transition hover:from-amber-500/30 hover:to-amber-600/25 hover:shadow-[0_0_32px_rgba(217,119,6,0.3)]"
          >
            <MessageCircle className="h-4 w-4" />
            DM Founder on X
          </a>
        </div>
      </div>
    </div>
  );
}
