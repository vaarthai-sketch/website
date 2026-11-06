import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Mail, Tag, BookOpen, Video, ExternalLink, Phone } from "lucide-react";
import { getEventsData } from "@/data/events";
import { EventRegistrationForm } from "@/components/EventRegistrationForm";
import { AddCalendarButton } from "@/components/AddCalendarButton";
import { EventCountdown } from "@/components/EventCountdown";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const event = getEventsData().find((e) => e.id === resolvedParams.id);

  if (!event) return {};

  return buildMetadata({
    locale: "ta",
    path: `/events/${event.id}`,
    title: `${event.title} | Tamil Church in Brisbane | Vaarthai`,
    description: event.description.substring(0, 160) + "...",
    image: event.image || "/opengraph-image.jpg",
  });
}

// Pre-render static params for build-time generation
export const revalidate = 3600;

export async function generateStaticParams() {
  return getEventsData().map((event) => ({
    id: event.id,
  }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const event = getEventsData().find((e) => e.id === resolvedParams.id);

  if (!event) {
    notFound();
  }

  const dateObj = new Date(`${event.date}T${event.startTimeIso || "10:00:00+10:00"}`);
  const formattedDate = dateObj.toLocaleDateString("ta-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Australia/Brisbane",
  });

  const targetIso = `${event.date}T${event.startTimeIso || "17:30:00+10:00"}`;

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
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20">
                <Tag className="w-3 h-3" />
                {event.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-primary leading-tight">
                {event.title}
              </h1>
            </div>

            {/* Countdown Timer (for upcoming special events like Carolights '26) */}
            {event.showCountdown && (
              <EventCountdown targetIso={targetIso} isEn={false} />
            )}

            {/* Cover image or Full Flyer Poster */}
            {event.image && event.image.startsWith("/") ? (
              event.imageHasText ? (
                <div className="w-full rounded-xl overflow-hidden shadow-lg border border-accent/30 bg-gradient-to-b from-[#2A0B14] via-[#131C31] to-[#0F172A] p-3 sm:p-6 flex justify-center">
                  <img
                    src={event.image}
                    alt={`${event.title} — Official Event Flyer`}
                    className="w-full max-w-lg h-auto rounded-lg shadow-2xl object-contain"
                  />
                </div>
              ) : (
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
              )
            ) : (
              <div className="aspect-[21/9] w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#0F172A] to-[#020617] relative p-8 flex flex-col justify-end text-white shadow-sm">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <span className="text-xs uppercase font-bold tracking-widest text-accent-light mb-1">
                  வார்த்தை சுவிசேஷ திருச்சபை நிகழ்வு
                </span>
                <h2 className="font-serif text-xl font-bold">{event.title}</h2>
              </div>
            )}

            {event.scripture && (
              <div className="bg-[#0F172A] text-white p-6 rounded-xl border border-primary-light/30 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-accent-light font-bold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" /> வேத வசனம்
                </div>
                <p className="font-serif text-base sm:text-lg leading-relaxed text-stone-200">
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

            {/* Livestream Link Card for Elderly & Overseas Family (India / Sri Lanka) */}
            {event.livestreamUrl && (
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white p-6 rounded-xl border border-accent/30 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-accent-light">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <Video className="w-4 h-4 text-accent" />
                    <span>நேரலை ஒளிபரப்பு · Watch Live Online</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    நேரில் வர இயலாத முதியோர்கள் மற்றும் இந்தியா, இலங்கை & வெளிநாடுகளில் உள்ள உறவினர்களுக்கு
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    பிரிஸ்பேன் நேரம் மாலை 5:30 மணி (இந்தியா / இலங்கை நேரம் மதியம் 1:00 மணி) முதல் எங்கள் YouTube பக்கத்தில் நேரலையில் (Livestream) கண்டு மகிழலாம்.
                  </p>
                </div>
                <a
                  href={event.livestreamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent hover:bg-accent-dark text-primary font-bold text-sm shadow-md transition-colors"
                >
                  <Video className="w-4 h-4" />
                  <span>Watch Live · நேரலை</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Sidebar details & RSVP registration */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logistics box */}
            <div className="bg-white border border-border p-6 rounded-xl shadow-sm space-y-5">
              <div className="flex justify-between items-center border-b border-border pb-3 gap-2">
                <h3 className="font-serif text-lg font-bold text-primary">
                  எப்பொழுது & எங்கே
                </h3>
                <AddCalendarButton event={event} isEn={false} />
              </div>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">
                      நேரம் & தேதி
                    </span>
                    <span className="text-stone-900 font-bold block">{formattedDate}</span>
                    <span>{event.time}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">
                      இடம் (Venue)
                    </span>
                    <span className="text-stone-900 font-bold block">{event.location}</span>
                    {event.mapLink && (
                      <a
                        href={event.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1 mt-1 transition-colors"
                      >
                        வரைபடத்தில் பார்க்க — Get Directions <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Organizer details */}
              <div className="bg-neutral-light/50 border border-border p-4 rounded-lg flex gap-3.5 items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-serif font-bold shrink-0">
                  {event.organizer[0]}
                </div>
                <div className="min-w-0 space-y-0.5">
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">
                    தொடர்புக்கு (Contact)
                  </span>
                  <span className="text-stone-900 font-bold text-sm block truncate">
                    {event.organizer}
                  </span>
                  <div className="flex flex-wrap items-center gap-3 pt-0.5">
                    {event.contactPhone && (
                      <a
                        href={`tel:${event.contactPhone.replace(/\s+/g, "")}`}
                        className="text-xs text-primary hover:text-accent font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-accent" /> {event.contactPhone}
                      </a>
                    )}
                    <a
                      href={`mailto:${event.organizerEmail}`}
                      className="text-xs text-primary hover:text-accent font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-accent" /> {event.organizerEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white border border-border p-6 rounded-xl shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">
                வருகைப் பதிவு (RSVP & Headcount)
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                நிகழ்ச்சிக்குப் பின் கிறிஸ்துமஸ் இரவு விருந்து வழங்கப்படுவதால், உணவு மற்றும் இருக்கை ஏற்பாடுகளுக்காக உங்கள் குடும்பத்தில் கலந்து கொள்ளும் பெரியவர்கள் மற்றும் குழந்தைகளின் எண்ணிக்கையை கீழே பதிவு செய்யவும்:
              </p>
              <EventRegistrationForm
                eventTitle={event.title}
                eventId={event.id}
                isEn={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
