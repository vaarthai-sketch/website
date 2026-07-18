import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://vaarthaichurch.org";

  const routes = [
    "",
    "/about",
    "/plan-your-visit",
    "/sermons",
    "/events",
    "/ministries",
    "/gallery",
    "/give",
    "/contact",
    "/prayer",
    "/pastors-desk",
    // English equivalents
    "/en",
    "/en/about",
    "/en/plan-your-visit",
    "/en/sermons",
    "/en/events",
    "/en/ministries",
    "/en/gallery",
    "/en/give",
    "/en/contact",
    "/en/prayer",
    "/en/pastors-desk",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/en" || route === "/sermons" || route === "/events" ? "weekly" : "monthly",
    priority: route === "" || route === "/en" ? 1 : 0.8,
  }));
}
