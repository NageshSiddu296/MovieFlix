import React from "react";
import Image from "next/image";
const about = () => {
  return (
    <div className="relative h-screen bg-black flex justify-center items-center p-36">
      <Image src="/about1.webp" alt="about"fill/>
      <div className="">
        <h1 className="relative text-white text-2xl mx-auto">
          Movieflix is a subscription-based streaming service that allows our
          members to watch TV shows and movies on an internet-connected device.
          Depending on your plan, you can also download TV shows and movies to
          your iOS, Android, or Windows 10 device and watch without an internet
          connection.
        </h1>
      </div>
      <div className="mx-auto">
        <Image
          className="relative"
          src="/mlogo.png"
          alt="about"
          width={1600}
          height={100}
        />
      </div>
    </div>
  );
};

export default about;
