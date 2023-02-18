'use client';
import useSWR from 'swr';
import Loading from './ui/Loading';

interface Data {
  data: any;
  number: number;
}

const url = '/daftar-surah.json';
const fetcher = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function Home() {
  const { data, error, isLoading } = useSWR<Data>(url, fetcher);

  if (error) return <div>Error loading data.</div>;
  if (!data) return <Loading />;
  return (
    <>
      <main className="mainBar">
        {data.data.map((surah: any) => (
          <div key={surah.number} className="items"></div>
        ))}
      </main>
    </>
  );
}
