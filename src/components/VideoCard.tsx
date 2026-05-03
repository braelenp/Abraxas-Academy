import { Play, X } from 'lucide-react';
import { useRef, useState } from 'react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  youtubeId?: string;
  duration: string;
}

export function VideoCard({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  youtubeId,
  duration,
}: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {/* Video Card Thumbnail */}
      <div className="relative group overflow-hidden rounded-2xl border border-purple-300/30 bg-black/40 backdrop-blur-xl cursor-pointer"
           onClick={() => setIsOpen(true)}>
        <div className="aspect-video relative overflow-hidden bg-black">
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center transition group-hover:scale-110">
            <div className="rounded-full border-2 border-purple-300 bg-purple-500/20 p-4 transition group-hover:bg-purple-500/40">
              <Play size={32} className="text-purple-300" fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-purple-100 line-clamp-2 group-hover:text-purple-50">
            {title}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2 group-hover:text-slate-300">
            {description}
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-4xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 rounded-lg bg-purple-500/10 p-2 text-purple-300 transition hover:bg-purple-500/20 border border-purple-300/30"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="rounded-2xl overflow-hidden border border-purple-300/30 bg-black/90 shadow-[0_0_80px_rgba(153,69,255,0.3)]">
              <div className="aspect-video bg-black relative">
                {videoUrl ? (
                  <video
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    controls
                    autoPlay
                    className="w-full h-full"
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={title}
                    frameBorder="0"
                    allowFullScreen
                  />
                )}
              </div>
              
              <div className="p-6 border-t border-purple-300/20">
                <h2 className="text-2xl font-bold text-purple-100 mb-2">
                  {title}
                </h2>
                <p className="text-slate-300">
                  {description}
                </p>
                {videoUrl && (
                  <a
                    href={videoUrl}
                    download
                    className="mt-4 inline-block text-purple-300 hover:text-purple-200 text-sm underline"
                  >
                    Download Video
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
