import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Immediate load for better performance
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <div
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 10px, 0)',
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
