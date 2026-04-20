import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import processImage from '@/assets/process-team.jpg';

interface Step {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    icon: MessageSquare,
    step: 1,
    title: 'Discovery & Consultation',
    description: 'We start by understanding your business goals, challenges, and requirements through in-depth consultations.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    step: 2,
    title: 'Strategy & Planning',
    description: 'Our experts design a comprehensive solution architecture and project roadmap tailored to your needs.',
    color: 'from-cyan-500 to-purple-500',
  },
  {
    icon: Code,
    step: 3,
    title: 'Development & Testing',
    description: 'We build your solution using agile methodologies with continuous testing and quality assurance.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    step: 4,
    title: 'Deployment & Launch',
    description: 'Seamless deployment with thorough testing, training, and documentation for your team.',
    color: 'from-pink-500 to-orange-500',
  },
  {
    icon: CheckCircle,
    step: 5,
    title: 'Support & Optimization',
    description: 'Ongoing support, monitoring, and continuous optimization to ensure peak performance.',
    color: 'from-orange-500 to-red-500',
  },
];

const ProcessSection = () => {
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
          {/* Text Content */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven 5-step process ensures successful project delivery every time. We combine industry best practices with innovative approaches to deliver exceptional results.
            </p>
          </div>

          {/* Image */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative glass-card rounded-3xl p-3 overflow-hidden">
              <img 
                src={processImage} 
                alt="Team collaboration" 
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="glass-card-hover rounded-3xl p-8">
                    <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-bold text-primary">Step {step.step}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-primary flex-shrink-0 hidden lg:flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-background" />
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
