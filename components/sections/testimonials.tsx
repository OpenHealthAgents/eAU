"use client";

import { motion, Variants } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Thomas B.",
      role: "Patient",
      text: "Unglaublich effizient. Ich hatte am Sonntagmorgen starke Halsschmerzen und innerhalb von 15 Minuten einen Video-Termin. Das E-Rezept war sofort auf meinem Handy.",
      rating: 5,
      initials: "TB",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      name: "Dr. med. Sabine K.",
      role: "Allgemeinmedizinerin",
      text: "Die KI-gestützte Voranamnese nimmt mir extrem viel Dokumentationsarbeit ab. Die Plattform ist stabil, DSGVO-konform und lässt sich perfekt in meinen Praxisalltag integrieren.",
      rating: 5,
      initials: "SK",
      color: "bg-brand-teal/10 text-[var(--brand-teal)]"
    },
    {
      name: "Katharina M.",
      role: "Patientin",
      text: "Endlich eine Telemedizin-App, die nicht abstürzt! Die Ärztin war sehr freundlich und kompetent. Meine elektronische Krankschreibung ging direkt an meinen Arbeitgeber.",
      rating: 5,
      initials: "KM",
      color: "bg-purple-500/10 text-purple-500"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <SectionWrapper className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      
      <div className="relative z-10 space-y-16 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            Erfahrungsberichte
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Vertrauen durch Exzellenz.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Lesen Sie, was Patienten und Mediziner über ihre Erfahrungen mit unserer Plattform sagen.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glassmorphism p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  {/* Photo Placeholder */}
                  <div className={`h-12 w-12 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-lg shadow-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground tracking-tight">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
