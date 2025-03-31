import React from 'react';

type AnnouncementProps = {
  title?: string;
  message?: string;
  link?: {
    href: string;
    label: string;
  };
};

const AnnouncementBar: React.FC<AnnouncementProps> = ({
  title,
  message,
  link,
}) => {
  return (
    <div className='bar-bg-gradient py-2 px-4 text-center' role='banner'>
      <p className='text-white text-sm md:text-base font-medium'>
        <span className='text-[#00E7F9]'>{title}</span>
        <span>{message}</span>
        {link && (
          <a
            href={link.href}
            className='ml-2 underline hover:text-[#010101] transition-colors duration-300'
            aria-label={`${link.label} - ${message}`}
          >
            {link.label}
          </a>
        )}
      </p>
    </div>
  );
};

export default AnnouncementBar;
