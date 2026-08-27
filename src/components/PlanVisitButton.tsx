"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

export const PlanVisitButton: React.FC = () => {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname?.startsWith("/en/");
  const basePrefix = isEnglish ? "/en" : "";

  return (
    <div className="hidden lg:block absolute top-[80px] right-8 xl:right-[calc(50vw-40rem)] mt-4 z-40">
      <Button 
        href={`${basePrefix}/plan-your-visit`} 
        variant="accent" 
        className="font-bold shadow-lg shadow-primary/20 uppercase tracking-widest text-xs px-6 py-3"
      >
        PLAN YOUR VISIT
      </Button>
    </div>
  );
};
