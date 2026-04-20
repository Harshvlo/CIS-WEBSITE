import { memo } from 'react';

interface AuroraBackgroundProps {
  className?: string;
}

const AuroraBackground = memo(({ className = '' }: AuroraBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Base gradient - light theme using semantic tokens */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent/20" />
      
      {/* Aurora waves - subtle, performant CSS animations */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(var(--primary) / 0.15), transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(var(--primary) / 0.1), transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 80%, hsl(var(--primary) / 0.08), transparent 50%)
          `,
        }}
      />
      
      {/* Animated floating orbs - GPU accelerated */}
      <div 
        className="absolute w-[40rem] h-[40rem] -top-20 -left-20 rounded-full blur-3xl animate-aurora-float"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08), transparent 70%)',
        }}
      />
      <div 
        className="absolute w-[35rem] h-[35rem] top-1/3 -right-20 rounded-full blur-3xl animate-aurora-float-delayed"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.06), transparent 70%)',
        }}
      />
      <div 
        className="absolute w-[30rem] h-[30rem] -bottom-10 left-1/3 rounded-full blur-3xl animate-aurora-float-slow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.05), transparent 70%)',
        }}
      />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
    </div>
  );
});

AuroraBackground.displayName = 'AuroraBackground';

export default AuroraBackground;
