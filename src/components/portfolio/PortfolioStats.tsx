import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Globe, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    gradient: 'from-primary to-primary/70',
  },
  {
    icon: Users,
    value: 80,
    suffix: '+',
    label: 'Happy Clients',
    gradient: 'from-primary/90 to-primary/60',
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Industries Served',
    gradient: 'from-primary/80 to-primary/50',
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Awards Won',
    gradient: 'from-primary/85 to-primary/55',
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: 'Success Rate',
    gradient: 'from-primary/95 to-primary/65',
  },
];

const PortfolioStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((stat) => Math.floor(stat.value * easeOut)));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(stats.map((stat) => stat.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="relative section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center p-6 rounded-2xl glass-card-hover ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold mb-1">
                {counts[index]}{stat.suffix}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;
