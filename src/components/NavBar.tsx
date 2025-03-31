'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Types
type NavLink = {
  id: string;
  href: string;
  label: string;
};

// Constants
const NAV_LINKS: NavLink[] = [
  {
    id: 'about',
    href: '#',
    label: 'About us',
  },
  {
    id: 'contact',
    href: '#',
    label: 'Contact',
  },
] as const;

// Sub-components
const Logo: React.FC = () => (
  <div className='relative w-[80px] sm:w-[90px] md:w-[100px] aspect-square animate-fade-in'>
    <Link href='/'>
      <Image
        src='/fametonic-logo.svg'
        alt='Fametonic - Social Media Career Platform'
        fill
        priority
        className='object-contain'
      />
    </Link>
  </div>
);

const DesktopNav: React.FC = () => (
  <nav className='hidden md:flex gap-6 lg:gap-8'>
    {NAV_LINKS.map(({ id, href, label }, index) => (
      <Link
        key={id}
        href={href}
        className={`text-[#A9A9A9] text-base sm:text-[17px] lg:text-[18px] font-semibold 
          hover:text-[#00E7F9] transition-colors duration-300 animate-fade-in animation-delay-${
            index * 100
          }`}
      >
        {label}
      </Link>
    ))}
  </nav>
);

const MobileNav: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => (
  <div className='md:hidden'>
    <button
      onClick={onToggle}
      className='text-white hover:text-[#00E7F9] transition-colors duration-300 p-2 animate-fade-in'
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

    {/* Mobile Menu Overlay */}
    {isOpen && (
      <div
        className='fixed inset-0 bg-[#010101] z-50 flex flex-col items-center justify-center animate-fade-in'
        role='dialog'
        aria-modal='true'
      >
        <button
          onClick={onToggle}
          className='absolute top-6 right-4 sm:top-7 sm:right-6 text-white hover:text-[#00E7F9] transition-colors duration-300 animate-fade-in'
          aria-label='Close menu'
        >
          <X size={24} />
        </button>

        <nav
          className='flex flex-col items-center gap-6 sm:gap-8'
          aria-label='Mobile navigation'
        >
          {NAV_LINKS.map(({ id, href, label }, index) => (
            <Link
              key={id}
              href={href}
              className={`text-[#A9A9A9] text-xl sm:text-2xl font-semibold 
                hover:text-[#00E7F9] transition-colors duration-300 animate-slide-up animation-delay-${
                  index * 100
                }`}
              onClick={onToggle}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    )}
  </div>
);

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <header className='bg-[#010101] px-4 sm:px-6 md:px-8 lg:px-20 py-4 sm:py-5 sticky top-0 z-50'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <DesktopNav />
        <MobileNav isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>
    </header>
  );
};

export default NavBar;
