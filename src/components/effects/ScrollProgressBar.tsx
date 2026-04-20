import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-primary/10">
      <div 
        className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Glow effect */}
      <div 
        className="absolute top-0 h-full bg-gradient-to-r from-primary to-primary/60 blur-sm opacity-50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
