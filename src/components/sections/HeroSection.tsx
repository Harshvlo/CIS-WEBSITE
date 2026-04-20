import { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles, Cloud, BarChart3, Cpu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroPoster from '@/assets/posters/hero-complete-poster.jpg';


const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Success Rate' },
  { value: 50, suffix: 'M+', label: 'Revenue Generated' },
];

const servicePills = [
  { icon: Cpu, label: 'AI & ML', color: 'from-primary to-primary/70' },
  { icon: Cloud, label: 'Cloud', color: 'from-primary/90 to-primary/60' },
  { icon: BarChart3, label: 'Analytics', color: 'from-primary/80 to-primary/50' },
  { icon: Sparkles, label: 'IoT', color: 'from-primary/70 to-primary/40' },
];

const HeroSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let current = 0;
      return setInterval(() => {
        current += stat.value / steps;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timers[index]);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, interval);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroPoster} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay only in dark mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent dark:from-background/90 dark:via-background/70 dark:to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent dark:from-background dark:via-transparent dark:to-background/50" />
        
        {/* Animated decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-aurora-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan/15 rounded-full blur-3xl animate-aurora-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-aurora-float-slow" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto pt-24 pb-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-card animate-fade-in-up mb-6 sm:mb-10 hover:scale-105 transition-transform duration-300 cursor-default border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="text-xs sm:text-base md:text-lg font-semibold text-foreground tracking-wide">CODENTRIXX INNOVATION SOLUTIONS</span>
          </div>

          {/* Headline */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 sm:mb-8">
              Powering Your
              <br />
              <span className="relative inline-block mt-2">
                <span className="gradient-text text-4xl sm:text-6xl md:text-8xl lg:text-9xl">Digital Presence</span>
                <span className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-primary via-cyan to-primary/60 rounded-full" />
                <span className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-primary via-cyan to-primary/60 rounded-full blur-lg opacity-60" />
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-in-up leading-relaxed px-2" style={{ animationDelay: '0.2s' }}>
            Cutting-edge AI, cloud, and software solutions that drive innovation and accelerate your business growth.
          </p>

          {/* Service Pills - Centered */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in-up px-2" style={{ animationDelay: '0.3s' }}>
            {servicePills.map((pill) => (
              <div
                key={pill.label}
                className="group relative flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 pr-4 sm:pr-7 py-2 sm:py-3 rounded-full bg-card/80 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${pill.color} blur-md opacity-40 group-hover:opacity-70 transition-opacity`} />
                  <div className={`relative w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${pill.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <pill.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <span className="text-sm sm:text-base font-semibold text-foreground/90 group-hover:text-primary transition-colors">{pill.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-white font-semibold px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base group shadow-lg shadow-primary/30"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base group border-primary/30 hover:bg-primary/5 text-foreground"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mr-2 group-hover:bg-primary/20 transition-colors">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />
                </div>
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Stats - Centered */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto animate-fade-in-up px-2" style={{ animationDelay: '0.5s' }}>
            {stats.map((stat, index) => (
              <div key={stat.label} className="glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold gradient-text">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
