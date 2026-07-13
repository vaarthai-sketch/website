"use client";

import React, { useState } from "react";
import { MessageSquare, Heart, Shield, CheckCircle2, AlertTriangle, PhoneCall } from "lucide-react";
import { Button } from "@/components/Button";
import { Input, TextArea, Select } from "@/components/Input";

export default function PrayerRequestPage() {
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.prayerText.trim()) {
      setStatus("error");
      setErrorMessage("தயவுசெய்து உங்கள் ஜெப விண்ணப்பத்தை உள்ளிடவும்.");
      return;
    }
    
    if (!formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("தயவுசெய்து உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்.");
      return;
    }

    if (formData.allowContact && !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("உங்களைத் தொடர்பு கொள்ள அனுமதித்தால், மின்னஞ்சல் முகவரியைக் குறிப்பிடவும்.");
      return;
    }

    setStatus("loading");

    const recipient = formData.privacyLevel === "prayer-team" ? "info@vaarthai.org.au" : "pastor@vaarthai.org.au";
    const subject = `ஜெப விண்ணப்பம் (Prayer Request) - ${formData.name || "விசுவாசி"}`;
    const body = `வணக்கம்,

வார்த்தை சபைக்கு கீழ்க்கண்ட ஜெப விண்ணப்பம் அனுப்பப்பட்டுள்ளது:

பெயர்: ${formData.name || "குறிப்பிடப்படவில்லை"}
மின்னஞ்சல்: ${formData.email || "குறிப்பிடப்படவில்லை"}
தொலைபேசி எண்: ${formData.phone}
ஜெபப் பாதுகாப்பு விருப்பம்: ${formData.privacyLevel === "prayer-team" ? "போதகர் மற்றும் சபையின் ஜெபக் குழுவினரோடு பகிர்ந்து கொள்ள" : "போதகரோடு மட்டும் பகிர்ந்து கொள்ள (ரகசியமாக)"}
அவசர ஜெபத் தேவை: ${formData.isUrgent ? "ஆம் (அவசரம்)" : "இல்லை"}
தொடர்பு கொள்ள அனுமதி: ${formData.allowContact ? "ஆம்" : "இல்லை"}

ஜெப விண்ணப்பம்:
${formData.prayerText}

நன்றி!`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setStatus("success");
    }, 600);
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
          <h1 className="font-serif text-4xl md:text-5xl font-black">ஜெப விண்ணப்பங்கள் (Prayer Requests)</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            ஜெபத்திற்குப் பதில் உண்டு. உங்கள் ஜெபத் தேவைகளை எங்களோடு பகிர்ந்து கொள்ளுங்கள், நாங்கள் உங்களுக்காக ஜெபிப்போம்.
          </p>
        </div>
      </section>

      {/* 2. Page Content & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Supportive info and Emergency notice */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">
              நாங்கள் உங்களுக்காக எவ்வாறு ஜெபிக்கலாம்?
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm">
              வாழ்க்கையின் சவால்கள், நோய்கள், குடும்பப் பிரச்சினைகள் அல்லது எந்தவொரு இக்கட்டான சூழ்நிலையிலும் உங்களுக்கு ஜெப ஆதரவை அளிக்க நாங்கள் கடமைப்பட்டுள்ளோம். போதகர்களும் ஜெபக் குழுவினரும் உங்கள் விண்ணப்பங்களை ஜெபத்தில் தாங்குவார்கள்.
            </p>
            <p className="text-stone-700 leading-relaxed text-sm">
              இங்கு சமர்ப்பிக்கப்படும் உங்களது விண்ணப்பங்கள் அனைத்தும் மிகவும் ரகசியமாக வைக்கப்படும். இவை இணையதளத்தில் எங்கும் வெளியிடப்படாது.
            </p>

            <div className="bg-[#0F172A]/5 border-l-4 border-accent p-5 rounded-r-lg space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Shield className="w-5 h-5 text-accent" />
                <h3 className="font-serif">ரகசியக் காப்பு உறுதி</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                உங்கள் விண்ணப்பத்தைச் சபையின் பொதுவான <strong>ஜெபக் குழுவினருடன்</strong> (Prayer Team) பகிரலாம் அல்லது <strong>போதகரோடு மட்டும்</strong> (Pastor Only) மிகவும் ரகசியமாகப் பகிர்ந்து கொள்ளலாம்.
              </p>
            </div>

            {/* CRITICAL WARNING: Not an emergency service */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 flex gap-3 text-stone-800 text-sm">
              <AlertTriangle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <span className="font-bold text-red-800 uppercase tracking-wide text-xs">முக்கிய அவசர அறிவிப்பு:</span>
                <p className="leading-relaxed text-xs">
                  இந்தத் தளம் 24 மணி நேரமும் அவசர உதவிக்காகக் கண்காணிக்கப்படுவதில்லை. எனவே, உங்களுக்கு ஏதேனும் உடனடி உயிருக்கு ஆபத்தான நிலை அல்லது மருத்துவ அவசரம் ஏற்பட்டால், தயவுசெய்து அரசின் அவசர உதவி எண்களைத் தொடர்பு கொள்ளவும்.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:000"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-red-700 text-white font-semibold text-xs hover:bg-red-800 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> அவசர உதவி எண் 000
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Private Request Form */}
          <div className="lg:col-span-6 bg-white border border-border rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-primary border-b border-border pb-3">
              ஜெப விண்ணப்பம் அனுப்ப
            </h3>

            {status === "success" ? (
              <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-4 animate-fade-in-up">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-primary">விண்ணப்பம் பெறப்பட்டது!</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    உங்கள் ஜெபத் தேவை பெறப்பட்டது. உங்களது பாதுகாப்பு விருப்பங்களின்படி போதகர்கள் உங்களுக்காகப் பாரத்தோடு ஜெபிப்பார்கள்.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-primary hover:text-accent underline"
                >
                  மற்றொரு விண்ணப்பம் அனுப்ப
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <Input
                  label="உங்கள் பெயர்"
                  name="name"
                  type="text"
                  placeholder="உங்கள் பெயர் (Your Name)"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="மின்னஞ்சல் முகவரி"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    helperText={formData.allowContact ? "தொடர்பு கொள்ள இந்த மின்-அஞ்சல் கட்டாயம்." : ""}
                    required
                  />

                  <Input
                    label="தொலைபேசி எண்:"
                    name="phone"
                    type="tel"
                    placeholder="எ.கா: 0412 345 678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <TextArea
                  label="உங்கள் ஜெப விண்ணப்பம் (ஜெபத் தேவை)"
                  name="prayerText"
                  placeholder="உங்களது ஜெபத் தேவைகளைத் தெளிவாக இங்கு எழுதலாம்..."
                  value={formData.prayerText}
                  onChange={handleInputChange}
                  required
                  rows={5}
                />

                <Select
                  label="ஜெபப் பாதுகாப்பு விருப்பம்"
                  name="privacyLevel"
                  value={formData.privacyLevel}
                  onChange={handleInputChange}
                  options={[
                    { value: "prayer-team", label: "போதகர் மற்றும் சபையின் ஜெபக் குழுவினரோடு பகிர்ந்து கொள்ள" },
                    { value: "pastoral-only", label: "போதகரோடு மட்டும் பகிர்ந்து கொள்ள (ரகசியமாக)" }
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
                      தேவைப்பட்டால் போதகர்கள் என்னைத் தொடர்பு கொண்டு ஜெபிக்க அல்லது ஆலோசனை வழங்க அனுமதி அளிக்கிறேன்.
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
                      இது மிக அவசரமான விண்ணப்பம் (தீவிர சிகிச்சை அல்லது குடும்ப விபத்துக்கள் போன்றவை).
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
                  {status === "loading" ? "அனுப்பப்படுகிறது..." : "ஜெப விண்ணப்பம் அனுப்ப"}
                </Button>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
