"use client";

import React, { useState } from "react";
import { Calendar, Check } from "lucide-react";
import { Button } from "./Button";
import { ChurchEvent } from "@/data/events";

interface AddCalendarButtonProps {
  event: ChurchEvent;
}

export const AddCalendarButton: React.FC<AddCalendarButtonProps> = ({ event }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadIcs = () => {
    // Basic date parsing for .ics: YYYYMMDD
    const dateFormatted = event.date.replace(/-/g, "");
    
    // Create standard ICS file content
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Vaarthai Evangelical Church//Events Calendar//EN",
      "BEGIN:VEVENT",
      `UID:${event.id}@vaarthaichurch.org`,
      `DTSTAMP:${dateFormatted}T000000Z`,
      `DTSTART:${dateFormatted}T180000Z`, // Default starting time block
      `DTEND:${dateFormatted}T200000Z`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description.replace(/\n/g, "\\n")}`,
      `LOCATION:${event.location}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    
    // Trigger download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <Button
      onClick={handleDownloadIcs}
      variant="outline"
      size="sm"
      className="flex items-center gap-1.5 font-bold"
    >
      {downloaded ? (
        <>
          <Check className="w-4 h-4 text-accent" />
          Event Saved!
        </>
      ) : (
        <>
          <Calendar className="w-4 h-4" />
          Add to Calendar
        </>
      )}
    </Button>
  );
};
