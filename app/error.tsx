"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry in production
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="h-16 w-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>
      <h2 className="text-3xl font-semibold tracking-tight mb-3">
        Ein unerwarteter Fehler ist aufgetreten
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Wir bitten um Entschuldigung. Unser technisches Team wurde bereits benachrichtigt. Bitte versuchen Sie es erneut.
      </p>
      <Button 
        onClick={() => reset()} 
        size="lg"
        className="rounded-full gap-2 shadow-glow"
      >
        <RefreshCcw className="h-4 w-4" />
        Erneut versuchen
      </Button>
    </div>
  );
}
