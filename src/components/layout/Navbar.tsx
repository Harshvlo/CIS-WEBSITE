import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Menu, X, Home, Briefcase, Users, FolderOpen, Mail, ArrowRight, Linkedin, Instagram, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-codentrixx.png';

const navLinks = [
  { name: 'Home', href: '/', icon: Home, desc: 'Back to homepage' },
  { name: 'Services', href: '/services', icon: Briefcase, desc: 'What we offer' },
  { name: 'About', href: '/about', icon: Users, desc: 'Our story & team' },
  { name: 'Portfolio', href: '/portfolio', icon: FolderOpen, desc: 'Our work' },
  { name: 'Contact', href: '/contact', icon: Mail, desc: 'Get in touch' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/98 backdrop-blur-xl shadow-lg shadow-foreground/5 py-2'
            : 'bg-background/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Codentrixx - Powering Your Digital Presence" 
                className="h-12 sm:h-16 md:h-20 w-auto group-hover:opacity-90 transition-all duration-300"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-semibold tracking-wide transition-all duration-300 ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/contact">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 px-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Portal to body */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel - slides in from right */}
          <div className="absolute inset-y-0 right-0 w-full max-w-[320px] bg-background shadow-2xl animate-[slideInRight_300ms_ease-out] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Codentrixx" className="h-10 w-auto" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-foreground hover:bg-muted transition-colors active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-4 py-3 px-4 rounded-2xl transition-all duration-200 active:scale-[0.98] ${
                      isActive
                        ? 'bg-primary/10 border border-primary/20'
                        : 'hover:bg-muted/60 border border-transparent'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive 
                        ? 'bg-primary text-white shadow-md shadow-primary/30' 
                        : 'bg-muted/80 text-foreground/60 group-hover:bg-primary/10 group-hover:text-primary'
                    }`}>
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className={`font-semibold text-[15px] ${isActive ? 'text-primary' : 'text-foreground/80'}`}>
                        {link.name}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">{link.desc}</div>
                    </div>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-primary shrink-0" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Section */}
            <div className="px-4 pb-6 pt-2 border-t border-border/50 space-y-4">
              {/* CTA */}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 h-12 text-base rounded-xl group">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* Contact Quick Links */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a href="tel:+916260677238" className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all active:scale-95">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="mailto:hr@codentrixx.com" className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all active:scale-95">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/codentrixx/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all active:scale-95">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/codentrixx.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all active:scale-95">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              <p className="text-center text-[11px] text-muted-foreground/60">
                Codentrixx Innovation Solutions Pvt Ltd
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;