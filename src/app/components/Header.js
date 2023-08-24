"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='p-4 md:p-6 bg-black shadow-lg shadow-gray-600 relative z-20'>
      <div className='flex justify-between items-center'>
        <div>
          <Image
            className='scale-110 ml-4 md:ml-8'
            src="/logo-removebg-preview.png"
            alt='Image Logo'
            width={200}
            height={150}
          />
        </div>
        <nav className='md:flex hidden'>
          <ul className='flex gap-6 text-lg text-white font-extrabold mr-8'>
            <li className='hover:scale-110'>
              <Link href="/">Home</Link>
            </li>
            <li className='hover:scale-110'>
              <Link href="/about">About</Link>
            </li>
            <li className='hover:scale-110'>
              <Link href="/movies">Movies</Link>
            </li>
            <li className='hover:scale-110'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white text-xl focus:outline-none'
          >
            Menu
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className='md:hidden mt-4'>
          <ul className='flex flex-col gap-4 text-lg text-white font-extrabold'>
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
