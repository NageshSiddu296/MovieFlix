import Link from "next/link";
import React from "react";
import Image from "next/image";
const Moviecard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;
  return (
    <div className="flex text-center mb-3 ">
      <div className="bg-black rounded-xl border-2 border-gray-800 shadow-xl hover:shadow-gray-500 hover:scale-110">
        <div className="p-5">
          <div>
            <Image
              className="m-auto mb-4"
              src={curElem.jawSummary.backgroundImage.url}
              alt={title}
              width={350}
              height={300}
            />
          </div>
          <div>
            <h2 className="text-white text-xl text-center font-black mb-5">
              {title}
            </h2>
            <p className="text-white text-left text-xs">{synopsis}</p>
            <Link href={`/movies/${id}`}>
              <button className="bg-red-700 rounded-md w-24 font-bold h-8 m-5 hover:bg-red-800 hover:scale-110">
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
