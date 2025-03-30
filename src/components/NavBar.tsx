'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative bg-[#010101] px-8 md:px-20 py-5 flex justify-between items-center'>
      <div>
        <Image
          src='/fametonic-logo.svg'
          alt='fame tonic logo'
          width={100}
          height={100}
        />
      </div>

      {/* desktop nav */}
      <div className='hidden md:flex items-center gap-8 text-[#A9A9A9] text-[18px] font-semibold'>
        <Link
          href='#'
          className='hover:text-[#00E7F9] transition-colors duration-300'
        >
          About us
        </Link>
        <Link
          href='#'
          className='hover:text-[#00E7F9] transition-colors duration-300'
        >
          Contact
        </Link>
      </div>

      {/* mobile nav button */}
      <div className='md:hidden'>
        <button
          onClick={toggleMenu}
          className='text-white hover:text-[#00E7F9] transition-colors duration-300'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile nav menu */}
      <div
        className={`
          fixed inset-0 bg-[#010101] z-50 md:hidden
          flex flex-col items-center justify-center gap-8
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button
          onClick={toggleMenu}
          className='absolute top-7 right-8 text-white hover:text-[#00E7F9] transition-colors duration-300'
        >
          <X size={24} />
        </button>
        <Link
          href='#'
          className='text-[#A9A9A9] text-[24px] font-semibold hover:text-[#00E7F9] transition-colors duration-300'
          onClick={toggleMenu}
        >
          About us
        </Link>
        <Link
          href='#'
          className='text-[#A9A9A9] text-[24px] font-semibold hover:text-[#00E7F9] transition-colors duration-300'
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
