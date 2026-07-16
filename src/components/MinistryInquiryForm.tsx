"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input, TextArea } from "./Input";
import { Button } from "./Button";

interface MinistryInquiryFormProps {
  ministryName: string;
}

export const MinistryInquiryForm: React.FC<MinistryInquiryFormProps> = ({ ministryName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          _subject: `Get Involved: ${ministryName}`,
          _template: "table",
          Ministry: ministryName,
          Name: formData.name.trim() || "Not provided",
          Email: formData.email.trim() || "Not provided",
          Message: formData.message.trim() || `I would like to get involved in the ${ministryName}. Please let me know how I can participate or attend!`,
        }),
      }).catch((err) => console.warn("Formsubmit warn:", err));

      // 2. Also record in internal server API endpoint
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim() || "Anonymous",
          email: formData.email.trim() || "Not provided",
          department: ministryName,
          subject: `Get Involved: ${ministryName}`,
          message: formData.message.trim() || `I would like to get involved in the ${ministryName}.`
        }),
      }).catch((err) => console.warn("Contact API warn:", err));

      setStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage("Something went wrong while sending your inquiry. Please try again or email us directly at info@vaarthai.org.au.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-3 animate-fade-in-up">
        <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
        <h3 className="font-serif text-lg font-bold text-primary">Inquiry Sent Successfully!</h3>
        <p className="text-xs text-stone-600 leading-relaxed">
          Thank you for reaching out! Your inquiry regarding <strong>{ministryName}</strong> has been sent automatically to <strong>info@vaarthai.org.au</strong>. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Your Name (Optional)"
        name="name"
        type="text"
        placeholder="e.g. Jane Doe"
        value={formData.name}
        onChange={handleInputChange}
      />

      <Input
        label="Email Address (Optional)"
        name="email"
        type="email"
        placeholder="e.g. jane@example.com"
        value={formData.email}
        onChange={handleInputChange}
      />

      <TextArea
        label="Introduce Yourself / Message"
        name="message"
        placeholder="Tell us a little bit about yourself or ask any questions you have about this ministry..."
        value={formData.message}
        onChange={handleInputChange}
        rows={3}
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
        className="font-bold py-2.5"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting Inquiry..." : "Get Involved"}
      </Button>
    </form>
  );
};
