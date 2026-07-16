"use client";

import React, { useState } from "react";
import { 
  Heart, ShieldCheck, Mail, Smartphone, ArrowRight, DollarSign, Check, Info, FileText
} from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "@/components/Button";
import { Input, Select } from "@/components/Input";

export default function EnglishGivePage() {
  const [givingType, setGivingType] = useState<"one-time" | "recurring">("one-time");
  const [presetAmount, setPresetAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedFund, setSelectedFund] = useState("general");
  const [demoSuccess, setDemoSuccess] = useState(false);

  const presetAmounts = ["20", "50", "100", "250", "500"];

  const handleGiveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSuccess(true);
  };

  const getFinalAmount = () => {
    if (customAmount) return parseFloat(customAmount).toFixed(2);
    return parseFloat(presetAmount).toFixed(2);
  };

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5 me-1 md:text-5xl font-black">Online Giving</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Support our church ministries, missions, and community outreach through your faithful and generous giving.
          </p>
        </div>
      </section>

      {/* 2. Intro & Giving Portal Mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biblical and Financial Context */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">
              Giving as an Act of Worship
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm">
              All offerings and donations received by our church are dedicated entirely to gospel proclamation, children and youth ministries, pastoral care, and charitable outreach for those in need. We thank God for your faithful generosity.
            </p>

            {/* Quote block */}
            <div className="bg-neutral-light/50 border-l-4 border-accent p-5 rounded-r-lg">
              <p className="text-xs italic text-stone-700 leading-relaxed">
                &ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
              </p>
              <span className="block text-[10px] font-bold text-accent-dark tracking-widest uppercase mt-1">
                — 2 Corinthians 9:7 (ESV)
              </span>
            </div>

            {/* Financial Transparency panel */}
            <div className="border border-border p-6 rounded-lg bg-white space-y-3 shadow-sm">
              <h3 className="font-serif font-bold text-primary flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-accent" />
                Financial Transparency & Accountability
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our church&apos;s financial stewardship is overseen with complete transparency by our leadership board and external independent auditors. Annual financial reports are presented regularly to our church members.
              </p>
            </div>
          </div>

          {/* Secure Giving Portal Mock */}
          <div className="lg:col-span-5 bg-white border border-border rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-primary">Giving Portal</h3>
                <span className="text-[9px] font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                  Demo Preview
                </span>
              </div>
              <p className="text-[11px] text-stone-500">
                This interactive preview demonstrates how online giving operates.
              </p>
            </div>

            {demoSuccess ? (
              <div className="bg-emerald-50 border border-accent/20 rounded-lg p-6 text-center space-y-4 animate-fade-in-up">
                <Check className="w-12 h-12 text-accent mx-auto border-2 border-accent rounded-full p-2" />
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-primary">Demo Offering Recorded</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    You selected a <strong>${getFinalAmount()}</strong> offering toward <strong>{selectedFund === "general" ? "General & Tithes Fund" : selectedFund === "outreach" ? "Local Outreach Fund" : selectedFund === "missions" ? "Global Missions Fund" : "Church Building Fund"}</strong> ({givingType === "recurring" ? "Monthly Recurring" : "One-Time"}).
                  </p>
                </div>
                <div className="text-[10px] text-stone-400 italic">
                  Note: To connect live processing, link your church&apos;s bank transfer details or merchant payment gateway.
                </div>
                <button
                  onClick={() => setDemoSuccess(false)}
                  className="text-xs font-bold text-primary hover:text-accent underline"
                >
                  Return to Demo Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleGiveSubmit} className="space-y-5">
                
                {/* One time vs Recurring toggle tabs */}
                <div className="flex border border-border rounded-md overflow-hidden bg-stone-50 text-sm">
                  <button
                    type="button"
                    onClick={() => setGivingType("one-time")}
                    className={`flex-1 py-2 font-bold text-center transition-colors ${
                      givingType === "one-time" ? "bg-primary text-white" : "text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    type="button"
                    onClick={() => setGivingType("recurring")}
                    className={`flex-1 py-2 font-bold text-center transition-colors ${
                      givingType === "recurring" ? "bg-primary text-white" : "text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    Recurring Gift
                  </button>
                </div>

                {/* Fund selector */}
                <Select
                  label="Select Giving Fund"
                  value={selectedFund}
                  onChange={(e) => setSelectedFund(e.target.value)}
                  options={[
                    { value: "general", label: "General & Tithes Fund" },
                    { value: "outreach", label: "Local Community Outreach" },
                    { value: "missions", label: "Global Missions Fund" },
                    { value: "building", label: "Church Building Fund" }
                  ]}
                />

                {/* Preset Amounts Grid */}
                <div className="space-y-1.5">
                  <span className="block text-sm font-semibold text-stone-700">Select Offering Amount</span>
                  <div className="grid grid-cols-5 gap-2">
                    {presetAmounts.map((amt) => {
                      const isActive = presetAmount === amt && !customAmount;
                      return (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setPresetAmount(amt);
                            setCustomAmount("");
                          }}
                          className={`py-2 text-center text-sm font-mono font-bold border rounded-md transition-colors ${
                            isActive
                              ? "bg-accent text-white border-accent"
                              : "bg-white text-stone-800 border-border hover:bg-stone-50"
                          }`}
                        >
                          ${amt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Amount input */}
                <div className="relative">
                  <Input
                    label="Or enter custom amount"
                    name="customAmount"
                    type="number"
                    min="1"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setPresetAmount("");
                    }}
                    className="pl-8 font-mono"
                  />
                  <span className="absolute left-3 bottom-3 text-stone-500 font-mono text-sm">
                    $
                  </span>
                </div>

                <div className="space-y-4 pt-2">
                  <Button
                    type="submit"
                    variant="accent"
                    fullWidth
                    className="font-bold py-3 text-center shadow"
                  >
                    {givingType === "recurring" ? "Set Up Monthly Gift" : `Give $${getFinalAmount()}`}
                  </Button>

                  <a
                    href={churchConfig.links.give}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 border border-primary text-primary hover:bg-primary hover:text-white rounded-md text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    Give via External Portal <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. Other Ways to Give Section */}
      <section className="bg-neutral-light/50 border-y border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">Other Ways to Give</h2>
            <p className="text-xs text-stone-500 mt-1">In addition to online giving, you can contribute using any of these traditional methods.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Cash & Checks */}
            <div className="bg-white p-6 border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">During Sunday Services</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  You may place cash or checks into the offering boxes situated at the rear of the sanctuary during any of our Sunday services.
                </p>
              </div>
            </div>

            {/* Mailing checks */}
            <div className="bg-white p-6 border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">By Mail</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Checks made payable to our church can be mailed securely to our church office: <br />
                  <strong>Vaarthai Evangelical Church, Attn: Finance, {churchConfig.contact.address.street}, {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}</strong>
                </p>
              </div>
            </div>

            {/* Bank Transfers */}
            <div className="bg-white p-6 border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">Direct Bank Transfer</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To set up a direct bank electronic funds transfer (EFT) from your account, please contact our church finance team for exact account details.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Giving FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">Frequently Asked Questions</h2>
          <p className="text-xs text-stone-500">Common questions regarding tithes, offerings, and tax receipts.</p>
        </div>

        <div className="space-y-4">
          <div className="border border-border p-5 rounded-lg bg-white space-y-2">
            <h3 className="font-serif font-bold text-stone-900">Will I receive an annual tax receipt for my contributions?</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Yes! Our church is a registered not-for-profit charitable entity. Consolidated annual tax receipts are issued to all contributors every year in late January.
            </p>
          </div>
          <div className="border border-border p-5 rounded-lg bg-white space-y-2">
            <h3 className="font-serif font-bold text-stone-900">Are there any transaction fees when giving online?</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Standard card processing fees (approximately 2-3%) may apply to credit and debit card gifts. To ensure 100% of your gift goes directly to ministry, you may opt for direct bank transfer or give in person on Sundays.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
