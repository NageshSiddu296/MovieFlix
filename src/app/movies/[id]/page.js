// 'use client'
import React from "react";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;
  console.log(params)
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };


  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0]?.details;
  console.log(data)

  return (
    <div className="flex flex-col mt-10 p-10 relative-h-screen">
      <Image
        className="rotate-180 relative-h-screen"
        src="/reels1.jpeg"
        alt="bg image"
        fill
      />
      <h2 className="text-white text-4xl font-bold mb-5 relative">
        Movieflix \ <span className="text-red-600"> {main_data.type} </span>
      </h2>
      <div className="relative">
        <div>
          <Image
            className="mb-5"
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={450}
            height={300}
          />
        </div>
        <div className="relative">
          <h1 className="text-white text-3xl font-bold">{main_data.title}</h1>
          <p className="text-white text-sm leading-10">{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
