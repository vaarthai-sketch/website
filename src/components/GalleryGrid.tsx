"use client";

import React, { useState, useEffect } from "react";
import { Heart, X, ChevronLeft, ChevronRight, Folder, ArrowLeft, Image as ImageIcon } from "lucide-react";

export interface FolderData {
  name: string;
  images: string[];
}

export default function GalleryGrid({ folders }: { folders: FolderData[] }) {
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});
  const [lightboxIndex, setLightboxIndex] = useState<{ folderIdx: number; imgIdx: number } | null>(null);
  
  // State for which folder is currently being viewed
  const [selectedFolderIdx, setSelectedFolderIdx] = useState<number | null>(null);

  // Load liked photos from localStorage when component mounts
  useEffect(() => {
    try {
      const saved = localStorage.getItem("vaarthai_liked_photos");
      if (saved) {
        setLikedPhotos(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Failed to load liked photos from localStorage", e);
    }
  }, []);

  const toggleLike = (e: React.MouseEvent, imgSrc: string) => {
    e.stopPropagation(); // Don't open lightbox when clicking heart
    const nextState = { ...likedPhotos, [imgSrc]: !likedPhotos[imgSrc] };
    setLikedPhotos(nextState);
    try {
      localStorage.setItem("vaarthai_liked_photos", JSON.stringify(nextState));
    } catch (e) {
      console.warn("Failed to save liked photo", e);
    }
  };

  const currentPhoto =
    lightboxIndex !== null && folders[lightboxIndex.folderIdx]?.images[lightboxIndex.imgIdx]
      ? folders[lightboxIndex.folderIdx].images[lightboxIndex.imgIdx]
      : null;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightboxIndex) return;
    const { folderIdx, imgIdx } = lightboxIndex;
    const currentFolder = folders[folderIdx];
    if (imgIdx > 0) {
      setLightboxIndex({ folderIdx, imgIdx: imgIdx - 1 });
    } else {
      setLightboxIndex({ folderIdx, imgIdx: currentFolder.images.length - 1 });
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightboxIndex) return;
    const { folderIdx, imgIdx } = lightboxIndex;
    const currentFolder = folders[folderIdx];
    if (imgIdx < currentFolder.images.length - 1) {
      setLightboxIndex({ folderIdx, imgIdx: imgIdx + 1 });
    } else {
      setLightboxIndex({ folderIdx, imgIdx: 0 });
    }
  };

  // Render list of folders
  if (selectedFolderIdx === null) {
    return (
      <div className="space-y-8">
        {folders.length === 0 ? (
          <div className="text-center py-20 text-stone-500">
            <p className="text-xl font-serif">No photos available yet.</p>
            <p className="mt-2">Check back soon for updates from our latest events.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {folders.map((folder, folderIdx) => (
              <div 
                key={folder.name}
                onClick={() => setSelectedFolderIdx(folderIdx)}
                className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden">
                  {folder.images.length > 0 ? (
                    <img 
                      src={folder.images[0]} 
                      alt={folder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-stone-400">
                      <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                      <span className="text-sm">Empty Folder</span>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Photo count badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5" />
                    {folder.images.length}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                      <Folder className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-stone-800 group-hover:text-primary transition-colors line-clamp-1">
                        {folder.name}
                      </h3>
                      <p className="text-stone-500 text-sm mt-1">
                        View gallery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Render specific folder
  const activeFolder = folders[selectedFolderIdx];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Folder Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <button 
            onClick={() => setSelectedFolderIdx(null)}
            className="flex items-center gap-2 text-stone-500 hover:text-primary transition-colors text-sm font-medium mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Folders
          </button>
          <h2 className="text-3xl font-serif font-bold text-stone-800">
            {activeFolder.name}
          </h2>
        </div>
        <div className="text-sm font-medium text-stone-500 bg-stone-100 px-4 py-2 rounded-full inline-flex items-center gap-2 self-start sm:self-end">
          <ImageIcon className="w-4 h-4" />
          {activeFolder.images.length} {activeFolder.images.length === 1 ? "photo" : "photos"}
        </div>
      </div>

      {activeFolder.images.length === 0 ? (
        <div className="bg-white border border-dashed border-stone-300 rounded-xl p-12 text-center text-stone-500">
          <p className="text-lg font-medium">புகைப்படங்கள் விரைவில் பதிவேற்றப்படும் (Photos coming soon...)</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {activeFolder.images.map((imgSrc, imgIdx) => {
            const isLiked = !!likedPhotos[imgSrc];
            return (
              <div
                key={imgSrc}
                onClick={() => setLightboxIndex({ folderIdx: selectedFolderIdx, imgIdx })}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-border group cursor-pointer relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={`${activeFolder.name} photo ${imgIdx + 1}`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Interactive Like Button */}
                  <button
                    onClick={(e) => toggleLike(e, imgSrc)}
                    className={`absolute bottom-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-md ${
                      isLiked
                        ? "bg-red-500/90 text-white scale-110"
                        : "bg-white/80 text-stone-700 hover:bg-white hover:text-red-500 hover:scale-110 opacity-80 group-hover:opacity-100"
                    }`}
                    title={isLiked ? "Unlike photo" : "Like photo"}
                    aria-label={isLiked ? "Unlike photo" : "Like photo"}
                  >
                    <Heart
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isLiked ? "fill-white text-white" : ""
                      }`}
                    />
                  </button>

                  {/* Liked badge chip in top corner */}
                  {isLiked && (
                    <div className="absolute top-3 left-3 bg-red-500/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow backdrop-blur-sm flex items-center gap-1 animate-fade-in">
                      <Heart className="w-3 h-3 fill-white" /> Liked
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Full Screen Photo Lightbox Popup */}
      {currentPhoto && lightboxIndex && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
            <span className="text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full border border-white/10">
              {folders[lightboxIndex.folderIdx].name} ({lightboxIndex.imgIdx + 1} of{" "}
              {folders[lightboxIndex.folderIdx].images.length})
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Previous Button */}
          {folders[lightboxIndex.folderIdx].images.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
              title="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Main Displayed Photo */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black"
          >
            <img
              src={currentPhoto}
              alt="Expanded church photo"
              className="max-w-full max-h-[80vh] object-contain"
            />

            {/* Bottom Bar inside Lightbox with Like Button */}
            <div className="w-full bg-stone-900/90 px-6 py-4 flex items-center justify-between border-t border-white/10 text-white">
              <span className="text-xs text-stone-300">
                Click anywhere outside or the X button to close
              </span>
              <button
                onClick={(e) => toggleLike(e, currentPhoto)}
                className={`px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 shadow ${
                  likedPhotos[currentPhoto]
                    ? "bg-red-500 text-white scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 hover:text-red-400"
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${
                    likedPhotos[currentPhoto] ? "fill-white text-white" : ""
                  }`}
                />
                {likedPhotos[currentPhoto] ? "Liked ❤️" : "Like Photo"}
              </button>
            </div>
          </div>

          {/* Next Button */}
          {folders[lightboxIndex.folderIdx].images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
              title="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
