import { useEffect, useRef, ReactNode, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isRevealed]);

  const getTransform = () => {
    if (isRevealed) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up': return 'translate3d(0, 30px, 0)';
      case 'down': return 'translate3d(0, -30px, 0)';
      case 'left': return 'translate3d(30px, 0, 0)';
      case 'right': return 'translate3d(-30px, 0, 0)';
      case 'scale': return 'scale(0.95)';
      default: return 'translate3d(0, 30px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
