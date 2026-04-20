import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A simple website takes 4-6 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing including fixed-price projects, time & materials, and dedicated team models. Pricing depends on project scope, complexity, and duration. Contact us for a custom quote.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer comprehensive support and maintenance packages including 24/7 monitoring, bug fixes, security updates, and feature enhancements. SLAs available for enterprise clients.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in React, Node.js, Python, AWS, Azure, GCP, AI/ML, IoT, and more. Our team stays updated with the latest technologies to deliver cutting-edge solutions.',
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! We offer team augmentation services where our developers integrate seamlessly with your existing team. We follow your processes and tools.',
  },
  {
    question: 'How do you ensure project quality?',
    answer: 'We follow industry best practices including code reviews, automated testing, CI/CD pipelines, and regular quality audits. Every project goes through rigorous QA before delivery.',
  },
];

const ContactFAQ = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background - Clean Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-bold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
