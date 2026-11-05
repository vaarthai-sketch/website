import React from "react";
import { SermonDetail } from "./SermonDetailContent";
import { sermonsData } from "@/data/sermons";
import { churchConfig } from "@/data/config";

import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return sermonsData.map((sermon) => ({
    id: sermon.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const sermon = sermonsData.find((s) => s.id === resolvedParams.id);
  if (!sermon) return { title: "Not Found" };

  const imageUrl = sermon.thumbnail && sermon.thumbnail.startsWith("/") 
    ? sermon.thumbnail 
    : sermon.youtubeId 
      ? `https://img.youtube.com/vi/${sermon.youtubeId}/hqdefault.jpg`
      : "/opengraph-image.jpg";

  return buildMetadata({
    locale: "ta",
    path: `/sermons/${sermon.id}`,
    title: `${sermon.title} | Sermons | ${churchConfig.name}`,
    description: sermon.description,
    image: imageUrl,
  });
}

export default async function SermonDetailPage({ params }: PageProps) {
  return <SermonDetail params={params} isEn={false} />
}
