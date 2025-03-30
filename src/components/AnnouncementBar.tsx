import React from 'react';

const AnnouncementBar = () => {
  return (
    <div className='bar-bg-gradient py-2 px-4'>
      <h1 className='text-[14px] md:text-[20px] font-bold md:font-extrabold text-center'>
        🚀{' '}
        <span className='text-[#00E7F9] text-[16px] md:text-[22px]'>
          FRESH BEGINNINGS SALE:
        </span>{' '}
        Extra 25% OFF, Limited Spots - start your journey today!
      </h1>
    </div>
  );
};

export default AnnouncementBar;
