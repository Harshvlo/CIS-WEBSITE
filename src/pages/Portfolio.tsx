import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import FeaturedCaseStudy from '@/components/portfolio/FeaturedCaseStudy';
import PortfolioStats from '@/components/portfolio/PortfolioStats';
import ClientTestimonials from '@/components/portfolio/ClientTestimonials';
import VideoCaseStudies from '@/components/portfolio/VideoCaseStudies';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, ArrowUpRight, TrendingUp, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

import PageTransition from '@/components/effects/PageTransition';

// Import project images
import aiAnalyticsImg from '@/assets/projects/ai-analytics-project.jpg';
import cloudMigrationImg from '@/assets/projects/cloud-migration-project.jpg';
import cybersecurityImg from '@/assets/projects/cybersecurity-project.jpg';
import iotFactoryImg from '@/assets/projects/iot-factory-project.jpg';
import dataDashboardImg from '@/assets/projects/data-dashboard-project.jpg';
import ecommerceImg from '@/assets/projects/ecommerce-project.jpg';
import fraudDetectionImg from '@/assets/projects/fraud-detection-project.jpg';
import multicloudImg from '@/assets/projects/multicloud-project.jpg';
import portfolioHeroPoster from '@/assets/portfolio/portfolio-hero-poster.jpg';
interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  results: string[];
  gradient: string;
  technologies: string[];
}

const categories = ['All', 'AI & ML', 'Cloud', 'Security', 'Data', 'IoT', 'Software'];

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Platform',
    client: 'TechCorp Global',
    category: 'AI & ML',
    description: 'Built a comprehensive AI analytics platform that processes millions of data points daily.',
    image: aiAnalyticsImg,
    results: ['50% faster insights', '99.9% uptime', '3x data processing'],
    gradient: 'from-primary to-primary/70',
    technologies: ['Python', 'TensorFlow', 'AWS'],
  },
  {
    id: '2',
    title: 'Cloud Migration Solution',
    client: 'Enterprise Solutions',
    category: 'Cloud',
    description: 'Seamlessly migrated legacy infrastructure to a modern cloud architecture.',
    image: cloudMigrationImg,
    results: ['40% cost reduction', '3x faster deployment', 'Zero downtime'],
    gradient: 'from-primary/90 to-primary/60',
    technologies: ['AWS', 'Kubernetes', 'Terraform'],
  },
  {
    id: '3',
    title: 'Cybersecurity Framework',
    client: 'FinanceFirst Bank',
    category: 'Security',
    description: 'Implemented enterprise-grade security framework with 24/7 monitoring.',
    image: cybersecurityImg,
    results: ['Zero breaches', '100% compliance', '24/7 protection'],
    gradient: 'from-primary/85 to-primary/55',
    technologies: ['SIEM', 'SOC', 'Zero Trust'],
  },
  {
    id: '4',
    title: 'Real-time Data Dashboard',
    client: 'RetailMax Corp',
    category: 'Data',
    description: 'Created interactive dashboards for real-time business intelligence.',
    image: dataDashboardImg,
    results: ['Real-time insights', '200+ KPIs', 'Mobile ready'],
    gradient: 'from-primary/80 to-primary/50',
    technologies: ['Power BI', 'Snowflake', 'React'],
  },
  {
    id: '5',
    title: 'IoT Smart Factory',
    client: 'Manufacturing Inc',
    category: 'IoT',
    description: 'Connected factory floor with IoT sensors for predictive maintenance.',
    image: iotFactoryImg,
    results: ['30% efficiency gain', 'Predictive alerts', 'Real-time monitoring'],
    gradient: 'from-primary/75 to-primary/45',
    technologies: ['Azure IoT', 'MQTT', 'Edge AI'],
  },
  {
    id: '6',
    title: 'E-commerce Platform',
    client: 'ShopNow Inc',
    category: 'Software',
    description: 'Built a scalable e-commerce platform handling millions of transactions.',
    image: ecommerceImg,
    results: ['2M+ users', '99.99% uptime', '50ms response'],
    gradient: 'from-primary/95 to-primary/65',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: '7',
    title: 'Fraud Detection System',
    client: 'PaySecure Ltd',
    category: 'AI & ML',
    description: 'Machine learning system detecting fraudulent transactions in real-time.',
    image: fraudDetectionImg,
    results: ['99.8% accuracy', 'Real-time detection', '$10M saved'],
    gradient: 'from-primary/88 to-primary/58',
    technologies: ['PyTorch', 'Apache Kafka', 'Redis'],
  },
  {
    id: '8',
    title: 'Multi-Cloud Strategy',
    client: 'GlobalTech Corp',
    category: 'Cloud',
    description: 'Designed and implemented a multi-cloud strategy for global operations.',
    image: multicloudImg,
    results: ['99.999% availability', 'Global reach', '35% cost savings'],
    gradient: 'from-primary/92 to-primary/62',
    technologies: ['AWS', 'GCP', 'Azure'],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center">
        {/* Background - Hero Poster for Light Theme */}
        <div className="absolute inset-0">
          <img 
            src={portfolioHeroPoster} 
            alt="Portfolio Background" 
            className="w-full h-full object-cover"
          />
          {/* Very subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
        </div>
        
        {/* Decorative blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

        <div className="relative section-container text-center">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Work</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6">
              Real Projects, <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-1 sm:px-0">
              Explore our portfolio of successful projects that have transformed businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sm:py-8 border-b border-border">
        <div className="section-container">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap ${
                  selectedCategory === category 
                    ? 'bg-gradient-primary text-background' 
                    : ''
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 xl:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group glass-card-hover rounded-3xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden min-h-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6">
                    <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.category}
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Shimmer */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <PortfolioStats />

      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Video Case Studies */}
      <VideoCaseStudies />

      <CTASection />
      <Footer />
        </main>
      </PageTransition>
    </>
  );
};

export default Portfolio;
