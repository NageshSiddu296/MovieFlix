import React from "react";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;
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

  return (
    <div className="bg-black h-[88vh] relative flex flex-col  justify-center px-6 2xl:px-16">
      <Image

        className="brightness-[45%] contrast-200 object-cover 2xl:object-fill"
        src="/bwreel.jpeg"
        alt="bg image"
        fill
      />
      <div className="relative">
        <h2 className="text-white text-3xl md:text-4xl 2xl:text-6xl font-bold mb-4 md:mb-5">
          Movieflix / <span className="text-red-600">{main_data.type}</span>
        </h2>
        <div className="mt-2 md:mt-6">
          <div>
            <Image
              className="mb-2 rounded-2xl"
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
    </div>
  );
};

export default Page;
