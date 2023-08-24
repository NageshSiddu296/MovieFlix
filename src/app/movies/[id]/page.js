import React from "react";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;
  console.log(params);
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0]?.details;
  console.log(data);

  return (
    <div className="bg-black min-h-screen p-6 md:p-12">
      <Image
        className="rotate-180 min-h-screen"
        src="/reels1.jpeg"
        alt="bg image"
        fill
      />
      <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-5">
        Movieflix / <span className="text-red-600">{main_data.type}</span>
      </h2>
      <div className="mt-4 md:mt-8">
        <div>
          <Image
            className="mx-auto mb-4"
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={450}
            height={300}
          />
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="text-white text-xl md:text-3xl font-bold">
            {main_data.title}
          </h1>
          <p className="text-white text-sm md:text-base leading-7 md:leading-10">
            {main_data.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
