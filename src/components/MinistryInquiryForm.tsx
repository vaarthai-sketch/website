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

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-3 animate-fade-in-up">
        <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
        <h3 className="font-serif text-lg font-bold text-primary">Inquiry Sent!</h3>
        <p className="text-xs text-stone-600 leading-relaxed">
          Thank you for your interest in joining the <strong>{ministryName}</strong>. A ministry coordinator will contact you at <strong>{formData.email}</strong> within 2-3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Your Name"
        name="name"
        type="text"
        placeholder="e.g. Jane Doe"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="e.g. jane@example.com"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <TextArea
        label="Introduce Yourself"
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
