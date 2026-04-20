import { MessageCircle, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/company/codentrixx/',
    followers: 'Company Page',
    gradient: 'from-primary to-primary/80',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/codentrixx.in',
    followers: '@codentrixx.in',
    gradient: 'from-primary/90 to-primary/70',
  },
];

const SocialConnect = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Stay Connected</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Follow Us on <span className="gradient-text">Social Media</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with our latest projects, tech insights, and company news. Join our growing community!
            </p>

            {/* Live Chat CTA */}
            <div className="glass-card p-6 rounded-2xl mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Get In Touch</h3>
                  <p className="text-sm text-muted-foreground">Reach out to us anytime</p>
                </div>
              </div>
              <a href="mailto:hr@codentrixx.com">
                <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Email Us
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Social Cards */}
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-6 rounded-2xl text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display font-bold mb-1">{social.name}</h3>
                <p className="text-sm text-muted-foreground">{social.followers}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
