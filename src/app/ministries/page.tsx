"use client";

import React, { useState, useMemo } from "react";
import { Compass, Users, Calendar, ArrowRight } from "lucide-react";
import { ministriesData } from "@/data/ministries";
import { MinistryCard } from "@/components/Card";

export default function MinistriesPage() {
  const [activeTab, setActiveTab] = useState<"kids-students" | "adults" | "serve" | "care">("kids-students");

  const tabs = [
    { id: "kids-students", label: "Kids & Students" },
    { id: "adults", label: "Adult Groups" },
    { id: "serve", label: "Worship & Serving" },
    { id: "care", label: "Pastoral Care" }
  ];

  const filteredMinistries = useMemo(() => {
    switch (activeTab) {
      case "kids-students":
        return ministriesData.filter(m => ["children", "youth", "young-adults"].includes(m.id));
      case "adults":
        return ministriesData.filter(m => ["small-groups", "men", "women"].includes(m.id));
      case "serve":
        return ministriesData.filter(m => ["worship", "missions", "community-outreach"].includes(m.id));
      case "care":
        return ministriesData.filter(m => ["pastoral-care"].includes(m.id));
      default:
        return ministriesData.filter(m => ["children", "youth", "young-adults"].includes(m.id));
    }
  }, [activeTab]);

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-[center_25%] bg-no-repeat"
        style={{ backgroundImage: "url('/ministries-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/50"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black">Our Ministries</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Discover the active communities, classes, and outreach programs where you can connect and serve.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-stone-700 border-border hover:bg-neutral-light/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Ministries Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMinistries.map((ministry) => (
            <MinistryCard key={ministry.id} ministry={ministry} />
          ))}
        </div>
      </section>

      {/* 4. Support banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] text-white p-8 sm:p-12 rounded-xl text-center space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="space-y-2 max-w-2xl mx-auto relative z-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-black">Not sure where you fit?</h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              We would love to help you find the right group, volunteer team, or class. Contact our community connections team, and we'll reach out to answer your questions.
            </p>
          </div>

          <div className="pt-4 relative z-10">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 font-semibold bg-accent text-white hover:bg-accent-light rounded-md transition-colors"
            >
              Get Connected
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
