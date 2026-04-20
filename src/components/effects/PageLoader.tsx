import { useEffect, useState } from 'react';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Minimum display time for loader
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Loader content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated circles */}
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          
          {/* Spinning ring */}
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"
            style={{ animationDuration: '1s' }}
          />
          
          {/* Inner ring */}
          <div 
            className="absolute inset-3 rounded-full border-4 border-transparent border-b-primary/60 animate-spin"
            style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
          />
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse" />
          </div>
        </div>

        {/* Logo text */}
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold gradient-text mb-2">
            Codentrixx
          </h1>
          <div className="flex items-center gap-1 justify-center">
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }} />
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.1s' }} />
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
