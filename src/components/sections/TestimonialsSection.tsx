import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import client photos
import sarahPhoto from '@/assets/testimonials/sarah.jpg';
import michaelPhoto from '@/assets/testimonials/michael.jpg';
import emilyPhoto from '@/assets/testimonials/emily.jpg';
import davidPhoto from '@/assets/testimonials/david.jpg';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Global',
    content: 'Codentrixx transformed our entire infrastructure with their AI solutions. We saw a 50% improvement in efficiency within the first month. Their team is exceptional!',
    rating: 5,
    photo: sarahPhoto,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'VP of Engineering',
    company: 'CloudFirst Inc',
    content: 'The cloud migration was seamless. Codentrixx handled everything professionally and delivered ahead of schedule. Highly recommend their services!',
    rating: 5,
    photo: michaelPhoto,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'CEO',
    company: 'DataDriven Solutions',
    content: 'Outstanding data analytics platform! Codentrixx understood our needs perfectly and built a solution that exceeded our expectations.',
    rating: 5,
    photo: emilyPhoto,
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Director of IT',
    company: 'SecureBank',
    content: 'Their cybersecurity expertise is unmatched. We feel completely secure with the solutions they implemented. Zero breaches since deployment!',
    rating: 5,
    photo: davidPhoto,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="relative section-container">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {/* Main Testimonial Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 hover-glow transition-all duration-500">
            {/* Quote Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-8">
              <Quote className="w-8 h-8 text-background" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            {/* Content */}
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[currentIndex].photo} 
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <div className="font-display font-bold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
