import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Users, Mail, User, CheckCircle } from "lucide-react";
import { ministriesData } from "@/data/ministries";
import { MinistryInquiryForm } from "@/components/MinistryInquiryForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all 10 ministries for build-time generation
export async function generateStaticParams() {
  return ministriesData.map((ministry) => ({
    id: ministry.id,
  }));
}

export default async function MinistryDetailPage({ params }: PageProps) {
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
            href="/ministries" 
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
                {ministry.name}
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
                    style={{ objectPosition: (ministry as any).imagePosition || "center" }}
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
                <img src={ministry.image} alt={ministry.name} className="w-full h-full object-cover" style={{ objectPosition: (ministry as any).imagePosition || "center" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-accent mb-1 block">{ministry.englishName}</span>
                  <h2 className="font-serif text-xl font-bold">{ministry.name} Program</h2>
                </div>
              </div>
            ) : (
              <div className="aspect-[21/9] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#020617] relative p-8 flex flex-col justify-end text-white shadow-sm">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <span className="text-xs uppercase font-bold tracking-widest text-accent mb-1">{ministry.englishName || "Vaarthai Evangelical Church"}</span>
                <h2 className="font-serif text-xl font-bold">{ministry.name} Program</h2>
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
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Meeting Location</span>
                    <span className="text-stone-900 font-medium">{ministry.location}</span>
                  </div>
                </div>
              </div>

              {/* Leader contact card inside sidebar */}
              <div className="bg-neutral-light/50 border border-border p-4 rounded-lg flex gap-3.5 items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-serif font-bold font-black shrink-0">
                  {ministry.leaderName[0]}
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Leader Contact</span>
                  <span className="text-stone-900 font-bold text-sm block truncate">{ministry.leaderName}</span>
                  <a 
                    href={`mailto:${ministry.leaderEmail}`}
                    className="text-xs text-primary hover:text-accent font-semibold flex items-center gap-1 mt-0.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" /> Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white border border-border p-6 rounded-xl shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">
                Get Involved
              </h3>
              <p className="text-xs text-stone-500">
                Want to attend, serve, or ask a question? Fill out the brief form, and we'll reach out to guide you.
              </p>
              <MinistryInquiryForm ministryName={ministry.name} />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
