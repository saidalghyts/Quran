import Link from 'next/link';
import getSurah from './lib/getSurah';

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

export default async function Home() {
  const data = await getSurah();

  return (
    <>
      <main className="mainBar">
        {data?.data.map((surah: Data) => (
          <div key={surah.number} className="items flex h-28">
            <div className="h-full w-[15%]">{surah.number}</div>
            <div className="h-full w-[60%] flex flex-col">
              <Link href={'/' + surah.name.transliteration.id.toLowerCase()}>
                <span>{surah.name.transliteration.id}</span>
              </Link>

              <span>{surah.name.translation.id}</span>
            </div>
            <div className="h-full w-[25%]">{surah.name.long}</div>
          </div>
        ))}
      </main>
    </>
  );
}
