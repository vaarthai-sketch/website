import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery');

// Ensure the base gallery directory exists
async function ensureGalleryDir() {
  try {
    await fs.access(GALLERY_DIR);
  } catch {
    await fs.mkdir(GALLERY_DIR, { recursive: true });
  }
}

export async function GET() {
  await ensureGalleryDir();
  
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
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error reading gallery folders:', error);
    return NextResponse.json({ error: 'Failed to read folders' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await ensureGalleryDir();
  
  try {
    const { folderName } = await request.json();
    
    if (!folderName || typeof folderName !== 'string') {
      return NextResponse.json({ error: 'Invalid folder name' }, { status: 400 });
    }
    
    // Sanitize folder name
    const sanitizedName = folderName.replace(/[^a-zA-Z0-9-_\s]/g, '').trim();
    const folderPath = path.join(GALLERY_DIR, sanitizedName);
    
    try {
      await fs.access(folderPath);
      return NextResponse.json({ error: 'Folder already exists' }, { status: 400 });
    } catch {
      await fs.mkdir(folderPath, { recursive: true });
      return NextResponse.json({ success: true, folder: sanitizedName });
    }
  } catch (error) {
    console.error('Error creating folder:', error);
    return NextResponse.json({ error: 'Failed to create folder' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');
    const image = searchParams.get('image'); // e.g. /gallery/Folder/image.jpg
    
    if (image) {
      // Delete specific image
      // image is something like "/gallery/Camp/photo.jpg"
      const parts = image.split('/').filter(Boolean);
      if (parts.length >= 3 && parts[0] === 'gallery') {
        const folderName = parts[1];
        const fileName = parts.slice(2).join('/');
        
        // Sanitize paths
        if (folderName.includes('..') || fileName.includes('..')) {
           return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
        }
        
        const filePath = path.join(GALLERY_DIR, folderName, fileName);
        await fs.unlink(filePath);
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: 'Invalid image path' }, { status: 400 });
    } else if (folder) {
      // Delete entire folder
      if (folder.includes('..')) {
         return NextResponse.json({ error: 'Invalid folder name' }, { status: 400 });
      }
      const folderPath = path.join(GALLERY_DIR, folder);
      await fs.rm(folderPath, { recursive: true, force: true });
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  } catch (error) {
    console.error('Error during deletion:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
