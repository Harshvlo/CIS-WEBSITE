import { MapPin, Building, Globe } from 'lucide-react';
import mapPoster from '@/assets/contact/office-map-poster.jpg';

const offices = [
  {
    city: 'Bhopal',
    country: 'India',
    address: 'Madhya Pradesh',
    type: 'Headquarters',
  },
  {
    city: 'Bangalore',
    country: 'India',
    address: 'Karnataka',
    type: 'Development Center',
  },
];

const OfficeMapSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Locations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Where We <span className="gradient-text">Operate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically located across India to deliver world-class technology solutions.
          </p>
        </div>

        {/* Map Poster */}
        <div className="relative rounded-3xl overflow-hidden mb-12 group">
          <img 
            src={mapPoster} 
            alt="Office Locations in India"
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        </div>

        {/* Office Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {offices.map((office, index) => (
            <div 
              key={office.city}
              className="glass-card-hover p-6 rounded-2xl text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Building className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-1">{office.city}</h3>
              <p className="text-sm text-primary mb-2">{office.type}</p>
              <p className="text-sm text-muted-foreground">{office.address}</p>
              <p className="text-sm text-muted-foreground">{office.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeMapSection;
