import type { Metadata } from 'next';
import { churchConfig } from '@/data/config';

const SITE = process.env.NEXT_PUBLIC_SITE_URL 
  ? process.env.NEXT_PUBLIC_SITE_URL
  : 'https://www.vaarthai.org.au';

export type Locale = 'ta' | 'en';

export const localeMeta: Record<Locale, { htmlLang: string; hreflang: string; ogLocale: string }> = {
  ta: { htmlLang: 'ta', hreflang: 'ta', ogLocale: 'ta_IN' },
  en: { htmlLang: 'en-AU', hreflang: 'en-AU', ogLocale: 'en_AU' },
};

/**
 * Builds standard metadata including reciprocal hreflang tags.
 * @param path The route without the locale prefix (e.g. '/about' or '' for home)
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = '/opengraph-image.jpg',
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const isEn = locale === 'en';
  const prefix = isEn ? '/en' : '';
  const currentUrl = `${SITE}${prefix}${path}`;
  
  // Reciprocal hreflang mapping
  const alternates = {
    languages: {
      'ta': `${SITE}${path}`,
      'en-AU': `${SITE}/en${path}`,
      'x-default': `${SITE}/en${path}`,
    },
  };

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      ...alternates,
    },
    openGraph: {
      type: 'website',
      siteName: churchConfig.name,
      url: currentUrl,
      title,
      description,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: [localeMeta[isEn ? 'ta' : 'en'].ogLocale],
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}
