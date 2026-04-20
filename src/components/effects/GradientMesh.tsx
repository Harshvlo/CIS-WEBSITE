import { useEffect, useRef } from 'react';

interface GradientMeshProps {
  colors?: string[];
  speed?: number;
  className?: string;
}

const GradientMesh = ({
  colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'],
  speed = 0.002,
  className = '',
}: GradientMeshProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    };

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      } : { r: 0, g: 0, b: 0 };
    };

    const rgbColors = colors.map(hexToRgb);

    const animate = () => {
      timeRef.current += speed;
      
      // Create gradient points that move
      const points = [
        {
          x: canvas.width * (0.3 + 0.2 * Math.sin(timeRef.current * 0.7)),
          y: canvas.height * (0.3 + 0.2 * Math.cos(timeRef.current * 0.5)),
          color: rgbColors[0],
        },
        {
          x: canvas.width * (0.7 + 0.2 * Math.cos(timeRef.current * 0.6)),
          y: canvas.height * (0.3 + 0.2 * Math.sin(timeRef.current * 0.8)),
          color: rgbColors[1],
        },
        {
          x: canvas.width * (0.3 + 0.2 * Math.sin(timeRef.current * 0.9)),
          y: canvas.height * (0.7 + 0.2 * Math.cos(timeRef.current * 0.4)),
          color: rgbColors[2],
        },
        {
          x: canvas.width * (0.7 + 0.2 * Math.cos(timeRef.current * 0.5)),
          y: canvas.height * (0.7 + 0.2 * Math.sin(timeRef.current * 0.7)),
          color: rgbColors[3],
        },
      ];

      // Clear with dark background
      ctx.fillStyle = 'rgba(10, 22, 40, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient blobs
      points.forEach((point) => {
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, Math.max(canvas.width, canvas.height) * 0.5
        );
        
        gradient.addColorStop(0, `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, 0.3)`);
        gradient.addColorStop(0.5, `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, 0.1)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Add noise texture effect
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 10;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
      }
      
      ctx.putImageData(imageData, 0, 0);

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colors, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default GradientMesh;
