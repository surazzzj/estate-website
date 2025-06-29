import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]);

  return (
    <>
      {/* Top Navbar */}
      <div className='flex px-8 w-full z-10 items-center justify-between lg:px-28 py-6'>
        <img className='h-8' src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex gap-6 text-white text-lg'>
          <a href='#Header' className='cursor-pointer hover:text-gray-300'>Home</a>
          <a href='#About' className='cursor-pointer hover:text-gray-300'>About</a>
          <a href='#Projects' className='cursor-pointer hover:text-gray-300'>Projects</a>
          <a href='#Testimonials' className='cursor-pointer hover:text-gray-300'>Testimonials</a>
        </ul>
        <button className='hidden md:inline-block bg-white text-black px-8 py-2 rounded-full cursor-pointer'>
          Sign up
        </button>
        <img
          onClick={() => setShowMenu(true)}
          className='md:hidden inline-block h-4.5 cursor-pointer'
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-full bg-white z-50 
          transform transition-transform duration-500 ease-in-out
          ${showMenu ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <ul className='h-full w-full overflow-y-auto scroll-smooth flex flex-col items-center pt-24 gap-4 text-lg font-medium px-4'>
          <img
            onClick={() => setShowMenu(false)}
            className='absolute top-8 right-8 h-4.5 cursor-pointer'
            src={assets.cross_icon}
            alt="Close"
          />
          <a href='#Header'>Home</a>
          <a href='#About'>About</a>
          <a href='#Projects'>Projects</a>
          <a href='#Testimonials'>Testimonials</a>
        </ul>
      </div>
    </>
  )
}

export default Navbar
