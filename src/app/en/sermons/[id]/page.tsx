import React from "react";
import { SermonDetail } from "@/app/sermons/[id]/SermonDetailContent";
import { generateStaticParams } from "@/app/sermons/[id]/page";
import { sermonsData } from "@/data/sermons";
import { churchConfig } from "@/data/config";

interface PageProps {
  params: Promise<{ id: string }>;
}

export { generateStaticParams };

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const sermon = sermonsData.find((s) => s.id === resolvedParams.id);
  if (!sermon) return { title: "Not Found" };

  const imageUrl = sermon.thumbnail && sermon.thumbnail.startsWith("/") 
    ? sermon.thumbnail 
    : sermon.youtubeId 
      ? `https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`
      : undefined;

  const displayTitle = sermon.englishTitle || sermon.title;

  return {
    title: `${displayTitle} | Sermons | ${churchConfig.name}`,
    description: sermon.englishDescription || sermon.description,
    openGraph: imageUrl ? {
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: displayTitle,
        },
      ],
    } : undefined,
    twitter: imageUrl ? {
      card: "summary_large_image",
      images: [imageUrl],
    } : undefined,
  };
}

export default function EnglishSermonDetailPage({ params }: PageProps) {
  return <SermonDetail params={params} isEn={true} />;
}
