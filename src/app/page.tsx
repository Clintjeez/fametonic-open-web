import AnnouncementBar from '@/components/AnnouncementBar';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <AnnouncementBar
        title='FRESH BEGINNINGS SALE: '
        message='Extra 25% OFF, Limited Spots - '
        link={{
          href: '#',
          label: 'start your journey today!',
        }}
      />
      <NavBar />
      <HeroSection />
    </>
  );
}
