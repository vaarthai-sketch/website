"use client";

import React, { useState } from "react";
import { 
  Calendar, MapPin, Clock, Compass, Info, Check, CheckCircle2, ChevronDown, ChevronUp, Map, Accessibility
} from "lucide-react";
import { churchConfig } from "@/data/config";
import { faqsData } from "@/data/faqs";
import { Button } from "@/components/Button";
import { Input, TextArea, Select } from "@/components/Input";

export default function PlanYourVisitPage() {
  // Visitor Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adultsCount: "1",
    kidsCount: "0",
    kidsAges: "",
    plannedDate: "",
    specialNeeds: ""
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Accordion active FAQ state
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (activeFaqId === id) {
      setActiveFaqId(null);
    } else {
      setActiveFaqId(id);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formStatus === "error") setFormStatus("idle");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Field validations
    if (!formData.name.trim()) {
      setFormStatus("error");
      setErrorMessage("தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.");
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setFormStatus("error");
      setErrorMessage("தயவுசெய்து சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.");
      return;
    }
    if (!formData.phone.trim()) {
      setFormStatus("error");
      setErrorMessage("தயவுசெய்து உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்.");
      return;
    }
    if (!formData.plannedDate) {
      setFormStatus("error");
      setErrorMessage("வருகை தரும் தேதியைத் தேர்ந்தெடுக்கவும்.");
      return;
    }

    setFormStatus("loading");

    try {
      // 1. Send client-side AJAX request directly to FormSubmit
      const formSubmitPromise = fetch("https://formsubmit.co/ajax/info@vaarthai.org.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Plan Your Visit] புதிய வருகை பதிவு - ${formData.name} (${formData.plannedDate})`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          PlannedDate: formData.plannedDate,
          Adults: formData.adultsCount,
          Kids: formData.kidsCount,
          KidsAges: formData.kidsAges || "N/A",
          SpecialNeeds: formData.specialNeeds || "N/A",
          SubmittedAt: new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" }),
          _template: "table",
        }),
      }).catch((e) => console.warn("Visit FormSubmit warn:", e));

      // 2. Also send to our internal server API endpoint
      const internalApiPromise = fetch("/api/plan-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((e) => console.warn("Visit API warn:", e));

      // 3. Submit directly to Google Forms right from the browser if configured
      let googleFormPromise: Promise<any> = Promise.resolve();
      const actionUrl = process.env.NEXT_PUBLIC_VISIT_GOOGLE_FORM_URL || churchConfig.planVisitForm?.actionUrl;
      if (actionUrl) {
        const gData = new URLSearchParams();
        const eName = process.env.NEXT_PUBLIC_VISIT_ENTRY_NAME || churchConfig.planVisitForm?.entryNameId;
        const eEmail = process.env.NEXT_PUBLIC_VISIT_ENTRY_EMAIL || churchConfig.planVisitForm?.entryEmailId;
        const ePhone = process.env.NEXT_PUBLIC_VISIT_ENTRY_PHONE || churchConfig.planVisitForm?.entryPhoneId;
        const eDate = process.env.NEXT_PUBLIC_VISIT_ENTRY_DATE || churchConfig.planVisitForm?.entryDateId;
        if (eName) gData.append(eName, formData.name);
        if (eEmail) gData.append(eEmail, formData.email);
        if (ePhone) gData.append(ePhone, formData.phone);
        if (eDate) gData.append(eDate, formData.plannedDate);
        googleFormPromise = fetch(actionUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: gData.toString(),
        }).catch(() => {});
      }

      // Execute in parallel with a 1.2 second race timeout so the button never freezes
      await Promise.race([
        Promise.allSettled([formSubmitPromise, internalApiPromise, googleFormPromise]),
        new Promise((resolve) => setTimeout(resolve, 1200)),
      ]);

      setFormStatus("success");
    } catch (err) {
      console.error("Visit form error:", err);
      setFormStatus("error");
      setErrorMessage("பதிவு செய்வதில் பிழை ஏற்பட்டது. தயவுசெய்து சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      adultsCount: "1",
      kidsCount: "0",
      kidsAges: "",
      plannedDate: "",
      specialNeeds: ""
    });
    setFormStatus("idle");
  };

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            {churchConfig.name}-க்கு உங்களை வரவேற்கிறோம்
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black">வருகையைத் திட்டமிட (Plan Your Visit)</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            ஆலயத்திற்கு முதன்முறையாக வரும் உங்களுக்கு உதவ நாங்கள் தயாராக இருக்கிறோம். உங்களுக்குத் தேவையான தகவல்கள் கீழே:
          </p>
        </div>
      </section>

      {/* 2. Key Logistics grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Guide panels */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">
              ஞாயிறு ஆராதனை வழிகாட்டி
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="border border-border p-5 rounded-lg bg-white space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  <h3>ஆராதனை நேரம்</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  ஆராதனை சுமார் <strong>65 நிமிடங்கள்</strong> நடைபெறும். ஆராதனை தொடங்குவதற்கு 10-15 நிமிடங்களுக்கு முன்பாக வருவது நல்லது.
                </p>
              </div>

              <div className="border border-border p-5 rounded-lg bg-white space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Accessibility className="w-5 h-5 text-accent shrink-0" />
                  <h3>சிறப்பு வசதிகள்</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  முதியோர் மற்றும் மாற்றுத்திறனாளிகளுக்காகப் படியில்லா சாய்வுதள வசதிகளும், பிரத்யேக வாகன நிறுத்த இடங்களும் உள்ளன.
                </p>
              </div>

              <div className="border border-border p-5 rounded-lg bg-white space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <h3>திருவிருந்து</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  மாதத்தின் முதல் ஞாயிற்றுக்கிழமை திருவிருந்து பகிர்ந்துகொள்ளப்படும். இயேசுவை ஏற்றுக்கொண்ட விசுவாசிகள் அனைவரும் பங்கேற்கலாம்.
                </p>
              </div>

            </div>

            {/* Childcare & Check-in callout */}
            <div className="bg-neutral-light/50 border border-border p-6 rounded-lg space-y-3">
              <h3 className="font-serif font-bold text-primary text-lg">
                சிறுவர் ஊழிய வகுப்புகள் (Vaarthai Kids)
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                குழந்தைகளுக்கான பாதுகாப்பான வருகைப்பதிவு மற்றும் பாதுகாப்பு அட்டை வழங்கப்படுகிறது. எங்களது வரவேற்புக் குழுவினர் உங்கள் குழந்தைகளை உரிய வகுப்பில் சேர்க்க உங்களுக்கு வழிகாட்டுவார்கள். விளையாட்டு மற்றும் எளிய வேதாகமப் பாடங்கள் மூலம் குழந்தைகளுக்குக் கற்பிக்கிறோம்.
              </p>
              <div className="pt-2 text-xs text-stone-500 font-semibold flex items-center gap-1.5">
                <Info className="w-4 h-4 text-accent shrink-0" />
                <span>நான்கு வயது குழந்தைகள் முதல் 6-ம் வகுப்பு வரையிலான சிறுவர்களுக்கான வகுப்புகள்.</span>
              </div>
            </div>

            {/* Entrance Map details */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-primary text-lg flex items-center gap-2">
                <Map className="w-5 h-5 text-accent" />
                ஆலய வழி மற்றும் வரைபடம்
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                எங்கள் அலுவலகம் <strong>{churchConfig.contact.address.street}, {churchConfig.contact.address.city}</strong>-ல் அமைந்துள்ளது.
              </p>
              <div className="aspect-[21/9] w-full rounded-lg overflow-hidden border border-border bg-stone-100 shadow-inner relative flex items-center justify-center">
                <iframe
                  title="Vaarthai Evangelical Church Location Map"
                  src={churchConfig.contact.address.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>

          {/* 3. Let us know you are coming RSVP FORM */}
          <div className="lg:col-span-5 bg-white border border-border rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-black text-primary">
                வருகையைப் பதிவு செய்ய
              </h2>
              <p className="text-xs text-stone-600">
                வருகையைப் பதிவு செய்வது, புதியவர்களுக்கான வரவேற்புப் பரிசுகள் மற்றும் குழந்தைகள் கவனிப்பு வகுப்புகளைத் திட்டமிட உதவும்!
              </p>
            </div>

            {formStatus === "success" ? (
              <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-4 animate-fade-in-up">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-primary">வருகைப் பதிவு செய்யப்பட்டது!</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    அன்பான <strong>{formData.name}</strong>! உங்களது வருகையைப் பதிவு செய்தமைக்கு நன்றி. <strong>{formData.plannedDate}</strong> அன்று உங்களைச் சந்திக்கக் காத்திருக்கிறோம். உங்களது மின்னஞ்சலுக்கு வரவேற்பு விவரங்கள் அனுப்பப்பட்டுள்ளன.
                  </p>
                </div>
                <button 
                  onClick={resetForm}
                  className="text-xs font-bold text-primary hover:text-accent underline"
                >
                  பதிவைத் திருத்த அல்லது புதிய பதிவு செய்ய
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input
                  label="உங்கள் முழு பெயர்"
                  name="name"
                  type="text"
                  placeholder="எ.கா: யோவான்"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                
                <Input
                  label="மின்னஞ்சல் முகவரி"
                  name="email"
                  type="email"
                  placeholder="எ.கா: mail@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
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

                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="பெரியவர்கள் எண்ணிக்கை"
                    name="adultsCount"
                    value={formData.adultsCount}
                    onChange={handleInputChange}
                    options={[
                      { value: "1", label: "1 நபர்" },
                      { value: "2", label: "2 நபர்கள்" },
                      { value: "3", label: "3 நபர்கள்" },
                      { value: "4", label: "4+ நபர்கள்" }
                    ]}
                  />

                  <Select
                    label="குழந்தைகள் எண்ணிக்கை"
                    name="kidsCount"
                    value={formData.kidsCount}
                    onChange={handleInputChange}
                    options={[
                      { value: "0", label: "குழந்தைகள் இல்லை" },
                      { value: "1", label: "1 குழந்தை" },
                      { value: "2", label: "2 குழந்தைகள்" },
                      { value: "3", label: "3 குழந்தைகள்" },
                      { value: "4", label: "4+ குழந்தைகள்" }
                    ]}
                  />
                </div>

                {parseInt(formData.kidsCount) > 0 && (
                  <Input
                    label="குழந்தைகளின் வயது விவரம்"
                    name="kidsAges"
                    type="text"
                    placeholder="எ.கா: 4, 7"
                    value={formData.kidsAges}
                    onChange={handleInputChange}
                    helperText="குழந்தைகளை அவர்களின் வயதுக்குரிய வகுப்பில் சேர்க்க உதவும்."
                  />
                )}

                <Input
                  label="வருகை தரும் ஞாயிறு தேதி"
                  name="plannedDate"
                  type="date"
                  value={formData.plannedDate}
                  onChange={handleInputChange}
                  required
                />

                <TextArea
                  label="சிறப்பு தேவைகள் அல்லது மாற்றுத்திறனாளி வசதிகள்"
                  name="specialNeeds"
                  placeholder="இருக்கை வசதி, சக்கர நாற்காலிப் பாதை அல்லது பிற தேவைகள்..."
                  value={formData.specialNeeds}
                  onChange={handleInputChange}
                  rows={3}
                />

                {formStatus === "error" && (
                  <p className="text-sm text-error font-semibold" role="alert">
                    {errorMessage}
                  </p>
                )}

                <Button 
                  type="submit" 
                  variant="primary" 
                  fullWidth 
                  className="font-bold py-3"
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading" ? "பதிவு செய்யப்படுகிறது..." : "வருகையைப் பதிவு செய்ய"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. FAQs Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">சந்தேகங்கள் உள்ளதா?</span>
          <h2 className="font-serif text-3xl font-black text-primary">அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)</h2>
          <p className="text-sm text-stone-500">புதியவர்கள் பொதுவாகக் கேட்கும் கேள்விகளுக்கான பதில்களைத் தொகுத்துள்ளோம்.</p>
        </div>

        <div className="border border-border rounded-lg bg-white overflow-hidden divide-y divide-border">
          {faqsData.map((faq) => {
            const isExpanded = activeFaqId === faq.id;
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-stone-900 hover:bg-neutral-light/30 focus:outline-none focus:bg-neutral-light/50"
                  aria-expanded={isExpanded}
                >
                  <span>{faq.question}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-accent shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent shrink-0 ml-4" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
