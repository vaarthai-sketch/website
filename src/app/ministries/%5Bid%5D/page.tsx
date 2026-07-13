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

            {/* Custom styled gradient illustration block placeholder */}
            <div className="aspect-[21/9] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#020617] relative p-8 flex flex-col justify-end text-white shadow-sm">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent mb-1">Vaarthai Evangelical Church</span>
              <h2 className="font-serif text-xl font-bold">{ministry.name} Program</h2>
            </div>

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
