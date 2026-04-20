import { useEffect, useRef, useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What services does Codentrixx offer?',
    answer: 'We offer comprehensive technology solutions including AI & Machine Learning, Cloud Solutions, Custom Software Development, Cybersecurity, Data Analytics, and IoT Solutions. Each service is tailored to meet your specific business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. Simple projects may take 4-8 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes! We provide 24/7 support and maintenance packages for all our solutions. Our dedicated support team ensures your systems run smoothly with regular updates and proactive monitoring.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including Finance, Healthcare, Retail, Manufacturing, Education, and Technology. Our solutions are adaptable to any industry vertical.',
  },
  {
    question: 'How do you ensure data security?',
    answer: 'Security is our top priority. We implement industry-standard encryption, conduct regular security audits, follow GDPR/HIPAA compliance, and use best practices for secure coding and infrastructure.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. Contact us for a custom quote based on your requirements.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="relative section-container">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl overflow-hidden hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/20 transition-all duration-300"
              >
                <span className="text-lg font-medium pr-4">{faq.question}</span>
                <div className={`w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
