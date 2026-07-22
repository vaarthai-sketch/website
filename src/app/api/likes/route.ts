import { NextRequest, NextResponse } from "next/server";

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

    // Use counterapi.dev which requires no setup or keys
    let likes = 0;
    try {
      const response = await fetch(`https://api.counterapi.dev/v1/vaarthai-church/likes_${issueId.replace(/-/g, '_')}/`, {
        cache: 'no-store'
      });
      if (response.ok) {
        const data = await response.json();
        likes = data.count || 0;
      }
    } catch (apiError) {
      console.warn("Counter API error fetching:", apiError);
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
      const safeId = issueId.replace(/-/g, '_');
      const actionPath = action === "like" ? "up" : "down";
      
      const response = await fetch(`https://api.counterapi.dev/v1/vaarthai-church/likes_${safeId}/${actionPath}`, {
        method: "GET", // counterapi uses GET for /up and /down
        cache: 'no-store'
      });

      if (response.ok) {
        const data = await response.json();
        currentLikes = data.count || 0;
      } else if (action === "unlike") {
        // If down fails, just get current
        const fallback = await fetch(`https://api.counterapi.dev/v1/vaarthai-church/likes_${safeId}/`);
        if (fallback.ok) {
          const fbData = await fallback.json();
          currentLikes = fbData.count || 0;
        }
      }
    } catch (apiError) {
      console.warn("Counter API error setting:", apiError);
      // Simulate success if API fails locally
      if (action === "like") currentLikes = 1;
      else currentLikes = 0;
    }

    return NextResponse.json({ likes: currentLikes } as LikeData);
  } catch (error) {
    console.error("Error in POST /api/likes:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
