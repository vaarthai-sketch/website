import React from "react";
import Link from "next/link";
import { Compass, Home, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { churchConfig } from "@/data/config";

export default function NotFoundPage() {
  return (
    <div className="flex-grow flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6 animate-fade-in-up">
        
        {/* Visual Graphic */}
        <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary">
          <Compass className="w-12 h-12 text-accent animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-6xl font-black text-primary">404</h1>
          <h2 className="font-serif text-2xl font-bold text-stone-900">Page Not Found</h2>
          <p className="text-sm text-stone-600 leading-relaxed max-w-sm mx-auto">
            It looks like this link might be broken or the page was moved. Don't worry—you are still welcome here!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
          <Button href="/" variant="primary" className="w-full sm:w-auto font-bold flex items-center justify-center gap-1.5">
            <Home className="w-4 h-4" /> Go Back Home
          </Button>
          <Button href="/contact" variant="outline" className="w-full sm:w-auto font-bold flex items-center justify-center gap-1.5">
            <Mail className="w-4 h-4" /> Contact Support
          </Button>
        </div>

        <div className="text-[10px] text-stone-400 pt-4">
          {churchConfig.name} • Brisbane, QLD
        </div>

      </div>
    </div>
  );
}
