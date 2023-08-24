import Link from "next/link";
import React from "react";
import Image from "next/image";

const Moviecard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;
  return (
    <div className="mb-6 sm:mb-8">
      <div className="bg-black rounded-xl border-2 border-gray-800 shadow-xl hover:shadow-gray-500 hover:scale-105">
        <div className="p-4 sm:p-5">
          <div>
            <Image
              className="mx-auto mb-4"
              src={curElem.jawSummary.backgroundImage.url}
              alt={title}
              width={350}
              height={300}
            />
          </div>
          <div>
            <h2 className="text-white text-lg sm:text-xl text-center font-black mb-2">
              {title}
            </h2>
            <p className="text-white text-xs sm:text-sm leading-tight mb-4">
              {synopsis}
            </p>
            <Link href={`/movies/${id}`}>
              <button className="bg-red-700 text-sm 2xl:text-xl text-gray-300 rounded-md w-20 sm:w-24 font-bold h-8 m-auto hover:bg-red-800 hover:scale-105">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
