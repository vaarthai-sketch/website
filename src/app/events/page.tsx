"use client";

import React, { useState, useMemo } from "react";
import { Grid, List, Calendar, MapPin, Clock, Search, RefreshCw, AlertCircle } from "lucide-react";
import { eventsData } from "@/data/events";
import { EventCard } from "@/components/Card";
import { Select } from "@/components/Input";
import { Button } from "@/components/Button";

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Events" },
    { id: "Worship", label: "Worship" },
    { id: "Community", label: "Community & Outreach" },
    { id: "Youth", label: "Youth" },
    { id: "Children", label: "Children" },
    { id: "Groups", label: "Groups" }
  ];

  // Get featured event
  const featuredEvent = useMemo(() => {
    return eventsData.find(e => e.isFeatured) || eventsData[0];
  }, []);

  // Filter events
  const filteredEvents = useMemo(() => {
    let list = [...eventsData];

    // Filter by text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        e => 
          e.title.toLowerCase().includes(query) || 
          e.description.toLowerCase().includes(query) || 
          e.location.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (activeCategory !== "all") {
      list = list.filter(e => e.category === activeCategory);
    }

    // Sort by date ascending (soonest first)
    list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return list;
  }, [searchQuery, activeCategory]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
  };

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-[center_25%] bg-no-repeat"
        style={{ backgroundImage: "url('/events-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/50"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black">Upcoming Events</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Discover upcoming gatherings, service projects, and special services at Vaarthai Evangelical Church.
          </p>
        </div>
      </section>

      {/* 2. Featured Event Highlights (only if search is empty) */}
      {!searchQuery && activeCategory === "all" && featuredEvent && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-accent/20 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col lg:flex-row">
            {/* Visual placeholder */}
            <div className="lg:w-1/2 aspect-video lg:aspect-auto min-h-[250px] bg-gradient-to-br from-[#0F172A] to-[#020617] p-8 flex flex-col justify-between text-white relative">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <span className="relative z-10 self-start text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded">
                Featured Event
              </span>
              
              <div className="relative z-10 mt-auto">
                <span className="text-xs uppercase tracking-widest text-stone-300 font-semibold">Vaarthai Evangelical Church</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mt-1 line-clamp-2">
                  {featuredEvent.title}
                </h3>
              </div>
            </div>

            {/* Description Info */}
            <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center space-y-4">
              <span className={`self-start text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider rounded border bg-neutral-light border-border text-stone-700`}>
                {featuredEvent.category}
              </span>
              
              <p className="text-stone-600 text-sm leading-relaxed">
                {featuredEvent.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600 border-t border-border pt-4">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>{new Date(featuredEvent.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} <br /><strong>{featuredEvent.time}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{featuredEvent.location}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <Button href={`/events/${featuredEvent.id}`} variant="primary" size="sm" className="font-bold">
                  Details & RSVP
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Filtering & Layout Control Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-border p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-md border transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-stone-700 border-border hover:bg-neutral-light/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search query and view toggles */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-grow md:w-64">
              <label htmlFor="search-events" className="sr-only">Search events</label>
              <input
                id="search-events"
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-1.5 pl-8 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
            </div>

            {/* View toggles */}
            <div className="hidden sm:flex border border-border rounded-md overflow-hidden shrink-0 bg-stone-50">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${viewMode === "grid" ? "bg-primary text-white" : "text-stone-600 hover:bg-stone-100"}`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${viewMode === "list" ? "bg-primary text-white" : "text-stone-600 hover:bg-stone-100"}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Events Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length > 0 ? (
          <div className="space-y-6">
            <div className="text-xs text-stone-500 font-semibold font-mono">
              Showing {filteredEvents.length} upcoming {filteredEvents.length === 1 ? "event" : "events"}
            </div>
            
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} view="grid" />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} view="list" />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-border rounded-xl space-y-3">
            <AlertCircle className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-primary">No Events Found</h3>
            <p className="text-sm text-stone-500 max-w-sm mx-auto">
              We couldn't find any upcoming events matching your selection. Try adjusting your filters.
            </p>
            <div className="pt-2">
              <Button onClick={handleResetFilters} variant="primary" size="sm">
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
