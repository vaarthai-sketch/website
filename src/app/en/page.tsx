import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Compass, Heart, MessageSquare } from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "@/components/Button";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata = {
  title: `Welcome | ${churchConfig.name} - Evangelical Church in Brisbane`,
  description: `Welcome to ${churchConfig.name}. We are a Gospel-centered Tamil and multi-generational church community in Brisbane, loving God and making disciples.`,
};

export default function EnglishHomePage() {

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative text-white py-24 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-label="Welcome"
      >
        {/* Dark overlay to ensure text readability but allow image to show */}
        <div className="absolute inset-0 bg-[#0F172A]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#0F172A]/50 to-transparent"></div>
        
        {/* Background Visual Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <span className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-sm sm:text-base font-extrabold text-accent-light bg-accent/15 border border-accent/30 shadow-sm backdrop-blur-sm transition-all hover:bg-accent/20 hover:scale-[1.02] duration-300 select-none">
                <svg className="w-4 h-4 text-accent fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2h2v7h6v2h-6v11h-2v-11h-6v-2h6V2z" />
                </svg>
                A Warm Welcome to Vaarthai Evangelical Church
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-[1.3] text-white">
                Hearing the Word. <span className="text-accent">Living the Word.</span> Sharing the Word.
              </h1>
              <p className="text-base text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
                Wherever you are on your spiritual journey, our church welcomes you with open arms. Join us to worship God, grow in community, and walk closely with Christ.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Button href="/en/plan-your-visit" variant="accent" size="lg" className="font-bold shadow-md">
                  Plan Your Visit
                </Button>
                <Button href="/en/pastors-desk" variant="outline" size="lg" className="border-white text-white hover:bg-accent hover:border-accent hover:border-2 hover:text-white font-bold">
                  From the Pastor
                </Button>
              </div>

              {/* Service times banner */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-4 text-sm text-stone-300">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>Sunday Service: <strong>10:00 AM (Brisbane, QLD, Australia)</strong></span>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center gap-6">
              {/* Main church logo in original colors, scaled up to fit the area */}
              <div className="w-48 h-48 lg:w-64 lg:h-64 select-none">
                <img 
                  src="/logo.png" 
                  alt={`${churchConfig.name} logo`} 
                  className="w-full h-full object-contain" 
                />
              </div>

              {/* Premium abstract card placeholder representing the church community */}
              <div className="relative w-full max-w-[360px] aspect-[1.35] rounded-xl overflow-hidden shadow-2xl border border-primary-light bg-gradient-to-tr from-primary to-[#334155] p-6 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="self-start flex items-center gap-2 relative z-10">
                  <div className="w-7 h-7 rounded bg-white flex items-center justify-center p-0.5 shadow-sm border border-white/10 shrink-0">
                    <img 
                      src="/logo.png" 
                      alt="logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-accent-light font-serif">
                    {churchConfig.shortName}
                  </div>
                </div>
                
                <div className="my-auto space-y-3 relative z-10">
                  <div className="w-12 h-0.5 bg-accent"></div>
                  <blockquote className="font-serif text-lg italic font-medium leading-relaxed text-stone-100">
                    &ldquo;In the beginning was the Word, and the Word was with God, and the Word was God.&rdquo;
                  </blockquote>
                  <cite className="block text-xs font-bold text-accent uppercase tracking-widest not-italic">
                    — John 1:1 (ESV)
                  </cite>
                </div>
                
                <div className="flex justify-between items-center text-[11px] text-stone-300 border-t border-white/10 pt-3 relative z-10">
                  <span>Brisbane, QLD</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-accent" /> 10:00 AM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="aspect-[4/3] rounded-xl shadow-lg relative overflow-hidden group border border-border bg-stone-100">
            <img 
              src="/home-welcome.jpg" 
              alt="Vaarthai Church Worship Gathering" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-border shadow-md z-10">
              <p className="text-xs font-bold text-accent uppercase tracking-widest">CHURCH DOORS</p>
              <p className="text-sm font-semibold text-primary">We Are Waiting with Open Arms to Welcome You</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-black text-primary leading-tight">
              We Are Called to Love God, Grow in Faith, and Serve Our Community
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm">
              At Vaarthai Evangelical Church, our mission is simple: we want people to encounter the love of Jesus Christ, grow in the truth of the Gospel, and care for one another with genuine love and practical support.
            </p>
            <p className="text-stone-700 leading-relaxed text-sm">
              Whether you are seeking biblical answers to life&apos;s deepest questions or looking for a church family where you and your children can take deep roots in faith, we invite you to join us this Sunday.
            </p>
            <div className="pt-2">
              <Link 
                href="/en/about" 
                className="font-bold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors border-b-2 border-primary/20 pb-0.5"
              >
                Our History &amp; Statement of Faith <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SUNDAY INFORMATION PANEL */}
      <section className="bg-neutral-light/70 border-y border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">
              Sunday Worship Information
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Essential details and logistics for our first-time guests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Info Box 1 */}
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">Service Time</h3>
                <p className="text-sm text-stone-600">Sundays at 10:00 AM</p>
                <p className="text-xs text-stone-500">Engaging, age-appropriate children&apos;s classes run concurrently during the worship service.</p>
              </div>
            </div>

            {/* Info Box 2 */}
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">Church Location</h3>
                <p className="text-sm text-stone-600">
                  {churchConfig.contact.address.street}<br />
                  {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}
                </p>
                <a 
                  href="https://www.google.com/maps?q=389+Old+Logan+Rd,+Springfield+QLD+4300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1 mt-1 transition-colors"
                >
                  Get Directions on Map <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Info Box 3 */}
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">Parking &amp; Accessibility</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Ample on-site parking is available across the campus. We provide dedicated accessible parking stalls and step-free wheelchair ramp access across the premises.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NEW VISITOR CALLOUT & PRAYER / GIVING BLOCKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* New Visitor Callout */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#1E293B] to-[#020617] text-white p-8 sm:p-12 rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="space-y-4 max-w-xl relative z-10">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">NEW HERE?</span>
              <h2 className="font-serif text-3xl font-black tracking-tight leading-tight">
                Your First Sunday Visit
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                Visiting a new church for the first time can feel intimidating. But at Vaarthai Church, you will experience a warm, genuine welcome and gospel-centered worship. Read our visitor guide to get answers on our children&apos;s check-in process, dress code, parking logistics, and what to expect during our service.
              </p>
            </div>
            
            <div className="pt-8 relative z-10">
              <Button href="/en/plan-your-visit" variant="accent" size="md" className="font-bold">
                Plan Your Visit Guide
              </Button>
            </div>
          </div>

          {/* Side Blocks: Prayer & Giving */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Prayer block */}
            <div className="bg-white border border-border p-8 rounded-xl flex flex-col justify-between shadow-sm flex-grow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-serif font-black text-lg">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <h3>Need Prayer?</h3>
                </div>
                <p className="text-xs text-neutral-muted leading-relaxed">
                  Our pastoral leadership and intercessory prayer team faithfully lift up the prayer requests and burdens of our church family every week. Share your request with us in strict confidence.
                </p>
              </div>
              <div className="pt-6">
                <Button href="/en/prayer" variant="outline" size="sm" className="font-bold">
                  Submit Prayer Request
                </Button>
              </div>
            </div>

            {/* Giving block */}
            <div className="bg-white border border-border p-8 rounded-xl flex flex-col justify-between shadow-sm flex-grow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-serif font-black text-lg">
                  <Heart className="w-5 h-5 text-accent" />
                  <h3>Support the Ministry</h3>
                </div>
                <p className="text-xs text-neutral-muted leading-relaxed">
                  We believe giving is an act of worship. Your generous tithes and offerings directly fuel Gospel outreach, community care, and church missions.
                </p>
              </div>
              <div className="pt-6">
                <Button href="/en/give" variant="accent" size="sm" className="font-bold">
                  Give Online Portal
                </Button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. NEWSLETTER SIGNUP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-light border border-border rounded-xl p-8 sm:p-12 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-primary mb-3">
            Subscribe to our Weekly Newsletter (Stay Connected)
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mb-8 max-w-lg mx-auto leading-relaxed">
            Get the Pastor&apos;s weekly letter and church announcements delivered straight to your inbox every Wednesday morning.
          </p>
          <div className="max-w-md mx-auto text-left">
            <NewsletterForm />
          </div>
        </div>
      </section>

    </div>
  );
}
