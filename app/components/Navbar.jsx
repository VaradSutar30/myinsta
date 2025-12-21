import React from "react";

const StoryAvatar = () => {
  return (
    <div className="flex flex-row gap-6 cursor-pointer ml-2 mt-10">

      {/* Instagram Logo */}
      <div>
        <img
          src="/images/my-insta1.png"
          alt="Logo"
          className="w-24 h-24 object-contain"
        />
      </div>

      {/* Story Item */}
      {[
        { img: "/images/varad.jpeg", name: "varad2_" },
        { img: "/images/creatorv30.jpg", name: "creatorv30" },
        { img: "/images/varads2.jpeg", name: "varads2_" },
        { img: "/images/aditya.jpeg", name: "adi_shirke_3540" },
        { img: "/images/tushar.jpg", name: "__tushar.28" },
        { img: "/images/prathu.jpeg", name: "prathuu__3003" },
        { img: "/images/shreyash.jpeg", name: "shreyash" },
        { img: "/images/at.jpeg", name: "__AC__93" },
        { img: "/images/vi.jpeg", name: "__virya__45" },
        { img: "/images/raj.jpeg", name: "raj_dhotre_07" },
        { img: "/images/varad.jpeg", name: "varad2_" },
      ].map((story, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-white p-[2px]">
              <img
                src={story.img}
                alt="Story"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <span className="mt-1 text-xs text-gray-700 truncate w-20 text-center">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StoryAvatar;
