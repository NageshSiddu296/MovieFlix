import React from "react";
import Image from "next/image";
import Link from "next/link";
const Herosection = () => {
  return (
    <main>
      <div className="flex justify-around items-center relative h-screen">
        <Image
          src="/download.jpeg"
          alt="bg image"
          fill
        />
        <div className="text-white relative text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-5">
            Let's Watch Movie Together
          </h1>
          <p className="text-2xl leading-10">
            Unlimited movies, TV shows and more
          </p>
          <p className="leading-10 text-2xl">Watch anywhere. Cancel anytime.</p>
          <Link href='/movies'>
            <button className="bg-red-700 rounded-md w-36 font-extrabold h-10 m-5 hover:bg-red-800 hover:scale-110">
              Get Started →
            </button>
          </Link>
        </div>
        <div className="relative mb-8">
          <Image src="/star.png" alt="image" width={550} height={200} />
        </div>
      </div>
    </main>
  );
};

export default Herosection;
