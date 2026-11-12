import type { MetadataRoute } from 'next';
import { sermonsData } from '@/data/sermons';
import { getEventsData } from '@/data/events';
import { ministriesData } from '@/data/ministries';

const SITE = 'https://www.vaarthai.org.au';

function withAlternates(path: string, lastModified: Date, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number): MetadataRoute.Sitemap {
  const taUrl = `${SITE}${path}`;
  const enUrl = `${SITE}/en${path}`;
  const languages = {
    'ta': taUrl,
    'en-AU': enUrl,
    'x-default': taUrl,
  };

  return [
    {
      url: taUrl,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    },
    {
      url: enUrl,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPaths: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/plan-your-visit', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/sermons', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/events', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/ministries', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/pastors-desk', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/give', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/prayer', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/gallery', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/accessibility', changeFrequency: 'yearly', priority: 0.3 },
  ];

  const pastorsDeskArchivePaths = [
    '/pastors-desk/archive/july/edition-1',
    '/pastors-desk/archive/july/edition-2',
    '/pastors-desk/archive/july/edition-3',
    '/pastors-desk/archive/august/edition-4',
    '/pastors-desk/archive/august/edition-5',
    '/pastors-desk/archive/august/edition-6',
    '/pastors-desk/archive/august/edition-7',
    '/pastors-desk/archive/september/edition-8',
    '/pastors-desk/archive/september/edition-9',
    '/pastors-desk/archive/september/edition-10',
    '/pastors-desk/archive/september/edition-11',
    '/pastors-desk/archive/october/edition-12',
    '/pastors-desk/archive/october/edition-13',
    '/pastors-desk/archive/october/edition-14',
  ];

  const staticRoutes = staticPaths.flatMap(({ path, changeFrequency, priority }) =>
    withAlternates(path, now, changeFrequency, priority)
  );

  const archiveRoutes = pastorsDeskArchivePaths.flatMap((path) =>
    withAlternates(path, now, 'monthly', 0.6)
  );

  const sermonRoutes = sermonsData.flatMap((sermon) =>
    withAlternates(`/sermons/${sermon.id}`, new Date(sermon.date), 'monthly', 0.7)
  );

  const eventRoutes = getEventsData().flatMap((event) =>
    withAlternates(`/events/${event.id}`, new Date(event.date), 'weekly', 0.7)
  );

  const ministryRoutes = ministriesData.flatMap((ministry) =>
    withAlternates(`/ministries/${ministry.id}`, now, 'monthly', 0.6)
  );

  return [
    ...staticRoutes,
    ...archiveRoutes,
    ...sermonRoutes,
    ...eventRoutes,
    ...ministryRoutes,
  ];
}
