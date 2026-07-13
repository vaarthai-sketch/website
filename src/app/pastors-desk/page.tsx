import React from "react";
import { Calendar as CalendarIcon, User } from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "@/components/Button";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata = {
  title: "From the Pastor's Desk",
  description: `Weekly newsletter and updates from the Pastor at ${churchConfig.name}.`,
};

export default function PastorsDeskPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      {/* Header section */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-[position:-30%_15%] bg-no-repeat bg-[#0F172A]"
        style={{ backgroundImage: "url('/pastor-hero.png')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/30"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            From the Pastor's Desk
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200">
            Weekly newsletter, reflections, and updates from our pastoral team.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-10 mb-8">
            <div className="flex items-center gap-2 text-sm text-accent-dark font-bold mb-4">
              <CalendarIcon className="w-4 h-4" />
              <span>This Week's Letter</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              Grace in Every Season
            </h2>
            
            <div className="prose prose-stone max-w-none text-stone-700 space-y-6">
              <p>
                Dear Church Family,
              </p>
              <p>
                As we enter this new week, I am reminded of the steadfast love of God that never ceases. His mercies are new every morning, and His faithfulness is great. It is a joy to journey with you all as we seek to know Him more deeply and make Him known in our community.
              </p>
              <p>
                This week, let us focus on what it means to extend grace to one another, just as Christ has extended grace to us. In our daily interactions, may our words be seasoned with love, and our actions reflect the heart of our Savior.
              </p>
              <p>
                Please keep our upcoming community outreach in your prayers. We have a wonderful opportunity to be the hands and feet of Jesus to those around us.
              </p>
              <p>
                In His Grace,
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-stone-400" />
                </div>
                <div>
                  <p className="font-bold text-primary m-0">The Pastoral Team</p>
                  <p className="text-sm text-stone-500 m-0">{churchConfig.name}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-primary mb-4">Subscribe to our Weekly Newsletter</h3>
            <p className="text-stone-600 mb-6 max-w-md mx-auto">
              Get the Pastor's weekly letter delivered straight to your inbox every Friday morning.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
