import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-12 md:py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
