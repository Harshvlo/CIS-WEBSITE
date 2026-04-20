import { Users, Linkedin, Mail, Crown, Code2, Database, Brain, Heart } from 'lucide-react';
import ceoImage from '@/assets/ceo.png';
import leadPradyumna from '@/assets/lead-pradyumna.png';
import leadAniket from '@/assets/lead-aniket.png';
import leadShakshi from '@/assets/lead-shakshi.png';
import hrAditi from '@/assets/hr-aditi.png';
import ctoAarohi from '@/assets/cto-aarohi.png';

const TeamSection = () => {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary"></span>
          </div>
         
          <p className="text-lg text-muted-foreground">
            The brilliant minds behind Codentrixx Innovation Solutions, dedicated to powering your digital presence.
          </p>
        </div>

        {/* ===== TIER 1: CEO — Full width hero card ===== */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Crown className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-display font-bold">Founder & CEO</h3>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="group glass-card-hover rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex flex-col sm:flex-row items-center gap-0">
                {/* Large Photo */}
                <div className="w-full sm:w-1/2 aspect-square sm:aspect-auto sm:h-96 overflow-hidden">
                  <img
                    src={ceoImage}
                    alt="Harsh Dwivedi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Info */}
                <div className="flex-1 p-8 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Crown className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Founder</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-1">Harsh Dwivedi</h3>
                  <p className="text-primary font-medium mb-4">CEO & Founder</p>
                  <p className="text-muted-foreground text-sm mb-6">
                    Visionary leader driving digital innovation and business growth at Codentrixx.
                  </p>
                  <div className="flex justify-center sm:justify-start gap-3">
                    <a
                      href="https://www.linkedin.com/in/harsh-dwivedi17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <a
                      href="mailto:hr@codentrixx.com"
                      className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TeamSection;