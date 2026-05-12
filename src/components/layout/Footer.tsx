import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Sparkles,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo-codentrixx.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'AI & Machine Learning', href: '/services#ai' },
      { name: 'Cloud Infrastructure', href: '/services#cloud' },
      { name: 'Data Analytics', href: '/services#analytics' },
      { name: 'Software Development', href: '/services#software' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/codentrixx/', label: 'LinkedIn', color: 'hover:bg-primary/20 hover:text-primary' },
    { icon: Instagram, href: 'https://www.instagram.com/codentrixx.in', label: 'Instagram', color: 'hover:bg-primary/20 hover:text-primary' },
  ];

  return (
    <footer className="relative bg-background overflow-hidden border-t border-border/50">
      {/* Top Gradient Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/30" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="relative section-container">
        {/* Newsletter Section */}
        <div className="py-16">
          <div className="relative glass-card p-8 md:p-12 rounded-3xl overflow-hidden border border-primary/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">Newsletter</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  Stay <span className="gradient-text">Updated</span>
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Subscribe to our newsletter for the latest tech insights and company updates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-80 h-14 bg-background/50 border-border/50 pl-5 pr-12 rounded-xl focus:border-primary/50"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
                <Button className="h-14 px-8 bg-gradient-primary hover:opacity-90 text-white font-semibold rounded-xl shadow-md shadow-primary/20">
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Codentrixx Innovation Solutions" 
                className="h-16 md:h-20 w-auto hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Powering your digital presence with cutting-edge AI, cloud, and software solutions. Building tomorrow's technology today.
            </p>
            <div className="space-y-4">
              <a href="mailto:hr@codentrixx.com" className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@codentrixx.in</span>
              </a>
              <a href="tel:+916260677238" className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 6260677238</span>
              </a>
              <div className="group flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Bhopal & Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-bold mb-6 text-foreground">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-bold mb-6 text-foreground">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-bold mb-6 text-foreground">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} <span className="text-foreground font-medium">CODENTRIXX INNOVATION SOLUTIONS Pvt Ltd</span>. All rights reserved.
            </p>
            <span className="sr-only" aria-hidden="true" data-dev="Sulekhiya">Developed by Sulekhiya</span>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-xl bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
