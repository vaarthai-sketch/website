"use client";

import React from "react";
import { 
  Heart, ShieldCheck, Mail, Smartphone, ArrowRight, DollarSign, Check, Info, FileText, ExternalLink
} from "lucide-react";
import { churchConfig } from "@/data/config";

export default function EnglishGivePage() {

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-[center_35%] bg-no-repeat shadow-md"
        style={{ backgroundImage: "url('/giving-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/50"></div>
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black tracking-tight drop-shadow-sm">Online Giving</h1>
          <p className="text-stone-200 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Support our church ministries, missions, and community outreach through your faithful and generous giving.
          </p>
        </div>
      </section>

      {/* 2. Biblical Foundation & Financial Transparency (Top Row) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="bg-white border border-border p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between h-full space-y-4">
            <div className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-black text-primary">
                Giving as an Act of Worship
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                All offerings and donations received by our church are dedicated entirely to gospel proclamation, children and youth ministries, pastoral care, and charitable outreach for those in need. We thank God for your faithful generosity.
              </p>
            </div>
            
            <div className="bg-neutral-light/50 border-l-4 border-accent p-4 rounded-r-lg mt-auto">
              <p className="text-xs italic text-stone-700 leading-relaxed">
                &ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
              </p>
              <span className="block text-[10px] font-bold text-accent-dark tracking-widest uppercase mt-1">
                — 2 Corinthians 9:7 (ESV)
              </span>
            </div>
          </div>

          <div className="bg-white border border-border p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between h-full space-y-4">
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-black text-primary flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                <span>Financial Transparency & Accountability</span>
              </h3>
              <p className="text-stone-700 leading-relaxed text-sm">
                Our church&apos;s financial stewardship is overseen with complete transparency by our leadership board and external independent auditors. Annual financial reports are presented regularly to our church members.
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mt-auto">
              <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                ✓ All financial contributions and transactions are handled with 100% integrity and godly stewardship.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Half & Half Giving Portals (Online & Offline/Other Ways - Bottom Row) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Secure Online Giving Card */}
          <div className="bg-[#F4F1E8] border border-[#E0DBCB] text-stone-900 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between relative overflow-hidden h-full space-y-6">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-300/80 pb-4">
                <div>
                  <span className="text-xs font-bold text-accent-dark uppercase tracking-widest block">SECURE ONLINE GIVING</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-primary flex items-center gap-2 mt-0.5">
                    <span>Vaarthai Tithes & Offerings</span>
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-full flex items-center gap-1.5 shrink-0 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span> 100% Secure
                </span>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                Your generous tithes and offerings help support the ongoing ministries and mission of Vaarthai Evangelical Church. All online donations are 100% securely processed to ensure your peace of mind. Easily give with any Credit/Debit Card, Apple Pay, or Google Pay.
              </p>

              <div className="bg-white/80 border border-[#E0DBCB] rounded-xl p-4 space-y-2 text-xs text-stone-700 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Check className="w-4 h-4 shrink-0 text-accent-dark" />
                  <span>Automated Recurring Giving & Receipts</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Through your secure online profile, you can easily set up automated recurring giving (weekly, bi-weekly, or monthly) and download your annual tax-deductible giving statements at any time.
                </p>
              </div>
            </div>

            {/* Launch CTA Button */}
            <div className="relative z-10 pt-4 space-y-3 mt-auto">
              <a
                href={churchConfig.links.give}
                data-open-in-church-center-modal="true"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base sm:text-lg shadow-md hover:scale-[1.01] transition-all duration-200 text-center cursor-pointer"
              >
                <span>Give Tithes & Offerings</span>
                <ExternalLink className="w-5 h-5 shrink-0" />
              </a>
              <p className="text-[11px] text-stone-500 text-center italic">
                * Clicking this button instantly opens our secure giving portal modal overlay right on this page.
              </p>
            </div>
          </div>

          {/* Box 2: Other Ways to Give Card */}
          <div className="bg-[#F4F1E8] border border-[#E0DBCB] text-stone-900 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between relative overflow-hidden h-full space-y-6">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            <div className="relative z-10 space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between border-b border-stone-300/80 pb-4">
                <div>
                  <span className="text-xs font-bold text-accent-dark uppercase tracking-widest block">OFFLINE & DIRECT GIVING</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-primary flex items-center gap-2 mt-0.5">
                    <span>Other Ways to Give</span>
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-stone-200/80 border border-stone-300 px-2.5 py-1 rounded-full flex items-center gap-1.5 shrink-0 shadow-2xs">
                  In-Person / EFT
                </span>
              </div>

              <div className="space-y-4 my-auto py-2">
                {/* Cash & Checks */}
                <div className="bg-white/80 border border-[#E0DBCB] p-4 rounded-xl flex gap-3.5 items-start shadow-2xs">
                  <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-dark shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif font-bold text-primary text-sm sm:text-base">During Sunday Services</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      You may place cash or checks into the offering boxes situated at the rear of the sanctuary during any of our Sunday services.
                    </p>
                  </div>
                </div>

                {/* Bank Transfers with Account Details */}
                <div className="bg-white/80 border border-[#E0DBCB] p-4 sm:p-5 rounded-xl space-y-3 shadow-2xs">
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-dark shrink-0 mt-0.5">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-serif font-bold text-primary text-sm sm:text-base">Direct Bank Transfer (EFT)</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        To set up a direct electronic funds transfer via your online banking, please use the exact account details below:
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#ECE8DF] border border-[#DDD6C8] rounded-lg p-3.5 space-y-2 text-xs text-stone-900 font-mono">
                    <div className="flex justify-between items-center border-b border-stone-300/80 pb-1.5">
                      <span className="text-stone-600 font-sans font-medium">Account Name:</span>
                      <span className="font-bold text-primary tracking-wide">Vaarthai Evangelical Church Inc</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-stone-300/80 pb-1.5">
                      <span className="text-stone-600 font-sans font-medium">BSB:</span>
                      <span className="font-bold text-accent-dark tracking-wider text-sm">064-173</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stone-600 font-sans font-medium">Account Number:</span>
                      <span className="font-bold text-primary tracking-wider text-sm font-mono">10857732</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-stone-300/80 mt-auto">
              <p className="text-[11px] text-stone-500 text-center italic">
                * Please contact our church finance office if you need assistance or bank transfer details.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
