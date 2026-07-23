import React from 'react';
import { churchConfig } from '@/data/config';

export function ChurchSchema({ locale = 'ta' }: { locale?: 'ta' | 'en' }) {
  const isEn = locale === 'en';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Church",
    "name": churchConfig.name,
    "alternateName": "Vaarthai Evangelical Church",
    "description": isEn 
      ? "Welcome to Vaarthai Evangelical Church. We are a Gospel-centered Tamil church community in Brisbane, loving God and making disciples."
      : "பிரிஸ்பேனில் உள்ள வார்த்தை சுவிசேஷ திருச்சபைக்கு உங்களை அன்போடு வரவேற்கிறோம்.",
    "url": "https://www.vaarthai.org.au",
    "logo": "https://www.vaarthai.org.au/logo.png",
    "image": "https://www.vaarthai.org.au/og-image.jpg",
    "telephone": churchConfig.contact.phone,
    "email": churchConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": churchConfig.contact.address.street,
      "addressLocality": churchConfig.contact.address.city,
      "addressRegion": churchConfig.contact.address.state,
      "postalCode": churchConfig.contact.address.zip,
      "addressCountry": "AU"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "12:30"
      }
    ],
    "sameAs": [
      churchConfig.socials.facebook,
      churchConfig.socials.youtube
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
