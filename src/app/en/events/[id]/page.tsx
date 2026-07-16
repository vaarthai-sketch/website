import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Mail, Tag, BookOpen } from "lucide-react";
import { eventsData } from "@/data/events";
import { EventRegistrationForm } from "@/components/EventRegistrationForm";
import { AddCalendarButton } from "@/components/AddCalendarButton";
import { JsonLd } from "@/components/JsonLd";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }));
}

export default async function EnglishEventDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const event = eventsData.find((e) => e.id === resolvedParams.id);

  if (!event) {
    notFound();
  }

  const displayTitle = event.englishTitle || event.title;
  const displayCategory = event.englishCategory || event.category;
  const displayDescription = event.englishDescription || event.description;
  const displayTime = event.englishTime || event.time;
  const displayLocation = event.englishLocation || event.location;
  const displayOrganizer = event.englishOrganizer || event.organizer;
  const displayScripture = event.englishScripture || event.scripture;

  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="pb-20 space-y-12">
      <JsonLd type="event" data={event} />

      {/* 1. Header Navigation Bar */}
      <section className="bg-neutral-light/50 border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/en/events" 
            className="text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Event Calendar
          </Link>
        </div>
      </section>

      {/* 2. Main content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main content details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20`}>
                <Tag className="w-3 h-3" />
                {displayCategory}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-primary leading-tight">
                {displayTitle}
              </h1>
            </div>

            {/* Custom abstract gradient cover layout placeholder */}
            <div className="aspect-[21/9] w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#0F172A] to-[#020617] relative p-8 flex flex-col justify-end text-white shadow-sm">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent-light mb-1">Vaarthai Evangelical Church Event</span>
              <h2 className="font-serif text-xl font-bold">{displayTitle}</h2>
            </div>

            {displayScripture && (
              <div className="bg-[#0F172A] text-white p-6 rounded-xl border border-primary-light/30 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-accent-light font-bold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" /> Scripture Focus
                </div>
                <p className="font-serif italic text-base sm:text-lg leading-relaxed text-stone-200">
                  {displayScripture}
                </p>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-primary">About the Event</h3>
              <p className="text-stone-600 leading-relaxed text-sm whitespace-pre-line">
                {displayDescription}
              </p>
            </div>

          </div>

          {/* Sidebar details & RSVP registration */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Logistics box */}
            <div className="bg-white border border-border p-6 rounded-xl shadow-sm space-y-5">
              
              <div className="flex justify-between items-start border-b border-border pb-3">
                <h3 className="font-serif text-lg font-bold text-primary">
                  When & Where
                </h3>
                <AddCalendarButton event={event} />
              </div>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Time & Date</span>
                    <span className="text-stone-900 font-bold block">{formattedDate}</span>
                    <span>{displayTime}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Location</span>
                    <span className="text-stone-900 font-bold block">{displayLocation}</span>
                  </div>
                </div>
              </div>

              {/* Organizer details */}
              <div className="bg-neutral-light/50 border border-border p-4 rounded-lg flex gap-3.5 items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-serif font-bold shrink-0">
                  {displayOrganizer[0]}
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Organizer</span>
                  <span className="text-stone-900 font-bold text-sm block truncate">{displayOrganizer}</span>
                  <a 
                    href={`mailto:${event.organizerEmail}`}
                    className="text-xs text-primary hover:text-accent font-semibold flex items-center gap-1 mt-0.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" /> {event.organizerEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white border border-border p-6 rounded-xl shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">
                Register & RSVP
              </h3>
              <p className="text-xs text-stone-500">
                Confirm your attendance for planning purposes. Sign up below:
              </p>
              <EventRegistrationForm eventTitle={displayTitle} isEn={true} />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
