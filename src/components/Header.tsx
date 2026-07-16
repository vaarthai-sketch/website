"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Cross } from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "./Button";
import { LanguageToggle } from "./LanguageToggle";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const basePrefix = isEnglish ? "/en" : "";

  const navLinks = [
    { name: "Home", href: isEnglish ? "/en" : "/" },
    { name: "About", href: `${basePrefix}/about` },
    { name: "Ministries", href: `${basePrefix}/ministries` },
    { name: "Events", href: `${basePrefix}/events` },
    { name: "Photos", href: `${basePrefix}/gallery` },
    { name: "Give", href: `${basePrefix}/give` },
    { name: "Contact", href: `${basePrefix}/contact` },
  ];

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
          
          {/* Logo / Brand */}
          <Link 
            href="/" 
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-0.5 ${
                    isActive 
                      ? "text-accent border-b-2 border-accent pb-1" 
                      : "text-stone-700 hover:text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Join Us Sunday Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <Button 
              href={`${basePrefix}/plan-your-visit`} 
              variant="primary" 
              size="sm"
              className="font-bold flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              Join Us Sunday
            </Button>
          </div>

          {/* Mobile Language Toggle & Menu Button */}
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

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div 
          className="lg:hidden bg-white border-b border-border shadow-lg animate-fade-in-up" 
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-3 rounded-md text-base font-bold transition-all ${
                    isActive 
                      ? "bg-neutral-light text-accent pl-4 border-l-4 border-accent" 
                      : "text-stone-800 hover:bg-stone-50 hover:text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border px-3">
              <Button 
                href={`${basePrefix}/plan-your-visit`} 
                variant="primary" 
                fullWidth 
                className="py-3 font-bold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Join Us Sunday
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
