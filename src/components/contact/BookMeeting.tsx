import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Clock, Video, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

const BookMeeting = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date || !selectedTime || !name || !email) {
      toast({
        title: 'Please fill all fields',
        description: 'Select a date, time, and enter your details.',
        variant: 'destructive',
      });
      return;
    }

    setIsBooked(true);
    toast({
      title: 'Meeting Scheduled!',
      description: `Your meeting is confirmed for ${format(date, 'PPP')} at ${selectedTime}`,
    });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Video className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Book a Call</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Schedule a <span className="gradient-text">Free Consultation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a 30-minute call with our experts to discuss your project requirements and get a free estimate.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Free 30-minute consultation',
                'No obligation, just expert advice',
                'Get a custom project estimate',
                'Meet our technical team',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Booking Form */}
          <div className="glass-card p-8 rounded-3xl">
            {isBooked ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Meeting Booked!</h3>
                <p className="text-muted-foreground mb-2">
                  {date && format(date, 'PPPP')} at {selectedTime}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Check your email for the meeting link and calendar invite.
                </p>
                <Button onClick={() => setIsBooked(false)} variant="outline">
                  Book Another Meeting
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-display font-bold mb-6">Select Date & Time</h3>
                
                {/* Date Picker */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Choose Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-12",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) =>
                          date < new Date() || date.getDay() === 0 || date.getDay() === 6
                        }
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Slots */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Choose Time</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "px-3 py-2 rounded-lg text-sm font-medium transition-all",
                          selectedTime === time
                            ? "bg-gradient-primary text-primary-foreground"
                            : "glass-card hover:bg-muted"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleBooking}
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 h-12"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Book 30-min Call
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookMeeting;
