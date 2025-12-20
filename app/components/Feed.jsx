import Image from "next/image";

const InstagramFeed = () => {
  return (
    <div className="w-full flex justify-center mt-8 ml-2">
      {/* Feed Box */}
      <div className="w-[500px] bg-white border rounded">

        {/* Profile */}
        <div className="flex items-center gap-3 p-3">
          <Image
            src="/images/jee.jpg"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="font-semibold text-sm">its.jee5001</p>
        </div>

        {/* Post Image */}
        <div className="relative w-full aspect-square">
          <Image
            src="/images/jee.jpg"
            alt="post"
            fill
            className="object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 p-3 text-xl">
          ❤️ 💬 📤
        </div>

        {/* Likes */}
        <p className="px-3 text-sm font-semibold">128 likes</p>

        {/* Caption */}
        <p className="px-3 py-1 text-sm">
          <span className="font-semibold">its.jee5001</span> #Jeevan
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
