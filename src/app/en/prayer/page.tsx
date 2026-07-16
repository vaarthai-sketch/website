"use client";

import React, { useState } from "react";
import { Shield, CheckCircle2, AlertTriangle, PhoneCall } from "lucide-react";
import { Button } from "@/components/Button";
import { Input, TextArea, Select } from "@/components/Input";
import { churchConfig } from "@/data/config";

export default function EnglishPrayerRequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prayerText: "",
    privacyLevel: "prayer-team", // "pastoral-only" or "prayer-team"
    allowContact: false,
    isUrgent: false
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (status === "error") setStatus("idle");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.prayerText.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your prayer request.");
      return;
    }
    
    if (!formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your phone number.");
      return;
    }

    if (formData.allowContact && !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("If you request a pastoral callback, please enter your email address.");
      return;
    }

    setStatus("loading");

    try {
      const recipient = formData.privacyLevel === "prayer-team" ? "info@vaarthai.org.au" : "pastor@vaarthai.org.au";

      // 1. Send client-side AJAX request directly to FormSubmit
      const formSubmitPromise = fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[EN ${formData.isUrgent ? "URGENT " : ""}Prayer Request] - ${formData.name || "Believer"}`,
          Name: formData.name || "Anonymous",
          Email: formData.email || "N/A",
          Phone: formData.phone,
          PrivacyLevel: formData.privacyLevel === "prayer-team" ? "Prayer Team" : "Pastor Only (Confidential)",
          Urgent: formData.isUrgent ? "Yes" : "No",
          AllowContact: formData.allowContact ? "Yes" : "No",
          PrayerText: formData.prayerText,
          SubmittedAt: new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" }),
          _template: "table",
        }),
      }).catch((e) => console.warn("Prayer FormSubmit warn:", e));

      // 2. Also send to internal server API endpoint
      const internalApiPromise = fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((e) => console.warn("Prayer API warn:", e));

      // 3. Submit directly to Google Forms if configured
      let googleFormPromise: Promise<any> = Promise.resolve();
      const actionUrl = process.env.NEXT_PUBLIC_PRAYER_GOOGLE_FORM_URL || churchConfig.prayerForm?.actionUrl;
      if (actionUrl) {
        const gData = new URLSearchParams();
        const eName = process.env.NEXT_PUBLIC_PRAYER_ENTRY_NAME || churchConfig.prayerForm?.entryNameId;
        const eEmail = process.env.NEXT_PUBLIC_PRAYER_ENTRY_EMAIL || churchConfig.prayerForm?.entryEmailId;
        const ePhone = process.env.NEXT_PUBLIC_PRAYER_ENTRY_PHONE || churchConfig.prayerForm?.entryPhoneId;
        const eText = process.env.NEXT_PUBLIC_PRAYER_ENTRY_TEXT || churchConfig.prayerForm?.entryPrayerTextId;
        if (eName) gData.append(eName, formData.name || "Anonymous");
        if (eEmail) gData.append(eEmail, formData.email || "N/A");
        if (ePhone) gData.append(ePhone, formData.phone);
        if (eText) gData.append(eText, formData.prayerText);

        googleFormPromise = fetch(actionUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: gData.toString(),
        }).catch((e) => console.warn("Prayer Google Form warn:", e));
      }

      await Promise.race([
        Promise.allSettled([formSubmitPromise, internalApiPromise, googleFormPromise]),
        new Promise((resolve) => setTimeout(resolve, 1200)),
      ]);

      setStatus("success");
    } catch (err) {
      console.error("Prayer form error:", err);
      setStatus("error");
      setErrorMessage("An error occurred while sending your prayer request. Please try again shortly.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      prayerText: "",
      privacyLevel: "prayer-team",
      allowContact: false,
      isUrgent: false
    });
    setStatus("idle");
  };

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black">Prayer Requests</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            God hears and answers prayer. Share your burdens and requests with us, and our pastoral team will faithfully intercede for you.
          </p>
        </div>
      </section>

      {/* 2. Page Content & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Supportive info and Emergency notice */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">
              How Can We Pray For You?
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm">
              Whether you are facing health trials, family challenges, career uncertainties, or spiritual battles, our pastoral leadership and prayer warriors are dedicated to standing in agreement with you before God&apos;s throne of grace.
            </p>
            <p className="text-stone-700 leading-relaxed text-sm">
              All prayer requests submitted through this portal are treated with the highest degree of confidentiality and respect. They are never published publicly on the website or broadcasted without explicit consent.
            </p>

            <div className="bg-[#0F172A]/5 border-l-4 border-accent p-5 rounded-r-lg space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Shield className="w-5 h-5 text-accent" />
                <h3 className="font-serif">Confidentiality Guarantee</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                You may choose to share your request with our trusted <strong>Prayer Team</strong> or designate it for the <strong>Senior Pastor Only</strong> for strict pastoral confidentiality.
              </p>
            </div>

            {/* CRITICAL WARNING: Not an emergency service */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 flex gap-3 text-stone-800 text-sm">
              <AlertTriangle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <span className="font-bold text-red-800 uppercase tracking-wide text-xs">Emergency Notice:</span>
                <p className="leading-relaxed text-xs">
                  This website and form are not monitored 24/7 for medical or psychiatric emergencies. If you or someone you know is experiencing a life-threatening emergency or mental health crisis, please contact emergency services immediately.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:000"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-red-700 text-white font-semibold text-xs hover:bg-red-800 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Emergency Dial 000
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Private Request Form */}
          <div className="lg:col-span-6 bg-white border border-border rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-primary border-b border-border pb-3">
              Submit Your Prayer Request
            </h3>

            {status === "success" ? (
              <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-4 animate-fade-in-up">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-primary">Prayer Request Received!</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Thank you for sharing your prayer need with us. Our pastoral team will faithfully lift up your request in prayer according to your confidentiality preference.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-primary hover:text-accent underline"
                >
                  Submit Another Prayer Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <Input
                  label="Your Full Name"
                  name="name"
                  type="text"
                  placeholder="e.g., John Smith (or leave blank if anonymous)"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="e.g., email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    helperText={formData.allowContact ? "Required if requesting pastoral contact." : ""}
                    required
                  />

                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="e.g., 0412 345 678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <TextArea
                  label="Your Prayer Request"
                  name="prayerText"
                  placeholder="Clearly describe your prayer request or praise report here..."
                  value={formData.prayerText}
                  onChange={handleInputChange}
                  required
                  rows={5}
                />

                <Select
                  label="Confidentiality Preference"
                  name="privacyLevel"
                  value={formData.privacyLevel}
                  onChange={handleInputChange}
                  options={[
                    { value: "prayer-team", label: "Share with Senior Pastor & Intercessory Prayer Team" },
                    { value: "pastoral-only", label: "Senior Pastor Only (Strictly Confidential)" }
                  ]}
                />

                {/* Checkbox fields */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-2.5 text-sm text-stone-700 select-none">
                    <input
                      type="checkbox"
                      name="allowContact"
                      checked={formData.allowContact}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-accent accent-primary"
                    />
                    <span>
                      I would like a pastor or ministry leader to contact me for personal prayer or encouragement.
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 text-sm text-red-800 font-medium select-none bg-red-50/50 p-2.5 rounded border border-red-100">
                    <input
                      type="checkbox"
                      name="isUrgent"
                      checked={formData.isUrgent}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 rounded border-red-300 text-red-700 focus:ring-red-500 accent-red-700"
                    />
                    <span>
                      This is an urgent request (such as ICU hospitalization, family bereavement, or crisis).
                    </span>
                  </label>
                </div>

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
                  {status === "loading" ? "Submitting Request..." : "Send Prayer Request"}
                </Button>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
