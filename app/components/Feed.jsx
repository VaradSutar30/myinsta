"use client";

import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { useState } from "react";

const InstagramFeed = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(128);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="w-full flex mt-2 md:mt-4 md:px-2 justify-center">
      <div className="w-full max-w-[470px] bg-white">

        {/* Profile Row */}
        <div className="w-full flex items-center gap-2 p-2">
          <Image
            src="/images/varad.jpeg"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />

          <p className="font-semibold text-sm -mr-2">varad2_</p>
          <LuDot />
          <p className="text-sm text-gray-500 -ml-2">1d</p>

          <div className="ml-auto">
            <Image
              src="/images/dots.png"
              alt="menu"
              width={18}
              height={18}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Post Image */}
        <div className="relative w-full aspect-square">
          <Image
            src="/images/varad.jpeg"
            alt="post"
            fill
            className="object-cover"
            priority
          />
        </div>


{/* Action Buttons */}
<div className="flex items-center justify-between px-3 py-2">
  <div className="flex items-center gap-4">

    {/* Like */}
    <button onClick={handleLike} className="hover:scale-110 transition">
      {liked ? (
        <FaHeart className="text-red-500" size={24} />
      ) : (
        <FaRegHeart size={24} />
      )}
    </button>

    {/* Comment */}
    <button className="hover:scale-110 transition">
      <FiMessageCircle size={24} />
    </button>

    {/* Share */}
    <button className="hover:scale-110 transition">
      <FiSend size={24} />
    </button>

  </div>
</div>
 {/* Likes */}
        <p className="px-3 text-sm font-semibold mt-1">
          {likes} likes
        </p>

        {/* Time */}
        <p className="px-3 pb-4 text-xs text-gray-500">
          10 hours ago
        </p>
      </div>
    </div>
  );
};

export default InstagramFeed;
