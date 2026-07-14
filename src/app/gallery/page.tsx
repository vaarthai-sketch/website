import React from "react";
import Image from "next/image";
import { churchConfig } from "@/data/config";
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export const metadata = {
  title: "Photos - " + churchConfig.name,
  description: "View photos from our recent church events and gatherings.",
};

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

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        {folders.length === 0 ? (
          <div className="text-center py-20 text-stone-500">
            <p className="text-xl font-serif">No photos available yet.</p>
            <p className="mt-2">Check back soon for updates from our latest events.</p>
          </div>
        ) : (
          folders.map((folder, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-serif font-bold border-b border-border pb-2 text-stone-800">
                {folder.name}
              </h2>
              {folder.images.length === 0 ? (
                <div className="bg-white border border-dashed border-stone-300 rounded-xl p-8 text-center text-stone-500">
                  <p className="text-sm font-medium">புகைப்படங்கள் விரைவில் பதிவேற்றப்படும் (Photos coming soon...)</p>
                </div>
              ) : (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                  {folder.images.map((imgSrc, index) => (
                    <div 
                      key={index} 
                      className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-border group cursor-pointer"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={imgSrc}
                          alt={`${folder.name} photo ${index + 1}`}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </section>
    </main>
  );
}
