import Image from "next/image";

const InstagramFeed = () => {
  return (
    <div className="w-full flex justify-center mt-8">
      {/* Feed Box */}
      <div className="w-[500px] bg-white">

        {/* Profile Row */}
        <div className="flex items-center gap-3 p-3">
          <Image
            src="/images/varad.jpeg"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />

          <p className="font-semibold text-sm">varad2_</p>

          <Image
            src="/images/veri.jfif"
            alt="verified"
            width={16}
            height={16}
          />

          <p className="text-sm text-gray-500">· 1d</p>

          {/* Menu dots */}
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
        <div className="relative w-full aspect-square border rounded">
          <Image
            src="/images/varad.jpeg"
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
        <p className="px-3 text-sm font-semibold">1M likes</p>

        {/* Caption */}
        <p className="px-3 py-1 text-sm">
          <span className="font-semibold">varad2_</span> Professional Computer Engineer !!
        </p>

        {/* Time */}
        <p className="px-3 pb-3 text-xs text-gray-500">
          10 hours ago
        </p>

      </div>
    </div>
  );
};

export default InstagramFeed;
