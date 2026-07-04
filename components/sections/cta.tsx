"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <SectionWrapper className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-primary px-6 py-24 sm:px-16 sm:py-32 flex flex-col items-center text-center shadow-2xl">
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/2 w-[100%] h-[150%] bg-gradient-to-br from-brand-teal via-transparent to-transparent opacity-30 blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, -90, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/2 -right-1/2 w-[100%] h-[150%] bg-gradient-to-tl from-indigo-500 via-transparent to-transparent opacity-30 blur-3xl"
            />
            
            {/* Grid overlay for texture */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              Starten Sie noch heute
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight"
            >
              Ihre Gesundheit. <br />
              <span className="text-white/80">Digital.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-xl mx-auto"
            >
              Erleben Sie die Zukunft der Telemedizin. Sicher, schnell und genau dann, wenn Sie sie brauchen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <Button 
                size="lg" 
                className="h-14 px-10 text-lg bg-white text-primary hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] rounded-full group transition-all duration-300"
              >
                Termin buchen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
