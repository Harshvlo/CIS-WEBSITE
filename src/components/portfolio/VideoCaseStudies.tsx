import { Play, Clock, Eye } from 'lucide-react';
import videoPoster from '@/assets/portfolio/video-case-studies-poster.jpg';

const videoStudies = [
  {
    title: 'AI Analytics Deep Dive',
    duration: '12:45',
    views: '15.2K',
    thumbnail: videoPoster,
    category: 'AI & ML',
  },
  {
    title: 'Cloud Migration Journey',
    duration: '18:30',
    views: '12.8K',
    thumbnail: videoPoster,
    category: 'Cloud',
  },
  {
    title: 'Security Implementation',
    duration: '15:20',
    views: '10.5K',
    thumbnail: videoPoster,
    category: 'Security',
  },
];

const VideoCaseStudies = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background - Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      
      <div className="relative section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Video Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Watch Our <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In-depth video walkthroughs of our most impactful projects and the journey behind them.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videoStudies.map((video, index) => (
            <div 
              key={video.title}
              className="glass-card-hover rounded-3xl overflow-hidden group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                    {video.category}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Video Section */}
        <div className="mt-16 glass-card rounded-3xl overflow-hidden">
          <div className="relative aspect-video group cursor-pointer">
            <img 
              src={videoPoster} 
              alt="Featured Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Complete Project Walkthrough
                </h3>
                <p className="text-white/70">45 minutes • Full case study documentary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCaseStudies;
