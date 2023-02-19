'use client';
import useSWR from 'swr';

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

const url = '/daftar-surah.json';
const fetcher = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const SkeletonItem = () => {
  return (
    <div className="items flex gap-[10px]">
      <div className="h-full w-[15%] bg-slate-200 animate-pulse rounded-mdr"></div>
      <div className="h-full w-[60%] bg-slate-200 animate-pulse rounded-md"></div>
      <div className="h-full w-[25%] bg-slate-200 animate-pulse rounded-md"></div>
    </div>
  );
};
const Skeleton = () => {
  const items = Array.from({ length: 114 }, (_, i) => <SkeletonItem key={i} />);
  return <main className="mainBar">{items}</main>;
};

export default function Home() {
  const { data, error } = useSWR<Data>(url, fetcher);

  if (error) return <div>Error loading data.</div>;
  if (!data) return <Skeleton />;
  return (
    <>
      <main className="mainBar">
        {data.data.map((surah: any) => (
          <div key={surah.number} className="items flex">
            <div className="h-full w-[15%]">{surah.number}</div>
            <div className="h-full w-[60%] flex flex-col">
              <span>{surah.name.transliteration.id}</span>
              <span>{surah.name.translation.id}</span>
            </div>
            <div className="h-full w-[25%]">{surah.name.long}</div>
          </div>
        ))}
      </main>
    </>
  );
}
