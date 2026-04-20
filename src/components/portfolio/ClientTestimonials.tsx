import { Quote, Star } from 'lucide-react';

// Import testimonial images
import sarahImg from '@/assets/testimonials/sarah.jpg';
import michaelImg from '@/assets/testimonials/michael.jpg';
import emilyImg from '@/assets/testimonials/emily.jpg';
import davidImg from '@/assets/testimonials/david.jpg';

const testimonials = [
  {
    quote: "The AI analytics platform they built transformed our decision-making process. We now have real-time insights that were impossible before.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp Global",
    project: "AI-Powered Analytics",
    image: sarahImg,
    rating: 5,
  },
  {
    quote: "Their cloud migration was flawless. Zero downtime, 40% cost reduction, and our team was fully trained within weeks.",
    author: "Michael Chen",
    role: "VP Engineering, Enterprise Solutions",
    project: "Cloud Migration",
    image: michaelImg,
    rating: 5,
  },
  {
    quote: "The cybersecurity framework they implemented has protected us from multiple attack attempts. Best investment we've made.",
    author: "Emily Rodriguez",
    role: "CISO, FinanceFirst Bank",
    project: "Security Framework",
    image: emilyImg,
    rating: 5,
  },
  {
    quote: "Our IoT factory implementation exceeded all expectations. 30% efficiency gain in the first quarter alone.",
    author: "David Park",
    role: "COO, Manufacturing Inc",
    project: "IoT Smart Factory",
    image: davidImg,
    rating: 5,
  },
];

const ClientTestimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from clients who have experienced the impact of our work firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="glass-card-hover p-8 rounded-3xl relative overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Project Badge */}
              <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {testimonial.project}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
