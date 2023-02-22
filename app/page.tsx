import Link from 'next/link';
import { Suspense } from 'react';
import SkeletonLoading from './ui/SkeletonLoading';

interface Data {
  data: any;
  number: number;
  name: {
    short: string;
    long: string;
    transliteration: { id: string };
    translation: { id: string };
  };
}

async function getData() {
  const res = await fetch('https://api.quran.gading.dev/surah');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();

  return (
    <>
      <Suspense fallback={<SkeletonLoading />}>
        <main className="mainBar">
          {data?.data.map((surah: Data) => (
            <div key={surah.number} className="items flex">
              <div className="h-full w-[15%]">{surah.number}</div>
              <div className="h-full w-[60%] flex flex-col">
                <Link href={'/surah/' + surah.number}>
                  <span>{surah.name.transliteration.id}</span>
                </Link>

                <span>{surah.name.translation.id}</span>
              </div>
              <div className="h-full w-[25%]">{surah.name.long}</div>
            </div>
          ))}
        </main>
      </Suspense>
    </>
  );
}
