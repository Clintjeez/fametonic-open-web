import { Figtree, Urbanist } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'Fametonic - Turn Social Media Into a Career',
  description:
    'Start your journey to becoming a successful social media influencer with Fametonic.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${figtree.variable} ${urbanist.variable}`}>
      <body className='bg-[#010101] min-h-screen antialiased'>{children}</body>
    </html>
  );
}
