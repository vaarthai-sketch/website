import React from "react";
import { SermonDetail } from "./SermonDetailContent";
import { sermonsData } from "@/data/sermons";
import { churchConfig } from "@/data/config";

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
      ? `https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`
      : undefined;

  return {
    title: `${sermon.title} | Sermons | ${churchConfig.name}`,
    description: sermon.description,
    openGraph: imageUrl ? {
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: sermon.title,
        },
      ],
    } : undefined,
    twitter: imageUrl ? {
      card: "summary_large_image",
      images: [imageUrl],
    } : undefined,
  };
}

export default async function SermonDetailPage({ params }: PageProps) {
  return <SermonDetail params={params} isEn={false} />
}
