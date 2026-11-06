"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface EventCountdownProps {
  targetIso: string;
  isEn?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function calculateTimeLeft(targetIso: string): TimeLeft {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = target - now;

  if (isNaN(target) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: false,
  };
}

export const EventCountdown: React.FC<EventCountdownProps> = ({ targetIso, isEn = true }) => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetIso));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetIso));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetIso]);

  if (!mounted) {
    return (
      <div className="bg-gradient-to-r from-[#2A0B14] via-[#0F172A] to-[#2A0B14] border border-accent/40 rounded-xl p-5 text-white shadow-md">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-accent-light text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>{isEn ? "Countdown to Carolights '26" : "Carolights '26 நிகழ்விற்கு இன்னும்"}</span>
          </div>
          <span className="text-xs text-stone-300">28 Nov 2026 · 5:30 PM</span>
        </div>
      </div>
    );
  }

  if (timeLeft.isPast) {
    return (
      <div className="bg-gradient-to-r from-[#2A0B14] via-[#0F172A] to-[#2A0B14] border border-accent/40 rounded-xl p-5 text-white shadow-md text-center">
        <p className="font-heading text-lg font-bold text-accent-light">
          {isEn
            ? "Carolights '26 is Live / Completed — Thank you for celebrating with us!"
            : "Carolights '26 கிறிஸ்துமஸ் கொண்டாட்டம் ஆரம்பமானது!"}
        </p>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: isEn ? "Days" : "நாட்கள்" },
    { value: timeLeft.hours, label: isEn ? "Hours" : "மணி" },
    { value: timeLeft.minutes, label: isEn ? "Minutes" : "நிமிடங்கள்" },
    { value: timeLeft.seconds, label: isEn ? "Seconds" : "வினாடிகள்" },
  ];

  return (
    <div
      className="bg-gradient-to-r from-[#2A0B14] via-[#131C31] to-[#2A0B14] border border-accent/40 rounded-xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden"
      aria-label={isEn ? "Countdown timer to event" : "நிகழ்வுக்கான நேரக் கணக்கீடு"}
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-accent-light text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>{isEn ? "Countdown to Celebration" : "கொண்டாட்டத்திற்கு இன்னும்"}</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-200 font-medium">
            {isEn
              ? "Saturday, 28 November 2026 at 5:30 PM (Brisbane)"
              : "சனிக்கிழமை, 28 நவம்பர் 2026 · மாலை 5:30 மணி"}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
          {units.map((u) => (
            <div
              key={u.label}
              className="bg-black/40 border border-accent/30 rounded-lg px-2.5 py-2 sm:px-3.5 sm:py-2.5 min-w-[60px] sm:min-w-[68px] backdrop-blur-sm"
            >
              <div className="font-heading text-xl sm:text-2xl font-extrabold text-accent-light tabular-nums leading-none">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-stone-300 uppercase tracking-wider mt-1">
                {u.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
