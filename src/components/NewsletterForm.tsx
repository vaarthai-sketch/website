"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { churchConfig } from "@/data/config";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatus("error");
      setErrorMessage("தயவுசெய்து உங்கள் பெயரை உள்ளிடவும் (Please enter your name).");
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setErrorMessage("தயவுசெய்து சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.");
      return;
    }

    setStatus("loading");

    try {
      const actionUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || churchConfig.newsletterForm.actionUrl;
      const entryName = process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_NAME || churchConfig.newsletterForm.entryNameId;
      const entryEmail = process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_EMAIL || churchConfig.newsletterForm.entryEmailId;

      const formData = new URLSearchParams();
      formData.append(entryName, name);
      formData.append(entryEmail, email);

      // 1. Submit directly to Google Forms right from the browser (100% background, no-cors)
      const googleFormPromise = fetch(actionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      }).catch((e) => console.warn("Google Form submit warn:", e));

      // 2. Also send client-side AJAX request to FormSubmit as backup
      const formSubmitPromise = fetch("https://formsubmit.co/ajax/info@vaarthai.org.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[New Subscriber] வார்த்தை திருச்சபை - Weekly Newsletter (${name})`,
          Name: name,
          Email: email,
          SubscribedAt: new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" }),
          _template: "table",
        }),
      }).catch((e) => console.warn("FormSubmit warn:", e));

      // 3. Also send to our internal server API
      const internalApiPromise = fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      }).catch((e) => console.warn("Internal API warn:", e));

      // Execute all 3 in parallel with a 1.2 second max timeout race so the button NEVER gets stuck on loading
      await Promise.race([
        Promise.allSettled([googleFormPromise, formSubmitPromise, internalApiPromise]),
        new Promise((resolve) => setTimeout(resolve, 1200)),
      ]);

      setStatus("success");
      setEmail("");
      setName("");
    } catch (err) {
      console.error("Subscription error:", err);
      setStatus("error");
      setErrorMessage("சந்தா பதிவில் பிழை ஏற்பட்டது. தயவுசெய்து சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.");
    }
  };

  if (status === "success") {
    return (
      <div 
        className="bg-neutral-light/50 border border-accent/20 rounded-lg p-6 text-center animate-fade-in-up"
        role="alert"
      >
        <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-3" />
        <h3 className="font-serif text-xl font-bold text-primary mb-1">
          மிக்க நன்றி! (Thank you for subscribing!)
        </h3>
        <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
          உங்களின் சந்தா விருப்பம் அனுப்பப்பட்டது. வார்த்தை திருச்சபையின் வாராந்திர மடல்கள் இனி உங்கள் மின்னஞ்சலுக்கு வந்தடையும்.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs font-semibold text-primary hover:text-accent underline"
        >
          மற்றொரு மின்னஞ்சலை பதிவு செய்ய (Subscribe another email)
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="news-name" className="sr-only">Your Name</label>
          <input
            type="text"
            id="news-name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            required
            className="w-full px-4 py-3 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm form-input"
          />
        </div>
        <div>
          <label htmlFor="news-email" className="sr-only">Email Address</label>
          <div className="relative">
            <input
              type="email"
              id="news-email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              required
              className="w-full px-4 py-3 pl-10 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm form-input"
            />
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-muted" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
        <p className="text-[11px] text-stone-500 leading-normal max-w-md text-center sm:text-left">
          By subscribing, you consent to receive weekly newsletters, event announcements, and spiritual updates from Vaarthai Evangelical Church. You can unsubscribe at any time.
        </p>
        <Button 
          type="submit" 
          variant="primary" 
          size="sm"
          className="w-full sm:w-auto px-6 py-3 font-semibold shrink-0"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe (பதிவு செய்க)"}
        </Button>
      </div>

      {status === "error" && (
        <p className="text-sm text-error font-medium" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
};
