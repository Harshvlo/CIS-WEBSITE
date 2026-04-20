import { useRef, useEffect, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
}

const TiltCard = ({ 
  children, 
  className = '', 
  tiltAmount = 10,
  glareEnabled = true 
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -tiltAmount;
      const rotateY = ((x - centerX) / centerX) * tiltAmount;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      if (glareEnabled && glareRef.current) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`;
      }
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      if (glareRef.current) {
        glareRef.current.style.background = 'transparent';
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [tiltAmount, glareEnabled]);

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {glareEnabled && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-inherit pointer-events-none transition-all duration-200"
          style={{ borderRadius: 'inherit' }}
        />
      )}
    </div>
  );
};

export default TiltCard;
