import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface SlideData {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

interface SlideshowProps {
  slides: SlideData[];
  autoPlay?: boolean;
  interval?: number;
}

export function Slideshow({ slides, autoPlay = false, interval = 5000 }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-purple-300/30 bg-gradient-to-br from-purple-900/30 to-black/60 backdrop-blur-sm">
      {/* Slide Content */}
      <div className="relative flex flex-col items-center justify-start overflow-hidden p-6 space-y-6">
        {/* Text Content */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center z-10">
          <h3 className="text-2xl font-bold text-purple-100">
            {currentSlideData.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
            {currentSlideData.description}
          </p>
        </div>

        {/* Image with High-Tech Border */}
        {currentSlideData.imageUrl && (
          <div className="relative w-full">
            {/* Outer glow effect - purple and gold */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-amber-500/20 to-purple-600/30 rounded-lg blur-xl -z-10" />
            
            {/* High-tech border container - purple and gold gradient */}
            <div className="relative border-2 border-transparent rounded-lg p-1 bg-gradient-to-r from-purple-500 via-amber-400 to-purple-500 overflow-hidden">
              {/* Inner frame */}
              <div className="relative bg-black/95 rounded-md overflow-hidden border border-purple-400/40">
                {/* Corner accents - purple and gold */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400/70" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-400/70" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-400/70" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400/70" />

                {/* Image - full size display */}
                <img
                  src={currentSlideData.imageUrl}
                  alt={currentSlideData.title}
                  className="w-full h-auto object-contain"
                />

                {/* Subtle scanline effect overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 via-transparent to-white/5 opacity-20" />
              </div>
            </div>
          </div>
        )}

        {/* Slide Counter - Top Right */}
        <div className="absolute right-4 top-4 rounded-lg border border-purple-300/30 bg-black/70 px-3 py-1 text-xs font-semibold text-purple-200">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Navigation Controls - Bottom */}
      <div className="flex items-center justify-between gap-2 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
        <button
          onClick={prevSlide}
          className="rounded-lg border border-purple-300/40 bg-purple-500/10 p-2 text-purple-300 transition hover:bg-purple-500/20 hover:border-purple-300/60"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-1 justify-center flex-1">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all ${
                idx === currentSlide
                  ? 'w-6 h-2 bg-purple-400'
                  : 'w-2 h-2 bg-purple-300/40 hover:bg-purple-300/60'
              } rounded-full`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="rounded-lg border border-purple-300/40 bg-purple-500/10 p-2 text-purple-300 transition hover:bg-purple-500/20 hover:border-purple-300/60"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
