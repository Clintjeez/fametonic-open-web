import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

// Types
type BenefitItem = {
  id: string;
  text: string;
};

// Constants
const BENEFITS: BenefitItem[] = [
  {
    id: 'growth',
    text: 'Start growing your influence right away—no waiting required!',
  },
  {
    id: 'content',
    text: 'Create viral TikToks and Reels step by step with easy-to-follow lessons',
  },
  {
    id: 'ai',
    text: 'Use a Personal AI Worker to boost your content',
  },
  {
    id: 'learning',
    text: 'Learn from expert-led courses designed for aspiring influencers',
  },
] as const;

const HeroSection: React.FC = () => {
  return (
    <section className='bg-[#010101] px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12'>
          {/* Content Section */}
          <div className='w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8'>
            <div className='space-y-2 sm:space-y-3 animate-fade-in'>
              <h1 className='text-white text-2xl sm:text-[28px] md:text-3xl lg:text-[35px] font-bold leading-tight'>
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h2 className='text-[#00E7F9] text-2xl sm:text-[28px] md:text-3xl lg:text-[35px] font-bold leading-tight hero-text-shadow'>
                Discover your way to success with Fametonic:
              </h2>
            </div>

            <ul className='space-y-3 sm:space-y-4 text-white text-base sm:text-[17px] md:text-lg'>
              {BENEFITS.map(({ id, text }, index) => (
                <li
                  key={id}
                  className={`flex items-center gap-3 animate-slide-up animation-delay-${
                    index * 100
                  }`}
                >
                  <span className='flex-shrink-0' aria-hidden='true'>
                    ✨
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className='flex flex-col-reverse md:flex-col gap-6 sm:gap-8 animate-fade-in animation-delay-400'>
              <div className='space-y-3'>
                <button
                  type='button'
                  className='group bg-[#FC004E] hover:bg-[#e0004b] transition-all duration-300 
                    drop-shadow-[2px_2px_10px_rgba(0,231,249,0.4)] w-full sm:w-[80%] md:w-[60%] py-3 px-6 
                    text-base sm:text-lg md:text-[20px] font-bold text-white rounded-[10px] 
                    flex justify-center items-center gap-2 animate-scale-in'
                >
                  <span>GET STARTED</span>
                  <ChevronRight className='group-hover:translate-x-1 transition-transform duration-300' />
                </button>
                <p className='text-white text-sm sm:text-base ml-2'>
                  1-minute quiz for personalized Insights
                </p>
              </div>

              <div className='text-[#ABABAB] space-y-2'>
                <p className='text-[11px] sm:text-[12px]'>
                  By clicking "Get Started", you agree with{' '}
                  <a
                    href='/terms'
                    className='underline hover:text-[#00E7F9] transition-colors'
                  >
                    Terms and Conditions
                  </a>
                  ,{' '}
                  <a
                    href='/privacy'
                    className='underline hover:text-[#00E7F9] transition-colors'
                  >
                    Privacy Policy
                  </a>
                  ,{' '}
                  <a
                    href='/subscription'
                    className='underline hover:text-[#00E7F9] transition-colors'
                  >
                    Subscription Terms
                  </a>
                </p>
                <p className='text-[10px]'>
                  Fametonic {new Date().getFullYear()} ©All Rights Reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
            <div className='relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] aspect-square animate-float'>
              <Image
                src='/img/influe_mobile_mockup.png'
                alt='Mobile app mockup showing Fametonic interface'
                fill
                priority
                quality={100}
                className='object-contain animate-fade-in'
                sizes='(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 500px'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
