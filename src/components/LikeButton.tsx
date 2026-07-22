"use client";

import React, { useState, useEffect } from "react";
import { ThumbsUp } from "lucide-react";

interface LikeButtonProps {
  issueId: string;
  isEn?: boolean;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ issueId, isEn = false }) => {
  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLiking, setIsLiking] = useState<boolean>(false);

  // Load initial likes and check local storage
  useEffect(() => {
    // Check if this user has already liked this issue locally
    const storedStatus = localStorage.getItem(`hasLiked_${issueId}`);
    if (storedStatus === "true") {
      setHasLiked(true);
    }

    // Fetch total likes from the server
    const fetchLikes = async () => {
      try {
        const response = await fetch(`/api/likes?issueId=${issueId}&t=${Date.now()}`);
        if (response.ok) {
          const data = await response.json();
          setLikes(data.likes);
        }
      } catch (error) {
        console.error("Failed to fetch likes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, [issueId]);

  const toggleLike = async () => {
    if (isLiking || isLoading) return;

    setIsLiking(true);
    const action = hasLiked ? "unlike" : "like";
    
    // Optimistic UI update
    setHasLiked(!hasLiked);
    setLikes((prev) => (hasLiked ? Math.max(0, prev - 1) : prev + 1));
    
    // Update local storage
    if (hasLiked) {
      localStorage.removeItem(`hasLiked_${issueId}`);
    } else {
      localStorage.setItem(`hasLiked_${issueId}`, "true");
    }

    // Send request to server
    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ issueId, action }),
      });

      if (response.ok) {
        const data = await response.json();
        // Sync with actual server count
        setLikes(data.likes);
      } else {
        // Revert optimistic update on failure
        setHasLiked(hasLiked);
        setLikes((prev) => (hasLiked ? prev + 1 : Math.max(0, prev - 1)));
        if (hasLiked) {
          localStorage.setItem(`hasLiked_${issueId}`, "true");
        } else {
          localStorage.removeItem(`hasLiked_${issueId}`);
        }
      }
    } catch (error) {
      console.error("Failed to update likes:", error);
      // Revert optimistic update
      setHasLiked(hasLiked);
      setLikes((prev) => (hasLiked ? prev + 1 : Math.max(0, prev - 1)));
      if (hasLiked) {
        localStorage.setItem(`hasLiked_${issueId}`, "true");
      } else {
        localStorage.removeItem(`hasLiked_${issueId}`);
      }
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <div className="flex items-center gap-3 my-8 pt-6 border-t border-stone-200 not-prose">
      <button
        onClick={toggleLike}
        disabled={isLoading || isLiking}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 font-medium text-sm ${
          hasLiked
            ? "bg-accent/10 border-accent text-accent shadow-sm"
            : "bg-white border-stone-300 text-stone-600 hover:bg-stone-50 hover:border-stone-400"
        } ${(isLoading || isLiking) ? "opacity-75 cursor-not-allowed" : "cursor-pointer"}`}
        aria-label={hasLiked ? "Unlike this issue" : "Like this issue"}
      >
        <ThumbsUp 
          className={`w-4 h-4 transition-transform duration-300 ${
            hasLiked ? "fill-accent scale-110" : "fill-transparent scale-100"
          }`} 
        />
        <span>{hasLiked ? (isEn ? "Liked" : "விருப்பம்") : (isEn ? "Like" : "விருப்பம்")}</span>
      </button>
      
      {!isLoading && (
        <span className="text-sm text-stone-500 font-medium animate-fade-in">
          {likes > 0 
            ? `${likes} ${likes === 1 ? (isEn ? 'person' : 'நபர்') : (isEn ? 'people' : 'நபர்கள்')} ${isEn ? 'liked this' : 'இதை விரும்பியுள்ளனர்'}`
            : isEn ? "Be the first to like this!" : "இதை முதலில் விரும்புபவராக இருங்கள்!"}
        </span>
      )}
    </div>
  );
};
