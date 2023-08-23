import Link from "next/link";
import React from "react";
import Moviecard from "../components/Moviecard";

const Movies = async () => {
  const url = process.env.API_URL
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;


  return (
    <>
      <section className="bg-black p-6 flex flex-col flex-wrap">
        <h1 className="text-center text-5xl text-red-600 font-extrabold mb-8">
          Series & Movies
        </h1>
        <div className=" grid grid-cols-3 gap-4 h">
          {main_data.map((curElem) => {
            return <Moviecard key={curElem.id} {...curElem} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
