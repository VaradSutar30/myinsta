import React from "react";

const StoryAvatar = () => {
  const stories = [
    { img: "/images/varad.jpeg", name: "varad2_" },
    { img: "/images/creatorv30.jpg", name: "creatorv30" },
    { img: "/images/varads2.jpeg", name: "varads2_" },
    { img: "/images/aditya.jpeg", name: "adi_shirke_3540" },
    { img: "/images/tushar.jpg", name: "__tushar.28" },
    { img: "/images/prathu.jpeg", name: "prathuu__3003" },
  ];

  return (
    <div
      className="
        flex gap-4
        px-4 mt-3
        overflow-x-auto
        scrollbar-hide
        md:justify-center
      "
    >
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center flex-shrink-0">
          {/* Story Ring */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-white p-[2px]">
              <img
                src={story.img}
                alt="Story"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Username */}
          <span className="mt-1 text-[11px] md:text-xs text-gray-700 truncate w-16 md:w-20 text-center">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StoryAvatar;
