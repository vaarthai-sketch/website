import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  title: "VEC-NL 2026-10 Edition 15 - From the Pastor's Desk",
  description: "Yesterday’s Imagination… Today’s Reality! But What About a New Heart? — “Then I will sprinkle clean water on you, and you shall be clean... I will give you a new heart and put a new spirit within you.” — Ezekiel 36:25–26",
  path: "/en/pastors-desk",
  image: "/edition-15-heart.jpg",
});

export default function PastorsDeskPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{ backgroundImage: "url('/pastor-desk-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-8 bg-accent/30"></span>
            <span className="text-accent font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              From the Pastor's Desk
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Yesterday&apos;s Imagination&hellip; Today&apos;s Reality!
          </h1>
          <p className="text-xl md:text-2xl text-accent font-serif italic mb-8 max-w-2xl mx-auto">
            But What About a New Heart?
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #015</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> October 2026</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <article className="lg:w-2/3 bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="p-8 md:p-12 space-y-8 text-stone-700 leading-relaxed text-lg">
              
              <div className="bg-gradient-to-br from-stone-50 via-white to-stone-100 rounded-lg shadow-sm border border-stone-200 p-6 md:p-10 mb-8 relative overflow-hidden">
                <Leaf className="absolute top-4 right-4 text-stone-200 w-16 h-16 opacity-30" />
                <Leaf className="absolute bottom-10 left-4 text-stone-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-stone-600 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-10 · Edition 15</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-2 relative z-10 flex items-center gap-2">
                  Yesterday&apos;s Imagination&hellip; Today&apos;s Reality!
                </h2>
                <p className="text-lg md:text-xl font-serif italic text-primary mb-6 relative z-10">
                  But What About a New Heart?
                </p>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">

                  <p>
                    There was a time when speaking face-to-face with someone on the other side of the world was merely science fiction. Or perhaps I remember reading about magical mirrors in fairy tales!
                  </p>

                  <p>
                    Machines that could converse with humans, artificial intelligence that could think and act like human beings &mdash; all these existed only in the world of imagination.
                  </p>

                  <p className="font-semibold text-primary">
                    But today? Imagination is becoming reality!
                  </p>

                  <p>
                    Medical science, too, has made astonishing progress. Today, doctors can remove a failing human heart and replace it with another, saving a person&apos;s life.
                  </p>

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img 
                      src="/edition-15-heart.jpg" 
                      alt="Heart Transplant - Medical Science" 
                      className="w-full h-auto object-cover max-h-[500px]" 
                    />
                  </div>

                  <p>
                    Last month, a family friend visited us in her new Tesla.
                  </p>

                  <p>
                    &ldquo;Come on, let me show you something!&rdquo; she said.
                  </p>

                  <p>
                    She entered the address of a nearby shopping complex into the car&apos;s navigation system and took her hands off the steering wheel!
                  </p>

                  <p>
                    We watched in amazement.
                  </p>

                  <p>
                    On a narrow road, the car gave way to oncoming vehicles. It stopped at red lights. It reached the destination accurately. And that wasn&apos;t all! It found an available parking space and parked itself perfectly!
                  </p>

                  <p>
                    What we once saw only in science fiction became a reality right before our eyes that day!
                  </p>

                  <p>
                    I was amazed at how far science had advanced.
                  </p>

                  <div className="bg-stone-100 p-5 rounded-lg border-l-4 border-primary my-6">
                    <p className="text-lg md:text-xl font-bold text-primary m-0">
                      But a question arose in my mind: If science can transform the way a car is driven, can it also transform the human heart?
                    </p>
                  </div>

                  <p>
                    Can it fill a heart full of hatred with love? Can it change an unforgiving heart into one that willingly forgives? Can it give a new life to someone struggling under the weight of guilt?
                  </p>

                  <p>
                    More than 2,500 years ago, God gave an extraordinary promise through the prophet Ezekiel:
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
                    &ldquo;Then I will sprinkle clean water on you, and you shall be clean... I will give you a new heart and put a new spirit within you.&rdquo;
                    <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— Ezekiel 36:25–26</footer>
                  </blockquote>

                  <p className="font-semibold text-primary">
                    What a beautiful promise!<br/>
                    First, cleansing! Then, a new heart!
                  </p>

                  <p>
                    God is not speaking here about replacing the physical heart in our bodies. He is speaking about a profound transformation that takes place within a person.
                  </p>

                  <p>
                    The water mentioned in this promise points to the cleansing that God provides. Baptism, too, is a beautiful symbol that reminds us of God&apos;s cleansing grace. However, water itself has no power to remove sin. It is Jesus Christ who saves us and makes our hearts new.
                  </p>

                  <p>
                    This is what Jesus explained to Nicodemus when He said, &ldquo;Unless one is born again, he cannot see the kingdom of God&rdquo; (John 3:3).
                  </p>

                  <p className="font-medium text-stone-800">
                    This Sunday, two people will be baptised at our Vaarthai Evangelical Church. What a joyful occasion for all of us!
                  </p>

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img 
                      src="/edition-15-baptism.jpg" 
                      alt="Baptism - New Life in Christ" 
                      className="w-full h-auto object-cover max-h-[500px]" 
                    />
                  </div>

                  <p>
                    Baptism is not merely a religious ritual or a traditional ceremony. It is a public testimony of faith, declaring that we are united with Jesus Christ in His death, burial, and resurrection.
                  </p>

                  <p>
                    Romans 6:4 reminds us of this wonderful truth: Just as Christ was raised from the dead, we too are called to walk in newness of life.
                  </p>

                  <p>
                    Today, we marvel at how much the world has changed.<br/>
                    But have we ever stopped to consider how much our own hearts have changed?
                  </p>

                  <p>
                    Do you believe in Jesus but have not yet been baptised? If so, what is holding you back?
                  </p>

                  <p>
                    As we celebrate the public declaration of faith by these two individuals this Sunday, let us also reflect on our own journey of faith.
                  </p>

                  <p className="font-semibold text-primary">
                    Yesterday&apos;s science fiction has become today&apos;s reality.<br/>
                    But God&apos;s promise to give us a new heart.
                  </p>

                  <div className="bg-accent/10 p-6 rounded-xl border border-accent/30 my-8 space-y-3">
                    <p className="text-base md:text-lg font-medium text-stone-800 m-0">
                      We warmly congratulate the two individuals who will be baptised this Sunday! May the Lord bless their journey of faith and help them grow each day in the newness of life!
                    </p>
                    <p className="text-base md:text-lg font-medium text-stone-800 m-0">
                      May God renew each of our hearts and guide us to live lives that are pleasing to Him!
                    </p>
                  </div>

                  <p className="pt-4">
                    My warmest greetings and best wishes to you all!<br/>
                    With love in Christ,<br/>
                    <strong>Pastor Weslyn</strong><br/>
                    Vaarthai Evangelical Church
                  </p>

                  <div className="mt-12 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 aspect-video">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/CUZAOsqsZAA" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>

                </div>
              </div>
            </div>
          </article>
          
          <aside className="lg:w-1/3 space-y-8">
            <NewsletterForm />

            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-accent" />
                Previous Editions
              </h3>
              <div className="space-y-3">
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">October 2026</h4>
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 15</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/october/edition-14" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 14</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/october/edition-13" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 13</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/october/edition-12" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 12</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">September 2026</h4>
                  <Link href="/en/pastors-desk/archive/september/edition-11" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 11</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/september/edition-10" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 10</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/september/edition-9" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 9</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/september/edition-8" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 8</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">August 2026</h4>
                  <Link href="/en/pastors-desk/archive/august/edition-7" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 7</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                </div>
              </div>

          </aside>
          
        </div>
      </section>
    </main>
  );
}
