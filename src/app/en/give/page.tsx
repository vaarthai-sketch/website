"use client";

import React from "react";
import { 
  Heart, ShieldCheck, Mail, Smartphone, ArrowRight, DollarSign, Check, Info, FileText
} from "lucide-react";
import { churchConfig } from "@/data/config";

export default function EnglishGivePage() {

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5 me-1 md:text-5xl font-black">Online Giving</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Support our church ministries, missions, and community outreach through your faithful and generous giving.
          </p>
        </div>
      </section>

      {/* 2. Intro & Giving Portal Mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biblical and Financial Context */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">
              Giving as an Act of Worship
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm">
              All offerings and donations received by our church are dedicated entirely to gospel proclamation, children and youth ministries, pastoral care, and charitable outreach for those in need. We thank God for your faithful generosity.
            </p>

            {/* Quote block */}
            <div className="bg-neutral-light/50 border-l-4 border-accent p-5 rounded-r-lg">
              <p className="text-xs italic text-stone-700 leading-relaxed">
                &ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
              </p>
              <span className="block text-[10px] font-bold text-accent-dark tracking-widest uppercase mt-1">
                — 2 Corinthians 9:7 (ESV)
              </span>
            </div>

            {/* Financial Transparency panel */}
            <div className="border border-border p-6 rounded-lg bg-white space-y-3 shadow-sm">
              <h3 className="font-serif font-bold text-primary flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-accent" />
                Financial Transparency & Accountability
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our church&apos;s financial stewardship is overseen with complete transparency by our leadership board and external independent auditors. Annual financial reports are presented regularly to our church members.
              </p>
            </div>
          </div>

          {/* Secure Live Giving Portal Embed */}
          <div className="lg:col-span-5 bg-white border border-border rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-primary flex items-center gap-2">
                  <span>Planning Center Giving</span>
                </h3>
                <p className="text-[11px] text-stone-500">
                  Safe, encrypted, and direct online giving portal.
                </p>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> Live
              </span>
            </div>

            <div className="w-full bg-stone-50 rounded-lg overflow-hidden border border-border aspect-[4/5] min-h-[650px] relative">
              <iframe
                src="https://vaarthai.churchcenter.com/giving?embed=true"
                title="Vaarthai Church Online Giving Portal"
                className="w-full h-full border-0 absolute inset-0"
                allow="payment"
              />
            </div>

            <div className="pt-2 text-center">
              <a
                href={churchConfig.links.give}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-accent underline transition-colors"
              >
                Having trouble with the embed? Open full Giving Portal in a new tab <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Other Ways to Give Section */}
      <section className="bg-neutral-light/50 border-y border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">Other Ways to Give</h2>
            <p className="text-xs text-stone-500 mt-1">In addition to online giving, you can contribute using any of these traditional methods.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Cash & Checks */}
            <div className="bg-white p-6 border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">During Sunday Services</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  You may place cash or checks into the offering boxes situated at the rear of the sanctuary during any of our Sunday services.
                </p>
              </div>
            </div>

            {/* Mailing checks */}
            <div className="bg-white p-6 border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">By Mail</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Checks made payable to our church can be mailed securely to our church office: <br />
                  <strong>Vaarthai Evangelical Church, Attn: Finance, {churchConfig.contact.address.street}, {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}</strong>
                </p>
              </div>
            </div>

            {/* Bank Transfers */}
            <div className="bg-white p-6 border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">Direct Bank Transfer</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To set up a direct bank electronic funds transfer (EFT) from your account, please contact our church finance team for exact account details.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Giving FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">Frequently Asked Questions</h2>
          <p className="text-xs text-stone-500">Common questions regarding tithes, offerings, and tax receipts.</p>
        </div>

        <div className="space-y-4">
          <div className="border border-border p-5 rounded-lg bg-white space-y-2">
            <h3 className="font-serif font-bold text-stone-900">Will I receive an annual tax receipt for my contributions?</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Yes! Our church is a registered not-for-profit charitable entity. Consolidated annual tax receipts are issued to all contributors every year in late January.
            </p>
          </div>
          <div className="border border-border p-5 rounded-lg bg-white space-y-2">
            <h3 className="font-serif font-bold text-stone-900">Are there any transaction fees when giving online?</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Standard card processing fees (approximately 2-3%) may apply to credit and debit card gifts. To ensure 100% of your gift goes directly to ministry, you may opt for direct bank transfer or give in person on Sundays.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
