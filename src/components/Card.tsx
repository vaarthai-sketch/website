import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, Video, BookOpen, User, Mail, ArrowRight } from "lucide-react";
import { Sermon } from "@/data/sermons";
import { ChurchEvent } from "@/data/events";
import { Ministry } from "@/data/ministries";
import { StaffMember } from "@/data/staff";

// Helper to render placeholder illustration using CSS gradients matching our theme
const ImagePlaceholder: React.FC<{ type: string; title: string; subtitle?: string }> = ({ type, title, subtitle }) => {
  const gradients: Record<string, string> = {
    sermon: "from-[#0F172A] to-[#1E293B]",
    event: "from-[#0F172A] via-[#1E293B] to-[#C5A059]",
    ministry: "from-[#020617] to-[#1E293B]",
    staff: "from-[#f5f2eb] to-[#e7e5e4] text-[#0F172A]"
  };

  const currentGradient = gradients[type] || "from-stone-700 to-stone-900";
  const isStaff = type === "staff";

  return (
    <div className={`w-full h-full bg-gradient-to-br ${currentGradient} flex flex-col justify-between p-6 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Visual Indicator top right */}
      <div className="self-end text-xs font-semibold uppercase tracking-widest opacity-60 text-white">
        {!isStaff && type}
      </div>

      <div className={isStaff ? "mt-auto text-primary" : "mt-auto text-white"}>
        {!isStaff && <div className="text-xs uppercase tracking-wider opacity-70 mb-1">{subtitle || "Vaarthai Evangelical Church"}</div>}
        <h4 className="font-serif text-lg font-bold line-clamp-2 leading-snug">
          {title}
        </h4>
      </div>
    </div>
  );
};

export const SermonCard: React.FC<{ sermon: Sermon }> = ({ sermon }) => {
  const formattedDate = new Date(sermon.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="aspect-video w-full relative overflow-hidden bg-neutral-light">
        <ImagePlaceholder type="sermon" title={sermon.title} />
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 font-mono">
          <Clock className="w-3 h-3" />
          {sermon.duration}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center gap-2 mb-2 text-xs font-bold text-accent-dark uppercase tracking-wider">
          <span>{sermon.series}</span>
        </div>
        
        <h3 className="font-serif text-xl font-bold text-primary group-hover:text-primary-light transition-colors line-clamp-1 mb-2">
          <Link href={`/sermons/${sermon.id}`}>
            {sermon.title}
          </Link>
        </h3>
        
        <p className="text-sm text-neutral-muted line-clamp-2 mb-4 flex-grow">
          {sermon.description}
        </p>

        <div className="border-t border-border pt-4 mt-auto flex flex-col gap-1.5 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-accent" />
            <span>{sermon.speaker}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span className="font-medium">{sermon.scriptureReference}</span>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-dashed border-border/80">
            <span>{formattedDate}</span>
            <Link 
              href={`/sermons/${sermon.id}`}
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-1 transition-colors"
            >
              Watch <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EventCard: React.FC<{ event: ChurchEvent; view?: "grid" | "list" }> = ({ event, view = "grid" }) => {
  const dateObj = new Date(event.date);
  const day = dateObj.toLocaleDateString("en-US", { day: "numeric" });
  const monthStr = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

  const categoryColors = {
    Worship: "bg-emerald-100 text-emerald-950 border-emerald-200",
    Community: "bg-blue-100 text-blue-950 border-blue-200",
    Youth: "bg-amber-100 text-amber-950 border-amber-200",
    Children: "bg-purple-100 text-purple-950 border-purple-200",
    "All-Church": "bg-stone-200 text-stone-900 border-stone-300",
    Groups: "bg-orange-100 text-orange-950 border-orange-200"
  };

  const currentCategoryClass = categoryColors[event.category] || "bg-stone-100 text-stone-800 border-stone-200";

  if (view === "list") {
    return (
      <div className="bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col md:flex-row gap-5 items-start md:items-center">
        {/* Date badge */}
        <div className="flex md:flex-col items-center justify-center bg-[#0F172A] border border-primary-light rounded-md px-4 py-3 md:w-20 w-full text-center shrink-0">
          <span className="text-2xl font-serif font-black text-white leading-none">{day}</span>
          <span className="text-xs font-extrabold text-accent-light tracking-wider md:mt-1 ml-2 md:ml-0">{monthStr}</span>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex flex-wrap gap-2 items-center mb-1.5">
            <span className={`text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider rounded-full border ${currentCategoryClass}`}>
              {event.category}
            </span>
            <span className="text-xs text-stone-500 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {event.time}
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-primary mb-1 hover:text-accent">
            <Link href={`/events/${event.id}`}>
              {event.title}
            </Link>
          </h3>
          <p className="text-sm text-neutral-muted line-clamp-1">
            {event.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 mt-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-accent" /> {event.location}
            </span>
            <span className="text-stone-400">|</span>
            <span>Organized by: {event.organizer}</span>
          </div>
        </div>

        {/* Button */}
        <div className="w-full md:w-auto shrink-0 mt-3 md:mt-0">
          <Link 
            href={`/events/${event.id}`}
            className="w-full md:w-auto text-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md text-sm font-semibold transition-all duration-200 inline-block"
          >
            Details
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="h-48 w-full relative overflow-hidden bg-neutral-light">
        <ImagePlaceholder type="event" title={event.title} />
        
        {/* Absolute Date Badge */}
        <div className="absolute top-3 left-3 bg-[#0F172A] text-center px-3 py-1.5 rounded shadow-sm border border-primary-light flex flex-col justify-center min-w-[50px]">
          <span className="text-lg font-serif font-black text-white leading-none">{day}</span>
          <span className="text-[9px] font-extrabold text-accent-light tracking-wider leading-none mt-0.5">{monthStr}</span>
        </div>

        <span className={`absolute bottom-3 left-3 text-[9px] px-2 py-0.5 font-bold uppercase tracking-wider rounded-full border shadow-sm ${currentCategoryClass} bg-white/95`}>
          {event.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-bold text-primary group-hover:text-primary-light transition-colors line-clamp-1 mb-2">
          <Link href={`/events/${event.id}`}>
            {event.title}
          </Link>
        </h3>
        <p className="text-sm text-neutral-muted line-clamp-3 mb-4 flex-grow">
          {event.description}
        </p>

        <div className="border-t border-border pt-4 mt-auto space-y-2 text-xs text-stone-600">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">{event.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex justify-end pt-2">
            <Link 
              href={`/events/${event.id}`}
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-1 transition-colors text-xs"
            >
              Details & RSVP <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MinistryCard: React.FC<{ ministry: Ministry; basePrefix?: string }> = ({ ministry, basePrefix = "" }) => {
  const isEn = basePrefix === "/en";
  const displayTitle = isEn ? (ministry.englishName || ministry.name) : ministry.name;
  const displayAudience = isEn 
    ? ((ministry as any).englishAudience || ministry.audience.replace(/\s*\([^)]*[\u0B80-\u0BFF][^)]*\)/g, "").trim())
    : ministry.audience;
  const displayPurpose = isEn ? ((ministry as any).englishPurpose || ministry.purpose) : ministry.purpose;

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="h-40 w-full relative overflow-hidden bg-neutral-light">
        {ministry.image && ministry.image.startsWith("/") ? (
          <img 
            src={ministry.image} 
            alt={displayTitle} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            style={{ objectPosition: ministry.id === "children" ? "center 15%" : ((ministry as any).imagePosition || "center") }}
          />
        ) : (
          <ImagePlaceholder type="ministry" title={displayTitle} subtitle={!isEn ? ministry.englishName : undefined} />
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {ministry.englishName && !isEn && (
          <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
            {ministry.englishName}
          </div>
        )}
        <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">
          <Link href={`${basePrefix}/ministries/${ministry.id}`}>
            {displayTitle}
          </Link>
        </h3>
        <p className="text-sm text-neutral-muted line-clamp-3 mb-4 flex-grow">
          {displayPurpose}
        </p>

        <div className="border-t border-border pt-4 mt-auto space-y-1.5 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-accent" />
            <span className="font-medium truncate">{displayAudience}</span>
          </div>
          {ministry.schedule && (
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span className="truncate">{ministry.schedule}</span>
            </div>
          )}
          <div className="flex justify-end pt-2">
            <Link 
              href={`${basePrefix}/ministries/${ministry.id}`}
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-1 transition-colors text-xs"
            >
              Learn More <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable standard Users icon replacement
const Users: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const StaffCard: React.FC<{ staff: StaffMember }> = ({ staff }) => {
  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full group">
      {/* Uniform Circular Cropped Photo Container */}
      <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-stone-100 shadow-md relative mb-5 bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        {staff.image ? (
          <img 
            src={staff.image} 
            alt={staff.name} 
            className="w-full h-full object-cover rounded-full bg-white transition-transform duration-300" 
            style={staff.imageStyle || { objectPosition: 'top' }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0F172A] to-[#334155] flex items-center justify-center text-white relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]"></div>
            <span className="font-serif text-3xl font-bold tracking-wider relative z-10">
              {staff.name.split(" ").slice(-1)[0][0]}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow w-full">
        <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent-dark transition-colors">{staff.name}</h3>
        <p className="text-xs text-accent-dark font-bold tracking-wider uppercase mt-1 mb-3">
          {staff.role}
        </p>
        <p className="text-sm text-stone-600 line-clamp-4 leading-relaxed flex-grow mb-5">
          {staff.bio}
        </p>

        <div className="border-t border-border/80 pt-3 mt-auto flex justify-center w-full">
          <a 
            href={`mailto:${staff.email}`}
            className="text-xs text-primary hover:text-accent font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-accent" />
            {staff.email}
          </a>
        </div>
      </div>
    </div>
  );
};
