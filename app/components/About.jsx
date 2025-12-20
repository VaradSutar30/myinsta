import Image from "next/image";

const InstagramFeed = () => {
  return (
    <div className="w-full flex justify-center mt-8 ml-2">

      {/* Feed Box */}
      <div className="w-[400px] bg-white border rounde ">

        {/* Profile */}
        <div className="flex items-center gap-3 p-3">
          <Image
            src="/images/creatorv30.jpg"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="font-semibold text-sm">varad</p>
        </div>

        {/* Post Image */}
        <Image
          src="/images/creatorv30.jpg"
          alt="post"
          width={400}
          height={400}
          className="w-full"
        />

        {/* Buttons */}
        <div className="flex gap-4 p-3 text-xl">
          ❤️ 💬 📤
        </div>

        {/* Likes */}
        <p className="px-3 text-sm font-semibold">128 likes</p>

        {/* Caption */}
        <p className="px-3 py-1 text-sm">
          <span className="font-semibold">varad</span>  
          Learning Next.js 🚀
        </p>

        {/* Time */}
        <p className="px-3 pb-3 text-xs text-gray-500">
          2 hours ago
        </p>

      </div>
    </div>
  );
};

export default InstagramFeed;
