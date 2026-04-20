import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ctaImage from '@/assets/cta-image.jpg';

const CTASection = () => {
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
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="relative section-container">
        <div className={`glass-card rounded-3xl md:rounded-[3rem] p-8 md:p-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Decorative Icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center glow-blue mx-auto lg:mx-0">
                <Sparkles className="w-8 h-8 text-background" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>

              {/* Subtext */}
              <p className="text-lg text-muted-foreground mb-8">
                Let's build something amazing together. Get in touch with our team to discuss your project and explore how we can help you achieve your goals.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 text-background font-semibold px-10 h-14 text-base group w-full sm:w-auto"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-10 h-14 text-base group w-full sm:w-auto"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Side - Decorative Image Card */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="glass-card rounded-3xl p-3 overflow-hidden">
                  <img 
                    src={ctaImage} 
                    alt="Business team working together" 
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent rounded-2xl" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-4 -left-4 glass-card px-5 py-3 rounded-2xl">
                  <div className="text-2xl font-bold gradient-text">98%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
                
                <div className="absolute -top-4 -right-4 glass-card px-5 py-3 rounded-2xl">
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-xs text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
