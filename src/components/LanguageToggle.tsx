"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  const handleSwitch = (toEnglish: boolean) => {
    if (toEnglish && !isEnglish) {
      const target = pathname === "/" ? "/en" : `/en${pathname}`;
      try {
        localStorage.setItem("vaarthai_lang", "en");
      } catch {}
      router.push(target);
    } else if (!toEnglish && isEnglish) {
      const target = pathname.replace(/^\/en(\/|$)/, "$1") || "/";
      try {
        localStorage.setItem("vaarthai_lang", "ta");
      } catch {}
      router.push(target === "" ? "/" : target);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-1 bg-stone-100/90 hover:bg-stone-200/80 border border-stone-300/80 rounded-full p-1 text-xs font-bold transition-all duration-200 select-none shadow-xs ${className}`}
      role="group"
      aria-label="Select Language / மொழி"
    >
      <Globe className="w-3.5 h-3.5 text-accent ml-1.5 shrink-0" />
      <button
        type="button"
        onClick={() => handleSwitch(true)}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          isEnglish
            ? "bg-primary text-white shadow-sm"
            : "text-stone-600 hover:text-primary"
        }`}
        title="Switch to English version"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleSwitch(false)}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          !isEnglish
            ? "bg-primary text-white shadow-sm"
            : "text-stone-600 hover:text-primary"
        }`}
        title="தமிழ் மொழிக்கு மாற்றுக (Switch to Tamil version)"
      >
        தமிழ்
      </button>
    </div>
  );
};
