"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, ChevronDown, ChevronRight } from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "./Button";
import { LanguageToggle } from "./LanguageToggle";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname?.startsWith("/en/");

  useEffect(() => {
    setIsOpen(false);
    setExpandedMobileMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const basePrefix = isEnglish ? "/en" : "";

  const navStructure = [
    { name: "HOME", href: isEnglish ? "/en" : "/" },
    { 
      name: "ABOUT US",
      dropdown: [
        { name: "Our Story", href: `${basePrefix}/about#our-story` },
        { name: "Mission, Vision & Values", href: `${basePrefix}/about#mission` },
        { name: "Statement of Faith", href: `${basePrefix}/about#faith` },
        { name: "Leadership", href: `${basePrefix}/about#leadership` },
        { name: "Governance & Charity Information", href: `${basePrefix}/about#governance` }
      ]
    },
    { 
      name: "MINISTRIES",
      megaMenu: [
        { 
          category: "Next Generation",
          items: [
            { name: "Kids Ministry", href: `${basePrefix}/ministries/children` },
            { name: "Youth Ministry", href: `${basePrefix}/ministries/youth` },
            { name: "Young Adults", href: `${basePrefix}/ministries/young-adults` }
          ]
        },
        { 
          category: "Community",
          items: [
            { name: "Life Groups", href: `${basePrefix}/ministries/small-groups` },
            { name: "Vaarthai Men", href: `${basePrefix}/ministries/men` },
            { name: "Vaarthai Women", href: `${basePrefix}/ministries/women` }
          ]
        },
        { 
          category: "Worship & Care",
          items: [
            { name: "Worship & Music", href: `${basePrefix}/ministries/worship` },
            { name: "Pastoral Care", href: `${basePrefix}/ministries/pastoral-care` }
          ]
        },
        { 
          category: "Mission",
          items: [
            { name: "Global Missions & Outreach", href: `${basePrefix}/ministries/missions` }
          ]
        },
      ]
    },
    {
      name: "MEDIA & RESOURCES",
      dropdown: [
        { name: "Sermons", href: `${basePrefix}/sermons` },
        { name: "Pastor's Desk", href: `${basePrefix}/pastors-desk` },
        { name: "Photo Gallery", href: `${basePrefix}/gallery` }
      ]
    },
    {
      name: "WHAT'S ON",
      dropdown: [
        { name: "Upcoming Events", href: `${basePrefix}/events` },
        { name: "Midweek Prayer", href: `${basePrefix}/events/mid-week-online-prayer` },
        { name: "Sunday Service", href: `${basePrefix}/plan-your-visit` }
      ]
    },
    { name: "CONTACT", href: `${basePrefix}/contact` },
  ];

  const toggleMobileMenu = (name: string) => {
    if (expandedMobileMenu === name) {
      setExpandedMobileMenu(null);
    } else {
      setExpandedMobileMenu(name);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/80" 
          : "bg-white/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link 
            href={isEnglish ? "/en" : "/"} 
            className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-sm border border-border p-0.5">
              <img 
                src="/logo.png" 
                alt={`${churchConfig.name} logo`} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-primary leading-tight tracking-tight sm:text-xl">
                {churchConfig.name}
              </span>
              <span className="text-[10px] text-accent font-semibold tracking-widest uppercase leading-none mt-0.5">
                Brisbane, {churchConfig.contact.address.state}
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center justify-end flex-grow ml-4 gap-6 xl:gap-8">
            <nav className="flex items-center gap-4 xl:gap-6" aria-label="Main Navigation">
            {navStructure.map((link) => {
              const isActive = pathname === link.href || (link.href && pathname.startsWith(link.href) && link.href !== (isEnglish ? '/en' : '/'));
              
              if (link.megaMenu) {
                return (
                  <div key={link.name} className="relative group py-6">
                    <button className="flex items-center gap-1 text-xs font-bold tracking-widest text-stone-700 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                      {link.name} <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-max max-w-5xl bg-white border border-border shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 p-8 grid grid-cols-4 gap-12 z-50">
                      {link.megaMenu.map((cat, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-xs font-bold text-accent uppercase tracking-widest border-b border-border pb-2">{cat.category}</h4>
                          <ul className="space-y-2">
                            {cat.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link 
                                  href={item.href}
                                  className="text-sm text-stone-600 hover:text-primary hover:font-medium transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group py-6">
                    <button className="flex items-center gap-1 text-xs font-bold tracking-widest text-stone-700 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                      {link.name} <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    
                    <div className="absolute top-full left-0 min-w-[240px] bg-white border border-border shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 py-2 z-50">
                      {link.dropdown.map((item, idx) => (
                        <Link 
                          key={idx}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-stone-600 hover:bg-neutral-light hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href!}
                  className={`text-xs font-bold tracking-widest transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm py-6 ${
                    isActive 
                      ? "text-accent border-b-2 border-accent" 
                      : "text-stone-700 hover:text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
            <LanguageToggle />
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-primary hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>



      {isOpen && (
        <div 
          className="lg:hidden bg-white border-b border-border shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto animate-fade-in-up" 
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            {navStructure.map((link) => {
              const hasChildren = link.dropdown || link.megaMenu;
              const isExpanded = expandedMobileMenu === link.name;
              
              if (hasChildren) {
                return (
                  <div key={link.name} className="border-b border-stone-100 last:border-0 pb-1">
                    <button
                      onClick={() => toggleMobileMenu(link.name)}
                      className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold tracking-widest text-stone-800 hover:bg-stone-50 rounded-md transition-colors"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                    
                    {isExpanded && (
                      <div className="pl-4 pr-3 py-2 space-y-4 bg-stone-50/50 rounded-md mt-1">
                        {link.dropdown && link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block py-2 text-sm text-stone-600 hover:text-primary border-l-2 border-transparent hover:border-accent pl-3 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                        
                        {link.megaMenu && link.megaMenu.map((cat, idx) => (
                          <div key={idx} className="space-y-2 pt-2 first:pt-0">
                            <span className="text-xs font-bold text-accent uppercase tracking-wider block pl-2">{cat.category}</span>
                            <div className="space-y-1 border-l border-stone-200 ml-2">
                              {cat.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  className="block py-1.5 pl-4 text-sm text-stone-600 hover:text-primary transition-colors"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href!}
                  className="block px-3 py-3 rounded-md text-sm font-bold tracking-widest text-stone-800 hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0"
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-6 px-3">
              <Button 
                href={`${basePrefix}/plan-your-visit`} 
                variant="accent" 
                fullWidth 
                className="py-3 font-bold flex items-center justify-center gap-2 uppercase tracking-widest text-xs mb-3"
              >
                PLAN YOUR VISIT
              </Button>
              <Button 
                href={`${basePrefix}/give`} 
                variant="primary" 
                fullWidth 
                className="py-3 font-bold flex items-center justify-center gap-2 uppercase tracking-widest text-xs !bg-emerald-600 hover:!bg-emerald-700 active:!bg-emerald-800 !border-transparent"
              >
                GIVE
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
