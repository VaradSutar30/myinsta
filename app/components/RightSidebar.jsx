import React from "react";
import Image from "next/image";

const suggestions = [
  "varad_dev",
  "react_guy",
  "frontend_ui",
  "nextjs_dev",
  "tailwind_css",
];

const RightSidebar = () => {
  return (
    <div className="hidden lg:block fixed top-0 right-0 h-screen w-[320px] p-4 bg-white">

      {/* User Profile */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/varad.jpeg"
            alt="profile"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">varad2_</p>
            <p className="text-xs text-gray-500">Varad Sutar</p>
          </div>
        </div>

        <button className="text-blue-500 text-xs font-semibold cursor-pointer">
          Switch
        </button>
      </div>

      {/* Suggestions Header */}
      <div className="flex justify-between text-sm text-gray-500 mb-4 cursor-pointer">
        <p>Suggested for you</p>
        <p className="text-black font-semibold cursor-pointer">See All</p>
      </div>

      {/* Suggestions List */}
      {suggestions.map((user, index) => (
        <div
          key={index}
          className="flex items-center justify-between mb-4 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/images/varad.jpeg"
              alt="suggestion"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">{user}</p>
              <p className="text-xs text-gray-500">Suggested for you</p>
            </div>
          </div>

          <button className="text-blue-500 text-xs font-semibold cursor-pointer">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
