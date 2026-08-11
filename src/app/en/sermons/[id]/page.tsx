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

  return {
    title: `${sermon.englishTitle || sermon.title} | Sermons | ${churchConfig.name}`,
    description: sermon.englishDescription || sermon.description,
  };
}

export default function EnglishSermonDetailPage({ params }: PageProps) {
  return <SermonDetail params={params} isEn={true} />;
}
