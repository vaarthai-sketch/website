import React from 'react';
import { churchConfig } from '@/data/config';

/**
 * components/StructuredData.tsx
 *
 * JSON-LD structured data for Vaarthai Evangelical Church Inc.
 */

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vaarthai.org.au';

/** Stable @id so every other node can reference the church by pointer. */
export const CHURCH_ID = `${SITE}/#church`;
export const WEBSITE_ID = `${SITE}/#website`;

const MAP_URL = churchConfig.contact.address.mapLink;

type Locale = 'ta' | 'en';

/* ------------------------------------------------------------------ */
/* 1. Organisation + Website — render once, in the root layout        */
/* ------------------------------------------------------------------ */

function getNextSundayBrisbane(): string {
  const now = new Date();
  const brisbaneTimeStr = now.toLocaleString('en-US', { timeZone: 'Australia/Brisbane' });
  const today = new Date(brisbaneTimeStr);
  const d = new Date(today);
  d.setDate(today.getDate() + ((7 - today.getDay()) % 7));
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function ChurchSchema({ locale }: { locale: Locale }) {
  const nextSunday = getNextSundayBrisbane();
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Church', 'PlaceOfWorship', 'LocalBusiness'],
        '@id': CHURCH_ID,
        name: churchConfig.name,
        alternateName: [
          'Tamil Church in Brisbane',
          'Brisbane Tamil Church',
          'Vaarthai Tamil Church',
          'Vaarthai Church',
          'Vaarthai Evangelical Church',
          'Tamil Christian Church Brisbane',
          'Springfield Tamil Church',
          'வார்த்தை சுவிசேஷ திருச்சபை',
          'பிரிஸ்பேன் தமிழ் சபை',
          'தமிழ் திருச்சபை பிரிஸ்பேன்',
        ],
        url: SITE,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE}/logo.png`,
        },
        image: [
          `${SITE}/home-welcome.jpg`,
          `${SITE}/opengraph-image.jpg`,
          `${SITE}/pastor-about.jpg`,
        ],
        description:
          'Vaarthai Evangelical Church Inc is a welcoming Tamil Church in Brisbane (meeting at 389 Old Logan Rd, Springfield QLD 4300). Join our Tamil Church Family for Sunday worship at 10:00 AM with biblical preaching by Pastor Weslyn, Tamil & English songs, fellowship, and Vaarthai Kids Sunday School.',
        telephone: churchConfig.contact.phone,
        email: churchConfig.contact.email,
        priceRange: 'Free',
        address: {
          '@type': 'PostalAddress',
          streetAddress: churchConfig.contact.address.street,
          addressLocality: churchConfig.contact.address.city,
          addressRegion: churchConfig.contact.address.state,
          postalCode: churchConfig.contact.address.zip,
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -27.6412829,
          longitude: 152.916879,
        },
        hasMap: MAP_URL,
        areaServed: [
          { '@type': 'City', name: 'Brisbane' },
          { '@type': 'City', name: 'Springfield' },
          { '@type': 'City', name: 'Ipswich' },
          { '@type': 'City', name: 'Logan City' },
          { '@type': 'Place', name: 'Camira' },
          { '@type': 'Place', name: 'Forest Lake' },
          { '@type': 'Place', name: 'Redbank Plains' },
          { '@type': 'Place', name: 'Sunnybank' },
          { '@type': 'AdministrativeArea', name: 'South East Queensland' },
        ],
        knowsLanguage: ['ta', 'en-AU', 'en'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['https://schema.org/Sunday'],
            opens: '10:00',
            closes: '12:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['https://schema.org/Thursday', 'https://schema.org/Friday'],
            opens: '09:00',
            closes: '16:00',
          },
        ],
        isAccessibleForFree: true,
        publicAccess: true,
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Wheelchair accessible entrance',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Free on-site parking',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Accessible parking',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Children Sunday School (Vaarthai Kids)',
            value: true,
          },
        ],
        founder: {
          '@type': 'Person',
          name: 'Pastor Weslyn',
          jobTitle: 'Founding Senior Minister',
        },
        sameAs: [
          churchConfig.socials?.facebook || '',
          churchConfig.socials?.youtube || '',
          churchConfig.socials?.instagram || '',
          churchConfig.socials?.tiktok || '',
          churchConfig.socials?.linkedin || '',
          MAP_URL,
        ].filter(Boolean),
      },

      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE,
        name: 'Vaarthai Evangelical Church Inc | Tamil Church in Brisbane',
        alternateName: ['Tamil Church in Brisbane', 'Brisbane Tamil Church', 'Vaarthai Church'],
        inLanguage: ['ta', 'en-AU'],
        publisher: { '@id': CHURCH_ID },
      },

      {
        '@type': 'Event',
        '@id': `${SITE}/#sunday-service`,
        name:
          locale === 'ta'
            ? 'ஞாயிறு தமிழ் ஆராதனை | Sunday Tamil Worship Service in Brisbane'
            : 'Sunday Tamil Worship Service in Brisbane',
        description:
          locale === 'ta'
            ? 'பிரிஸ்பேன் நகரில் வாரந்தோறும் ஞாயிறு காலை 10:00 மணிக்கு தமிழ் ஆராதனை மற்றும் சிறுவர்களுக்கான வகுப்புகள்.'
            : 'Weekly Tamil & English worship service in Brisbane every Sunday at 10:00 AM with biblical preaching and children\u2019s classes.',
        startDate: `${nextSunday}T10:00:00+10:00`,
        endDate: `${nextSunday}T12:00:00+10:00`,
        eventSchedule: {
          '@type': 'Schedule',
          startDate: '2026-07-05',
          repeatFrequency: 'P1W',
          byDay: 'https://schema.org/Sunday',
          startTime: '10:00:00',
          endTime: '12:00:00',
          duration: 'PT2H',
          scheduleTimezone: 'Australia/Brisbane',
        },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: { '@id': CHURCH_ID },
        organizer: { '@id': CHURCH_ID },
        performer: {
          '@type': 'Person',
          name: 'Pastor Weslyn',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
          url: `${SITE}/plan-your-visit`,
          validFrom: '2026-07-05T00:00:00+10:00',
        },
        inLanguage: locale === 'ta' ? 'ta' : 'en-AU',
        isAccessibleForFree: true,
        image: [`${SITE}/home-welcome.jpg`],
      },
      {
        '@type': 'Event',
        '@id': `${SITE}/events/carolights-26#event`,
        name: "Carolights '26 — The Sound of Good News",
        description:
          'Celebrate the birth of Jesus with Vaarthai Evangelical Church (a Tamil Church in Brisbane) at Carolights 2026: The Sound of Good News. Christmas dinner will be served after the program.',
        startDate: '2026-11-28T17:30:00+10:00',
        endDate: '2026-11-28T21:00:00+10:00',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'Place',
          name: 'Oxley Bowling Club',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '24A Englefield Road',
            addressLocality: 'Oxley',
            addressRegion: 'QLD',
            postalCode: '4075',
            addressCountry: 'AU',
          },
        },
        organizer: { '@id': CHURCH_ID },
        performer: {
          '@type': 'Person',
          name: 'Pastor Weslyn',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
          url: `${SITE}/events/carolights-26`,
          validFrom: '2026-07-05T00:00:00+10:00',
        },
        inLanguage: ['ta', 'en-AU'],
        isAccessibleForFree: true,
        image: [`${SITE}/event-carolights-26.jpg`],
      },
    ],
  };

  return <JsonLd data={graph} />;
}

export function FaqSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 2. Sermon pages                                                     */
/* ------------------------------------------------------------------ */

export function SermonSchema({
  slug,
  title,
  description,
  datePublished,
  scripture,
  seriesName,
  seriesUrl,
  videoId,
  videoDuration = 'PT45M',
  thumbnailUrl,
  locale = 'ta',
}: {
  slug: string;
  title: string;
  description: string;
  datePublished: string; 
  scripture?: string;
  seriesName?: string;
  seriesUrl?: string;
  videoId?: string;
  videoDuration?: string;
  thumbnailUrl?: string;
  locale?: Locale;
}) {
  const prefix = locale === 'en' ? '/en' : '';
  const url = `${SITE}${prefix}/sermons/${slug}`;

  const nodes: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: title,
      description,
      inLanguage: locale === 'ta' ? 'ta' : 'en-AU',
      datePublished,
      dateModified: datePublished,
      author: {
        '@type': 'Person',
        name: 'Pastor Weslyn',
      },
      publisher: { '@id': CHURCH_ID },
      isPartOf: seriesName
        ? {
            '@type': 'CreativeWorkSeries',
            name: seriesName,
            url: seriesUrl,
          }
        : undefined,
      about: scripture
        ? { '@type': 'Thing', name: `Bible \u2014 ${scripture}` }
        : undefined,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
  ];

  if (videoId) {
    nodes.push({
      '@type': 'VideoObject',
      '@id': `${url}#video`,
      name: title,
      description,
      uploadDate: datePublished,
      duration: videoDuration,
      thumbnailUrl: thumbnailUrl ?? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
      inLanguage: locale === 'ta' ? 'ta' : 'en-AU',
      publisher: { '@id': CHURCH_ID },
    });
  }

  return <JsonLd data={{ '@context': 'https://schema.org', '@graph': nodes }} />;
}

/* ------------------------------------------------------------------ */
/* 3. One-off events (conventions, Christmas services, guest speakers)  */
/* ------------------------------------------------------------------ */

export function EventSchema({
  slug,
  name,
  description,
  startDate,
  endDate,
  image,
  locale = 'ta',
}: {
  slug: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  image?: string;
  locale?: Locale;
}) {
  const prefix = locale === 'en' ? '/en' : '';
  const url = `${SITE}${prefix}/events/${slug}`;
  
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Event',
        '@id': `${url}#event`,
        name,
        description,
        startDate,
        endDate,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: { '@id': CHURCH_ID },
        organizer: { '@id': CHURCH_ID },
        image: image ? [image] : [`${SITE}/home-welcome.jpg`],
        inLanguage: locale === 'ta' ? 'ta' : 'en-AU',
        isAccessibleForFree: true,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
          url: url,
          validFrom: startDate,
        },
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 4. Breadcrumbs — helps Google show the site hierarchy in results     */
/* ------------------------------------------------------------------ */

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${SITE}${item.path}`,
        })),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Shared renderer                                                     */
/* ------------------------------------------------------------------ */

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
