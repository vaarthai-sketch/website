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
      "name": "Vaarthai Evangelical Church Inc",
      "alternateName": ["Tamil Church in Brisbane", "Vaarthai Tamil Church", "தமிழ் சபை", "Brisbane Tamil Church", "Tamil Church Family"],
      "description": "Vaarthai Evangelical Church Inc is a Tamil Church in Brisbane. We are a Tamil Church Family dedicated to Tamil Worship, Tamil Gospel, and Tamil Christian fellowship.",
      "url": "https://www.vaarthai.org.au",
      "logo": "https://www.vaarthai.org.au/logo.png",
      "image": "https://www.vaarthai.org.au/opengraph-image.jpg",
      "tagline": churchConfig.tagline,
      "denomination": "Tamil Evangelical Church",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": churchConfig.contact.address.street,
        "addressLocality": churchConfig.contact.address.city,
        "addressRegion": churchConfig.contact.address.state,
        "postalCode": churchConfig.contact.address.zip,
        "addressCountry": "AU"
      },
      "telephone": churchConfig.contact.phone,
      "email": churchConfig.contact.email,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "12:00"
        }
      ]
    };
  } else if (type === "sermon" && data) {
    const sermon = data as Sermon;
    const durationParts = (sermon.duration || "45:00").split(":").map(Number);
    const isoDuration =
      durationParts.length === 3
        ? `PT${durationParts[0]}H${durationParts[1]}M${durationParts[2]}S`
        : durationParts.length === 2
          ? `PT${durationParts[0]}M${durationParts[1]}S`
          : "PT45M";
    const thumbUrl =
      sermon.thumbnail && sermon.thumbnail.startsWith("/")
        ? `https://www.vaarthai.org.au${sermon.thumbnail}`
        : `https://i.ytimg.com/vi/${sermon.youtubeId || "vuFmVgMQafM"}/hqdefault.jpg`;

    schema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": sermon.title,
      "description": sermon.description,
      "thumbnailUrl": [thumbUrl],
      "uploadDate": `${sermon.date}T10:00:00+10:00`,
      "duration": isoDuration,
      "embedUrl": `https://www.youtube.com/embed/${sermon.youtubeId || "vuFmVgMQafM"}`,
      "contentUrl": `https://www.youtube.com/watch?v=${sermon.youtubeId || "vuFmVgMQafM"}`,
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
    const startDateTime = `${event.date}T${event.startTimeIso || "10:00:00+10:00"}`;
    const endDateTime = `${event.date}T${event.endTimeIso || "12:00:00+10:00"}`;
    const imageUrl =
      event.image && event.image.startsWith("http")
        ? event.image
        : `https://www.vaarthai.org.au${event.image && event.image.startsWith("/") ? event.image : "/home-welcome.jpg"}`;

    schema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.title,
      "description": event.description,
      "startDate": startDateTime,
      "endDate": endDateTime,
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": churchConfig.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": churchConfig.contact.address.street,
          "addressLocality": churchConfig.contact.address.city,
          "addressRegion": churchConfig.contact.address.state,
          "postalCode": churchConfig.contact.address.zip,
          "addressCountry": "AU"
        }
      },
      "image": [imageUrl],
      "organizer": {
        "@type": "Organization",
        "name": churchConfig.name,
        "url": "https://www.vaarthai.org.au"
      },
      "performer": {
        "@type": "Person",
        "name": "Pastor Weslyn"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "url": `https://www.vaarthai.org.au/events/${event.id}`,
        "validFrom": "2026-07-05T00:00:00+10:00"
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
