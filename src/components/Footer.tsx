import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon } from "@/components/SocialIcons";
import { churchConfig } from "@/data/config";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    facebook: <FacebookIcon className="w-5 h-5" />,
    instagram: <InstagramIcon className="w-5 h-5" />,
    youtube: <YoutubeIcon className="w-5 h-5" />,
    twitter: <TwitterIcon className="w-5 h-5" />,
  };

  return (
    <footer 
      className="relative text-[#ECE9E4] border-t border-[#1E293B] bg-cover bg-center bg-no-repeat overflow-hidden" 
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      aria-labelledby="footer-heading"
    >
      {/* Dark overlay to ensure text readability but allow image to show */}
      <div className="absolute inset-0 bg-[#0F172A]/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#0F172A]/60 to-transparent"></div>
      
      <div className="relative z-10">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-sm p-0.5">
                <img 
                  src="/logo.png" 
                  alt={`${churchConfig.name} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif font-bold text-lg text-white leading-tight">
                {churchConfig.name}
              </span>
            </Link>
            <p className="text-sm text-stone-300 leading-relaxed">
              We are a community centered on the gospel, seeking to love God, love our neighbors, and make disciples in Brisbane and around the world.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {Object.entries(churchConfig.socials).map(([key, url]) => {
                const icon = socialIcons[key as keyof typeof socialIcons];
                if (!url || !icon) return null;
                return (
                  <a 
                    key={key} 
                    href={url}
                    className="p-2 rounded bg-[#1E293B] text-stone-300 hover:text-white hover:bg-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${key}`}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Sunday Services & Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-accent uppercase tracking-wider">
              Services & Hours
            </h3>
            <div className="space-y-3 text-sm text-stone-300">
              {churchConfig.services.map((service, index) => (
                <div key={index} className="space-y-1">
                  <span className="font-semibold text-white block">{service.day} Services:</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent shrink-0" />
                    <span>{service.times.join(" & ")}</span>
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-[#1E293B] space-y-1">
                <span className="font-semibold text-white block">Office Hours:</span>
                <span>{churchConfig.contact.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-accent uppercase tracking-wider">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-stone-300">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${churchConfig.contact.address.street}, ${churchConfig.contact.address.city}, ${churchConfig.contact.address.state} ${churchConfig.contact.address.zip}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 group hover:text-white"
              >
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Office Address</strong><br />
                  {churchConfig.contact.address.street}<br />
                  {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}
                </span>
              </a>
              <a 
                href={`tel:${churchConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-2 group hover:text-white"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>{churchConfig.contact.phone}</span>
              </a>
              <a 
                href={`mailto:${churchConfig.contact.email}`}
                className="flex items-center gap-2 group hover:text-white truncate"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>{churchConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-accent uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Footer Navigation">
              <Link href="/" className="text-stone-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-stone-300 hover:text-white transition-colors">About</Link>
              <Link href="/ministries" className="text-stone-300 hover:text-white transition-colors">Ministries</Link>
              <Link href="/sermons" className="text-stone-300 hover:text-white transition-colors">Sermons</Link>
              <Link href="/events" className="text-stone-300 hover:text-white transition-colors">Events</Link>
              <Link href="/gallery" className="text-stone-300 hover:text-white transition-colors">Photos</Link>
              <Link href="/give" className="text-stone-300 hover:text-white transition-colors">Give</Link>
              <Link href="/plan-your-visit" className="text-stone-300 hover:text-white transition-colors text-accent hover:text-accent-light font-bold">Visit</Link>
              <Link href="/contact" className="text-stone-300 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#1E293B] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {currentYear} {churchConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link>
          </div>
        </div>

      </div>
      </div>
    </footer>
  );
};
