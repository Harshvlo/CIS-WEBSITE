import { Headphones, Mail, Linkedin } from 'lucide-react';
import leadPradyumna from '@/assets/lead-pradyumna.png';
import leadAniket from '@/assets/lead-aniket.png';
import leadShakshi from '@/assets/lead-shakshi.png';
import hrAditi from '@/assets/hr-aditi.png';

const teamMembers = [
  {
    name: 'Pradyumna Sharma',
    role: 'Team Lead - PyVision',
    image: leadPradyumna,
    email: 'hr@codentrixx.com',
    specialization: 'Python & AI',
  },
  {
    name: 'Aniket Chauhan',
    role: 'Team Lead - Falconz',
    image: leadAniket,
    email: 'hr@codentrixx.com',
    specialization: 'Full-Stack Development',
  },
  {
    name: 'Shakshi',
    role: 'Team Lead - Datax',
    image: leadShakshi,
    email: 'hr@codentrixx.com',
    specialization: 'Data & Analytics',
  },
  {
    name: 'Aditi Sharma',
    role: 'HR Manager',
    image: hrAditi,
    email: 'hr@codentrixx.com',
    specialization: 'People & Culture',
  },
];

const SupportTeam = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Headphones className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Meet Your <span className="gradient-text">Support Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated experts are here to help you succeed. Get personalized support from specialists in your domain.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="glass-card-hover rounded-3xl overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Online indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-display font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{member.specialization}</p>

                {/* Contact Links */}
                <div className="flex gap-2">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex-1 py-2 rounded-lg glass-card hover:bg-muted transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a 
                    href="#"
                    className="w-10 h-10 rounded-lg glass-card hover:bg-muted transition-colors flex items-center justify-center"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Response Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '<2 hrs', label: 'Avg Response Time' },
            { value: '98%', label: 'Resolution Rate' },
            { value: '4.9/5', label: 'Customer Rating' },
            { value: '24/7', label: 'Availability' },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass-card p-6 rounded-2xl">
              <div className="text-3xl font-display font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportTeam;
