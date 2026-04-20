import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface StarfieldProps {
  starCount?: number;
  connectDistance?: number;
  className?: string;
}

const Starfield = ({
  starCount = 100,
  connectDistance = 120,
  className = '',
}: StarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          brightness: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 2 + 1,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      timeRef.current += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections first (behind stars)
      starsRef.current.forEach((star, i) => {
        // Connect to nearby stars
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const other = starsRef.current[j];
          const dx = star.x - other.x;
          const dy = star.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDistance) {
            const opacity = 0.1 * (1 - dist / connectDistance);
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Connect to mouse if nearby
        const dxMouse = star.x - mouseRef.current.x;
        const dyMouse = star.y - mouseRef.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < connectDistance * 1.5) {
          const opacity = 0.3 * (1 - distMouse / (connectDistance * 1.5));
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw stars
      starsRef.current.forEach((star) => {
        const twinkle = Math.sin(timeRef.current * star.twinkleSpeed + star.twinkleOffset);
        const currentBrightness = star.brightness + twinkle * 0.2;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 4
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${currentBrightness})`);
        gradient.addColorStop(0.3, `rgba(147, 197, 253, ${currentBrightness * 0.5})`);
        gradient.addColorStop(1, 'rgba(147, 197, 253, 0)');

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentBrightness})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [starCount, connectDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
    />
  );
};

export default Starfield;
