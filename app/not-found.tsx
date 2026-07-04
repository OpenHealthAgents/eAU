import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="h-20 w-20 rounded-3xl bg-muted/50 border border-border/50 flex items-center justify-center mb-8 shadow-sm">
          <SearchX className="h-10 w-10 text-muted-foreground" />
        </div>
        
        <h1 className="text-7xl font-bold tracking-tighter text-primary mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Seite nicht gefunden
        </h2>
        <p className="text-muted-foreground max-w-md mb-10 text-lg">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        
        <Link href="/">
          <Button size="lg" className="rounded-full gap-2 shadow-glow h-12 px-8">
            <Home className="h-4 w-4" />
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    </div>
  );
}
