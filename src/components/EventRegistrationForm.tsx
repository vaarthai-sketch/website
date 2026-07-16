"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";

interface EventRegistrationFormProps {
  eventTitle: string;
  isEn?: boolean;
}

export const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({ eventTitle, isEn = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1"
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage(isEn ? "Please enter your name." : "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.");
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus("error");
      setErrorMessage(isEn ? "Please enter a valid email address." : "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // 1. Send automatically to info@vaarthai.org.au without opening email client
      await fetch("https://formsubmit.co/ajax/info@vaarthai.org.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Event RSVP: ${eventTitle}`,
          _template: "table",
          Event: eventTitle,
          Name: formData.name.trim() || "Not provided",
          Email: formData.email.trim() || "Not provided",
          Attendees: formData.guests
        }),
      }).catch((err) => console.warn("Formsubmit warn:", err));

      // 2. Also record in internal server API endpoint
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim() || "Anonymous",
          email: formData.email.trim() || "Not provided",
          department: `Event: ${eventTitle}`,
          subject: `Event RSVP: ${eventTitle}`,
          message: `RSVP for ${formData.guests} attendee(s) to ${eventTitle}.`
        }),
      }).catch((err) => console.warn("Contact API warn:", err));

      setStatus("success");
    } catch (error) {
      console.error("Error submitting event registration:", error);
      setStatus("error");
      setErrorMessage(
        isEn 
          ? "Something went wrong while sending your registration. Please try again or email info@vaarthai.org.au." 
          : "பதிவு செய்வதில் பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும் அல்லது info@vaarthai.org.au என்ற முகவரிக்கு மின்னஞ்சல் அனுப்பவும்."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-3 animate-fade-in-up">
        <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
        <h3 className="font-serif text-lg font-bold text-primary">
          {isEn ? "Registration Complete!" : "பதிவு வெற்றிகரமாக முடிந்தது!"}
        </h3>
        <p className="text-xs text-stone-600 leading-relaxed">
          {isEn 
            ? <>Thank you! You are successfully registered for <strong>{eventTitle}</strong>. We have sent your details to info@vaarthai.org.au.</>
            : <>நன்றி! <strong>{eventTitle}</strong> நிகழ்விற்கு உங்கள் பதிவு ஏற்றுக்கொள்ளப்பட்டது. விவரங்கள் info@vaarthai.org.au முகவரிக்கு அனுப்பப்பட்டுள்ளது.</>}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label={isEn ? "Your Full Name" : "உங்கள் முழு பெயர்"}
        name="name"
        type="text"
        placeholder={isEn ? "e.g. John Doe" : "உ.ம். அருண் குமார்"}
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <Input
        label={isEn ? "Email Address" : "மின்னஞ்சல் முகவரி"}
        name="email"
        type="email"
        placeholder={isEn ? "e.g. john@example.com" : "உ.ம். arun@example.com"}
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <div className="w-full">
        <label htmlFor="reg-guests" className="block text-sm font-semibold text-stone-700 mb-1.5">
          {isEn ? "Number of Attendees" : "பங்கேற்பாளர்களின் எண்ணிக்கை"}
        </label>
        <div className="relative">
          <select
            id="reg-guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-base appearance-none"
          >
            <option value="1">{isEn ? "1 Person" : "1 நபர்"}</option>
            <option value="2">{isEn ? "2 People" : "2 நபர்கள்"}</option>
            <option value="3">{isEn ? "3 People" : "3 நபர்கள்"}</option>
            <option value="4">{isEn ? "4 People" : "4 நபர்கள்"}</option>
            <option value="5">{isEn ? "5+ People" : "5+ நபர்கள்"}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-600">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
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
        className="font-bold py-2.5"
        disabled={status === "loading"}
      >
        {status === "loading" ? (isEn ? "Registering..." : "பதிவு செய்யப்படுகிறது...") : (isEn ? "RSVP & Register" : "பதிவு செய்க (RSVP)")}
      </Button>
    </form>
  );
};
