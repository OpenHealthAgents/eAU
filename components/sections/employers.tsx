"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  ArrowRight,
  TrendingDown,
  Users,
  Activity,
  CheckCircle2,
  PieChart,
  BriefcaseMedical
} from "lucide-react";

export function Employers() {
  const benefits = [
    "Schneller Zugang zu Ärzten",
    "Digitale Workflows",
    "Reduzierter Verwaltungsaufwand",
    "Analyse-Dashboard",
    "Arbeitgeber-Portal"
  ];

  return (
    <SectionWrapper className="py-24 overflow-hidden relative bg-muted/20">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            <Building2 className="h-4 w-4" />
            Für Unternehmen
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]"
          >
            Digitale Gesundheitsversorgung <br className="hidden lg:block"/>
            <span className="text-gradient-premium">für Unternehmen.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            Investieren Sie in die Gesundheit Ihres Teams. Reduzieren Sie Fehlzeiten durch sofortigen Facharzt-Zugang und minimieren Sie den administrativen Aufwand durch voll-digitale eAU-Prozesse.
          </motion.p>

          <motion.ul 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="space-y-4 max-w-md"
          >
            {benefits.map((benefit, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-3 font-medium text-foreground"
              >
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                {benefit}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.8 }}
            className="pt-4"
          >
            <Button size="lg" className="h-12 px-8 text-base shadow-glow rounded-full group">
              Demo anfragen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Right Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
        >
          {/* Main Dashboard Window */}
          <div className="w-full max-w-lg glassmorphism-heavy rounded-2xl border border-white/20 dark:border-white/10 shadow-elevated overflow-hidden flex flex-col relative z-20">
            
            {/* Dashboard Header */}
            <div className="h-14 border-b border-border/50 bg-background/50 backdrop-blur-md px-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Arbeitgeber-Portal
              </div>
              <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center">
                <Building2 className="h-3.5 w-3.5 text-primary" />
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-6 space-y-6 bg-background/80">
              
              {/* Top Stats Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border/50 bg-card shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-xs font-medium uppercase tracking-wider">Gesundheitsindex</span>
                    <Activity className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold">94.2%</span>
                    <span className="text-xs text-emerald-500 font-medium mb-1 flex items-center">
                      +2.4%
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border/50 bg-card shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-xs font-medium uppercase tracking-wider">Krankheitstage</span>
                    <TrendingDown className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold">-14%</span>
                    <span className="text-xs text-primary font-medium mb-1">
                      vs. Vorquartal
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart Area Abstract */}
              <div className="p-5 rounded-xl border border-border/50 bg-card shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <PieChart className="h-4 w-4 text-primary" />
                  eAU-Bearbeitungszeit
                </div>
                <div className="h-32 flex items-end justify-between gap-2 pt-4">
                  {[40, 70, 45, 90, 65, 30, 85].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1), type: "spring", damping: 12 }}
                      className={`w-full rounded-t-sm ${i === 6 ? 'bg-primary' : 'bg-primary/20'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Recent Activity List */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Letzte eAU-Übermittlungen
                </div>
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border/40 bg-card/50">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 w-20 bg-muted-foreground/20 rounded-full" />
                        <div className="h-1.5 w-12 bg-muted-foreground/10 rounded-full" />
                      </div>
                    </div>
                    <div className="h-5 px-2 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold flex items-center">
                      GEPRÜFT
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Floating UI Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="absolute -right-4 md:-right-8 -bottom-6 md:-bottom-8 z-30 glassmorphism p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-3 animate-pulse"
            style={{ animationDuration: '4s' }}
          >
            <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
              <BriefcaseMedical className="h-5 w-5 text-brand-teal" />
            </div>
            <div>
              <p className="text-sm font-semibold">Vollständig integriert</p>
              <p className="text-xs text-muted-foreground">HR-Software-Synchronisation</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </SectionWrapper>
  );
}
