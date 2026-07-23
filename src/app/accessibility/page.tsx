import React from "react";
import { Accessibility, ShieldAlert, Award } from "lucide-react";
import { churchConfig } from "@/data/config";

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'ta',
  path: '/accessibility',
  title: "Accessibility Statement",
  description: `Web accessibility details for ${churchConfig.name}. Our commitment to serving all users.`,
});

export default function AccessibilityPage() {
  return (
    <div className="pb-20">
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-2">
          <h1 className="font-serif text-3xl md:text-4xl font-black">Accessibility Statement</h1>
          <p className="text-stone-300 text-sm">Our Commitment to Inclusivity & Usability</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-stone-700 text-sm leading-relaxed space-y-6">
        <div className="flex gap-4 items-start bg-neutral-light/50 border border-border p-5 rounded-lg">
          <Accessibility className="w-8 h-8 text-accent shrink-0" />
          <div className="space-y-1.5">
            <h2 className="font-serif text-lg font-bold text-primary">Web Accessibility Commitment</h2>
            <p className="text-xs text-stone-600">
              At <strong>{churchConfig.name}</strong>, we want everyone who visits our site to feel welcome and find the content they need. We strive to make our website content accessible to all individuals, including those with disabilities.
            </p>
          </div>
        </div>

        <p>
          We design and build our digital spaces with web standards in mind. We aim to conform our web experiences to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standards.
        </p>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">1. Specific Accessibility Implementations</h2>
        <p>
          Our website incorporates several features to assist users with varying needs:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 font-sans">
          <li><strong>Keyboard Navigation:</strong> All navigation links, filters, and forms are fully navigable using a standard keyboard tab interface. Active focus indicators are prominently visible.</li>
          <li><strong>Skip to Content:</strong> A skip link is configured at the very top of each page to allow screen reader and keyboard users to bypass navigation elements and jump directly to main content.</li>
          <li><strong>Semantic HTML structure:</strong> Page headings follow a single `h1` per page structure and logical hierarchy. Form labels are programmatically associated with inputs using unique IDs.</li>
          <li><strong>Color Contrast:</strong> Color selections meet standard contrast thresholds to ensure readability for visually impaired users.</li>
          <li><strong>Image Alt Text:</strong> Meaningful description tags are attached to all image elements.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">2. Assistive Facilities at Services</h2>
        <p>
          Beyond our website, we want to make our physical worship sanctuary accessible to all:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Physical Access:</strong> Our main lobby, sanctuary, and kids classrooms are level or ramp-equipped, featuring no stairs. Accessible parking spots are clearly marked.</li>
          <li><strong>Hearing Support:</strong> Assistive listening devices (RF headsets) can be requested at the back sanctuary technical desk during both Sunday services.</li>
          <li><strong>Sensory Accommodations:</strong> Our children's rooms offer sensory-friendly tools and dimming lights upon coordination.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-primary pt-4">3. Feedback & Contact</h2>
        <p>
          If you encounter any accessibility barriers on our website, or wish to suggest improvements, please contact us. We are eager to assist and resolve any issues.
        </p>
        <p>
          <strong>Email:</strong> {churchConfig.contact.email} <br />
          <strong>Phone:</strong> {churchConfig.contact.phone}
        </p>
      </section>
    </div>
  );
}
