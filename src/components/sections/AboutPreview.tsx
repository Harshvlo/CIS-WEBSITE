import { useEffect, useRef, useState } from 'react';
import { Eye, Target, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import GradientMesh from '@/components/effects/GradientMesh';

// Import images
import visionImage from '@/assets/about/vision-image.jpg';
import missionImage from '@/assets/about/mission-image.jpg';
import ambitionImage from '@/assets/about/ambition-image.jpg';

interface VisionCard {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  image: string;
}

const visionCards: VisionCard[] = [
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the global leader in innovative technology solutions, transforming how businesses operate and succeed.',
    gradient: 'from-blue-500 to-cyan-500',
    image: visionImage,
  },
  {
    icon: Target,
    title: 'Mission',
    description: 'Empower organizations with cutting-edge AI, cloud, and software solutions that drive growth and efficiency.',
    gradient: 'from-cyan-500 to-purple-500',
    image: missionImage,
  },
  {
    icon: Rocket,
    title: 'Ambition',
    description: 'Leading the industry in technological innovation while maintaining excellence in every project we deliver.',
    gradient: 'from-purple-500 to-pink-500',
    image: ambitionImage,
  },
];

const AboutPreview = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="relative section-container">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm font-medium text-primary">Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Vision, Mission, <span className="gradient-text">Ambition</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Driven by innovation, guided by excellence, and committed to transforming businesses worldwide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {visionCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative glass-card-hover rounded-3xl overflow-hidden hover-3d ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent`} />
                
                {/* Icon Overlay */}
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center shadow-lg`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4 text-center">
                <h3 className="text-2xl font-display font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <Link to="/about">
            <Button size="lg" variant="outline" className="group px-8 h-14">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
