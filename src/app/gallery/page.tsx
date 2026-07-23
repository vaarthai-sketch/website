import React from "react";
import Image from "next/image";
import { churchConfig } from "@/data/config";
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import GalleryGrid from "@/components/GalleryGrid";

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'ta',
  path: '/gallery',
  title: "Photos - ",
  description: "View photos from our recent church events and gatherings.",
});

// Force dynamic so it picks up new uploads
export const dynamic = 'force-dynamic';

async function getFolders() {
  const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery');
  try {
    const folders = await fs.readdir(GALLERY_DIR, { withFileTypes: true });
    const result = await Promise.all(
      folders
        .filter((dirent) => dirent.isDirectory() && dirent.name !== "Inauguration" && !dirent.name.startsWith("."))
        .map(async (folder) => {
          const folderPath = path.join(GALLERY_DIR, folder.name);
          const files = await fs.readdir(folderPath);
          const images = files
            .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
            .map((file) => `/gallery/${folder.name}/${file}`);
          return {
            name: folder.name,
            images,
          };
        })
    );

    const order = ["Inauguration Service", "Sunday Services", "Vaarthai Kids", "Vaarthai Youth"];
    result.sort((a, b) => {
      const idxA = order.indexOf(a.name);
      const idxB = order.indexOf(b.name);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.name.localeCompare(b.name);
    });

    return result;
  } catch {
    return [];
  }
}

export default async function GalleryPage() {
  const folders = await getFolders();

  return (
    <main className="min-h-screen bg-stone-50 py-12">
      {/* Header section */}
      <section className="bg-primary text-white py-16 md:py-24 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Photos
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200">
            A glimpse into the life and community at {churchConfig.name}.
          </p>
        </div>
      </section>

      {/* Gallery Grid with Interactive Likes & Lightbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <GalleryGrid folders={folders} />
      </section>
    </main>
  );
}
