"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Stethoscope, 
  Bot, 
  Video, 
  Pill, 
  FileCheck,
  CheckCircle2
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const dashboardSteps = [
    { icon: Stethoscope, label: "Symptoms", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Bot, label: "AI Intake", color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { icon: Video, label: "Video Consultation", color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: Pill, label: "Treatment", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: FileCheck, label: "eAU", color: "text-primary", bg: "bg-primary/10" },
  ];

  return (
    <SectionWrapper className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-16">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-brand-teal/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50 dark:opacity-20 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* Left Column: Copy */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Zugelassene Telemedizin-Plattform
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1]">
              Ärztliche Hilfe. <br />
              <span className="text-gradient-premium">In wenigen Minuten.</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground font-medium">
              Sprechen Sie online mit approbierten Ärztinnen und Ärzten.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              When medically appropriate, electronic sick certificates (eAU) and ePrescriptions can be issued following a physician&apos;s assessment.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-glow rounded-full">
              Termin buchen
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-base h-12 px-8 rounded-full group">
              So funktioniert&apos;s
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              100% DSGVO-konform
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Ohne Wartezimmer
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Animated Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
        >
          {/* Main Glass Panel */}
          <div className="w-full max-w-md glassmorphism-heavy rounded-2xl border border-white/20 dark:border-white/10 shadow-elevated p-6 relative z-20">
            <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Session
                </h3>
                <p className="text-xs text-muted-foreground font-mono">ID: ATH-992-04</p>
              </div>
              <div className="h-8 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center">
                In Progress
              </div>
            </div>

            <div className="space-y-4 relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent -z-10" />

              {dashboardSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.2, type: "spring", stiffness: 300, damping: 24 }}
                  className="flex items-center gap-4 bg-background/50 dark:bg-black/20 backdrop-blur-sm p-3 rounded-xl border border-border/50"
                >
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${step.bg} ${step.color}`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">{step.label}</p>
                    {i === 4 ? (
                      <p className="text-xs text-emerald-500 font-medium">Issued Successfully</p>
                    ) : (
                      <div className="h-1.5 w-full bg-muted rounded-full mt-1.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                          className={`h-full rounded-full ${i === dashboardSteps.length - 1 ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                        />
                      </div>
                    )}
                  </div>
                  {i < 4 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.2 }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Elements for 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 0.8 },
              y: { delay: 1.5, duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-6 -left-6 z-30 glassmorphism p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <FileCheck className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">eAU Ready</p>
              <p className="text-xs text-muted-foreground">Sent to employer</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.8, duration: 0.8 },
              y: { delay: 1.8, duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -top-6 -right-6 z-10 glassmorphism p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-background bg-blue-100 dark:bg-blue-900" />
              <div className="h-8 w-8 rounded-full border-2 border-background bg-indigo-100 dark:bg-indigo-900" />
              <div className="h-8 w-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                +4k
              </div>
            </div>
            <p className="text-xs font-medium text-muted-foreground">Licensed Doctors</p>
          </motion.div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
