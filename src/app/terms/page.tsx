import React from "react";
import { churchConfig } from "@/data/config";

export const metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${churchConfig.name}. Guidelines for using our site content.`,
};

export default function TermsPage() {
  return (
    <div className="pb-20">
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="font-serif text-3xl md:text-4xl font-black">Terms of Use</h1>
          <p className="text-stone-300 text-sm mt-2">Effective Date: June 22, 2026</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-stone-700 text-sm leading-relaxed space-y-6">
        <p>
          Welcome to the website of <strong>{churchConfig.name}</strong>. By accessing or using this website, you agree to comply with and be bound by the following Terms of Use.
        </p>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">1. Use of Content</h2>
        <p>
          All materials on this website, including sermon video/audio recordings, scripture quotations, graphics, and study notes, are the property of {churchConfig.name} or are used with permission. You may:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>View pages and play media for personal spiritual enrichment or non-commercial share studies.</li>
          <li>Download study guides and notes PDF resources where links are explicitly provided.</li>
          <li>Share links to pages, events, and sermon recordings on social platforms.</li>
        </ul>
        <p>
          You may not copy, republish, or commercialize any website content without written permission from {churchConfig.name}.
        </p>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">2. Interactive Form Guidelines</h2>
        <p>
          When submitting information on our contact forms, visitor RSVPs, or prayer request panels, you agree to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Provide accurate contact details (avoid false identities or fake email addresses).</li>
          <li>Refrain from submitting spam, commercial advertisements, or abusive content.</li>
          <li>Acknowledge that prayer request urgent markings do not substitute for emergency medical care or immediate crisis helpline response.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">3. External Links</h2>
        <p>
          Our website links to external sites (such as giving platforms, YouTube streaming networks, and local charity pages). {churchConfig.name} is not responsible for the privacy practices, terms, or accuracy of contents on external third-party pages.
        </p>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">4. Modifications to Website</h2>
        <p>
          We reserve the right to modify, suspend, or update any section of this website, service hours, or program events at any time without prior notice.
        </p>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">5. Contact Information</h2>
        <p>
          For questions regarding these Terms, please contact our administrative team at: <br />
          <strong>Email:</strong> {churchConfig.contact.email} <br />
          <strong>Phone:</strong> {churchConfig.contact.phone}
        </p>
      </section>
    </div>
  );
}
