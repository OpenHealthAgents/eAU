"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { 
  Stethoscope, 
  Bot, 
  Video, 
  Pill 
} from "lucide-react";

export function Timeline() {
  const steps = [
    {
      number: "1",
      title: "Symptome beschreiben",
      description: "Beantworten Sie in unserer sicheren App ein paar kurze Fragen zu Ihrem aktuellen Gesundheitszustand.",
      icon: Stethoscope,
      align: "left"
    },
    {
      number: "2",
      title: "KI bereitet Sprechstunde vor",
      description: "Unsere KI strukturiert Ihre Daten sofort und erstellt eine vorläufige klinische Anamnese für den Arzt.",
      icon: Bot,
      align: "right"
    },
    {
      number: "3",
      title: "Ärztliche Sprechstunde",
      description: "Verbinden Sie sich über ein sicheres, hochauflösendes Video mit einem zugelassenen Facharzt, um Ihre Behandlung zu besprechen.",
      icon: Video,
      align: "left"
    },
    {
      number: "4",
      title: "Digitale Behandlung",
      description: "Erhalten Sie Ihre eAU, digitale Rezepte und Ihren persönlichen Behandlungsplan direkt in der App.",
      icon: Pill,
      align: "right"
    }
  ];

  return (
    <SectionWrapper className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="relative z-10 space-y-16 max-w-5xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            So funktioniert's
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Ihre Gesundheit in 4 einfachen Schritten.
          </motion.h2>
        </div>

        <div className="relative">
          {/* Central Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/80 -translate-x-1/2 md:translate-x-0" />

          {/* Animated fill line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-[var(--brand-teal)] to-primary -translate-x-1/2 md:translate-x-0 origin-top shadow-[0_0_15px_rgba(var(--primary),0.5)]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px -40% 0px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="space-y-12 md:space-y-24 relative z-10 pt-8 pb-8">
            {steps.map((step) => {
              const isLeft = step.align === "left";
              
              return (
                <div key={step.number} className={`relative flex items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold text-lg shadow-glow z-20"
                  >
                    {step.number}
                  </motion.div>

                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 25 }}
                      whileHover={{ y: -5 }}
                      className="w-full glassmorphism p-6 md:p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 space-y-4">
                        <div className="h-12 w-12 rounded-xl bg-background border border-border/50 flex items-center justify-center shadow-sm">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
