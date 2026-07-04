"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { 
  Thermometer, 
  Wind, 
  Brain, 
  ActivitySquare, 
  BatteryWarning,
  Sparkles,
  Loader2,
  Clock,
  UserCheck,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const SYMPTOMS = [
  { id: "fever", label: "Fieber", icon: Thermometer },
  { id: "cough", label: "Husten", icon: Wind },
  { id: "headache", label: "Kopfschmerzen", icon: Brain },
  { id: "sore-throat", label: "Halsschmerzen", icon: ActivitySquare },
  { id: "fatigue", label: "Müdigkeit", icon: BatteryWarning },
];

export function AiDemo() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "analyzing" | "result">("idle");
  const [progress, setProgress] = useState(0);

  const toggleSymptom = (id: string) => {
    if (status !== "idle") return;
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleAnalyze = () => {
    if (selectedSymptoms.length === 0) return;
    setStatus("analyzing");
    setProgress(0);
  };

  useEffect(() => {
    if (status === "analyzing") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus("result");
            return 100;
          }
          // Slow down the progress to make the animation visible (takes about 2.5 seconds total)
          return prev + 4;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [status]);

  const resetDemo = () => {
    setStatus("idle");
    setSelectedSymptoms([]);
    setProgress(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <SectionWrapper className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Copy */}
        <div className="space-y-6 max-w-lg">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            <Sparkles className="h-4 w-4" />
            Interaktive Demo
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            Erleben Sie unsere <span className="text-gradient-premium">KI-Triage.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Unser intelligentes Aufnahmesystem gleicht Ihre Symptome in Echtzeit mit verfügbaren Spezialisten ab und stellt sicher, dass Sie schneller denn je vom richtigen Arzt behandelt werden.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-3 p-4 rounded-xl border border-destructive/20 bg-destructive/5 text-destructive-foreground/80 mt-8"
          >
            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm">
              <strong className="font-semibold text-destructive">Hinweis:</strong> Dies ist nur eine UI-Demonstration. Sie bietet keine medizinischen Diagnosen oder Ratschläge. Wenden Sie sich bei tatsächlichen medizinischen Problemen immer an einen Arzt.
            </p>
          </motion.div>
        </div>

        {/* Right: Interactive UI Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
          className="relative w-full max-w-md mx-auto lg:mx-0 glassmorphism-heavy rounded-3xl border border-white/20 shadow-elevated p-8"
        >
          <AnimatePresence mode="wait">
            
            {/* STATE 1: IDLE */}
            {status === "idle" && (
              <motion.div
                key="idle"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-8"
              >
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-semibold">Wählen Sie Ihre Symptome</h3>
                  <p className="text-sm text-muted-foreground">Wählen Sie alle zutreffenden Symptome für die KI-Analyse aus.</p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {SYMPTOMS.map((symptom) => {
                    const isSelected = selectedSymptoms.includes(symptom.id);
                    return (
                      <motion.button
                        key={symptom.id}
                        variants={itemVariants}
                        onClick={() => toggleSymptom(symptom.id)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300",
                          isSelected 
                            ? "bg-primary border-primary text-primary-foreground shadow-glow" 
                            : "bg-background/50 border-border hover:border-primary/50 text-foreground"
                        )}
                      >
                        <symptom.icon className="h-4 w-4" />
                        <span className="font-medium text-sm">{symptom.label}</span>
                      </motion.button>
                    );
                  })}
                </div>

                <motion.div variants={itemVariants} className="pt-4">
                  <Button 
                    className="w-full shadow-glow rounded-xl h-12 text-base"
                    disabled={selectedSymptoms.length === 0}
                    onClick={handleAnalyze}
                  >
                    Symptome analysieren
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {/* STATE 2: ANALYZING */}
            {status === "analyzing" && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-12 space-y-8"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  <div className="h-20 w-20 bg-background rounded-full border-2 border-primary/20 flex items-center justify-center relative z-10">
                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  </div>
                </div>
                
                <div className="space-y-4 w-full text-center">
                  <h3 className="text-xl font-semibold animate-pulse">KI analysiert...</h3>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{progress}% Abgeschlossen</p>
                </div>
              </motion.div>
            )}

            {/* STATE 3: RESULT */}
            {status === "result" && (
              <motion.div
                key="result"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-8"
              >
                <motion.div variants={itemVariants} className="text-center space-y-2">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 mb-2">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">Treffer gefunden</h3>
                  <p className="text-sm text-muted-foreground">Allgemeinmediziner verfügbar</p>
                </motion.div>

                <div className="space-y-4">
                  <motion.div variants={itemVariants} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/50">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Geschätzte Wartezeit</p>
                      <p className="font-semibold">~2 Minuten</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/50">
                    <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                      <UserCheck className="h-5 w-5 text-[var(--brand-teal)]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Arzt verfügbar</p>
                      <p className="font-semibold">Dr. med. Sarah Schmidt</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="pt-4 space-y-3">
                  <Button className="w-full shadow-glow rounded-xl h-12 text-base">
                    Sprechstunde jetzt starten
                  </Button>
                  <Button variant="ghost" className="w-full rounded-xl" onClick={resetDemo}>
                    Demo zurücksetzen
                  </Button>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
