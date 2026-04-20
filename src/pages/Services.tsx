import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Brain, Cloud, BarChart3, Shield, Code, Wifi, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

import PageTransition from '@/components/effects/PageTransition';
import AuroraBackground from '@/components/effects/AuroraBackground';

// Import service posters
import aiPoster from '@/assets/posters/ai-ml-poster.jpg';
import cloudPoster from '@/assets/posters/cloud-poster.jpg';
import dataPoster from '@/assets/posters/data-analytics-poster.jpg';
import securityPoster from '@/assets/posters/cybersecurity-poster.jpg';
import softwarePoster from '@/assets/posters/software-dev-poster.jpg';
import iotPoster from '@/assets/posters/iot-poster.jpg';
import stepsToOutcome from '@/assets/services/steps-to-outcome.png';
import processImage from '@/assets/process-image.jpg';
import processPoster from '@/assets/posters/process-steps-poster.jpg';
import techStackPoster from '@/assets/services/tech-stack-professional.jpg';
import guaranteePoster from '@/assets/services/guarantee-poster.jpg';
import servicesHeroPoster from '@/assets/services/services-hero-tech.jpg';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  glowColor: string;
  poster: string;
  features: string[];
  technologies: string[];
}

const services: Service[] = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. Our AI solutions help businesses make smarter decisions.',
    icon: Brain,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'group-hover:shadow-blue-500/30',
    poster: aiPoster,
    features: ['Custom AI Models', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems'],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    description: 'Build scalable, secure, and reliable cloud solutions that grow with your business. We help you migrate, optimize, and manage your cloud infrastructure.',
    icon: Cloud,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-teal-500',
    glowColor: 'group-hover:shadow-cyan-500/30',
    poster: cloudPoster,
    features: ['Cloud Migration', 'Infrastructure as Code', 'Containerization', 'Serverless Architecture', 'DevOps Automation'],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization. Make data-driven decisions that propel your business forward.',
    icon: BarChart3,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    glowColor: 'group-hover:shadow-purple-500/30',
    poster: dataPoster,
    features: ['Business Intelligence', 'Real-time Dashboards', 'ETL Pipelines', 'Data Warehousing', 'Advanced Reporting'],
    technologies: ['Tableau', 'Power BI', 'Snowflake', 'Apache Spark'],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with enterprise-grade security solutions and monitoring. Stay ahead of threats with our comprehensive security services.',
    icon: Shield,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-indigo-500',
    glowColor: 'group-hover:shadow-blue-500/30',
    poster: securityPoster,
    features: ['Security Audits', 'Penetration Testing', 'Zero Trust Architecture', 'Compliance Management', '24/7 Monitoring'],
    technologies: ['SIEM', 'SOC', 'IAM', 'Encryption'],
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies and best practices. From web apps to enterprise systems, we build software that works.',
    icon: Code,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-emerald-500',
    glowColor: 'group-hover:shadow-cyan-500/30',
    poster: softwarePoster,
    features: ['Custom Web Applications', 'Mobile App Development', 'API Development', 'Legacy Modernization', 'SaaS Products'],
    technologies: ['React', 'Node.js', 'Python', 'Go'],
  },
  {
    id: 'iot',
    title: 'IoT Integration',
    description: 'Connect devices and systems with intelligent IoT solutions for smart operations. Enable real-time monitoring and automation across your infrastructure.',
    icon: Wifi,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-cyan-500',
    glowColor: 'group-hover:shadow-purple-500/30',
    poster: iotPoster,
    features: ['Smart Sensors', 'Edge Computing', 'Industrial IoT', 'Asset Tracking', 'Predictive Maintenance'],
    technologies: ['MQTT', 'LoRaWAN', 'Edge AI', 'Azure IoT'],
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      
      <PageTransition>
        <main className="min-h-screen bg-background">
          <Navbar />
      {/* Hero Section - Enhanced with Aurora Background */}
      <section ref={heroRef} className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden min-h-[60vh] sm:min-h-[70vh] flex items-center">
        {/* Aurora Background Effect */}
        <AuroraBackground />
        
        {/* Background Poster */}
        <div className="absolute inset-0">
          <img 
            src={servicesHeroPoster} 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        </div>

        <div className="relative section-container text-center">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Expertise</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 px-2">
              Comprehensive <span className="gradient-text">Tech Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              From AI and cloud to security and IoT, we deliver end-to-end technology solutions that transform businesses.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-8 sm:mt-12 mb-10 sm:mb-16">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '99%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={stat.label} className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Poster Grid */}
          <div className={`max-w-6xl mx-auto mt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { poster: aiPoster, icon: Brain, title: 'AI & ML', color: 'from-blue-500 to-cyan-500', id: 'ai' },
                { poster: cloudPoster, icon: Cloud, title: 'Cloud', color: 'from-cyan-500 to-teal-500', id: 'cloud' },
                { poster: dataPoster, icon: BarChart3, title: 'Analytics', color: 'from-purple-500 to-pink-500', id: 'analytics' },
                { poster: securityPoster, icon: Shield, title: 'Security', color: 'from-blue-500 to-indigo-500', id: 'security' },
                { poster: softwarePoster, icon: Code, title: 'Software', color: 'from-cyan-500 to-emerald-500', id: 'software' },
                { poster: iotPoster, icon: Wifi, title: 'IoT', color: 'from-purple-500 to-cyan-500', id: 'iot' },
              ].map((item, idx) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Poster Image */}
                  <img 
                    src={item.poster} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                    {/* Gradient Overlay - Light Theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent opacity-80" />
                  
                  {/* Animated Border on Hover */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-300`} />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-3 shadow-lg transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300`}>
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-foreground font-bold text-sm md:text-lg text-center group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Arrow - Shows on Hover */}
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - with Steps Image */}
      <section className="section-padding bg-gradient-to-b from-background to-card/30">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                  <span className="text-sm font-medium text-primary">Our Approach</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Step-by-Step <span className="gradient-text">Journey to Success</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We follow a structured approach that guides you from initial consultation to successful outcome delivery.
                </p>

                {/* Process Steps */}
                <div className="space-y-5">
                  {[
                    { step: '01', title: 'Discovery & Analysis', desc: 'Understanding your business needs and challenges' },
                    { step: '02', title: 'Strategy & Planning', desc: 'Crafting a tailored technology roadmap' },
                    { step: '03', title: 'Development', desc: 'Building solutions with agile methodology' },
                    { step: '04', title: 'Outcome & Growth', desc: 'Delivering results that drive business growth' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Steps Image */}
              <div className="relative lg:order-2">
                {/* Gradient overlay to blend with background */}
                <div className="relative">
                  <img 
                    src={stepsToOutcome} 
                    alt="Steps to Outcome" 
                    className="w-full h-auto object-contain"
                    style={{ 
                      maskImage: 'radial-gradient(ellipse 90% 90% at center, black 60%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at center, black 60%, transparent 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introducing Codentrixx Services Section */}
      <section className="section-padding bg-gradient-to-b from-card/30 to-background">
        <div className="section-container">
          <ScrollReveal direction="up">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
                <span className="text-muted-foreground text-sm uppercase tracking-wider">Introducing</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                <span className="gradient-text">Codentrixx</span> for Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                Drive business outcomes using industry-first pay-as-you-go fixed-price shared services. 
                Reimagining traditional outsourcing for the digital era with clearly defined deliverables.
              </p>
            </div>

            {/* Cards Grid - Enhanced Interactive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left 2 Columns - Service Cards */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Objective Card */}
                <div className="group relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-1 cursor-default overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-primary/60 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors">01</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Objective</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">Every service we deliver starts with a clearly defined objective aligned to your business goals.</p>
                    <div className="w-full h-1 bg-muted/50 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                    </div>
                    <ul className="text-muted-foreground text-sm space-y-2.5">
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-100"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Business-aligned goal setting & KPI mapping</li>
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-200"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Problem-to-solution gap analysis</li>
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-300"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Measurable success criteria definition</li>
                    </ul>
                  </div>
                </div>

                {/* Scope Card */}
                <div className="group relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-1 cursor-default overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-primary/60 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors">02</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Scope</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">Flexible service configurations tailored to your exact requirements — no one-size-fits-all approach.</p>
                    <div className="w-full h-1 bg-muted/50 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out delay-100" />
                    </div>
                    <ul className="text-muted-foreground text-sm space-y-2.5">
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-100"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Customizable service tiers (Basic, Standard, Premium)</li>
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-200"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Scalable resource allocation on demand</li>
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-300"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Cross-functional team support & integration</li>
                    </ul>
                  </div>
                </div>

                {/* Deliverables Card */}
                <div className="group relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-1 cursor-default overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-primary/60 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors">03</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Deliverables</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">Tangible, measurable outputs guaranteed with every engagement — you pay only for results.</p>
                    <div className="w-full h-1 bg-muted/50 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out delay-200" />
                    </div>
                    <ul className="text-muted-foreground text-sm space-y-2.5">
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-100"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Production-ready code, reports & documentation</li>
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-200"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Deployed solutions with quality assurance sign-off</li>
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-300"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Knowledge transfer & post-delivery support</li>
                    </ul>
                  </div>
                </div>

                {/* Timelines Card */}
                <div className="group relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-1 cursor-default overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-primary/60 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors">04</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Timelines</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">Strict SLA-driven timelines ensuring transparency, accountability and on-time delivery.</p>
                    <div className="w-full h-1 bg-muted/50 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out delay-300" />
                    </div>
                    <ul className="text-muted-foreground text-sm space-y-2.5">
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-100"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Response within 2–4 hours for critical requests</li>
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-200"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Weekly progress reports & milestone tracking</li>
                      <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-300 delay-300"><div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>Guaranteed resolution within agreed SLA windows</li>
                    </ul>
                  </div>
                </div>

                {/* Price Card */}
                <div className="group relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-primary/5 via-card to-primary/10 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 cursor-default overflow-hidden md:col-span-2">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700 delay-100" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Price</h3>
                          <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">Best Value</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-primary/60 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors">05</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">Transparent, fixed-price model — no hidden costs, no surprises. Pay only when the service is successfully delivered.</p>
                    <div className="w-full h-1.5 bg-muted/50 rounded-full mb-4 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 delay-100 group-hover:translate-y-[-2px]">
                        <div className="w-5 h-5 rounded-md bg-primary/20 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                        <span className="text-sm text-muted-foreground">Pay-as-you-go with no upfront commitment</span>
                      </div>
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 delay-200 group-hover:translate-y-[-2px]">
                        <div className="w-5 h-5 rounded-md bg-primary/20 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                        <span className="text-sm text-muted-foreground">Up to 40% cost savings vs traditional outsourcing</span>
                      </div>
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 delay-300 group-hover:translate-y-[-2px]">
                        <div className="w-5 h-5 rounded-md bg-primary/20 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                        <span className="text-sm text-muted-foreground">Volume-based discounts for long-term engagements</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Featured Card with Codentrixx Services Box */}
              <div className="lg:row-span-1 group relative rounded-2xl p-6 bg-gradient-to-br from-card via-card/80 to-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col min-h-[400px] lg:min-h-full overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-center">Technology <span className="gradient-text">Reimagined</span></h3>
                </div>
                
                {/* Codentrixx Services Animated Box */}
                <div className="relative flex items-center justify-center flex-1 z-10 py-6">
                  <div className="relative w-[280px] h-[320px] group/box perspective-[800px]">
                    {/* Floating cards */}
                    <div className="absolute -top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 animate-[float_3s_ease-in-out_infinite] z-20">
                      <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Technology</span>
                    </div>
                    <div className="absolute -top-2 right-2 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 animate-[float_3s_ease-in-out_infinite_0.5s] z-20">
                      <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">People</span>
                    </div>
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 animate-[float_3s_ease-in-out_infinite_1s] z-20">
                      <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Process</span>
                    </div>

                    {/* 3D Box */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[200px] group-hover/box:translate-y-[-8px] transition-transform duration-700">
                      {/* Box front face */}
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-lg rounded-b-sm shadow-2xl overflow-hidden">
                        {/* Box flaps */}
                        <div className="absolute top-0 left-0 w-1/2 h-6 bg-gray-700 origin-bottom -skew-x-6 rounded-tl-lg" />
                        <div className="absolute top-0 right-0 w-1/2 h-6 bg-gray-750 origin-bottom skew-x-6 rounded-tr-lg" style={{ backgroundColor: '#3a3a3a' }} />
                        
                        {/* Brand content */}
                        <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                          <h4 className="text-amber-400 font-extrabold text-2xl tracking-wide leading-tight">
                            Codentrixx
                          </h4>
                          <p className="text-amber-500 text-xs font-semibold mt-1 tracking-widest">for Services</p>
                        </div>

                        {/* Logo hexagon */}
                        <div className="absolute bottom-4 right-4 w-12 h-12">
                          <div className="w-full h-full rounded-lg border-2 border-amber-500 flex items-center justify-center rotate-45">
                            <span className="text-amber-400 font-black text-lg -rotate-45">C</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Services Grid - Enhanced */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <div
                  id={service.id}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover-lift ${service.glowColor} hover:shadow-2xl`}
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative glass-card rounded-3xl overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Image Side - Full Poster Display */}
                      <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <img 
                          src={service.poster} 
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Subtle Gradient Overlay - Less opacity to show more image */}
                        <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-card/40 via-transparent to-transparent`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                        
                        {/* Floating Icon Badge */}
                        <div className="absolute top-6 left-6">
                          <div className="relative">
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} blur-xl opacity-60 group-hover:opacity-100 transition-opacity`} />
                            <div className="relative w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                              <service.icon className={`w-8 h-8 ${service.color}`} />
                            </div>
                          </div>
                        </div>

                        {/* Service Title Overlay on Image */}
                        <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                          <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">{service.title}</h3>
                        </div>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content Side - Enhanced */}
                      <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 w-fit mb-4`}>
                          <span className={`text-xs font-semibold ${service.color}`}>Featured Service</span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features - Enhanced */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3 group/item">
                              <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm group-hover/item:text-primary transition-colors">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies - Enhanced */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary/80 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA - Enhanced */}
                        <Link to="/contact" className="inline-block w-fit">
                          <Button className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold group/btn px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                            Get Started
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="section-container relative">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <span className="text-sm font-medium text-primary">Our Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                How It <span className="gradient-text">Works</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A simple, transparent process to bring your vision to life
              </p>
            </div>
          </ScrollReveal>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and challenges through in-depth consultation', icon: '🎯' },
              { step: '02', title: 'Strategy', desc: 'Our experts design a tailored solution roadmap with clear milestones', icon: '📋' },
              { step: '03', title: 'Execution', desc: 'Agile development with regular updates and transparent communication', icon: '⚡' },
              { step: '04', title: 'Delivery', desc: 'Launch, training, and ongoing support to ensure your success', icon: '🚀' },
            ].map((item, idx) => (
              <ScrollReveal key={item.step} direction="up" delay={idx * 0.1}>
                <div className="group relative">
                  {/* Connector Line */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  
                  <div className="glass-card rounded-2xl p-8 hover-lift transition-all duration-300 hover:border-primary/30 text-center h-full">
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Technology Stack Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        
        <div className="section-container relative">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <span className="text-sm font-medium text-primary">Our Stack</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Technology <span className="gradient-text">Stack</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We use industry-leading technologies to build world-class solutions
              </p>
            </div>
          </ScrollReveal>

          {/* Single Poster Image */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative group max-w-5xl mx-auto">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Poster Container */}
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                <img 
                  src={techStackPoster} 
                  alt="Technology Stack - React, Python, AWS, Docker, Kubernetes, MongoDB" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Guarantee Section */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="relative rounded-3xl overflow-hidden glass-card p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              
              <div className="relative">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Our Guarantee</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                    Service <span className="gradient-text">Guarantee</span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    We stand behind our work with industry-leading guarantees
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: '✓', title: '99.9% Uptime', desc: 'Guaranteed availability for all hosted solutions with SLA backing' },
                    { icon: '💰', title: 'Money-Back', desc: '30-day money-back guarantee if you are not satisfied with our work' },
                    { icon: '🔒', title: 'Secure & Compliant', desc: 'Enterprise-grade security with GDPR, SOC2, and ISO compliance' },
                  ].map((item) => (
                    <div key={item.title} className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-90" />
              <div className="absolute inset-0 grid-pattern opacity-20" />
              
              <div className="relative text-center py-16 px-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                  Let's discuss how our technology solutions can help you achieve your goals.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg">
                    Start a Conversation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
        </main>
      </PageTransition>
    </>
  );
};

export default Services;
