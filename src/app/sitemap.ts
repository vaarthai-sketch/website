// app/sitemap.ts
//
// Next.js serves this automatically at https://www.vaarthai.org.au/sitemap.xml
// — that's the exact value to enter in the Search Console "Sitemaps" box
// (just "sitemap.xml").
//
// URLs below match the site as currently deployed (flat routes, no locale
// prefix). If you later ship the /ta + /en split, come back and regenerate
// each entry for both locales with hreflang alternates.
//
// If an app/sitemap.ts already exists from an earlier step, REPLACE it with
// this — don't keep both.

import type { MetadataRoute } from 'next';

const SITE = 'https://www.vaarthai.org.au';

// changeFrequency is a hint to Google, not a guarantee. Priority is relative
// within your own site (it does NOT affect ranking against other sites) — it
// just tells Google which of your pages you consider most important.
const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}[] = [
  { path: '',                 priority: 1.0, changeFrequency: 'weekly'  }, // home
  { path: '/plan-your-visit', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about',           priority: 0.8, changeFrequency: 'monthly' },
  { path: '/events',          priority: 0.8, changeFrequency: 'weekly'  },
  { path: '/contact',         priority: 0.7, changeFrequency: 'yearly'  },
  { path: '/ministries',      priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pastors-desk',    priority: 0.6, changeFrequency: 'weekly'  },
  { path: '/give',            priority: 0.6, changeFrequency: 'yearly'  },
  { path: '/prayer',          priority: 0.5, changeFrequency: 'monthly' },
  { path: '/gallery',         priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy',         priority: 0.3, changeFrequency: 'yearly'  },
  { path: '/terms',           priority: 0.3, changeFrequency: 'yearly'  },
  { path: '/accessibility',   priority: 0.3, changeFrequency: 'yearly'  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${SITE}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
