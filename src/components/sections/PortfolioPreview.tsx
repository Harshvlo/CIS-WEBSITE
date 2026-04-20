import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import project images
import aiAnalyticsImg from '@/assets/projects/ai-analytics-project.jpg';
import cloudMigrationImg from '@/assets/projects/cloud-migration-project.jpg';
import cybersecurityImg from '@/assets/projects/cybersecurity-project.jpg';
import iotFactoryImg from '@/assets/projects/iot-factory-project.jpg';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  results: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Platform',
    client: 'TechCorp Global',
    category: 'AI & Analytics',
    image: aiAnalyticsImg,
    results: ['50% faster insights', '99.9% uptime'],
    gradient: 'from-primary to-primary/70',
  },
  {
    id: '2',
    title: 'Cloud Migration Solution',
    client: 'Enterprise Solutions',
    category: 'Cloud',
    image: cloudMigrationImg,
    results: ['40% cost reduction', '3x faster deployment'],
    gradient: 'from-primary/90 to-primary/60',
  },
  {
    id: '3',
    title: 'Cybersecurity Framework',
    client: 'FinanceFirst Bank',
    category: 'Security',
    image: cybersecurityImg,
    results: ['Zero breaches', '100% compliance'],
    gradient: 'from-primary/80 to-primary/50',
  },
  {
    id: '4',
    title: 'IoT Smart Factory',
    client: 'Manufacturing Inc',
    category: 'IoT',
    image: iotFactoryImg,
    results: ['30% efficiency gain', 'Real-time monitoring'],
    gradient: 'from-primary/85 to-primary/55',
  },
];

const PortfolioPreview = () => {
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
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="text-sm font-medium text-primary">Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <Link to="/portfolio">
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              to="/portfolio"
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer hover-3d block ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card with Shadow */}
              <div className="relative h-full bg-card rounded-3xl overflow-hidden shadow-lg shadow-primary/5 border border-border/50 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:border-primary/20 transition-all duration-500">
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden m-3 rounded-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Light Mode Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                  
                  {/* Category Badge - Enhanced */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                      {project.category}
                    </span>
                  </div>

                  {/* View Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300`}>
                      <ArrowUpRight className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-3">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                  </div>

                  {/* Results - Enhanced */}
                  <div className="flex flex-wrap gap-3">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground/80">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
