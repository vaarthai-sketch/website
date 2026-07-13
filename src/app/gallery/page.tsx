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
        .filter((dirent) => dirent.isDirectory())
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
    // Sort so folders with images or newer folders might appear first (simplified for now)
    return result.filter(f => f.images.length > 0);
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
          
          <div className="mt-8">
             <Link href="/admin/gallery" className="text-xs bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors">
               Manage Photos
             </Link>
          </div>
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
            </div>
          ))
        )}
      </section>
    </main>
  );
}
