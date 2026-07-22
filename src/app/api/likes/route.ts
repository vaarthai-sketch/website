import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export const dynamic = "force-dynamic";

// Define a type for the response data
type LikeData = {
  likes: number;
};

// GET: Fetch the current number of likes for a specific issue
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const issueId = searchParams.get("issueId");

    if (!issueId) {
      return NextResponse.json({ error: "Missing issueId" }, { status: 400 });
    }

    // Try to get the like count from KV
    let likes = 0;
    try {
      const kvLikes = await kv.get<number>(`likes:${issueId}`);
      likes = kvLikes || 0;
    } catch (kvError) {
      // KV might not be set up yet, fallback to 0 gracefully
      console.warn("Vercel KV not configured or error fetching:", kvError);
    }

    return NextResponse.json({ likes } as LikeData);
  } catch (error) {
    console.error("Error in GET /api/likes:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST: Increment or decrement likes
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { issueId, action } = body;

    if (!issueId) {
      return NextResponse.json({ error: "Missing issueId" }, { status: 400 });
    }

    if (action !== "like" && action !== "unlike") {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    let currentLikes = 0;
    
    try {
      // Fetch current likes
      const kvLikes = await kv.get<number>(`likes:${issueId}`);
      currentLikes = kvLikes || 0;

      // Update likes
      if (action === "like") {
        currentLikes += 1;
      } else if (action === "unlike") {
        currentLikes = Math.max(0, currentLikes - 1);
      }

      // Save back to KV
      await kv.set(`likes:${issueId}`, currentLikes);
    } catch (kvError) {
      console.warn("Vercel KV not configured or error setting:", kvError);
      // Simulate success if KV isn't ready
      if (action === "like") currentLikes = 1;
      else currentLikes = 0;
    }

    return NextResponse.json({ likes: currentLikes } as LikeData);
  } catch (error) {
    console.error("Error in POST /api/likes:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
