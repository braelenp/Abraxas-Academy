import { useEffect, useRef } from 'react';

const RUNES = ['ᚱ', '☍', '✦', '𓂀', 'ᛟ', '⌘', '♁', '△'];

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      pulsePhase: number;
    }

    const particles: Particle[] = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Floating runes
    interface FloatingRune {
      x: number;
      y: number;
      rune: string;
      vx: number;
      vy: number;
      opacity: number;
      phase: number;
    }

    const floatingRunes: FloatingRune[] = [];
    const runeCount = 12;

    for (let i = 0; i < runeCount; i++) {
      floatingRunes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        rune: RUNES[Math.floor(Math.random() * RUNES.length)],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let frameCount = 0;

    const animate = () => {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#050505');
      gradient.addColorStop(0.5, '#0a0806');
      gradient.addColorStop(1, '#050505');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add radial glow overlay
      const radialGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      radialGradient.addColorStop(0, 'rgba(153, 69, 255, 0.08)');
      radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulsePhase += 0.02;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing opacity
        const pulseOpacity =
          particle.opacity * (0.3 + Math.sin(particle.pulsePhase) * 0.3);

        ctx.fillStyle = `rgba(153, 69, 255, ${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw floating runes
      floatingRunes.forEach((rune) => {
        rune.x += rune.vx;
        rune.y += rune.vy;
        rune.phase += 0.01;

        // Wrap around
        if (rune.x < -50) rune.x = canvas.width + 50;
        if (rune.x > canvas.width + 50) rune.x = -50;
        if (rune.y < -50) rune.y = canvas.height + 50;
        if (rune.y > canvas.height + 50) rune.y = -50;

        // Floating bob effect
        const bobY = rune.y + Math.sin(frameCount * 0.02 + rune.phase) * 3;

        const floatOpacity =
          rune.opacity * (0.4 + Math.sin(rune.phase) * 0.2);

        ctx.fillStyle = `rgba(153, 69, 255, ${floatOpacity})`;
        ctx.font = 'bold 24px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(rune.rune, rune.x, bobY);
      });

      frameCount++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
