import React from 'react';
import { churchConfig } from '@/data/config';

/**
 * components/StructuredData.tsx
 *
 * JSON-LD structured data for Vaarthai Evangelical Church.
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

export function ChurchSchema({ locale }: { locale: Locale }) {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Church',
        '@id': CHURCH_ID,
        name: churchConfig.name,
        alternateName: [
          'வார்த்தை சுவிசேஷ திருச்சபை',
          'Vaarthai Tamil Church',
          'Vaarthai Church',
        ],
        url: SITE,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE}/logo.png`,
        },
        image: `${SITE}/home-welcome.jpg`,
        description:
          'A Tamil-speaking evangelical church in Brisbane, Queensland. ' +
          'Sunday worship at 10:00 AM with Tamil preaching and children\u2019s ministry.',
        telephone: churchConfig.contact.phone,
        email: churchConfig.contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: churchConfig.contact.address.street,
          addressLocality: churchConfig.contact.address.city, // e.g. Camira / Springfield
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
          { '@type': 'City', name: 'Ipswich' },
          { '@type': 'City', name: 'Logan City' },
        ],
        knowsLanguage: ['ta', 'en-AU'],
        openingHoursSpecification: [
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
        ],
        founder: {
          '@type': 'Person',
          name: 'Pastor Weslyn', 
          jobTitle: 'Founding Senior Minister',
        },
        sameAs: [
          churchConfig.socials?.facebook || '',
          churchConfig.socials?.youtube || '',
        ].filter(Boolean),
      },

      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE,
        name: churchConfig.name,
        inLanguage: locale === 'ta' ? 'ta' : 'en-AU',
        publisher: { '@id': CHURCH_ID },
      },

      {
        '@type': 'Event',
        '@id': `${SITE}/#sunday-service`,
        name:
          locale === 'ta'
            ? 'ஞாயிறு தமிழ் ஆராதனை'
            : 'Sunday Tamil Worship Service',
        description:
          locale === 'ta'
            ? 'ஞாயிறு காலை 10:00 மணிக்கு தமிழ் ஆராதனை. சிறுவர்களுக்கான வகுப்புகளும் உண்டு.'
            : 'Weekly Tamil worship service with preaching and children\u2019s classes.',
        eventSchedule: {
          '@type': 'Schedule',
          repeatFrequency: 'P1W',
          byDay: 'https://schema.org/Sunday',
          startTime: '10:00',
          duration: 'PT2H',
          scheduleTimezone: 'Australia/Brisbane',
        },
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: { '@id': CHURCH_ID },
        organizer: { '@id': CHURCH_ID },
        inLanguage: locale === 'ta' ? 'ta' : 'en-AU',
        isAccessibleForFree: true,
        image: [`${SITE}/home-welcome.jpg`],
      },
    ],
  };

  return <JsonLd data={graph} />;
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
