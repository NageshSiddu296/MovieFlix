import Link from "next/link";
import React from "react";
import Moviecard from "../components/Moviecard";

const Movies = async () => {
  const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <section className="bg-black p-4 md:p-6 lg:p-12">
      <h1 className="text-center text-2xl md:text-5xl text-red-600 font-extrabold mb-6 md:mb-8">
        Series & Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {main_data.map((curElem) => {
          return <Moviecard key={curElem.id} {...curElem} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
