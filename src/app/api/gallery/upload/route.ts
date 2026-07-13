import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string;

    if (!file || !folder) {
      return NextResponse.json({ error: 'Missing file or folder' }, { status: 400 });
    }

    if (folder.includes('..')) {
      return NextResponse.json({ error: 'Invalid folder name' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const originalName = file.name || 'uploaded_image.jpg';
    const sanitizedFileName = originalName.replace(/[^a-zA-Z0-9-_\.]/g, '');
    const uniqueFileName = `${Date.now()}-${sanitizedFileName}`;

    const folderPath = path.join(process.cwd(), 'public', 'gallery', folder);
    
    // Ensure the specific folder exists
    try {
      await fs.access(folderPath);
    } catch {
      await fs.mkdir(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, uniqueFileName);
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({ 
      success: true, 
      url: `/gallery/${folder}/${uniqueFileName}` 
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
