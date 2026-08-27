"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

export const PlanVisitButton: React.FC = () => {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname?.startsWith("/en/");
  const basePrefix = isEnglish ? "/en" : "";

  return (
    <div className="hidden lg:flex flex-col gap-3 items-end absolute top-[80px] right-8 xl:right-[calc(50vw-40rem)] mt-4 z-40">
      <Button 
        href={`${basePrefix}/plan-your-visit`} 
        variant="accent" 
        className="font-bold shadow-lg shadow-primary/20 uppercase tracking-widest text-xs px-6 py-3 w-44 flex justify-center text-center"
      >
        PLAN YOUR VISIT
      </Button>
      <Button 
        href={`${basePrefix}/give`} 
        variant="primary" 
        className="font-bold shadow-lg shadow-emerald-900/20 uppercase tracking-widest text-xs px-6 py-3 w-44 flex justify-center text-center !bg-emerald-600 hover:!bg-emerald-700 active:!bg-emerald-800 !border-transparent"
      >
        GIVE
      </Button>
    </div>
  );
};
