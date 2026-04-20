import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Brain, Cloud, BarChart3, Shield, Code, Wifi } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Starfield from '@/components/effects/Starfield';

// Import service posters
import aiPoster from '@/assets/posters/ai-ml-poster.jpg';
import cloudPoster from '@/assets/posters/cloud-poster.jpg';
import dataPoster from '@/assets/posters/data-analytics-poster.jpg';
import securityPoster from '@/assets/posters/cybersecurity-poster.jpg';
import softwarePoster from '@/assets/posters/software-dev-poster.jpg';
import iotPoster from '@/assets/posters/iot-poster.jpg';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  poster: string;
  size: 'large' | 'medium';
  features: string[];
}

const services: Service[] = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
    icon: Brain,
    color: 'text-primary',
    poster: aiPoster,
    size: 'large',
    features: ['Neural Networks', 'Deep Learning', 'NLP Solutions'],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    icon: BarChart3,
    color: 'text-primary/80',
    poster: dataPoster,
    size: 'medium',
    features: ['Big Data', 'BI Dashboards', 'Predictive Analytics'],
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    description: 'Build scalable, secure, and reliable cloud solutions that grow with your business.',
    icon: Cloud,
    color: 'text-primary/90',
    poster: cloudPoster,
    size: 'large',
    features: ['AWS/Azure/GCP', 'Kubernetes', 'Serverless'],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with enterprise-grade security solutions and monitoring.',
    icon: Shield,
    color: 'text-primary',
    poster: securityPoster,
    size: 'medium',
    features: ['Threat Detection', 'Compliance', 'Zero Trust'],
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies and best practices.',
    icon: Code,
    color: 'text-primary/90',
    poster: softwarePoster,
    size: 'large',
    features: ['Web Apps', 'Mobile Apps', 'APIs'],
  },
  {
    id: 'iot',
    title: 'IoT Integration',
    description: 'Connect devices and systems with intelligent IoT solutions for smart operations.',
    icon: Wifi,
    color: 'text-primary/80',
    poster: iotPoster,
    size: 'medium',
    features: ['Smart Sensors', 'Edge Computing', 'Real-time Data'],
  },
];

const ServicesSection = () => {
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
      {/* Background - Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Starfield Effect */}
      <Starfield starCount={80} connectDistance={100} />

      <div className="relative section-container">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Comprehensive <span className="gradient-text">Tech Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From AI and cloud to security and IoT, we deliver end-to-end technology solutions that transform businesses.
          </p>
        </div>

        {/* Bento Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`
                group relative rounded-3xl overflow-hidden cursor-pointer hover-3d
                ${service.size === 'large' ? 'md:col-span-1 lg:row-span-1' : ''}
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card with Gradient Border */}
              <div className="relative h-full bg-card rounded-3xl p-[1px] overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Inner Card */}
                <div className="relative h-full bg-card rounded-3xl overflow-hidden">
                  {/* Poster Area */}
                  <div className="relative overflow-hidden rounded-2xl m-3" style={{ aspectRatio: '16/10' }}>
                    <img 
                      src={service.poster} 
                      alt={service.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Light Mode Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-60" />
                    
                    {/* Icon Badge - Enhanced */}
                    <div className="absolute top-4 left-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-primary/60 blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                        <div className="relative w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg group-hover:border-primary/50 transition-colors">
                          <service.icon className={`w-7 h-7 ${service.color}`} />
                        </div>
                      </div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 line-clamp-2 text-sm">
                      {service.description}
                    </p>

                    {/* Features - Enhanced Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary/80 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Learn More - Enhanced */}
                    <Link to="/services" className="flex items-center gap-2 text-primary font-semibold group/link cursor-pointer">
                      <span className="relative">
                        Learn More
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
