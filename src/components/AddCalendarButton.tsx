"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar, Check, ChevronDown } from "lucide-react";
import { ChurchEvent } from "@/data/events";

interface AddCalendarButtonProps {
  event: ChurchEvent;
  isEn?: boolean;
}

function toUtcCalendarStamp(dateStr: string, timeIso?: string, fallbackHourUtc = "000000"): string {
  const iso = `${dateStr}T${timeIso || "10:00:00+10:00"}`;
  const parsed = new Date(iso);
  if (isNaN(parsed.getTime())) {
    return `${dateStr.replace(/-/g, "")}T${fallbackHourUtc}Z`;
  }
  return parsed.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

export const AddCalendarButton: React.FC<AddCalendarButtonProps> = ({ event, isEn = true }) => {
  const [open, setOpen] = useState(false);
  const [savedLabel, setSavedLabel] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const title = isEn ? event.englishTitle || event.title : event.title;
  const location = isEn ? event.englishLocation || event.location : event.location;
  const description = isEn ? event.englishDescription || event.description : event.description;

  const dtStartUtc = toUtcCalendarStamp(event.date, event.startTimeIso, "073000");
  const dtEndUtc = toUtcCalendarStamp(event.date, event.endTimeIso, "110000");

  const startIso = `${event.date}T${event.startTimeIso || "10:00:00+10:00"}`;
  const endIso = `${event.date}T${event.endTimeIso || "12:00:00+10:00"}`;

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${dtStartUtc}/${dtEndUtc}&details=${encodeURIComponent(
    description
  )}&location=${encodeURIComponent(location)}&ctz=Australia/Brisbane`;

  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(
    title
  )}&startdt=${encodeURIComponent(startIso)}&enddt=${encodeURIComponent(
    endIso
  )}&body=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

  const handleDownloadIcs = () => {
    const nowStamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Vaarthai Evangelical Church Inc//Events Calendar//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${event.id}-${event.date}@vaarthai.org.au`,
      `DTSTAMP:${nowStamp}`,
      `DTSTART:${dtStartUtc}`,
      `DTEND:${dtEndUtc}`,
      `SUMMARY:${title.replace(/,/g, "\\,")}`,
      `DESCRIPTION:${description.replace(/\r?\n/g, "\\n").replace(/,/g, "\\,")}`,
      `LOCATION:${location.replace(/,/g, "\\,")}`,
      `URL:https://www.vaarthai.org.au/events/${event.id}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setOpen(false);
    setSavedLabel(isEn ? "Calendar File Saved!" : "நாட்காட்டியில் சேர்க்கப்பட்டது!");
    setTimeout(() => setSavedLabel(null), 3000);
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {savedLabel ? (
          <>
            <Check className="w-3.5 h-3.5 text-accent" />
            <span>{savedLabel}</span>
          </>
        ) : (
          <>
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>{isEn ? "Add to Calendar" : "நாட்காட்டியில் சேர்க்க"}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
          </>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-52 rounded-lg bg-white border border-border shadow-xl py-1.5 z-30 text-xs font-semibold text-stone-800"
        >
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-2.5 hover:bg-neutral-light hover:text-primary transition-colors"
          >
            <span>Google Calendar</span>
            <span className="text-[10px] text-stone-400">Web / App</span>
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={handleDownloadIcs}
            className="w-full text-left flex items-center justify-between px-4 py-2.5 hover:bg-neutral-light hover:text-primary transition-colors cursor-pointer"
          >
            <span>Apple Calendar</span>
            <span className="text-[10px] text-stone-400">.ics</span>
          </button>
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-2.5 hover:bg-neutral-light hover:text-primary transition-colors"
          >
            <span>Outlook Web</span>
            <span className="text-[10px] text-stone-400">365 / Live</span>
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={handleDownloadIcs}
            className="w-full text-left flex items-center justify-between px-4 py-2.5 hover:bg-neutral-light hover:text-primary transition-colors border-t border-border/60 cursor-pointer"
          >
            <span>Outlook Desktop / Other</span>
            <span className="text-[10px] text-stone-400">.ics</span>
          </button>
        </div>
      )}
    </div>
  );
};
