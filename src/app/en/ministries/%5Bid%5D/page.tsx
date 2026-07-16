import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Users, Mail, User, CheckCircle } from "lucide-react";
import { ministriesData } from "@/data/ministries";
import { MinistryInquiryForm } from "@/components/MinistryInquiryForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ministriesData.map((ministry) => ({
    id: ministry.id,
  }));
}

export default async function EnglishMinistryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const ministry = ministriesData.find((m) => m.id === resolvedParams.id);

  if (!ministry) {
    notFound();
  }

  return (
    <div className="pb-20 space-y-12">
      
      {/* 1. Header Navigation Bar */}
      <section className="bg-neutral-light/50 border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/en/ministries" 
            className="text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Ministries
          </Link>
        </div>
      </section>

      {/* 2. Main content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main content: Description & Features */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-2.5 py-0.5 rounded border border-accent/20">
                Ministry Community
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-primary leading-tight">
                {ministry.englishName || ministry.name}
              </h1>
              <p className="text-stone-700 leading-relaxed text-base md:text-lg font-light">
                {ministry.purpose}
              </p>
            </div>

            {/* Custom Box: Scripture + Miniature Photo (if scripture available) OR Full Image OR Gradient Block */}
            {ministry.scripture && ministry.image && ministry.image.startsWith("/") ? (
              <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-accent/30 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Miniature Photo inside the box */}
                <div className="w-full sm:w-56 md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-2 border-accent/40 shrink-0 relative z-10 bg-white">
                  <img 
                    src={ministry.image} 
                    alt={ministry.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Scripture quote inside the box */}
                <div className="space-y-3 relative z-10 flex-grow text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-xs font-bold uppercase tracking-wider">
                    <span>{ministry.englishName || "Biblical Foundation"}</span>
                  </div>
                  <blockquote className="font-serif text-lg sm:text-xl italic font-medium leading-relaxed text-stone-100">
                    {ministry.scripture}
                  </blockquote>
                  {ministry.scriptureReference && (
                    <cite className="block text-xs font-bold text-accent uppercase tracking-widest not-italic">
                      — {ministry.scriptureReference}
                    </cite>
                  )}
                </div>
              </div>
            ) : ministry.image && ministry.image.startsWith("/") ? (
              <div className="aspect-[21/9] w-full rounded-xl overflow-hidden relative shadow-sm border border-border">
                <img src={ministry.image} alt={ministry.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-accent mb-1 block">{ministry.englishName}</span>
                  <h2 className="font-serif text-xl font-bold">{ministry.englishName || ministry.name} Program</h2>
                </div>
              </div>
            ) : (
              <div className="aspect-[21/9] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#020617] relative p-8 flex flex-col justify-end text-white shadow-sm">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <span className="text-xs uppercase font-bold tracking-widest text-accent mb-1">{ministry.englishName || "Vaarthai Evangelical Church"}</span>
                <h2 className="font-serif text-xl font-bold">{ministry.englishName || ministry.name} Program</h2>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-primary">About Our Ministry</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {ministry.description}
              </p>
            </div>

            {/* Checklist of Ministry Highlights */}
            {ministry.features && ministry.features.length > 0 && (
              <div className="space-y-4 border-t border-border pt-6">
                <h3 className="font-serif text-lg font-bold text-primary">What You Can Expect</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ministry.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start text-stone-700 text-sm">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar: Logistics details & RSVP form */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Logistics box */}
            <div className="bg-white border border-border p-6 rounded-xl shadow-sm space-y-5">
              <h3 className="font-serif text-lg font-bold text-primary border-b border-border pb-3">
                Gathering Details
              </h3>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex gap-3">
                  <Users className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Intended Audience</span>
                    <span className="text-stone-900 font-medium">{ministry.audience}</span>
                  </div>
                </div>

                {ministry.schedule && (
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Meeting Schedule</span>
                      <span className="text-stone-900 font-medium">{ministry.schedule}</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Location</span>
                    <span className="text-stone-900 font-medium">{ministry.location}</span>
                  </div>
                </div>
              </div>

              {/* Leader contact */}
              <div className="border-t border-border pt-4 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">{ministry.leaderName}</span>
                    <span className="text-[11px] text-stone-500 block">{ministry.leaderTitle}</span>
                  </div>
                </div>
                <a 
                  href={`mailto:${ministry.leaderEmail}`}
                  className="p-2 text-primary hover:text-accent transition-colors"
                  title={`Email ${ministry.leaderName}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Ministry RSVP / Inquiry Form */}
            <div className="bg-neutral-light border border-border p-6 sm:p-8 rounded-xl shadow-sm">
              <div className="mb-6 space-y-1">
                <h3 className="font-serif text-lg font-bold text-primary">Get Involved / Ask Questions</h3>
                <p className="text-xs text-stone-600">
                  Fill out your details below and our team will get in touch with you.
                </p>
              </div>
              <MinistryInquiryForm ministryName={ministry.englishName || ministry.name} />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
