"use client";

import React, { useState } from "react";
import { 
  Calendar, MapPin, Clock, Compass, Info, Check, CheckCircle2, ChevronDown, ChevronUp, Map, Accessibility
} from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "@/components/Button";
import { Input, TextArea, Select } from "@/components/Input";

export default function EnglishPlanYourVisitPage() {
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

  const englishFaqs = [
    {
      id: "kids-ministry-process",
      question: "How does the children's check-in system work?",
      answer: "You can check in your children at the Vaarthai Kids desk 15 minutes before the Sunday service begins. Parents and children receive secure, matching identification tags. After the service, children are only released upon verification of the parent tag."
    },
    {
      id: "communion-practices",
      question: "When is Communion observed, and am I invited to participate?",
      answer: "We share Communion on the first and third Sunday of every month. All baptized believers who have accepted Jesus Christ as their personal Savior and are walking in fellowship with Him are invited to participate with us, regardless of denomination."
    },
    {
      id: "denomination-beliefs",
      question: "What denomination is Vaarthai Evangelical Church?",
      answer: "We are an independent, Gospel-centered Evangelical and Pentecostal church community. We firmly believe in the Triune God, the absolute authority of Scripture, salvation by grace through faith alone, and the active ministry of the Holy Spirit."
    },
    {
      id: "parking-directions",
      question: "Where should I park when I arrive at the church?",
      answer: "There is ample dedicated parking right in front of our building. Our welcome and parking team will greet you upon arrival and help direct you to the main entrance."
    }
  ];

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
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setFormStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setFormStatus("error");
      setErrorMessage("Please enter your phone number.");
      return;
    }
    if (!formData.plannedDate) {
      setFormStatus("error");
      setErrorMessage("Please select the Sunday date you plan to visit.");
      return;
    }

    setFormStatus("loading");

    try {
      // 1. Submit to FormSubmit
      const formSubmitPromise = fetch("https://formsubmit.co/ajax/info@vaarthai.org.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Plan Your Visit - EN] New Visitor Registration - ${formData.name} (${formData.plannedDate})`,
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

      // 2. Also send to internal server API endpoint
      const internalApiPromise = fetch("/api/plan-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((e) => console.warn("Visit API warn:", e));

      // 3. Submit directly to Google Forms right from browser
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

      await Promise.race([
        Promise.allSettled([formSubmitPromise, internalApiPromise, googleFormPromise]),
        new Promise((resolve) => setTimeout(resolve, 1200)),
      ]);

      setFormStatus("success");
    } catch (err) {
      console.error("Visit form error:", err);
      setFormStatus("error");
      setErrorMessage("An error occurred while submitting your visit form. Please try again shortly.");
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
            You Are Welcome Here
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black">Plan Your Visit</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            We are eager to welcome you this Sunday! Here is what you can expect and how to prepare for your first visit with us.
          </p>
        </div>
      </section>

      {/* 2. Key Logistics grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Guide panels */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">
              Sunday Service Guide
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="border border-border p-5 rounded-lg bg-white space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  <h3>Service Duration</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Our Sunday worship service lasts approximately <strong>65 to 75 minutes</strong>. We recommend arriving 10-15 minutes early to park and grab a coffee.
                </p>
              </div>

              <div className="border border-border p-5 rounded-lg bg-white space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Accessibility className="w-5 h-5 text-accent shrink-0" />
                  <h3>Accessibility</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Our building features step-free ramp access, accessible restrooms, and designated parking spaces right by the main entrance.
                </p>
              </div>

              <div className="border border-border p-5 rounded-lg bg-white space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <h3>Communion Service</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We partake of the Lord&apos;s Supper on the first and third Sunday of every month. All true believers in Christ are welcome to join us.
                </p>
              </div>

            </div>

            {/* Childcare & Check-in callout */}
            <div className="bg-neutral-light/50 border border-border p-6 rounded-lg space-y-3">
              <h3 className="font-serif font-bold text-primary text-lg">
                Children&apos;s Ministry (Vaarthai Kids)
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                We provide a safe, loving, and engaging environment for your children. Our check-in team will give you secure security tags and personally guide your children to their age-appropriate classrooms for Bible stories, songs, and crafts.
              </p>
              <div className="pt-2 text-xs text-stone-500 font-semibold flex items-center gap-1.5">
                <Info className="w-4 h-4 text-accent shrink-0" />
                <span>Classes are available for children ages 4 through Grade 6.</span>
              </div>
            </div>

            {/* Entrance Map details */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-primary text-lg flex items-center gap-2">
                <Map className="w-5 h-5 text-accent" />
                Location & Map
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                Our church facility is located at <strong>{churchConfig.contact.address.street}, {churchConfig.contact.address.city}</strong>.
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
                Let Us Know You&apos;re Coming
              </h2>
              <p className="text-xs text-stone-600">
                Registering ahead helps our welcome team prepare your welcome gift and pre-register your kids for children&apos;s church!
              </p>
            </div>

            {formStatus === "success" ? (
              <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-4 animate-fade-in-up">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-primary">Visit Registered!</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Dear <strong>{formData.name}</strong>, thank you for letting us know! We can&apos;t wait to meet you on <strong>{formData.plannedDate}</strong>. We have sent confirmation and arrival instructions to your email.
                  </p>
                </div>
                <button 
                  onClick={resetForm}
                  className="text-xs font-bold text-primary hover:text-accent underline"
                >
                  Edit Registration or Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="e.g., John Smith"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="e.g., john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="e.g., 0412 345 678"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Adults Attending"
                    name="adultsCount"
                    value={formData.adultsCount}
                    onChange={handleInputChange}
                    options={[
                      { value: "1", label: "1 Adult" },
                      { value: "2", label: "2 Adults" },
                      { value: "3", label: "3 Adults" },
                      { value: "4", label: "4+ Adults" }
                    ]}
                  />

                  <Select
                    label="Children Attending"
                    name="kidsCount"
                    value={formData.kidsCount}
                    onChange={handleInputChange}
                    options={[
                      { value: "0", label: "No Children" },
                      { value: "1", label: "1 Child" },
                      { value: "2", label: "2 Children" },
                      { value: "3", label: "3 Children" },
                      { value: "4", label: "4+ Children" }
                    ]}
                  />
                </div>

                {parseInt(formData.kidsCount) > 0 && (
                  <Input
                    label="Children's Ages"
                    name="kidsAges"
                    type="text"
                    placeholder="e.g., 4, 7"
                    value={formData.kidsAges}
                    onChange={handleInputChange}
                    helperText="Helps us assign your kids to the right class."
                  />
                )}

                <Input
                  label="Planned Sunday Visit Date"
                  name="plannedDate"
                  type="date"
                  value={formData.plannedDate}
                  onChange={handleInputChange}
                  required
                />

                <TextArea
                  label="Special Requirements or Accessibility Needs"
                  name="specialNeeds"
                  placeholder="Seating preferences, ramp assistance, etc..."
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
                  {formStatus === "loading" ? "Submitting Registration..." : "Register Your Visit"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. FAQs Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Have Questions?</span>
          <h2 className="font-serif text-3xl font-black text-primary">Frequently Asked Questions</h2>
          <p className="text-sm text-stone-500">Answers to common questions visitors ask before attending for the first time.</p>
        </div>

        <div className="border border-border rounded-lg bg-white overflow-hidden divide-y divide-border">
          {englishFaqs.map((faq) => {
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
