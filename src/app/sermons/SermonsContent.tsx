"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, RefreshCw, BookOpen, Clock, Play } from "lucide-react";
import { sermonsData, sermonSeries } from "@/data/sermons";
import { SermonCard } from "@/components/Card";
import { Input, Select } from "@/components/Input";
import { Button } from "@/components/Button";

export function SermonsView({ isEn = false }: { isEn?: boolean }) {
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpeaker, setSelectedSpeaker] = useState("all");
  const [selectedSeries, setSelectedSeries] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Get unique lists of Speakers, Series, and Topics
  const speakers = useMemo(() => {
    return ["all", "Ps Weslyn", "Bro Varghese Rayar"];
  }, []);

  const seriesOptions = useMemo(() => {
    const list = new Set(sermonsData.map(s => s.series));
    return ["all", ...Array.from(list)];
  }, []);

  const topics = useMemo(() => {
    const list = new Set(sermonsData.map(s => s.topic));
    return ["all", ...Array.from(list)];
  }, []);

  // Filter and Sort Sermons
  const filteredSermons = useMemo(() => {
    let list = [...sermonsData];

    // Filter by text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        s => 
          s.title.toLowerCase().includes(query) || 
          s.description.toLowerCase().includes(query) ||
          s.scriptureReference.toLowerCase().includes(query) ||
          s.speaker.toLowerCase().includes(query)
      );
    }

    // Filter by speaker
    if (selectedSpeaker !== "all") {
      list = list.filter(s => s.speaker === selectedSpeaker);
    }

    // Filter by series
    if (selectedSeries !== "all") {
      list = list.filter(s => s.series === selectedSeries);
    }

    // Filter by topic
    if (selectedTopic !== "all") {
      list = list.filter(s => s.topic === selectedTopic);
    }

    // Sort by date
    list.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });

    return list;
  }, [searchQuery, selectedSpeaker, selectedSeries, selectedTopic, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedSpeaker("all");
    setSelectedSeries("all");
    setSelectedTopic("all");
    setSortBy("newest");
  };

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black">{isEn ? "Sermon Library" : "செய்திகளின் தொகுப்பு"}</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            {isEn ? "Search, filter, and listen to recent gospel messages from our Sunday services." : "ஞாயிறு ஆராதனைகளில் கொடுக்கப்பட்ட செய்திகளைத் தேடி, வடிகட்டி, கேட்கலாம்."}
          </p>
        </div>
      </section>

      {/* 2. Search & Filters Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-border p-6 rounded-xl shadow-sm space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full md:flex-grow">
              <label htmlFor="search-sermons" className="sr-only">{isEn ? "Search sermons" : "செய்திகளைத் தேடுக"}</label>
              <input
                id="search-sermons"
                type="text"
                placeholder={isEn ? "Search by title, speaker, scripture..." : "தலைப்பு, போதகர், வசனம்..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-base"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-48 shrink-0">
              <Select
                label=""
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                options={[
                  { value: "newest", label: isEn ? "Date: Newest" : "தேதி: புதியது" },
                  { value: "oldest", label: isEn ? "Date: Oldest" : "தேதி: பழையது" }
                ]}
              />
            </div>
          </div>

          {/* Filtering Dropdowns Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Select
                label={isEn ? "Filter by Speaker" : "போதகர் மூலம் வடிகட்டவும்"}
                value={selectedSpeaker}
                onChange={(e) => setSelectedSpeaker(e.target.value)}
                options={speakers.map(s => ({ value: s, label: s === "all" ? (isEn ? "All Speakers" : "அனைத்து போதகர்களும்") : s }))}
              />
            </div>
            {/* Series and Topic filters are temporarily hidden */}
          </div>

          {/* Reset Filters Trigger */}
          {(searchQuery || selectedSpeaker !== "all" || selectedSeries !== "all" || selectedTopic !== "all") && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors border-b border-primary/20 pb-0.5"
              >
                <RefreshCw className="w-3 h-3" />
                {isEn ? "Clear Filters" : "வடிகட்டிகளை அழிக்கவும்"}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. Sermon Archive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredSermons.length > 0 ? (
          <div className="space-y-6">
            <div className="text-xs text-stone-500 font-semibold font-mono">
              {isEn ? "Showing" : ""} {filteredSermons.length} {filteredSermons.length === 1 ? (isEn ? "sermon" : "செய்தி காண்பிக்கப்படுகிறது") : (isEn ? "sermons" : "செய்திகள் காண்பிக்கப்படுகின்றன")}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} isEn={isEn} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-border rounded-xl space-y-3">
            <h3 className="font-serif text-xl font-bold text-primary">{isEn ? "No Sermons Found" : "எந்த செய்திகளும் இல்லை"}</h3>
            <p className="text-sm text-stone-500 max-w-sm mx-auto">
              {isEn ? "We couldn't find any messages matching your criteria. Try adjusting your search query or reset the filters." : "நீங்கள் தேடுவதைக் கண்டறிய உங்கள் தேடல் அல்லது வடிகட்டிகளை மாற்றவும்."}
            </p>
            <div className="pt-2">
              <Button onClick={handleResetFilters} variant="primary" size="sm">
                {isEn ? "Reset Filters" : "வடிகட்டிகளை அழிக்கவும்"}
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* 4. Featured Sermon Series grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border pt-16 space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Sermon Studies</span>
          <h2 className="font-serif text-3xl font-black text-primary">{isEn ? "Featured Sermon Series" : "சிறப்புத் தொடர்கள்"}</h2>
          <p className="text-sm text-stone-500">Examine scripture topically or book-by-book through our past teachings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sermonSeries.map((series, idx) => (
            <div key={idx} className="bg-white border border-border p-6 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20">
                    {series.count} {isEn ? "messages" : "செய்திகள்"}
                  </span>
                <h3 className="font-serif text-xl font-bold text-primary">{series.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{series.description}</p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => {
                    setSelectedSeries(series.title);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
                >
                  {isEn ? "View Messages" : "செய்திகளைப் பார்க்க"}
                <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
