"use client";

import React, { useState, useEffect, useRef } from 'react';
import { churchConfig } from '@/data/config';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { FolderPlus, Image as ImageIcon, Trash2, UploadCloud, Folder, Loader2 } from 'lucide-react';

interface GalleryFolder {
  name: string;
  images: string[];
}

export default function GalleryAdminPage() {
  const [folders, setFolders] = useState<GalleryFolder[]>([]);
  const [loading, setLoading] = useState(true);
  const [newFolderName, setNewFolderName] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const res = await fetch('/api/gallery/folders');
      if (res.ok) {
        const data = await res.json();
        setFolders(data);
        if (data.length > 0 && !selectedFolder) {
          setSelectedFolder(data[0].name);
        }
      }
    } catch (error) {
      console.error('Failed to fetch folders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;
    
    try {
      const res = await fetch('/api/gallery/folders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folderName: newFolderName }),
      });
      
      if (res.ok) {
        setNewFolderName('');
        fetchFolders();
      } else {
        alert('Failed to create folder. It might already exist.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFolder = async (folderName: string) => {
    if (!confirm(`Are you sure you want to delete the folder "${folderName}" and all its photos?`)) return;
    
    try {
      const res = await fetch(`/api/gallery/folders?folder=${encodeURIComponent(folderName)}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        if (selectedFolder === folderName) setSelectedFolder(null);
        fetchFolders();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteImage = async (imagePath: string) => {
    if (!confirm('Delete this photo?')) return;
    
    try {
      const res = await fetch(`/api/gallery/folders?image=${encodeURIComponent(imagePath)}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchFolders();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length || !selectedFolder) return;
    
    setUploading(true);
    const files = Array.from(e.target.files);
    
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', selectedFolder);
      
      try {
        await fetch('/api/gallery/upload', {
          method: 'POST',
          body: formData,
        });
      } catch (error) {
        console.error('Failed to upload', file.name, error);
      }
    }
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setUploading(false);
    fetchFolders();
  };

  const currentFolder = folders.find(f => f.name === selectedFolder);

  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Gallery CMS</h1>
          <p className="text-stone-600">Manage photos and folders for the public gallery.</p>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-sm">
            <strong>Note:</strong> Currently running in local mode. Uploaded photos are saved to <code>public/gallery/</code>. If deployed to a serverless environment (like Vercel), these uploads will not persist across deployments unless a cloud storage solution is implemented.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Folders */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Folder className="w-5 h-5 text-accent" />
                Folders
              </h2>
              
              <form onSubmit={handleCreateFolder} className="mb-6 flex gap-2">
                <Input 
                  placeholder="New Folder..." 
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  className="h-9"
                />
                <Button type="submit" size="sm" className="px-3" aria-label="Add folder">
                  <FolderPlus className="w-4 h-4" />
                </Button>
              </form>

              {loading ? (
                <div className="flex justify-center p-4"><Loader2 className="w-5 h-5 animate-spin text-stone-400" /></div>
              ) : (
                <ul className="space-y-1">
                  {folders.length === 0 ? (
                    <li className="text-sm text-stone-500 italic">No folders yet.</li>
                  ) : (
                    folders.map(folder => (
                      <li key={folder.name} className="flex items-center justify-between group">
                        <button
                          onClick={() => setSelectedFolder(folder.name)}
                          className={`flex-1 text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedFolder === folder.name ? 'bg-primary text-white font-medium' : 'text-stone-700 hover:bg-stone-100'}`}
                        >
                          {folder.name} <span className="text-xs opacity-70 ml-1">({folder.images.length})</span>
                        </button>
                        <button 
                          onClick={() => handleDeleteFolder(folder.name)}
                          className={`p-2 rounded-md text-red-500 hover:bg-red-50 transition-colors ${selectedFolder === folder.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                          title="Delete folder"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
          </div>

          {/* Main Content - Photos */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm min-h-[500px]">
              
              {!selectedFolder ? (
                <div className="h-full flex flex-col items-center justify-center text-stone-400 pt-20">
                  <ImageIcon className="w-16 h-16 mb-4 opacity-20" />
                  <p>Select or create a folder to manage photos.</p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
                    <h2 className="text-xl font-bold font-serif">{selectedFolder}</h2>
                    
                    <div>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileUpload} 
                        multiple 
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        className="hidden" 
                        id="photo-upload"
                      />
                      <label htmlFor="photo-upload">
                        <Button 
                          as="span" 
                          disabled={uploading}
                          className="cursor-pointer flex items-center gap-2"
                        >
                          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
                          {uploading ? 'Uploading...' : 'Upload Photos'}
                        </Button>
                      </label>
                    </div>
                  </div>

                  {currentFolder && currentFolder.images.length === 0 ? (
                    <div className="text-center py-12 text-stone-500 border-2 border-dashed border-stone-200 rounded-lg">
                      <p>This folder is empty.</p>
                      <p className="text-sm mt-1">Upload some photos to get started.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {currentFolder?.images.map((img, i) => (
                        <div key={i} className="relative group aspect-square rounded-lg overflow-hidden bg-stone-100 border border-border">
                          <img 
                            src={img} 
                            alt={`Gallery image ${i}`} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button 
                              onClick={() => handleDeleteImage(img)}
                              className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transform hover:scale-110 transition-all shadow-lg"
                              title="Delete photo"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
