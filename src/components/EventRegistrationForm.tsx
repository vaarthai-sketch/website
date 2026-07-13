"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";

interface EventRegistrationFormProps {
  eventTitle: string;
}

export const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({ eventTitle }) => {
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
        <h3 className="font-serif text-lg font-bold text-primary">Registration Complete!</h3>
        <p className="text-xs text-stone-600 leading-relaxed">
          Thank you! You are successfully registered for the <strong>{eventTitle}</strong>. We've sent a confirmation email to <strong>{formData.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Your Full Name"
        name="name"
        type="text"
        placeholder="e.g. John Doe"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="e.g. john@example.com"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <div className="w-full">
        <label htmlFor="reg-guests" className="block text-sm font-semibold text-stone-700 mb-1.5">
          Number of Attendees
        </label>
        <div className="relative">
          <select
            id="reg-guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 bg-white border border-border rounded-md text-stone-900 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-base appearance-none"
          >
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5">5+ People</option>
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
        {status === "loading" ? "Registering..." : "RSVP & Register"}
      </Button>
    </form>
  );
};
