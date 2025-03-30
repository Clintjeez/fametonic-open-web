import type { Metadata } from 'next';
import { Urbanist, Figtree } from 'next/font/google';

import './globals.css';

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
});

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fametonic',
  description: 'Discover your way to success with Fametonic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${urbanist.variable} ${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
