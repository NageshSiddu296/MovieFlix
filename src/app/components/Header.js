import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
      <header className='p-6 bg-black shadow-lg shadow-gray-500 relative z-20'>
          <div className='flex justify-between items-center '>
              <div><Image className='scale-125 ml-8' src="/logo-removebg-preview.png" alt='Image Logo' width={190} height={200} /></div>
              <nav>
                  <ul className='flex gap-10 text-xl text-white font-extrabold mr-8 '>
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
            </div>
          
         
    </header>
  )
}

export default Header;