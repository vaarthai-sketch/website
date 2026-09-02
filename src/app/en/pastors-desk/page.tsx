import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Coffee, Globe } from "lucide-react";
import Link from "next/link";

import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'en',
  title: "VEC-NL 2026-09 Edition 9 - Pastor's Desk",
  description: "Peace, Be Still! — A Word for Nepal and Tibet",
  path: '/en/pastors-desk',
  image: '/newsletter-9.png'
});

export default function PastorsDeskPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      {/* Header section */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{ backgroundImage: "url('/newsletter-9.png')" }}
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
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Peace, Be Still!
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            A Word for Nepal and Tibet
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #009</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> September 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Article Column */}
          <article className="lg:w-2/3 bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="p-8 md:p-12 space-y-8 text-stone-700 leading-relaxed text-lg">
              
              <div className="prose prose-stone lg:prose-lg max-w-none font-serif">
                <p>A few weeks ago, we prayed together for those affected by the earthquake in Colombia. Today, the catastrophic flash floods triggered by a glacier collapse along the Nepal–Tibet border have shocked the world. Homes, bridges, and roads have been swept away; many families are grieving the loss of their loved ones, while the search for those still missing continues.</p>
                <p>We are not called to pronounce this tragedy as God’s punishment. The Bible does not offer simple explanations for every disaster. Instead, it tells us that “the whole creation groans and labours with birth pangs together” (Romans 8:22).</p>
                <p>Therefore, in moments like these, our first response must be not explanation, but compassion; not judgement, but prayer.</p>

                <h3 className="text-2xl font-black text-primary mt-12 mb-6">JESUS IN THE BOAT</h3>
                <div className="bg-stone-50 border-l-4 border-accent p-6 rounded-r-lg my-8 shadow-sm">
                  <p className="italic text-stone-600 mb-2 font-medium">
                    “And a great windstorm arose, and the waves beat into the boat, so that it was already filling… And they awoke Him and said to Him, ‘Teacher, do You not care that we are perishing?’ Then He arose and rebuked the wind, and said to the sea, ‘Peace, be still!’ And the wind ceased and there was a great calm.”
                  </p>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest">— Mark 4:37–39</p>
                </div>
                
                <p>Jesus did not watch the storm from a distant shore. He was in the very same boat that was being tossed by the waves, alongside His frightened disciples.</p>
                <p>The disciples had not forgotten that Jesus was in the boat. However, in the middle of the storm, they began to doubt whether He truly cared for them: <strong>“Teacher, do You not care that we are perishing?”</strong></p>
                <p>Jesus’ sleep was not a sign of indifference; it was a sign that He was unafraid. The disciples saw the power of the storm, but they had not yet fully understood the power of the One who was with them.</p>
                <p>In this incident, Jesus calmed the storm. However, the Christian faith does not promise that every storm in our lives will immediately cease. Sometimes He calms the storm; at other times, He carries His people through it.</p>
                <p>Yet, in both circumstances, one truth remains unchanged: <strong>He is with us. We are not forgotten, and we are not alone.</strong></p>

                <h3 className="text-2xl font-black text-primary mt-12 mb-6">LET US STAND WITH THEM</h3>
                <p>The people suffering in Nepal and Tibet need more than our explanations at this moment. They need our prayers, our compassion, and our practical support.</p>
                <div className="bg-stone-50 border-l-4 border-accent p-6 rounded-r-lg my-8 shadow-sm">
                  <p className="italic text-stone-600 mb-2 font-medium">
                    “Then the disciples, each according to his ability, determined to send relief to the brethren dwelling in Judea.”
                  </p>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest">— Acts 11:29</p>
                </div>
                <p>There was a great distance between the church in Antioch and the believers in Judea, but that distance did not prevent them from showing love. Likewise, although Nepal and Tibet may be far from us geographically, those affected by this disaster are not strangers to us. They are our neighbours, and the believers among them are our brothers and sisters in Christ.</p>
                <p>Let us not merely watch the news from a distance. Let us stand with them through prayer, compassion, and every form of practical assistance available to us.</p>
                
                <h3 className="text-2xl font-black text-primary mt-12 mb-6">PRAYER POINTS</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pray that God will comfort the families of those who have lost their lives.</li>
                  <li>Pray that those still missing will be found and that the rescue teams will be protected.</li>
                  <li>Pray that displaced families will receive shelter, food, clean water, and medical assistance.</li>
                  <li>Pray that the churches and believers in the affected areas will remain steadfast in faith and hope.</li>
                  <li>Pray for wisdom to know how our church can contribute to the relief efforts.</li>
                  <li>Pray that anyone among us who has relatives in Nepal or Tibet will not have to carry this burden alone.</li>
                </ul>

                <h3 className="text-2xl font-black text-primary mt-12 mb-6">FINAL PRAYER</h3>
                <p>Lord, be with those who are weeping in Nepal and Tibet. Comfort those who have lost their loved ones. Help the rescue teams find those who are still missing, and protect everyone involved in the rescue and recovery efforts.</p>
                <p>Give us compassionate hearts and open hands to help those in need. Even in the middle of this storm, let them hear Your voice saying, “I am with you.”</p>
                <p>In Jesus’ name, Amen.</p>

                <h3 className="text-2xl font-black text-primary mt-12 mb-6">ANNOUNCEMENTS</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Globe className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <p>Please make every effort to join us on Wednesday evening via Zoom for “Meditations on the Psalms and Prayer.” <br/><Link href="/en/events/mid-week-online-prayer" className="text-accent hover:underline font-bold">👉 Register Here</Link></p>
                  </li>
                  <li className="flex gap-3">
                    <CalendarIcon className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <p>Last Sunday, we were able to begin our worship service on time. Thank you to everyone for your cooperation. Please continue to support us in maintaining this punctuality in the weeks ahead.</p>
                  </li>
                  <li className="flex gap-3">
                    <Coffee className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <p><strong>Vaarthai Live Kitchen:</strong> Held after our worship service, this has been warmly enjoyed by everyone. We are delighted that it has become a wonderful time of fellowship in which we can connect with one another and deepen our relationships.</p>
                  </li>
                </ul>
              </div>

            </div>
          </article>
          
          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            <NewsletterForm />
            
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-accent" />
                Past Editions
              </h3>
              <div className="space-y-3">
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">September 2026</h4>
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 9</p>
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
                  <Link href="/en/pastors-desk/archive/august/edition-6" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 6</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/august/edition-5" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 5</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/august/edition-4" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 4</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">July 2026</h4>
                  <Link href="/en/pastors-desk/archive/july/edition-3" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 3</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/july/edition-2" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 2</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/july/edition-1" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 1</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
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
