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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const subject = encodeURIComponent(`Get Involved: ${ministryName}`);
    let bodyText = `Hello,\n\nI would like to get involved in the ${ministryName}.\n`;
    if (formData.name.trim()) bodyText += `\nName: ${formData.name.trim()}`;
    if (formData.email.trim()) bodyText += `\nEmail: ${formData.email.trim()}`;
    if (formData.message.trim()) bodyText += `\n\nMessage:\n${formData.message.trim()}`;
    else bodyText += `\n\nPlease let me know how I can participate or attend!`;

    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:info@vaarthai.org.au?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-3 animate-fade-in-up">
        <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
        <h3 className="font-serif text-lg font-bold text-primary">Email Client Opened!</h3>
        <p className="text-xs text-stone-600 leading-relaxed">
          Your inquiry for <strong>{ministryName}</strong> has been prepared and addressed to <strong>info@vaarthai.org.au</strong>. Please click <strong>Send</strong> in your email application to complete your submission.
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
