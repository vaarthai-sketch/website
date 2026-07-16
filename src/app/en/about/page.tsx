import React from "react";
import { Info, ShieldAlert, Check } from "lucide-react";
import { churchConfig } from "@/data/config";
import { StaffCard } from "@/components/Card";
import { staffData } from "@/data/staff";

export const metadata = {
  title: "About Us | Vaarthai Evangelical Church - Brisbane",
  description: `Learn about the story, core beliefs, mission, vision, values, and leadership team of ${churchConfig.name} in Brisbane, QLD, Australia.`,
};

export default function EnglishAboutPage() {
  const coreValues = [
    {
      title: "Authority of Scripture",
      desc: "We believe the Holy Bible is the inspired, infallible, and ultimate authority of God for every aspect of our lives, doctrine, and practice."
    },
    {
      title: "Grace-Filled Fellowship",
      desc: "We strive to create an atmosphere saturated with grace, bearing with one another's weaknesses and forgiving each other as Christ forgave us."
    },
    {
      title: "LifeGroups & Community",
      desc: "Faith was never meant to be a solo journey. Through weekly LifeGroups and small gatherings, we foster deep relationships and spiritual accountability."
    },
    {
      title: "Sacrificial Service",
      desc: "Following Jesus means serving others with humility. We intentionally invest our spiritual gifts, time, and resources for the blessing of our church and city."
    }
  ];

  const statementOfFaith = [
    {
      point: "The Scriptures",
      text: "We believe the Old and New Testaments are the inspired, infallible, and inerrant Word of God, serving as the supreme authority for faith and life."
    },
    {
      point: "The Triune God",
      text: "We believe in one eternal God existing in three distinct persons: God the Father, God the Son, and God the Holy Spirit."
    },
    {
      point: "Jesus Christ",
      text: "We believe in the deity of our Lord Jesus Christ, His virgin birth, sinless life, substitutionary atonement on the cross, bodily resurrection, and glorious return."
    },
    {
      point: "Salvation by Grace",
      text: "We believe salvation is the free gift of God's grace, received solely by faith in Jesus Christ and His finished work on the cross, not by human merit."
    },
    {
      point: "The Church",
      text: "We believe the Church is the spiritual body of Christ, made up of all true believers, called together for worship, fellowship, discipleship, and mission."
    }
  ];

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-[center_25%] bg-no-repeat"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/50"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black">About Our Church</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Discover the history, heart, core beliefs, and leadership team of {churchConfig.name}.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Roots</span>
          <h2 className="font-serif text-3xl md:text-4xl font-black text-primary">
            Our Gospel History & Calling
          </h2>
          <p className="text-stone-700 leading-relaxed text-base font-semibold">
            We are a vibrant church family rooted in God&apos;s Word, united by His grace, and passionate about sharing the love of Jesus across generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-stone-700 leading-relaxed text-sm md:text-base">
          <div className="space-y-5">
            <p>
              &ldquo;Is there not a cause?&rdquo; This profound question was asked by young David before stepping out to face Goliath. Even before the armies of Israel and the roaring giant before him, David recognized that God&apos;s honor and his people&apos;s freedom were worth fighting for. Today, this exact same question rings true for us.
            </p>
            <p>
              We are blessed far more abundantly than David, because our greatest enemy—sin and death—has already been decisively defeated by Jesus Christ on the cross! When David conquered Goliath, the people not only stood victorious, but they went on to claim the spoils of victory. Today, we stand as victors in Christ not by our own works, but because of what He finished for us!
            </p>
          </div>
          <div className="space-y-5">
            <p>
              The eternal promises found in Scripture are alive, active, and transforming lives today. Our commitment as a church is clear: We will listen to the Word! We will walk by the Word! We will proclaim the Word!
            </p>
            <p className="font-semibold text-primary bg-accent/10 p-5 rounded-xl border border-accent/30">
              If you reside in the greater Brisbane area or across Queensland, our deepest desire is for you and your family to walk in Christ&apos;s victory. Come join us as we worship God together!
            </p>
          </div>
        </div>
      </section>

      {/* Full-width edge-to-edge banner block */}
      <section className="w-full relative overflow-hidden bg-stone-900 shadow-xl border-y border-stone-800">
        <div className="relative w-full h-[400px] md:h-[480px] max-h-[500px] overflow-hidden flex items-center justify-center">
          <img 
            src="/church-history.jpg" 
            alt="Church Family & History Banner" 
            className="w-full h-full object-cover object-top transform hover:scale-[1.01] transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>
      </section>

      {/* 3. Leadership / About Pastor Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-border shadow-md overflow-hidden p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-4 md:p-5 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200 border border-stone-200/80 shadow-inner overflow-hidden group">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:12px_12px]"></div>
                
                <div className="relative rounded-xl overflow-hidden bg-white shadow-md border border-white aspect-[4/5]">
                  <img 
                    src="/pastor-about.jpg" 
                    alt="Pastor Weslyn" 
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Leadership</span>
                <h2 className="font-serif text-3xl md:text-4xl font-black text-primary">
                  Meet Our Senior Pastor
                </h2>
              </div>

              <div className="space-y-4 text-stone-700 leading-relaxed text-sm md:text-base">
                <p>
                  When Pastor Weslyn first arrived in Australia in 2007, God gave him a clear and compelling burden to serve the Tamil community in Brisbane. Over the course of 20 years, he faithfully ministered within Rhema Brisbane Fellowship and Citipointe Tamil Church before stepping into God&apos;s calling to plant Vaarthai Evangelical Church.
                </p>
                <p>
                  In addition to pastoral ministry, he serves as a dedicated Clinical Counsellor supporting individuals and families across the community. His wife, Dr. Arivu Weslyn, serves with excellence as a General Practitioner (GP). Together, God has blessed them with twin boys, Jeremy and Timmy, who are currently completing their senior high school studies!
                </p>
                <p>
                  Known widely across the Brisbane Tamil community for his warmth and pastoral care, Pastor Weslyn carries a deep vision to see families experience true freedom in Christ. As like-minded families joined together in this shared burden, Vaarthai Evangelical Church was born.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="bg-neutral-light/50 border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white border border-border p-8 rounded-xl space-y-4 shadow-sm">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <Compass className="w-6 h-6" />
              </span>
              <h2 className="font-serif text-2xl font-black text-primary">Our Mission</h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                Our mission is to bear authentic witness to the gospel of Jesus Christ in our worship, in our homes, in our workplaces, and throughout our city. We exist to honor God by making disciples who live out the truths of His Word every single day.
              </p>
            </div>

            <div className="bg-white border border-border p-8 rounded-xl space-y-4 shadow-sm">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <svg className="w-6 h-6 fill-current text-primary" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </span>
              <h2 className="font-serif text-2xl font-black text-primary">Our Vision</h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                Our vision is to equip every believer to discover, develop, and deploy their God-given spiritual gifts for the building up of the church and the blessing of our community, seeing families restored and lives renewed by Christ&apos;s grace.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">How We Walk</span>
          <h2 className="font-serif text-3xl font-black text-primary mt-1">Our Core Values</h2>
          <p className="text-sm text-stone-500 mt-2">The guiding principles that shape our ministries and community life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 text-accent-dark text-xs font-bold">
                {idx + 1}
              </span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">{value.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Statement of Faith */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-neutral-light/50 border border-border p-8 sm:p-12 rounded-xl">
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="text-center space-y-2">
              <h2 className="font-serif text-3xl font-black text-primary">Statement of Faith</h2>
              <p className="text-sm text-stone-600">
                A summary of our core biblical beliefs and theological foundation.
              </p>
            </div>

            <div className="space-y-6">
              {statementOfFaith.map((faith, idx) => (
                <div key={idx} className="border-b border-border/80 pb-4 last:border-0 last:pb-0 flex gap-4 items-start">
                  <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-white mt-1 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-bold text-stone-900">{faith.point}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{faith.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. Leadership / Staff Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Church Leadership</span>
          <h2 className="font-serif text-3xl font-black text-primary mt-1">Our Pastoral Team</h2>
          <p className="text-sm text-stone-500 mt-2">
            Meet the leaders dedicated to shepherding and serving our church family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {staffData.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </section>

    </div>
  );
}

const Compass: React.FC<{ className?: string }> = ({ className }) => (
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
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);
