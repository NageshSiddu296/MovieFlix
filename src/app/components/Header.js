"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className=" bg-black shadow-lg shadow-gray-600 relative z-20 h-[12vh]">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              className=" ml-4 md:ml-8 px-3 py-6"
              src="/logo-removebg-preview.png"
              alt="Image Logo"
              width={200}
              height={150}
            />
          </Link>
        </div>
        <nav className="md:flex hidden">
          <ul className="flex gap-6 text-lg md:text-2xl 2xl:text-3xl text-white font-extrabold mr-8">
            <li className="hover:scale-110">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:scale-110">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:scale-110">
              <Link href="/movies">Movies</Link>
            </li>
            <li className="hover:scale-110">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-xl font-extrabold focus:outline-none px-5 py-6"
          >
            <GiHamburgerMenu/>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col justify-end items-end bg-black/50 px-5">
          <ul className="flex flex-col gap-4 text-lg text-white text-right font-extrabold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
