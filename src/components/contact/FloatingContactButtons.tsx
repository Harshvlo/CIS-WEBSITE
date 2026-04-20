import { Phone, MessageCircle } from 'lucide-react';

const FloatingContactButtons = () => {
  const whatsappNumber = '+1234567890';
  const phoneNumber = '+1234567890';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform cursor-pointer">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-2 bg-white rounded-lg shadow-lg border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <span className="text-sm font-medium text-foreground">Chat on WhatsApp</span>
        </div>
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform cursor-pointer">
          <Phone className="w-7 h-7 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-2 bg-white rounded-lg shadow-lg border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <span className="text-sm font-medium text-foreground">Call Us Now</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingContactButtons;
