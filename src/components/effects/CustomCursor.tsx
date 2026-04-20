import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateCursor = () => {
      const target = document.elementFromPoint(position.x, position.y);
      if (target) {
        const computedStyle = window.getComputedStyle(target);
        setIsPointer(
          computedStyle.cursor === 'pointer' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null
        );
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className={`w-3 h-3 rounded-full bg-primary transition-all duration-200 ${isPointer ? 'scale-150' : ''}`} />
      </div>

      {/* Cursor glow ring */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className={`w-10 h-10 rounded-full border-2 border-primary/30 transition-all duration-200 ${isPointer ? 'scale-125 border-primary/50' : ''}`} />
      </div>

      {/* Trailing glow */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-500 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <div className="w-20 h-20 rounded-full bg-primary/20 blur-xl" />
      </div>

      <style>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
