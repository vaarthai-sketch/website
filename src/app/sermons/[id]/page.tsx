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

  return {
    title: `${sermon.title} | Sermons | ${churchConfig.name}`,
    description: sermon.description,
  };
}

export default async function SermonDetailPage({ params }: PageProps) {
  return <SermonDetail params={params} isEn={false} />
}
