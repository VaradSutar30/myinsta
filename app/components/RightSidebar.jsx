import React from "react";
import Image from "next/image";

const suggestions = [
  { id: 1, username: "virat.kohli", image: "/images/virat.jfif" },
  { id: 2, username: "rohitsharma45", image: "/images/sharma.jfif" },
  { id: 3, username: "surya_14kumar", image: "/images/surya.jfif" },
  { id: 4, username: "hardikpandya93", image: "/images/Pandu.jfif" },
  { id: 5, username: "mahi7781", image: "/images/ms.jfif" },
];

const RightSidebar = () => {
  return (
    <div className="
        block w-full bg-white p-4
        md:max-w-[500px] md:mx-auto
        lg:fixed lg:top-0 lg:right-0 lg:h-screen lg:w-[320px]
      ">
      
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

        <button className="text-blue-500 text-xs font-semibold">Switch</button>
      </div>

      {/* Suggestions Header */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <p>Suggested for you</p>
        <p className="text-black font-semibold cursor-pointer">See All</p>
      </div>

      {/* Suggestions List */}
      {suggestions.map((user) => (
        <div key={user.id} className="flex items-center justify-between mb-4 w-full py-3">
          <div className="flex items-center gap-3 ">
            <Image
              src={user.image}
              alt="profile"
              width={10}
              height={10}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">{user.username}</p>
              <p className="text-xs text-gray-500">Suggested for you</p>
            </div>
          </div>

          <button className="text-blue-500 text-xs font-semibold">Follow</button>
        </div>
      ))}

      {/* Footer */}
      <div className="mt-6 text-xs text-gray-400 leading-relaxed">
        About · Help · Press · API · Jobs · Privacy · Terms <br />
        Location · Language · Meta Verified
      </div>
    </div>
  );
};

export default RightSidebar;
