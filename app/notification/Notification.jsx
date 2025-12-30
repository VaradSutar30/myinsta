"use client";
import Image from "next/image";

const Notification = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col items-start">
      <h1 className="text-2xl md:text-2xl tracking-wide drop-shadow-lg font-bold">
        Notification
      </h1>

      <h3 className="font-bold p-3">Today</h3>

      {/* Notification item */}
      <div className="flex items-center gap-3 mt-4">
        <Image
          src="/images/Pandu.jfif"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
        <p>hardik Pandyafc liked your post</p>


        <Image
          src="/images/varad.jpeg"
          width={40}
          height={40}
          alt="Profile"
          className="rounded ml-30"
        />
      </div>

      <div className="flex items-center gap-3 mt-4 w-full">
  <Image
    src="/images/sharma.jfif"
    width={40}
    height={40}
    alt="Profile"
    className="rounded-full"
  />
  <p>rohitsharma.45fc Started Following</p>

  <button className="border text-white text-xs rounded cursor-pointer bg-blue-600 hover:bg-blue-700 transition px-3 py-1 ml-30">
    Follow Back
  </button>
</div>



      <div className="flex items-center gap-3 mt-4">
        <Image
          src="/images/surya.jfif"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
        <p>suryaKumaryadav.fc liked your post</p>

        <Image
          src="/images/varad.jpeg"
          width={40}
          height={40}
          alt="Profile"
          className="rounded ml-30"
        />
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Image
          src="/images/virat.jfif"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
      <p>virat.kohli fc Started Following</p>

      <button className="border text-white text-xs rounded cursor-pointer bg-blue-600 hover:bg-blue-700 transition px-3 py-1 ml-30">
  Follow Back
</button>



      </div>

      <div className="flex items-center gap-3 mt-4">
        <Image
          src="/images/ms.jfif"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
        <p>msd.fc liked your post</p>

        <Image
          src="/images/varad.jpeg"
          width={40}
          height={40}
          alt="Profile"
          className="rounded ml-30"
        />
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Image
          src="/images/jee.jpg"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
      <p>jeevan Started Following</p>

      <button className="border text-white text-xs rounded cursor-pointer bg-blue-600 hover:bg-blue-700 transition px-3 py-1 ml-30">
  Follow Back
</button>
</div>

<div className="flex items-center gap-3 mt-4">
        <Image
          src="/images/jee.jpg"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
      <p>msd.fc liked your post</p>

<Image
  src="/images/varad.jpeg"
  width={40}
  height={40}
  alt="Profile"
  className="rounded ml-30"
/>
</div>


<div className="flex items-center gap-3 mt-4">
        <Image
          src="/images/raj.jpeg"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
      <p>raj Started Following</p>

      <button className="border text-white text-xs rounded cursor-pointer bg-blue-600 hover:bg-blue-700 transition px-3 py-1 ml-30">
  Follow Back
</button>
</div>

<div className="flex items-center gap-3 mt-4">
        <Image
          src="/images/tushar.jpg"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
      <p>tushar Started Following</p>

      <button className="border text-white text-xs rounded cursor-pointer bg-blue-600 hover:bg-blue-700 transition px-3 py-1 ml-30">
  Follow Back
</button>
</div>

    </div>
  );
};

export default Notification;
