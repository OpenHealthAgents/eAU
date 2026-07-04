"use client";

import { motion, Variants } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { 
  ShieldCheck, 
  LockKeyhole, 
  Stethoscope, 
  Clock, 
  FileCheck2, 
  Video 
} from "lucide-react";

export function Trust() {
  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: "100% DSGVO-konform",
      description: "Ihre Gesundheitsdaten werden nach strengsten europäischen Datenschutzrichtlinien verarbeitet und auf lokalen Servern gesichert."
    },
    {
      icon: LockKeyhole,
      title: "Ende-zu-Ende-Verschlüsselung",
      description: "Sämtliche Kommunikation und Video-Konsultationen sind durch militärische Verschlüsselungsstandards vor fremdem Zugriff geschützt."
    },
    {
      icon: Stethoscope,
      title: "Approbierte Fachärzte",
      description: "Unser medizinisches Team besteht ausschließlich aus erfahrenen, in Deutschland approbierten Ärzten mit mehrjähriger Praxis."
    },
    {
      icon: Clock,
      title: "Schnelle Terminvergabe",
      description: "Erhalten Sie medizinische Hilfe genau dann, wenn Sie sie brauchen – ohne monatelange Wartezeiten oder volle Wartezimmer."
    },
    {
      icon: FileCheck2,
      title: "Elektronische Dokumentation",
      description: "Ihre eAU, E-Rezepte und Arztbriefe werden sofort digital und rechtssicher in Ihre elektronische Patientenakte übertragen."
    },
    {
      icon: Video,
      title: "Moderne Telemedizin",
      description: "Hochauflösende Video-Diagnostik und intelligente Symptom-Erfassung für eine sichere, ortsunabhängige medizinische Versorgung."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <SectionWrapper className="border-t border-border/40 bg-muted/20 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 space-y-16 max-w-6xl mx-auto">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold tracking-tight"
          >
            Sicherheit und Qualität <br className="hidden sm:block"/> auf Klinikniveau
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Wir vereinen modernste Technologie mit strengen medizinischen Standards, um Ihnen eine sichere und vertrauenswürdige Behandlung zu garantieren.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trustFeatures.map((feature) => (
            <motion.div 
              key={feature.title} 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
