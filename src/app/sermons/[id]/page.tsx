import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, Calendar, Download, Share2, User } from "lucide-react";
import { sermonsData } from "@/data/sermons";
import { churchConfig } from "@/data/config";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for Next.js build compilation (static site generation)
export async function generateStaticParams() {
  return sermonsData.map((sermon) => ({
    id: sermon.id,
  }));
}

export default async function SermonDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const sermon = sermonsData.find((s) => s.id === resolvedParams.id);

  if (!sermon) {
    notFound();
  }

  const formattedDate = new Date(sermon.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="pb-20 space-y-12">
      {/* Dynamic SEO JSON-LD schema metadata */}
      <JsonLd type="sermon" data={sermon} />

      {/* 1. Header Navigation Bar */}
      <section className="bg-neutral-light/50 border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/sermons" 
            className="text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Sermon Library
          </Link>
        </div>
      </section>

      {/* 2. Main content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main content: Player & Text details */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Video player placeholder */}
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-lg relative flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${sermon.youtubeId || "dQw4w9WgXcQ"}`}
                title={sermon.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            {/* Video player controls / mock bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 border border-border rounded-lg shadow-sm">
              <div className="flex items-center gap-4 text-xs text-stone-500 font-mono">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {sermon.duration} mins</span>
                <span>|</span>
                <span>Topic: <strong>{sermon.topic}</strong></span>
              </div>

              {/* Share & Download Buttons */}
              <div className="flex items-center gap-3">
                <Button 
                  href={sermon.notesUrl}
                  variant="outline" 
                  size="sm"
                  className="font-bold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Study Notes (PDF)
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-2.5 py-0.5 rounded border border-accent/20">
                {sermon.series}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-primary leading-tight">
                {sermon.title}
              </h1>
              <p className="text-stone-700 leading-relaxed text-base">
                {sermon.description}
              </p>
            </div>

            {/* Theology / Scripture Passage callout box */}
            <div className="bg-[#0F172A]/5 border-l-4 border-accent p-6 rounded-r-lg space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold">
                <BookOpen className="w-5 h-5 text-accent" />
                <h3 className="font-serif">Scripture Reading: {sermon.scriptureReference}</h3>
              </div>
              <p className="text-sm italic text-stone-700 leading-relaxed">
                "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work."
              </p>
              <cite className="block text-xs font-bold text-accent-dark tracking-wide uppercase not-italic">
                — 2 Timothy 3:16-17 ({churchConfig.bibleTranslation.split(" ")[0]})
              </cite>
            </div>

          </div>

          {/* Sidebar: Details & Info */}
          <div className="lg:col-span-4 bg-white border border-border p-6 rounded-xl shadow-sm space-y-6 self-start">
            
            <h3 className="font-serif text-lg font-bold text-primary border-b border-border pb-3">
              Sermon Details
            </h3>

            <div className="space-y-4 text-sm text-stone-600">
              
              <div className="space-y-1">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Speaker</span>
                <div className="flex items-center gap-2 text-stone-900 font-medium">
                  <User className="w-4 h-4 text-accent" />
                  <span>{sermon.speaker}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Date Preached</span>
                <div className="flex items-center gap-2 text-stone-900 font-medium">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>{formattedDate}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Primary Bible Verse</span>
                <div className="flex items-center gap-2 text-stone-900 font-medium">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span>{sermon.scriptureReference}</span>
                </div>
              </div>

            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <h4 className="font-serif font-bold text-stone-900 text-sm">
                About the Series
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                This message was preached during the series <strong>"{sermon.series}"</strong>, looking at foundational scripture passages.
              </p>
              <Link 
                href="/sermons" 
                className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors border-b border-primary/20 pb-0.5"
              >
                Browse messages in this series <ArrowLeft className="w-3 h-3 rotate-180" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
