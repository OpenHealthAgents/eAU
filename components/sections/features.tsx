"use client";

import { motion, Variants } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { 
  Bot, 
  Video, 
  Pill, 
  FileCheck2, 
  CalendarClock, 
  ShieldCheck 
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "KI-Symptomerfassung",
      description: "Unser intelligentes Triage-System analysiert Ihre Symptome in Sekundenschnelle, priorisiert Ihren Fall und weist Ihnen den für Ihre Bedürfnisse qualifiziertesten Facharzt zu."
    },
    {
      icon: Video,
      title: "Video-Sprechstunde",
      description: "Erleben Sie kristallklare, verzögerungsfreie Videoanrufe mit Ihrem Arzt direkt über Ihr Smartphone oder Ihren Computer."
    },
    {
      icon: Pill,
      title: "E-Rezept",
      description: "Erhalten Sie Ihre Rezepte direkt nach der Sprechstunde digital. Lösen Sie diese sofort in jeder Apotheke vor Ort oder über integrierte Lieferdienste ein."
    },
    {
      icon: FileCheck2,
      title: "Elektronische Dokumentation",
      description: "Elektronische Arbeitsunfähigkeitsbescheinigungen (eAU) werden automatisch, sicher und effizient an Ihre Krankenkasse und Ihren Arbeitgeber übermittelt."
    },
    {
      icon: CalendarClock,
      title: "Schnelle Terminvergabe",
      description: "Verabschieden Sie sich von Wartezimmern. Buchen Sie Termine auf Abruf innerhalb von Minuten oder vereinbaren Sie Sprechstunden genau zu Ihrer Wunschzeit."
    },
    {
      icon: ShieldCheck,
      title: "Sicherer Datenschutz",
      description: "Ihre Gesundheitsdaten sind sicher. Wir verwenden eine Ende-zu-Ende-Verschlüsselung nach Militärstandard und halten uns streng an die europäische DSGVO und ISO 27001-Standards."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <SectionWrapper className="py-24 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
      
      <div className="relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            Kernfunktionen
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Gesundheitsversorgung ohne Reibungsverluste.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Wir haben die gesamte Patientenreise neu gedacht. Vom Moment des Unwohlseins bis zum Erhalt Ihrer Medikamente wird jeder Schritt durch fortschrittliche Technologie optimiert.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glassmorphism rounded-3xl p-8 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300 shadow-sm group-hover:shadow-glow">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
