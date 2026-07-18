"use client";

import React, { useState } from "react";
import { 
  MapPin, Phone, Mail, Clock, CheckCircle2, Navigation
} from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "@/components/Button";
import { Input, TextArea, Select } from "@/components/Input";
import { FacebookIcon, YoutubeIcon } from "@/components/SocialIcons";

export default function EnglishContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "general",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const socialIcons = {
    facebook: <FacebookIcon className="w-5 h-5" />,
    youtube: <YoutubeIcon className="w-5 h-5" />,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.subject.trim()) {
      setStatus("error");
      setErrorMessage("Please specify the subject.");
      return;
    }
    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please write your message.");
      return;
    }

    setStatus("loading");

    try {
      // 1. Send directly to info@vaarthai.org.au via FormSubmit background AJAX
      const formSubmitPromise = fetch("https://formsubmit.co/ajax/info@vaarthai.org.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[EN Contact] (${formData.department}): ${formData.subject}`,
          _template: "table",
          Name: formData.name,
          Email: formData.email,
          Department: formData.department,
          Subject: formData.subject,
          Message: formData.message,
        }),
      }).catch((err) => console.warn("Contact formsubmit warn:", err));

      // 2. Also send to internal server API endpoint
      const internalApiPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((e) => console.warn("Contact API warn:", e));

      // 3. Submit directly to Google Forms if configured
      let googleFormPromise: Promise<any> = Promise.resolve();
      const actionUrl = process.env.NEXT_PUBLIC_CONTACT_GOOGLE_FORM_URL || churchConfig.contactForm?.actionUrl;
      if (actionUrl) {
        const gData = new URLSearchParams();
        const eName = process.env.NEXT_PUBLIC_CONTACT_ENTRY_NAME || churchConfig.contactForm?.entryNameId;
        const eEmail = process.env.NEXT_PUBLIC_CONTACT_ENTRY_EMAIL || churchConfig.contactForm?.entryEmailId;
        const eDept = process.env.NEXT_PUBLIC_CONTACT_ENTRY_DEPT || churchConfig.contactForm?.entryDepartmentId;
        const eSubj = process.env.NEXT_PUBLIC_CONTACT_ENTRY_SUBJECT || churchConfig.contactForm?.entrySubjectId;
        const eMsg = process.env.NEXT_PUBLIC_CONTACT_ENTRY_MESSAGE || churchConfig.contactForm?.entryMessageId;
        if (eName) gData.append(eName, formData.name);
        if (eEmail) gData.append(eEmail, formData.email);
        if (eDept) gData.append(eDept, formData.department);
        if (eSubj) gData.append(eSubj, formData.subject);
        if (eMsg) gData.append(eMsg, formData.message);

        googleFormPromise = fetch(actionUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: gData.toString(),
        }).catch((e) => console.warn("Contact Google Form warn:", e));
      }

      await Promise.race([
        Promise.allSettled([formSubmitPromise, internalApiPromise, googleFormPromise]),
        new Promise((resolve) => setTimeout(resolve, 1200)),
      ]);

      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      department: "general",
      subject: "",
      message: ""
    });
    setStatus("idle");
  };

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black">Contact Us</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            We would love to hear from you! Reach out for church inquiries, pastoral counseling, or prayer requests.
          </p>
        </div>
      </section>

      {/* 2. Key Details & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-2xl font-black text-primary">
              Get In Touch
            </h2>

            <div className="space-y-4 text-sm text-stone-600">
              
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Church Address</span>
                  <p className="text-stone-900 font-medium">
                    {churchConfig.contact.address.street}<br />
                    {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}
                  </p>
                  <a 
                    href={churchConfig.contact.address.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:text-accent mt-1 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" /> Get Directions on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Office Address</span>
                  <p className="text-stone-900 font-medium">
                    {churchConfig.contact.officeAddress.poBox}<br />
                    {churchConfig.contact.officeAddress.city} {churchConfig.contact.officeAddress.state} {churchConfig.contact.officeAddress.zip}
                  </p>
                  <p className="text-xs text-stone-500 mt-1 italic leading-relaxed font-light">
                    {churchConfig.contact.officeAddress.note}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Phone Number</span>
                  <a href={`tel:${churchConfig.contact.phone}`} className="text-stone-900 font-medium hover:text-accent">
                    {churchConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Email Address</span>
                  <a href={`mailto:${churchConfig.contact.email}`} className="text-stone-900 font-medium hover:text-accent">
                    {churchConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Office Hours</span>
                  <p className="text-stone-900 font-medium">{churchConfig.contact.officeHours}</p>
                </div>
              </div>

            </div>

            {/* Social Links Row */}
            <div className="space-y-2 border-t border-border pt-6">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Connect On Social Media</span>
              <div className="flex gap-3">
                {Object.entries(churchConfig.socials).map(([key, url]) => {
                  const icon = socialIcons[key as keyof typeof socialIcons];
                  if (!url || !icon) return null;
                  return (
                    <a 
                      key={key} 
                      href={url}
                      className="p-2.5 rounded bg-neutral-light border border-border text-stone-700 hover:text-white hover:bg-primary transition-all shadow-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map Frame */}
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-border bg-stone-100 relative shadow-inner flex items-center justify-center">
              <iframe
                title="Church Location Map Detail"
                src={churchConfig.contact.address.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-border rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-primary border-b border-border pb-3">
              Send Us a Message
            </h3>

            {status === "success" ? (
              <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-4 animate-fade-in-up">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-primary">Message Sent Successfully!</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Dear <strong>{formData.name}</strong>, thank you for contacting us! Our church administration or pastoral team will get back to you promptly.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-primary hover:text-accent underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Your Full Name"
                    name="name"
                    type="text"
                    placeholder="e.g., John Smith"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="e.g., john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="Department / Ministry"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    options={[
                      { value: "general", label: "General & Church Administration" },
                      { value: "kids", label: "Children's Ministry (Vaarthai Kids)" },
                      { value: "youth", label: "Youth Ministry (Encounter Youth)" },
                      { value: "groups", label: "Small Groups & LifeGroups" },
                      { value: "finance", label: "Finance & Giving Office" },
                      { value: "care", label: "Pastoral Care & Counseling" }
                    ]}
                  />

                  <Input
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="e.g., Inquiry about Sunday services"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <TextArea
                  label="Message / Prayer Request"
                  name="message"
                  placeholder="Type your questions, feedback, or prayer requests here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                />

                {status === "error" && (
                  <p className="text-sm text-error font-semibold" role="alert">
                    {errorMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  className="font-bold py-3 shadow"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending Message..." : "Send Message"}
                </Button>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
