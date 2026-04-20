import { useEffect, useRef, useState } from 'react';

// Import real company logos
import googleLogo from '@/assets/logos/google.png';
import microsoftLogo from '@/assets/logos/microsoft.png';
import amazonLogo from '@/assets/logos/amazon.png';
import netflixLogo from '@/assets/logos/netflix.png';
import spotifyLogo from '@/assets/logos/spotify.png';
import twitterLogo from '@/assets/logos/twitter.png';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'Google', logo: googleLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Amazon', logo: amazonLogo },
  { name: 'Netflix', logo: netflixLogo },
  { name: 'Spotify', logo: spotifyLogo },
  { name: 'Twitter', logo: twitterLogo },
];

const ClientLogos = () => {
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

  // Duplicate logos for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden bg-background">
      {/* Header */}
      <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Scrolling Logos Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll-left items-center">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="glass-card px-6 py-4 rounded-2xl hover:scale-110 hover:bg-white/10 hover-glow transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
