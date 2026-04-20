import { ArrowRight, Calendar, CheckCircle, Target, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import featuredPoster from '@/assets/portfolio/featured-case-study-poster.jpg';
import resultsPoster from '@/assets/portfolio/project-results-poster.jpg';

const timeline = [
  { phase: 'Discovery', duration: '2 Weeks', description: 'Requirements gathering & analysis' },
  { phase: 'Design', duration: '4 Weeks', description: 'UI/UX design & prototyping' },
  { phase: 'Development', duration: '12 Weeks', description: 'Agile sprints & iterations' },
  { phase: 'Launch', duration: '2 Weeks', description: 'Testing, deployment & go-live' },
];

const challenges = [
  'Legacy system migration with zero downtime',
  'Real-time processing of 10M+ daily transactions',
  'Multi-region compliance requirements',
  'Integration with 50+ third-party APIs',
];

const solutions = [
  'Microservices architecture with Kubernetes',
  'Event-driven design with Apache Kafka',
  'Multi-cloud deployment strategy',
  'Automated CI/CD pipelines',
];

const FeaturedCaseStudy = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background - Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      
      <div className="relative section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Enterprise Digital <span className="gradient-text">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How we helped GlobalTech Corp modernize their entire infrastructure and achieve 10x performance improvement.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden mb-16 group">
          <img 
            src={featuredPoster} 
            alt="Featured Case Study"
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium">GlobalTech Corp</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Enterprise • Cloud • AI</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium">20 Weeks Duration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-primary" />
            Project Timeline
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((item, index) => (
              <div 
                key={item.phase}
                className="glass-card-hover p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-display font-bold text-primary/20 mb-2">
                  0{index + 1}
                </div>
                <h4 className="text-lg font-bold mb-1">{item.phase}</h4>
                <p className="text-sm text-muted-foreground mb-2">{item.duration}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Challenges */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-orange-500" />
              Challenges Faced
            </h3>
            <ul className="space-y-4">
              {challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                  </div>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              Our Solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Poster */}
          <img 
            src={resultsPoster} 
            alt="Project Results Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8">Project Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">10x</div>
                <p className="text-sm text-muted-foreground">Performance Boost</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">99.99%</div>
                <p className="text-sm text-muted-foreground">Uptime Achieved</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">50%</div>
                <p className="text-sm text-muted-foreground">Cost Reduction</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">$5M+</div>
                <p className="text-sm text-muted-foreground">Revenue Impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
