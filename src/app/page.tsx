import AnnouncementBar from '@/components/AnnouncementBar';
import NavBar from '@/components/NavBar';
import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <AnnouncementBar />
      <NavBar />
    </section>
  );
}
