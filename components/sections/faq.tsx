"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do online consultations work?",
    answer: "Our process is simple and entirely digital. First, you complete a quick AI-assisted symptom intake form. Based on your symptoms, we match you with a qualified specialist. You then join a secure, high-definition video call directly from your smartphone or browser without downloading any additional software."
  },
  {
    question: "How secure is my data?",
    answer: "We take your privacy extremely seriously. All data is processed in accordance with strict European GDPR regulations and stored on local, ISO 27001 certified servers. Every video consultation and data transfer is secured using military-grade end-to-end encryption."
  },
  {
    question: "Can I receive an ePrescription?",
    answer: "Yes. If your consulting physician deems it medically appropriate, they can issue a fully valid electronic prescription (E-Rezept). This will be instantly available in your app, and you can redeem it at any local pharmacy in Germany or order delivery online."
  },
  {
    question: "How long do appointments take?",
    answer: "We eliminate the waiting room. Typically, you can connect with a doctor within 5-10 minutes. The consultation itself usually lasts between 10 to 15 minutes, depending on your medical needs, ensuring you receive thorough and efficient care."
  },
  {
    question: "Can physicians issue an eAU?",
    answer: "Absolutely. Following a professional medical assessment during the video call, our licensed doctors can issue an electronic certificate of incapacity for work (eAU). This is automatically and securely transmitted to your health insurance provider and your employer."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            <MessageCircleQuestion className="h-4 w-4" />
            Häufig gestellte Fragen
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Clear answers. <span className="text-gradient-premium">No confusion.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen 
                    ? "bg-card border-primary/30 shadow-sm" 
                    : "bg-background/50 border-border/50 hover:border-border"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={cn(
                    "font-semibold text-lg transition-colors duration-300",
                    isOpen ? "text-primary" : "text-foreground"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                    isOpen ? "bg-primary/10 rotate-180" : "bg-muted"
                  )}>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-colors duration-300",
                      isOpen ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
