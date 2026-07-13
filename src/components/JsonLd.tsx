import React from "react";
import { churchConfig } from "@/data/config";
import { Sermon } from "@/data/sermons";
import { ChurchEvent } from "@/data/events";

interface JsonLdProps {
  type: "church" | "sermon" | "event";
  data?: any;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  let schema: Record<string, any> = {};

  if (type === "church") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Church",
      "name": churchConfig.name,
      "url": "https://vaarthaichurch.org", // Mock production URL
      "logo": "https://vaarthaichurch.org/logo.png",
      "tagline": churchConfig.tagline,
      "denomination": churchConfig.denomination,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": churchConfig.contact.address.street,
        "addressLocality": churchConfig.contact.address.city,
        "addressRegion": churchConfig.contact.address.state,
        "postalCode": churchConfig.contact.address.zip,
        "addressCountry": "US"
      },
      "telephone": churchConfig.contact.phone,
      "email": churchConfig.contact.email,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:30",
          "closes": "12:30"
        }
      ]
    };
  } else if (type === "sermon" && data) {
    const sermon = data as Sermon;
    schema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": sermon.title,
      "description": sermon.description,
      "thumbnailUrl": [
        `https://vaarthaichurch.org/images/thumbnails/${sermon.thumbnail}.jpg`
      ],
      "uploadDate": sermon.date,
      "duration": `PT${sermon.duration.replace(":", "M")}S`,
      "embedUrl": `https://www.youtube.com/embed/${sermon.youtubeId || "dQw4w9WgXcQ"}`,
      "interactionCount": "124",
      "author": {
        "@type": "Person",
        "name": sermon.speaker
      },
      "about": {
        "@type": "Thing",
        "name": sermon.topic
      }
    };
  } else if (type === "event" && data) {
    const event = data as ChurchEvent;
    
    // Parse date into ISO format
    const startDateTime = `${event.date}T${event.time.split(" - ")[0].includes("PM") && !event.time.split(" - ")[0].includes("12:") ? 
      (parseInt(event.time.split(" - ")[0].split(":")[0]) + 12) + ":" + event.time.split(" - ")[0].split(":")[1].replace(" PM", "") : 
      event.time.split(" - ")[0].replace(" AM", "").padStart(5, "0")}:00`;
      
    schema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.title,
      "description": event.description,
      "startDate": startDateTime,
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": event.location === "Main Sanctuary" || event.location === "Fellowship Hall" ? churchConfig.name : event.location,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": churchConfig.contact.address.street,
          "addressLocality": churchConfig.contact.address.city,
          "addressRegion": churchConfig.contact.address.state,
          "postalCode": churchConfig.contact.address.zip,
          "addressCountry": "US"
        }
      },
      "image": [
        `https://vaarthaichurch.org/images/events/${event.image}.jpg`
      ],
      "organizer": {
        "@type": "Person",
        "name": event.organizer,
        "email": event.organizerEmail
      }
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
