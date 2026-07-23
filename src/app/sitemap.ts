import type { MetadataRoute } from 'next';
import { churchConfig } from '@/data/config';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vaarthai.org.au';
const locales = ['ta', 'en'] as const;

const routes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/plan-your-visit', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/ministries', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/events', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/sermons', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/pastors-desk', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/gallery', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/give', priority: 0.6, changeFrequency: 'yearly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => {
      const isEn = locale === 'en';
      const prefix = isEn ? '/en' : '';
      return {
        url: `${SITE}${prefix}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            'ta': `${SITE}${route.path}`,
            'en-AU': `${SITE}/en${route.path}`,
            'x-default': `${SITE}/en${route.path}`,
          },
        },
      };
    })
  );
}
