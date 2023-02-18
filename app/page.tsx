'use client';
import useSWR from 'swr';

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
  const { data, error } = useSWR<Data>(url, fetcher);

  if (error) return <div>Error loading data.</div>;
  if (!data) {
    const items = [];
    for (let i = 0; i < 2; i++) {
      items.push(<div key={i} className="items"></div>);
    }
    return <>{items}</>;
  }
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
