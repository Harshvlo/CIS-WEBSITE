import { useEffect, useRef, useState } from 'react';
import { Briefcase, CheckCircle2, DollarSign, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import statsBackground from '@/assets/stats-background.jpg';

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Briefcase,
    value: 500,
    suffix: '+',
    label: 'Projects Delivered',
    color: 'from-primary to-primary/70',
  },
  {
    icon: CheckCircle2,
    value: 98,
    suffix: '%',
    label: 'Success Rate',
    color: 'from-primary/90 to-primary/60',
  },
  {
    icon: DollarSign,
    value: 50,
    suffix: 'M+',
    label: 'Revenue Generated',
    color: 'from-primary/80 to-primary/50',
  },
  {
    icon: Clock,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    color: 'from-primary/70 to-primary/40',
  },
];

const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    const timers = stats.map((stat, index) => {
      let current = 0;
      return setInterval(() => {
        current += stat.value / steps;
        if (current >= stat.value) {
          current = stat.value;
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, interval);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="relative section-container">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
            Trusted by <span className="gradient-text">Global Industry Leaders</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative glass-card rounded-3xl p-6 md:p-8 text-center hover-3d hover-glow ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                {counters[index]}{stat.suffix}
              </div>

              {/* Label */}
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>

              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
