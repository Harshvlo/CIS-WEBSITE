import { useEffect, useRef, useState } from 'react';
import { Award, Trophy, Shield, Star, Medal, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import awardsImage from '@/assets/awards-image.jpg';

interface AwardItem {
  icon: LucideIcon;
  title: string;
  organization: string;
  year: string;
  gradient: string;
  iconBg: string;
}

const awards: AwardItem[] = [
  {
    icon: Trophy,
    title: 'Best AI Innovation',
    organization: 'Tech Excellence Awards',
    year: '2025',
    gradient: 'from-primary to-primary/70',
    iconBg: 'bg-gradient-to-br from-primary to-primary/70',
  },
  {
    icon: Award,
    title: 'Top Cloud Provider',
    organization: 'Cloud Computing Magazine',
    year: '2025',
    gradient: 'from-primary/90 to-primary/60',
    iconBg: 'bg-gradient-to-br from-primary/90 to-primary/60',
  },
  {
    icon: Shield,
    title: 'ISO 27001 Certified',
    organization: 'International Standards',
    year: '2025',
    gradient: 'from-primary/80 to-primary/50',
    iconBg: 'bg-gradient-to-br from-primary/80 to-primary/50',
  },
  {
    icon: Star,
    title: 'Customer Choice Award',
    organization: 'Software Reviews',
    year: '2025',
    gradient: 'from-primary/85 to-primary/55',
    iconBg: 'bg-gradient-to-br from-primary/85 to-primary/55',
  },
  {
    icon: Medal,
    title: 'Fastest Growing Tech',
    organization: 'Business Insider',
    year: '2025',
    gradient: 'from-primary/75 to-primary/45',
    iconBg: 'bg-gradient-to-br from-primary/75 to-primary/45',
  },
  {
    icon: Zap,
    title: 'Innovation Leader',
    organization: 'Forbes Technology',
    year: '2025',
    gradient: 'from-primary/95 to-primary/65',
    iconBg: 'bg-gradient-to-br from-primary/95 to-primary/65',
  },
];

const AwardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="relative section-container">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className={`order-2 lg:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative glass-card rounded-3xl p-3 overflow-hidden">
              <img 
                src={awardsImage} 
                alt="Awards and Recognition" 
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent rounded-2xl" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-xl flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">50+ Awards</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Recognition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Awards & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognized globally for our excellence in technology innovation and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className={`group glass-card-hover rounded-3xl p-8 text-center hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Icon Container - Professional Style */}
              <div className="relative mx-auto mb-6 w-20 h-20">
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl ${award.iconBg} blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                
                {/* Icon Box */}
                <div className={`relative w-full h-full rounded-2xl ${award.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-white/10" />
                  <award.icon className="relative w-10 h-10 text-white drop-shadow-md" strokeWidth={1.5} />
                </div>
              </div>

              {/* Year Badge - Enhanced */}
              <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border/50 bg-muted/30 mb-4`}>
                <span className="text-sm font-semibold text-foreground">{award.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{award.title}</h3>

              {/* Organization */}
              <p className="text-muted-foreground text-sm">{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
