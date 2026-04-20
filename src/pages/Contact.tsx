import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import OfficeMapSection from '@/components/contact/OfficeMapSection';
import ContactFAQ from '@/components/contact/ContactFAQ';
import SocialConnect from '@/components/contact/SocialConnect';
import BookMeeting from '@/components/contact/BookMeeting';
import FloatingContactButtons from '@/components/contact/FloatingContactButtons';
import SupportTeam from '@/components/contact/SupportTeam';
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import heroPoster from '@/assets/contact/contact-hero-clean.jpg';

import PageTransition from '@/components/effects/PageTransition';
import AuroraBackground from '@/components/effects/AuroraBackground';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hr@codentrixx.com',
    subtext: 'We reply within 24 hours',
    gradient: 'from-primary to-primary/70',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 6260677238',
    subtext: 'Mon-Fri, 9am-6pm IST',
    gradient: 'from-primary/90 to-primary/60',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'Bhopal & Bangalore, India',
    subtext: 'By appointment only',
    gradient: 'from-primary/80 to-primary/50',
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message sent!',
      description: 'We\'ll get back to you within 24 hours.',
    });
  };

  return (
    <>
      
      <PageTransition>
        <main className="min-h-screen bg-background">
          <Navbar />
      
      {/* Hero Section - Light Theme with Aurora */}
      <section ref={heroRef} className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden min-h-[60vh] sm:min-h-[70vh] flex items-center">
        {/* Aurora Background Effect */}
        <AuroraBackground />
        
        {/* Background Poster */}
        <div className="absolute inset-0">
          <img 
            src={heroPoster} 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        </div>

        <div className="relative section-container text-center">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6">
              Let's Discuss Your <span className="gradient-text">Next Project</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-1 sm:px-0">
              Ready to transform your business? Get in touch with our team and let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="group glass-card-hover rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold mb-2">{info.title}</h3>
                <p className="text-base sm:text-lg font-medium mb-1 break-words">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 sm:py-14 md:py-24 lg:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Form */}
            <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4 sm:mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. We'll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-w-0">
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input
                        required
                        placeholder="John"
                        className="w-full min-w-0 bg-background/50 border-border/50"
                      />
                    </div>
                    <div className="min-w-0">
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input
                        required
                        placeholder="Doe"
                        className="w-full min-w-0 bg-background/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full min-w-0 bg-background/50 border-border/50"
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                    <Input
                      type="tel"
                      placeholder="+1 (234) 567-890"
                      className="w-full min-w-0 bg-background/50 border-border/50"
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      required
                      placeholder="How can we help?"
                      className="w-full min-w-0 bg-background/50 border-border/50"
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full min-w-0 bg-background/50 border-border/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full max-w-full bg-gradient-primary hover:opacity-90 text-white font-semibold h-12 sm:h-14 text-sm sm:text-base shadow-lg shadow-primary/30"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Right Side - Info */}
            <div className="space-y-6 sm:space-y-8 min-w-0">
              {/* Why Contact Us */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-display font-bold mb-4 sm:mb-6">Why Work With Us?</h3>
                <div className="space-y-4">
                  {[
                    'Free initial consultation',
                    'Expert team with 10+ years experience',
                    '24/7 support and maintenance',
                    'Transparent pricing, no hidden fees',
                    'Agile development methodology',
                    '100% satisfaction guarantee',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 min-w-0">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base min-w-0">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-display font-bold">Quick Response</h3>
                    <p className="text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Our team is available Monday through Friday, 9am to 6pm EST. For urgent matters, reach out via phone.
                </p>
              </div>

              {/* Poster */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video">
                <img 
                  src={heroPoster} 
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-primary" />
                  <p className="text-base sm:text-lg font-display font-bold">Let's Build Something Amazing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Meeting */}
      <BookMeeting />

     

      {/* Office Locations Map */}
      <OfficeMapSection />

      {/* FAQ Section */}
      <ContactFAQ />

      {/* Social Connect */}
      <SocialConnect />

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />

      <Footer />
        </main>
      </PageTransition>
    </>
  );
};

export default Contact;
