import React from "react";
import { churchConfig } from "@/data/config";

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'ta',
  path: '/privacy',
  title: "Privacy Policy",
  description: `Privacy Policy for ${churchConfig.name}. Learn how we protect your personal information.`,
});

export default function PrivacyPage() {
  return (
    <div className="pb-20">
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="font-serif text-3xl md:text-4xl font-black">Privacy Policy</h1>
          <p className="text-stone-300 text-sm mt-2">Effective Date: June 22, 2026</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-stone-700 text-sm leading-relaxed space-y-6">
        <p>
          At <strong>{churchConfig.name}</strong>, we are committed to protecting your privacy and stewardship of your personal information. This Privacy Policy describes how we collect, use, and safeguard the information you provide when using our website.
        </p>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">1. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily submit to us, which may include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Contact details</strong> (such as name, email address, and phone number) when you register for newsletters or message our departments.</li>
          <li><strong>Visitor details</strong> (such as adults count, child ages, and planned visit date) when you submit a Plan Your Visit RSVP form.</li>
          <li><strong>Prayer requests</strong> and privacy preferences submitted privately.</li>
          <li><strong>Giving pledges</strong> and donations (note that online payment processing is managed by third-party processors, and we do not store credit card credentials on our servers).</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Process and coordinate your guest RSVPs, class registrations, and department inquiries.</li>
          <li>Distribute weekly newsletters, prayer notices, and ministry announcements (only if you have opt-in to subscriptions).</li>
          <li>Pray over your submitted requests according to your restricted privacy configurations.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">3. Data Security & Confidentiality</h2>
        <p>
          We implement secure encryption pathways and restricted access rights to protect your data. Your personal details are never sold, rented, or shared with outside commercial third parties. Submitted prayer requests are kept strictly private within our pastoral care and prayer teams.
        </p>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">4. Cookies & Web Analytics</h2>
        <p>
          We use minor session cookies and basic traffic analytical tools to understand how users interact with our website, helping us improve performance, layout accessibility, and loading speeds.
        </p>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">5. Contact Information</h2>
        <p>
          If you have questions concerning this Privacy Policy, wish to update your records, or request data deletion, please contact us at: <br />
          <strong>Email:</strong> {churchConfig.contact.email} <br />
          <strong>Phone:</strong> {churchConfig.contact.phone}
        </p>
      </section>
    </div>
  );
}
