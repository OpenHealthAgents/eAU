"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Wie funktionieren Online-Konsultationen?",
    answer: "Unser Prozess ist einfach und komplett digital. Zunächst füllen Sie einen kurzen, KI-gestützten Fragebogen zu Ihren Symptomen aus. Basierend darauf vermitteln wir Sie an einen qualifizierten Facharzt. Anschließend nehmen Sie direkt über Ihr Smartphone oder Ihren Browser an einem sicheren, hochauflösenden Videoanruf teil, ohne zusätzliche Software herunterladen zu müssen."
  },
  {
    question: "Wie sicher sind meine Daten?",
    answer: "Wir nehmen Ihren Datenschutz extrem ernst. Alle Daten werden gemäß den strengen europäischen DSGVO-Richtlinien verarbeitet und auf lokalen, ISO 27001 zertifizierten Servern gespeichert. Jede Videokonsultation und Datenübertragung ist mit einer Ende-zu-Ende-Verschlüsselung nach Militärstandard gesichert."
  },
  {
    question: "Kann ich ein E-Rezept erhalten?",
    answer: "Ja. Wenn Ihr behandelnder Arzt es für medizinisch sinnvoll erachtet, kann er ein voll gültiges elektronisches Rezept (E-Rezept) ausstellen. Dieses ist sofort in Ihrer App verfügbar und Sie können es in jeder lokalen Apotheke in Deutschland einlösen oder online zur Lieferung bestellen."
  },
  {
    question: "Wie lange dauern die Termine?",
    answer: "Wir machen das Wartezimmer überflüssig. In der Regel können Sie innerhalb von 5-10 Minuten mit einem Arzt verbunden werden. Die Konsultation selbst dauert meist zwischen 10 und 15 Minuten, abhängig von Ihren medizinischen Bedürfnissen, um eine gründliche und effiziente Versorgung zu gewährleisten."
  },
  {
    question: "Können Ärzte eine eAU ausstellen?",
    answer: "Absolut. Nach einer professionellen medizinischen Beurteilung während des Videoanrufs können unsere approbierten Ärzte eine elektronische Arbeitsunfähigkeitsbescheinigung (eAU) ausstellen. Diese wird automatisch und sicher an Ihre Krankenkasse und Ihren Arbeitgeber übermittelt."
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
            Klare Antworten. <span className="text-gradient-premium">Keine Verwirrung.</span>
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
