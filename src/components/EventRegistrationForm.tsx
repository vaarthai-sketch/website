"use client";

import React, { useState } from "react";
import { CheckCircle2, Users, QrCode, Bell } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";

interface EventRegistrationFormProps {
  eventTitle: string;
  eventId?: string;
  isEn?: boolean;
}

export const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({
  eventTitle,
  eventId = "event",
  isEn = true,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adults: "1",
    children: "0",
    reminderOptIn: true,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [rsvpCode, setRsvpCode] = useState("");

  const adultsCount = Math.max(1, parseInt(formData.adults, 10) || 1);
  const childrenCount = Math.max(0, parseInt(formData.children, 10) || 0);
  const totalHeadcount = adultsCount + childrenCount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage(isEn ? "Please enter your full name." : "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.");
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus("error");
      setErrorMessage(isEn ? "Please enter a valid email address." : "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Generate a deterministic-style RSVP code for door QR check-in
    const prefix = eventId === "carolights-26" ? "CL26" : "VEC";
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    const generatedCode = `${prefix}-${randomPart}-${totalHeadcount}P`;

    try {
      // 1. Send automatically to info@vaarthai.org.au without opening email client
      await fetch("https://formsubmit.co/ajax/info@vaarthai.org.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Event RSVP (${totalHeadcount} guests): ${eventTitle}`,
          _template: "table",
          RSVP_CheckIn_Code: generatedCode,
          Event: eventTitle,
          Name: formData.name.trim(),
          Email: formData.email.trim(),
          Phone: formData.phone.trim() || "Not provided",
          Adults: String(adultsCount),
          Children: String(childrenCount),
          Total_Headcount: String(totalHeadcount),
          Day_Before_Reminder: formData.reminderOptIn ? "Yes" : "No",
        }),
      }).catch((err) => console.warn("Formsubmit warn:", err));

      // 2. Also record in internal server API endpoint
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          department: `Event RSVP: ${eventTitle}`,
          subject: `RSVP [${generatedCode}]: ${totalHeadcount} guests (${adultsCount} Adults, ${childrenCount} Children)`,
          message: `RSVP Code: ${generatedCode}\nEvent: ${eventTitle}\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nPhone: ${formData.phone.trim() || "N/A"}\nAdults: ${adultsCount}\nChildren: ${childrenCount}\nTotal Headcount (Food & Seating): ${totalHeadcount}\nSend Day-Before Reminder: ${formData.reminderOptIn ? "Yes" : "No"}`,
        }),
      }).catch((err) => console.warn("Contact API warn:", err));

      setRsvpCode(generatedCode);
      setStatus("success");
    } catch (error) {
      console.error("Error submitting event registration:", error);
      setStatus("error");
      setErrorMessage(
        isEn
          ? "Something went wrong while sending your RSVP. Please try again or email info@vaarthai.org.au."
          : "பதிவு செய்வதில் பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும் அல்லது info@vaarthai.org.au என்ற முகவரிக்கு மின்னஞ்சல் அனுப்பவும்."
      );
    }
  };

  if (status === "success") {
    const qrPayload = encodeURIComponent(
      `VAARTHAI-RSVP|${rsvpCode}|${eventId}|${formData.name.trim()}|A:${adultsCount}|C:${childrenCount}|T:${totalHeadcount}`
    );
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrPayload}`;

    return (
      <div className="bg-emerald-50/90 border border-accent/30 rounded-xl p-6 text-center space-y-4 animate-fade-in-up">
        <CheckCircle2 className="w-11 h-11 text-accent mx-auto" />
        <div className="space-y-1">
          <h3 className="font-heading text-lg font-bold text-primary">
            {isEn ? "RSVP Confirmed!" : "உங்கள் வருகைப் பதிவு உறுதி செய்யப்பட்டது!"}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {isEn ? (
              <>
                Thank you, <strong>{formData.name}</strong>! We have reserved seating and catering for{" "}
                <strong>
                  {totalHeadcount} {totalHeadcount === 1 ? "person" : "people"}
                </strong>{" "}
                ({adultsCount} {adultsCount === 1 ? "Adult" : "Adults"},{" "}
                {childrenCount} {childrenCount === 1 ? "Child" : "Children"}).
              </>
            ) : (
              <>
                நன்றி, <strong>{formData.name}</strong>! மொத்தம்{" "}
                <strong>{totalHeadcount} நபர்களுக்கு</strong> ({adultsCount} பெரியவர்கள்,{" "}
                {childrenCount} குழந்தைகள்) இருக்கை மற்றும் உணவு ஏற்பாட்டிற்காக உங்கள் பதிவு சேர்க்கப்பட்டது.
              </>
            )}
          </p>
        </div>

        {/* QR Check-in Pass Box */}
        <div className="bg-white border border-border rounded-lg p-4 space-y-2.5 shadow-xs">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
            <QrCode className="w-3.5 h-3.5 text-accent" />
            <span>{isEn ? "Door Check-In Pass" : "நுழைவாயில் QR அடையாள அட்டை"}</span>
          </div>
          <div className="flex justify-center">
            <img
              src={qrImageUrl}
              alt={`RSVP QR Code ${rsvpCode}`}
              width={136}
              height={136}
              className="w-34 h-34 rounded border border-border p-1.5 bg-white"
            />
          </div>
          <div className="font-mono text-xs font-extrabold tracking-widest text-primary bg-neutral-light py-1 px-3 rounded inline-block">
            {rsvpCode}
          </div>
          <p className="text-[11px] text-stone-500">
            {isEn
              ? "Save or screenshot this QR code for quick check-in at the door. We’ll also send a reminder the day before the event."
              : "நிகழ்வு நாளன்று நுழைவாயிலில் எளிதாகப் பதிவு செய்ய இந்த QR குறியீட்டை சேமித்துக் கொள்ளுங்கள். நிகழ்விற்கு முதல் நாள் நினைவூட்டல் அனுப்பப்படும்."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label={isEn ? "Your Full Name" : "உங்கள் முழு பெயர்"}
        name="name"
        type="text"
        placeholder={isEn ? "e.g. Arun Kumar" : "உ.ம். அருண் குமார்"}
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label={isEn ? "Email Address" : "மின்னஞ்சல் முகவரி"}
          name="email"
          type="email"
          placeholder={isEn ? "you@example.com" : "arun@example.com"}
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <Input
          label={isEn ? "Mobile Number (for Reminder)" : "கைபேசி எண் (நினைவூட்டலுக்கு)"}
          name="phone"
          type="tel"
          placeholder={isEn ? "e.g. 0412 345 678" : "உ.ம். 0412 345 678"}
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      {/* Headcount Breakdown: Adults & Children */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="reg-adults" className="block text-sm font-semibold text-stone-700 mb-1.5">
            {isEn ? "Adults (13+)" : "பெரியவர்கள்"}
          </label>
          <div className="relative">
            <select
              id="reg-adults"
              name="adults"
              value={formData.adults}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm font-semibold appearance-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={String(num)}>
                  {num} {isEn ? (num === 1 ? "Adult" : "Adults") : num === 1 ? "பெரியவர்" : "பெரியவர்கள்"}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-600">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="reg-children" className="block text-sm font-semibold text-stone-700 mb-1.5">
            {isEn ? "Children (Under 13)" : "குழந்தைகள்"}
          </label>
          <div className="relative">
            <select
              id="reg-children"
              name="children"
              value={formData.children}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm font-semibold appearance-none"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={String(num)}>
                  {num} {isEn ? (num === 1 ? "Child" : "Children") : num === 1 ? "குழந்தை" : "குழந்தைகள்"}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-600">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Live Headcount Summary for Food & Seating */}
      <div className="bg-neutral-light/80 border border-border rounded-lg px-3.5 py-2.5 flex items-center justify-between text-xs text-stone-700">
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <Users className="w-4 h-4 text-accent shrink-0" />
          {isEn ? "Total Headcount (Seating & Dinner):" : "மொத்த எண்ணிக்கை (இருக்கை & விருந்து):"}
        </span>
        <span className="font-bold text-primary">
          {totalHeadcount} ({adultsCount} {isEn ? "A" : "பெ"} + {childrenCount} {isEn ? "C" : "கு"})
        </span>
      </div>

      {/* Day-before reminder checkbox */}
      <label className="flex items-start gap-2.5 text-xs text-stone-600 cursor-pointer select-none">
        <input
          type="checkbox"
          name="reminderOptIn"
          checked={formData.reminderOptIn}
          onChange={handleInputChange}
          className="mt-0.5 rounded border-stone-300 text-primary focus:ring-accent"
        />
        <span className="leading-snug flex items-center gap-1">
          <Bell className="w-3.5 h-3.5 text-accent shrink-0 inline" />
          {isEn
            ? "Send me a reminder the day before the event"
            : "நிகழ்விற்கு முந்தைய நாள் எனக்கு நினைவூட்டல் செய்தி அனுப்பவும்"}
        </span>
      </label>

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
        {status === "loading"
          ? isEn
            ? "Confirming RSVP..."
            : "பதிவு செய்யப்படுகிறது..."
          : isEn
            ? `RSVP for ${totalHeadcount} ${totalHeadcount === 1 ? "Guest" : "Guests"}`
            : `${totalHeadcount} நபர்களுக்கு பதிவு செய்க (RSVP)`}
      </Button>
    </form>
  );
};
