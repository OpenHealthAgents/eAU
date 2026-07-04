import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { AiDemo } from "@/components/sections/ai-demo";
import { Features } from "@/components/sections/features";
import { Timeline } from "@/components/sections/timeline";
import { Employers } from "@/components/sections/employers";
import { Physicians } from "@/components/sections/physicians";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Trust />
        <div id="patienten">
          <AiDemo />
          <Features />
          <Timeline />
        </div>
        <div id="unternehmen">
          <Employers />
        </div>
        <div id="aerzte">
          <Physicians />
        </div>
        <Testimonials />
        <div id="faq">
          <FAQ />
        </div>
        <div id="kontakt">
          <CTA />
        </div>
      </main>
    </div>
  );
}
