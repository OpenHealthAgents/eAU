"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Activity, ArrowRight, HeartPulse, ShieldCheck, Sparkles, Stethoscope, Sun, Moon } from "lucide-react";

export default function DesignSystemPage() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 p-8 md:p-16 lg:p-24 overflow-x-hidden transition-colors duration-300">
      
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="outline" 
          size="lg" 
          onClick={toggleTheme}
          className="rounded-full shadow-lg glassmorphism border-border hover:scale-105 active:scale-95 transition-transform"
        >
          {isDark ? (
            <>
              <Sun className="h-4 w-4 mr-2 text-primary" />
              Light Mode
            </>
          ) : (
            <>
              <Moon className="h-4 w-4 mr-2 text-primary" />
              Dark Mode
            </>
          )}
        </Button>
      </div>

      <motion.div
        className="mx-auto max-w-6xl space-y-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.header variants={itemVariants} className="space-y-4">
          <Badge variant="outline" className="px-3 py-1 text-xs tracking-widest uppercase mb-4 border-primary/20 text-primary bg-primary/5">
            Design System 2.0
          </Badge>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gradient-premium leading-[1.1]">
            European AI Healthcare
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A complete design language built for clarity, trust, and advanced technology. 
            Inspired by top-tier modern tech companies with a clinical, robust edge.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 space-y-2 sticky top-24 h-fit hidden md:block">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Contents</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#colors" className="hover:text-primary transition-colors">Colors</a></li>
              <li><a href="#typography" className="hover:text-primary transition-colors">Typography</a></li>
              <li><a href="#components" className="hover:text-primary transition-colors">Components</a></li>
              <li><a href="#animations" className="hover:text-primary transition-colors">Animations</a></li>
            </ul>
          </div>

          <div className="md:col-span-9 space-y-32">
            
            {/* Colors Section */}
            <motion.section variants={itemVariants} id="colors" className="space-y-8 pt-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight">Colors</h2>
                <p className="text-muted-foreground">The foundational palette engineered for high contrast and modern aesthetics.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorCard name="Background" bg="bg-background" text="text-foreground" hex="var(--background)" />
                <ColorCard name="Foreground" bg="bg-foreground" text="text-background" hex="var(--foreground)" />
                <ColorCard name="Primary (Indigo)" bg="bg-primary" text="text-primary-foreground" hex="var(--primary)" />
                <ColorCard name="Brand Teal" bg="bg-[var(--brand-teal)]" text="text-white" hex="var(--brand-teal)" />
                <ColorCard name="Muted" bg="bg-muted" text="text-foreground" hex="var(--muted)" />
                <ColorCard name="Border" bg="bg-border" text="text-foreground" hex="var(--border)" />
                <ColorCard name="Destructive" bg="bg-destructive" text="text-destructive-foreground" hex="var(--destructive)" />
                <ColorCard name="Card" bg="bg-card" text="text-card-foreground" hex="var(--card)" hasBorder />
              </div>
            </motion.section>

            {/* Typography Section */}
            <motion.section variants={itemVariants} id="typography" className="space-y-8 pt-8 border-t border-border/40">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight">Typography</h2>
                <p className="text-muted-foreground">Geist sans-serif for crisp legibility and technical precision.</p>
              </div>
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="text-[5rem] leading-none font-semibold tracking-tighter">Display</div>
                  <div className="text-5xl font-semibold tracking-tight">Heading 1</div>
                  <div className="text-4xl font-semibold tracking-tight">Heading 2</div>
                  <div className="text-3xl font-semibold tracking-tight">Heading 3</div>
                  <div className="text-2xl font-semibold tracking-tight">Heading 4</div>
                  <div className="text-xl font-medium tracking-tight">Heading 5</div>
                </div>
                <div className="space-y-4 max-w-2xl">
                  <p className="text-lg leading-relaxed text-foreground">
                    <span className="font-semibold text-primary">Large Paragraph.</span> We are pioneering the next generation of predictive AI models for preventative care. By analyzing millions of longitudinal health records in real-time, our neural architectures uncover subtle pathological trajectories years before clinical onset.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Base Paragraph.</span> Built on zero-trust security principles and compliant with stringent European data protection standards (GDPR, HIPAA, ISO 27001), our infrastructure ensures patient data sovereignty while enabling breakthrough collaborative research.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Small text. Use this sparingly for captions, disclaimers, and secondary metadata that does not require immediate attention.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Components Section */}
            <motion.section variants={itemVariants} id="components" className="space-y-8 pt-8 border-t border-border/40">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight">Components & Interactions</h2>
                <p className="text-muted-foreground">Interactive elements with highly tuned physics and focus states.</p>
              </div>

              <div className="space-y-16">
                {/* Buttons */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Buttons</h3>
                  <div className="flex flex-wrap gap-4 items-center p-8 rounded-2xl bg-muted/30 border border-border/50">
                    <Button>Primary Action</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    {/* @ts-ignore */}
                    <Button variant="glass" className="glassmorphism">Glassmorphism</Button>
                  </div>
                </div>

                {/* Forms */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Form Controls</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-2xl bg-muted/30 border border-border/50">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="doctor@hospital.eu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="••••••••" />
                      </div>
                    </div>
                    <div className="space-y-6 flex flex-col justify-center">
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="hipaa" className="flex-1">Enable HIPAA Compliance Mode</Label>
                        <Switch id="hipaa" />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="notif" className="flex-1">Urgent Alert Notifications</Label>
                        <Switch id="notif" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cards */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Cards & Layouts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Standard Card */}
                    <Card>
                      <CardHeader>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                          <Activity className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle>Vitals Monitor AI</CardTitle>
                        <CardDescription>Real-time continuous monitoring with predictive anomalous event detection.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Heart Rate Avg</span>
                            <span className="font-medium">72 bpm</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--brand-teal)] w-[72%] rounded-full" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full group">
                          View Patient Data
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Glassmorphic Premium Card */}
                    <div className="relative rounded-xl overflow-hidden p-px bg-gradient-to-b from-border/50 to-transparent">
                      <div className="absolute inset-0 bg-gradient-premium opacity-50" />
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-50" />
                      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[var(--brand-teal)]/20 rounded-full blur-3xl opacity-50" />
                      
                      <Card className="relative glassmorphism-heavy border-0 h-full">
                        <CardHeader>
                          <div className="w-10 h-10 rounded-lg bg-white/10 dark:bg-black/20 flex items-center justify-center mb-2 border border-white/20">
                            <Sparkles className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-gradient-premium text-xl">RxOS Copilot</CardTitle>
                          <CardDescription>The next-generation diagnostic assistant powered by 100B+ parameter clinical models.</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Automatically synthesize patient history, current vitals, and lab results into highly accurate differential diagnoses within milliseconds.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Icons Grid */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Iconography (Lucide)</h3>
                  <div className="flex gap-6 p-8 rounded-2xl bg-muted/30 border border-border/50 text-muted-foreground">
                    <Stethoscope className="w-8 h-8 hover:text-primary transition-colors cursor-pointer" />
                    <HeartPulse className="w-8 h-8 hover:text-[var(--brand-teal)] transition-colors cursor-pointer" />
                    <Activity className="w-8 h-8 hover:text-primary transition-colors cursor-pointer" />
                    <ShieldCheck className="w-8 h-8 hover:text-[var(--brand-teal)] transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.section>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ColorCard({ name, bg, text, hex, hasBorder = false }: { name: string, bg: string, text: string, hex: string, hasBorder?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-xl ${hasBorder ? 'border border-border' : ''}`}>
      <div className={`h-24 w-full flex items-end p-3`} style={{ backgroundColor: hex }}>
        <span className={`text-xs font-medium ${text}`}>{hex}</span>
      </div>
      <div className="bg-card p-3 border-t border-border/50 text-sm font-medium">
        {name}
      </div>
    </div>
  )
}
