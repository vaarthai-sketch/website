"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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

    const subject = `வார்த்தை திருச்சபை - Newsletter Subscription (${name})`;
    const body = `வணக்கம்,

கீழ்க்கண்ட நபர் வார்த்தை திருச்சபையின் வாராந்திர மடலை (Weekly Newsletter) பெற சந்தா பதிவு செய்துள்ளார்:

பெயர் (Name): ${name}
மின்னஞ்சல் (Email): ${email}

தயவுசெய்து இந்த மின்னஞ்சலை உங்களின் Google Sheet (Newsletter Subscribers Database) பட்டியலில் சேர்த்து, வாராந்திர மடலை அனுப்பவும்.

நன்றி!`;

    window.location.href = `mailto:info@vaarthai.org.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setName("");
    }, 1200);
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
          {status === "loading" ? "Subscribing..." : "Subscribe"}
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
