'use client';
import Image from 'next/image';
import Banner from './components/banner';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('hi banner button');
  };
  return (
    <main className="grid h-screen p-24 place-items-center">
      <div>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </div>
    </main>
  );
}
