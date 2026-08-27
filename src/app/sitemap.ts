import type { MetadataRoute } from 'next';
import { sermonsData } from '@/data/sermons';
import { getEventsData } from '@/data/events';
import { ministriesData } from '@/data/ministries';

const SITE = 'https://vaarthai.org.au';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/plan-your-visit`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/events`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE}/ministries`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/pastors-desk`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE}/give`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE}/prayer`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE}/sermons`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Dynamic Sermon routes
  const sermonRoutes: MetadataRoute.Sitemap = sermonsData.map((sermon) => ({
    url: `${SITE}/sermons/${sermon.id}`,
    lastModified: new Date(sermon.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic Event routes
  const eventRoutes: MetadataRoute.Sitemap = getEventsData().map((event) => ({
    url: `${SITE}/events/${event.id}`,
    lastModified: new Date(event.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Dynamic Ministry routes
  const ministryRoutes: MetadataRoute.Sitemap = ministriesData.map((ministry) => ({
    url: `${SITE}/ministries/${ministry.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...sermonRoutes, ...eventRoutes, ...ministryRoutes];
}
