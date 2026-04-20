import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const offices = [
  {
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    badge: '🏢 Headquarters',
    description: 'Our headquarters in the heart of India, where our core teams drive innovation, product development, and company operations.',
    phone: '+91 6260677238',
    email: 'hr@codentrixx.com',
    tags: ['PyVision Team', 'Falconz Team', 'Datax Team', 'HR & Admin'],
  },
  {
    city: 'Bengaluru',
    state: 'Karnataka',
    badge: '🚀 Branch Office',
    description: 'Our Bengaluru branch serves as a key hub for innovation and advanced technology solutions, strategically located in India\'s leading tech city.',
    phone: '+91 6260677238',
    email: 'hr@codentrixx.com',
    tags: ['Tech Operations', 'Client Services', 'R&D Lab', 'Business Dev'],
  },
];

const OfficesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative section-container">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Offices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Where We <span className="gradient-text">Operate</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Two dynamic offices powering innovation across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office) => (
              <div
                key={office.city}
                className="group glass-card-hover rounded-3xl p-8 relative overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{office.badge}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-1">{office.city}, {office.state}</h3>
                  <p className="text-muted-foreground text-sm mb-5">{office.description}</p>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{office.city}, {office.state}, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">{office.email}</a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {office.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OfficesSection;