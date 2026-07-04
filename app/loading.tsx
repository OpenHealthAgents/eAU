import { Activity } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing ring */}
        <div className="absolute w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        
        {/* Inner static branding */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center z-10">
          <Activity className="h-6 w-6 text-primary animate-pulse" />
        </div>
      </div>
      <p className="mt-6 text-sm font-medium text-muted-foreground animate-pulse tracking-widest uppercase">
        Lade CareVia AI...
      </p>
    </div>
  );
}
