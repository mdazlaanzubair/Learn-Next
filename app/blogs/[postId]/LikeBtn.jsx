"use client";

import { useState } from "react";

const likePost = async (postId, reactions, isLiked) => {
  const likes = isLiked ? reactions + 1 : reactions - 1;

  const response = await fetch("https://dummyjson.com/posts/" + postId, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      reactions: likes,
    }),
  });

  const data = await response.json();
  return data;
};

const LikeBtn = ({ blog }) => {
  const [isLiked, setIsLiked] = useState(false);

  const likes = isLiked ? blog.reactions + 1 : blog.reactions - 1;

  return (
    <button
      className="btn btn-sm btn-ghost"
      onClick={() => setIsLiked(!isLiked)}
    >
      Likes {blog?.reactions}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

export default LikeBtn;
