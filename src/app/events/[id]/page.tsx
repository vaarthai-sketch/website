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

// Pre-render static params for build-time generation
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const event = eventsData.find((e) => e.id === resolvedParams.id);

  if (!event) {
    notFound();
  }

  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString("ta-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="pb-20 space-y-12">
      {/* JSON-LD Schema metadata for SEO events indexing */}
      <JsonLd type="event" data={event} />

      {/* 1. Header Navigation Bar */}
      <section className="bg-neutral-light/50 border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/events" 
            className="text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> நிகழ்வுகள் நாட்காட்டிக்குத் திரும்ப
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
                {event.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-primary leading-tight">
                {event.title}
              </h1>
            </div>

            {/* Cover image or abstract gradient cover */}
            {event.image && event.image.startsWith("/") ? (
              <div className="aspect-[21/9] w-full rounded-xl overflow-hidden relative shadow-sm bg-neutral-light">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-accent-light mb-1">
                    வார்த்தை சுவிசேஷ திருச்சபை நிகழ்வு
                  </span>
                  <h2 className="font-serif text-2xl font-bold">{event.title}</h2>
                </div>
              </div>
            ) : (
              <div className="aspect-[21/9] w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#0F172A] to-[#020617] relative p-8 flex flex-col justify-end text-white shadow-sm">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <span className="text-xs uppercase font-bold tracking-widest text-accent-light mb-1">வார்த்தை சுவிசேஷ திருச்சபை நிகழ்வு</span>
                <h2 className="font-serif text-xl font-bold">{event.title}</h2>
              </div>
            )}

            {event.scripture && (
              <div className="bg-[#0F172A] text-white p-6 rounded-xl border border-primary-light/30 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-accent-light font-bold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" /> வேத வசனம்
                </div>
                <p className="font-serif italic text-base sm:text-lg leading-relaxed text-stone-200">
                  {event.scripture}
                </p>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-primary">நிகழ்வு பற்றி</h3>
              <p className="text-stone-600 leading-relaxed text-sm whitespace-pre-line">
                {event.description}
              </p>
            </div>

          </div>

          {/* Sidebar details & RSVP registration */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Logistics box */}
            <div className="bg-white border border-border p-6 rounded-xl shadow-sm space-y-5">
              
              <div className="flex justify-between items-start border-b border-border pb-3">
                <h3 className="font-serif text-lg font-bold text-primary">
                  எப்பொழுது & எங்கே
                </h3>
                <AddCalendarButton event={event} />
              </div>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">நேரம் & தேதி</span>
                    <span className="text-stone-900 font-bold block">{formattedDate}</span>
                    <span>{event.time}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">இடம்</span>
                    <span className="text-stone-900 font-bold block">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Organizer details */}
              <div className="bg-neutral-light/50 border border-border p-4 rounded-lg flex gap-3.5 items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-serif font-bold shrink-0">
                  {event.organizer[0]}
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">பராமரிப்பாளர்</span>
                  <span className="text-stone-900 font-bold text-sm block truncate">{event.organizer}</span>
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
                பதிவு செய்க (RSVP)
              </h3>
              <p className="text-xs text-stone-500">
                இந்த நிகழ்வில் கலந்து கொள்ள உங்கள் வருகையை கீழே பதிவு செய்யவும்:
              </p>
              <EventRegistrationForm eventTitle={event.title} isEn={false} />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
