"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  ArrowRight,
  Clock,
  Video,
  Bot,
  Laptop,
  ShieldCheck
} from "lucide-react";

export function Physicians() {
  const benefits = [
    {
      icon: Clock,
      title: "Flexible Arbeitszeiten",
      description: "Arbeiten Sie zu Ihren eigenen Bedingungen. Wählen Sie Ihre Verfügbarkeit und führen Sie Sprechstunden von überall aus durch."
    },
    {
      icon: Video,
      title: "Fernbehandlungen",
      description: "Bieten Sie Patienten unabhängig von ihrem geografischen Standort eine hochwertige medizinische Versorgung."
    },
    {
      icon: Bot,
      title: "KI-gestützte Dokumentation",
      description: "Konzentrieren Sie sich auf den Patienten, während unsere KI automatisch klinische Notizen und eAUs entwirft."
    },
    {
      icon: Laptop,
      title: "Moderne Software",
      description: "Erleben Sie eine intuitive, schnelle und absturzsichere Plattform, die von Ärzten für Ärzte entwickelt wurde."
    },
    {
      icon: ShieldCheck,
      title: "Sichere Infrastruktur",
      description: "Seien Sie unbesorgt, da alle Patientendaten durch eine Ende-zu-Ende-Verschlüsselung auf Militärniveau geschützt sind."
    }
  ];

  return (
    <SectionWrapper className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        
        {/* Left: Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pr-8"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
              }}
              className={`p-6 rounded-2xl border border-border/50 glassmorphism shadow-sm hover:shadow-md transition-all duration-300 ${i === benefits.length - 1 ? 'sm:col-span-2' : ''}`}
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Copy & CTA */}
        <div className="space-y-8 lg:pl-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            <Stethoscope className="h-4 w-4" />
            Für Ärztinnen und Ärzte
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]"
          >
            Ihre Praxis der <br />
            <span className="text-gradient-premium">Zukunft.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Behandeln Sie Patienten ortsunabhängig und befreien Sie sich von zeitraubender Bürokratie. Unsere KI-gestützte Plattform übernimmt die Dokumentation, damit Sie sich wieder auf das konzentrieren können, was wirklich zählt: Die Medizin.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="pt-4"
          >
            <Button size="lg" className="h-12 px-8 text-base shadow-glow rounded-full group w-full sm:w-auto">
              Jetzt Arzt werden
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
}
