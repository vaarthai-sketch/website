"use client";

import React, { useState } from "react";
import { 
  MapPin, Phone, Mail, Clock, CheckCircle2, Navigation
} from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "@/components/Button";
import { Input, TextArea, Select } from "@/components/Input";
import { FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon } from "@/components/SocialIcons";

export default function ContactPage() {
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
    instagram: <InstagramIcon className="w-5 h-5" />,
    youtube: <YoutubeIcon className="w-5 h-5" />,
    twitter: <TwitterIcon className="w-5 h-5" />,
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
      setErrorMessage("தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.");
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("தயவுசெய்து சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.");
      return;
    }
    if (!formData.subject.trim()) {
      setStatus("error");
      setErrorMessage("தயவுசெய்து பொருளை (Subject) குறிப்பிடவும்.");
      return;
    }
    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("தயவுசெய்து உங்கள் செய்தியை உள்ளிடவும்.");
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
          _subject: `New Contact Inquiry (${formData.department}): ${formData.subject}`,
          _template: "table",
          Name: formData.name,
          Email: formData.email,
          Department: formData.department,
          Subject: formData.subject,
          Message: formData.message,
        }),
      }).catch((err) => console.warn("Contact formsubmit warn:", err));

      // 2. Also send to our internal server API endpoint
      const internalApiPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((e) => console.warn("Contact API warn:", e));

      // Execute in parallel with a 1.2 second race timeout so the button never freezes
      await Promise.race([
        Promise.allSettled([formSubmitPromise, internalApiPromise]),
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
          <h1 className="font-serif text-4xl md:text-5xl font-black">தொடர்பு கொள்ள (Contact Us)</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            ஆலய விவரங்கள், சந்தேகங்கள் அல்லது ஜெபத் தேவைகளுக்கு எங்களை எப்போது வேண்டுமானாலும் தொடர்பு கொள்ளலாம்.
          </p>
        </div>
      </section>

      {/* 2. Key Details & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-2xl font-black text-primary">
              தொடர்பு விவரங்கள்
            </h2>

            <div className="space-y-4 text-sm text-stone-600">
              
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Office Address</span>
                  <p className="text-stone-900 font-medium">
                    {churchConfig.contact.address.street}<br />
                    {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:text-accent mt-1 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" /> வரைபடத்தில் வழி அறிய
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">தொலைபேசி எண்</span>
                  <a href={`tel:${churchConfig.contact.phone}`} className="text-stone-900 font-medium hover:text-accent">
                    {churchConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">மின்னஞ்சல் முகவரி</span>
                  <a href={`mailto:${churchConfig.contact.email}`} className="text-stone-900 font-medium hover:text-accent">
                    {churchConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">அலுவலக நேரம்</span>
                  <p className="text-stone-900 font-medium">{churchConfig.contact.officeHours}</p>
                </div>
              </div>

            </div>

            {/* Social Links Row */}
            <div className="space-y-2 border-t border-border pt-6">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">எங்களோடு இணையுங்கள்</span>
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

            {/* Map Frame placeholder */}
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
              செய்திகள் / கேள்விகள் அனுப்ப
            </h3>

            {status === "success" ? (
              <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-4 animate-fade-in-up">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-primary">செய்தி அனுப்பப்பட்டது!</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    அன்பான <strong>{formData.name}</strong>, உங்களது செய்தி பெறப்பட்டது. சபை அலுவலகப் பொறுப்பாளர்கள் விரைவில் உங்களைத் தொடர்பு கொள்வார்கள்.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-primary hover:text-accent underline"
                >
                  மற்றொரு செய்தி அனுப்ப
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="உங்கள் பெயர்"
                    name="name"
                    type="text"
                    placeholder="எ.கா: யோவான்"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />

                  <Input
                    label="மின்னஞ்சல் முகவரி"
                    name="email"
                    type="email"
                    placeholder="எ.கா: user@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="தொடர்பு கொள்ள வேண்டிய பிரிவு"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    options={[
                      { value: "general", label: "சபை அலுவலகம் / பொதுவானவை" },
                      { value: "kids", label: "சிறுவர் ஊழியம் (Vaarthai Kids)" },
                      { value: "youth", label: "இளைஞர் ஊழியம் (Encounter Youth)" },
                      { value: "groups", label: "இல்லக் கூட்டங்கள் (LifeGroups)" },
                      { value: "finance", label: "நிதி மற்றும் காணிக்கை அலுவலகம்" },
                      { value: "care", label: "போதக பராமரிப்பு மற்றும் ஆலோசனை" }
                    ]}
                  />

                  <Input
                    label="செய்திப் பொருள் (Subject)"
                    name="subject"
                    type="text"
                    placeholder="எ.கா: சபை ஆராதனை குறித்த கேள்வி"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <TextArea
                  label="செய்தி / கருத்து விவரம்"
                  name="message"
                  placeholder="உங்களது கேள்வி அல்லது செய்தியை இங்கு உள்ளிடலாம்..."
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
                  {status === "loading" ? "அனுப்பப்படுகிறது..." : "செய்தி அனுப்ப"}
                </Button>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
