import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TeamSection from '@/components/sections/TeamSection';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Eye, Target, Rocket, Lightbulb, Award, Heart, Zap, Users, Calendar, Trophy, Shield, Star, CheckCircle2, MapPin, Phone, Mail as MailIcon, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import PageTransition from '@/components/effects/PageTransition';
import AuroraBackground from '@/components/effects/AuroraBackground';

// Import poster images
import heroPoster from '@/assets/about/about-hero-clean.jpg';
import storyPoster from '@/assets/about/about-story-poster.jpg';
import awardsPoster from '@/assets/about/awards-poster.jpg';
import visionPoster from '@/assets/about/vision-icon-poster.jpg';
import missionPoster from '@/assets/about/mission-icon-poster.jpg';
import ambitionPoster from '@/assets/about/ambition-icon-poster.jpg';
import culturePoster from '@/assets/about/company-culture.jpg';
import globalPoster from '@/assets/about/global-presence.jpg';

// Import client logos
import googleLogo from '@/assets/logos/google.png';
import amazonLogo from '@/assets/logos/amazon.png';
import microsoftLogo from '@/assets/logos/microsoft.png';
import netflixLogo from '@/assets/logos/netflix.png';
import spotifyLogo from '@/assets/logos/spotify.png';
import twitterLogo from '@/assets/logos/twitter.png';

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge solutions.',
    gradient: 'from-primary to-primary/70',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality in every project.',
    gradient: 'from-primary/90 to-primary/60',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Building trust through transparency and honest practices.',
    gradient: 'from-primary/80 to-primary/50',
  },
  {
    icon: Zap,
    title: 'Impact',
    description: 'Creating meaningful change that drives business success.',
    gradient: 'from-primary/85 to-primary/55',
  },
];

const milestones: Milestone[] = [
  { year: '2025', title: 'Founded', description: 'Codentrixx Innovation Solutions Pvt Ltd was founded with a vision to power digital presence.' },
  { year: '2025', title: 'Team Building', description: 'Built specialized teams — PyVision, Falconz, and Datax — across Bhopal & Bengaluru.' },
  { year: '2025', title: 'First Clients', description: 'Started delivering AI, cloud, and software solutions for businesses across India.' },
  { year: '2026', title: 'Scaling Up', description: 'Growing our client base and expanding into new markets with cutting-edge technology.' },
];

const clientLogos = [
  { name: 'Google', logo: googleLogo },
  { name: 'Amazon', logo: amazonLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Netflix', logo: netflixLogo },
  { name: 'Spotify', logo: spotifyLogo },
  { name: 'Twitter', logo: twitterLogo },
];

const awards = [
  { title: 'Best Tech Startup', year: '2025', org: 'Tech Excellence Awards' },
  { title: 'Innovation Leader', year: '2025', org: 'Global Business Forum' },
  { title: 'Top AI Company', year: '2025', org: 'AI & ML Summit' },
  { title: 'Cloud Partner of Year', year: '2025', org: 'AWS Partner Network' },
];

const certifications = [
  { name: 'ISO 27001', desc: 'Information Security' },
  { name: 'SOC 2 Type II', desc: 'Security & Privacy' },
  { name: 'GDPR Compliant', desc: 'Data Protection' },
  { name: 'AWS Partner', desc: 'Cloud Certified' },
];

const About = () => {
  return (
    <>
      
      <PageTransition>
        <main className="min-h-screen bg-background overflow-x-hidden">
          <Navbar />
      
      {/* Hero Section - Enhanced with Aurora Background */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden min-h-[60vh] sm:min-h-[70vh] flex items-center">
        {/* Aurora Background Effect */}
        <AuroraBackground />
        
        {/* Background Poster */}
        <div className="absolute inset-0">
          <img 
            src={heroPoster} 
            alt="About Background" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        </div>

        <div className="relative section-container text-center">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                <Users className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-primary">About Us</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
                Where Ideas Become <span className="gradient-text">Intelligent Solutions</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
                We are a team of passionate technologists dedicated to transforming businesses through innovative technology solutions.
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 mt-8 sm:mt-12">
                {[
                  { value: '1000+', label: 'Projects Delivered' },
                  { value: '500+', label: 'Happy Clients' },
                  { value: '20+', label: 'Countries Served' },
                  { value: '98%', label: 'Satisfaction Rate' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section - Enhanced with Poster */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left - Poster Image */}
              <div className="relative order-2 lg:order-1 min-w-0">
                <div className="relative rounded-3xl overflow-hidden group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="relative rounded-3xl overflow-hidden border border-border/50">
                    <img 
                      src={storyPoster} 
                      alt="Our Story - Team Collaboration" 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2 min-w-0">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-primary">Since 2025</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-base sm:text-lg">
                  <p>
                    Founded in 2025, Codentrixx Innovation Solutions Pvt Ltd began with a clear mission: to power the digital presence of businesses through innovative technology.
                  </p>
                  <p>
                    With offices in Bhopal and Bangalore, we've built specialized teams — PyVision (Python), Falconz (Development), and Datax (Data) — to deliver comprehensive tech solutions. Under the leadership of CEO Harsh Dwivedi and CTO Aarohi Singh Rajpoot, we're driving digital transformation across India.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of what's possible, combining cutting-edge technology with deep expertise to create solutions that drive real business impact.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision/Mission/Ambition Section - Enhanced with Poster */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <ScrollReveal direction="up">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                <Eye className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-primary text-center">Codentrixx Innovation Solutions Pvt Ltd</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                Vision, Mission, <span className="gradient-text">Ambition</span>
              </h2>
            </div>



            {/* Cards - Updated with poster images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Vision Card */}
              <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 min-w-0">
                {/* Poster Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={visionPoster} 
                    alt="Vision" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                
                <div className="relative p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a globally trusted technology partner that transforms ideas into impactful digital solutions, empowering businesses and governments through innovation, reliability, and excellence.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card to-secondary/5 border border-border/50 hover:border-secondary/40 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/10 min-w-0">
                {/* Poster Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={missionPoster} 
                    alt="Mission" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                
                <div className="relative p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4 group-hover:text-secondary transition-colors">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At Codentrixx Innovation Solutions Pvt Ltd, our mission is to design and deliver scalable, secure, and intelligent technology solutions that solve real-world challenges. We strive to empower our clients through cutting-edge development, continuous innovation, and a culture built on integrity, collaboration, and growth.
                  </p>
                </div>
              </div>

              {/* Ambition Card */}
              <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card to-accent/5 border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 min-w-0">
                {/* Poster Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={ambitionPoster} 
                    alt="Ambition" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                
                <div className="relative p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4 group-hover:text-accent transition-colors">Our Ambition</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our ambition is to build a future-ready organization that:
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Leads digital transformation across industries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Delivers world-class software products and services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Creates meaningful impact for businesses and communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Nurtures talent and innovation from the ground up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Expands globally while staying rooted in strong values</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-card/30 to-background">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                <Heart className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-primary">What We Stand For</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                Our Core <span className="gradient-text">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group relative rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 text-center min-w-0"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                <Award className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-primary">Our Strengths</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                Why Choose <span className="gradient-text">Codentrixx</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                What makes us the ideal technology partner for your business
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Shield, title: 'Trusted Partner', desc: '10+ years of industry experience with 98% client retention rate', gradient: 'from-primary to-primary/70' },
                { icon: Zap, title: 'Fast Delivery', desc: 'Agile methodology ensuring quick turnaround without compromising quality', gradient: 'from-primary/90 to-primary/60' },
                { icon: Users, title: 'Expert Team', desc: '100+ certified professionals across AI, Cloud, and Security domains', gradient: 'from-primary/85 to-primary/55' },
                { icon: Trophy, title: 'Award Winning', desc: 'Recognized by industry leaders for innovation and excellence', gradient: 'from-primary/80 to-primary/50' },
              ].map((item) => (
                <div key={item.title} className="group relative rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 text-center min-w-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left - Poster */}
              <div className="relative min-w-0">
                <div className="relative rounded-3xl overflow-hidden group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="relative rounded-3xl overflow-hidden border border-border/50">
                    <img 
                      src={culturePoster} 
                      alt="Company Culture" 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                  <Heart className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-primary">Life at Codentrixx</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                  Our <span className="gradient-text">Culture</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
                  We believe in creating an environment where innovation thrives and every team member can reach their full potential.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { title: 'Flexible Work', desc: 'Remote-first culture with flexible hours' },
                    { title: 'Learning & Growth', desc: 'Continuous learning opportunities' },
                    { title: 'Team Events', desc: 'Regular team building activities' },
                    { title: 'Work-Life Balance', desc: 'We value your personal time' },
                  ].map((item) => (
                    <div key={item.title} className="glass-card rounded-xl p-4 group hover:border-primary/30 transition-all">
                      <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Offices Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                <Building2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-primary">Our Offices</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                Where We <span className="gradient-text">Operate</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Two dynamic offices powering innovation across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Bhopal HQ */}
              <div className="group glass-card-hover rounded-3xl overflow-hidden relative min-w-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Map Embed */}
                <div className="w-full min-w-0 h-48 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7!2d77.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhopal!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Bhopal Office"
                    className="w-full max-w-full min-w-0 h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="relative p-4 sm:p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">🏢 Headquarters</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Bhopal, Madhya Pradesh</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our headquarters in the heart of India, where our core teams drive innovation, product development, and company operations.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">Bhopal, Madhya Pradesh, India</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="tel:+916260677238" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 6260677238</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MailIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="mailto:hr@codentrixx.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">hr@codentrixx.com</a>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {['PyVision Team', 'Falconz Team', 'Datax Team', 'HR & Admin'].map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bangalore Branch */}
              <div className="group glass-card-hover rounded-3xl overflow-hidden relative min-w-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Map Embed */}
                <div className="w-full min-w-0 h-48 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBangalore!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Bangalore Office"
                    className="w-full max-w-full min-w-0 h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="relative p-4 sm:p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">🚀 Branch Office</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Bengaluru, Karnataka</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our Bengaluru branch serves as a key hub for innovation and advanced technology solutions. Strategically located in India's leading tech city, this branch focuses on delivering high-quality development, data-driven solutions, and scalable digital services to clients across industries.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">Bengaluru, Karnataka, India</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="tel:+916260677238" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 6260677238</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MailIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="mailto:hr@codentrixx.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">hr@codentrixx.com</a>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {['Tech Operations', 'Client Services', 'R&D Lab', 'Business Dev'].map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners & Clients Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                <Users className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-primary">Trusted By Industry Leaders</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                Our <span className="gradient-text">Partners</span>
              </h2>
            </div>

            {/* Client Logos */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
                {clientLogos.map((client) => (
                  <div key={client.name} className="flex items-center justify-center p-2 sm:p-4 group min-w-0">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="h-7 sm:h-8 md:h-10 w-auto max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left - Poster */}
              <div className="relative min-w-0">
                <div className="relative rounded-3xl overflow-hidden group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="relative rounded-3xl overflow-hidden border border-border/50">
                    <img 
                      src={awardsPoster} 
                      alt="Awards and Certifications" 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                  <Trophy className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-primary">Recognition</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 sm:mb-8">
                  Awards & <span className="gradient-text">Certifications</span>
                </h2>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {awards.map((award) => (
                    <div key={award.title} className="group glass-card rounded-xl p-4 hover:border-primary/30 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{award.title}</h4>
                          <p className="text-xs text-muted-foreground">{award.org} • {award.year}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="space-y-3">
                  <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Certifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {certifications.map((cert) => (
                      <div key={cert.name} className="flex items-center gap-3 glass-card rounded-lg p-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-sm">{cert.name}</span>
                          <p className="text-xs text-muted-foreground">{cert.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Section - Enhanced */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 max-w-full">
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-primary">Our Milestones</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                Our <span className="gradient-text">Journey</span>
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto min-w-0">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

              <div className="space-y-6 sm:space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={`${milestone.year}-${milestone.title}`}
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="group glass-card rounded-2xl p-4 sm:p-6 hover:border-primary/30 transition-all">
                        <div className={`inline-flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center shrink-0">
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-primary font-bold text-base sm:text-lg">{milestone.year}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0 relative z-10 border-4 border-background" />

                    {/* Empty Space */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      <Footer />
        </main>
      </PageTransition>
    </>
  );
};

export default About;