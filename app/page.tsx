'use client';
import { useState, useEffect } from 'react';

type Post = {
  data: {
    number: number;
    sequence: number;
    numberOfVerses: number;
    name: {
      short: string;
      long: string;
      transliteration: { en: string; id: string };
      translation: { en: string; id: string };
    };
    revelation: { arab: string; en: string; id: string };
    tafsir: { id: string };
    preBismillah: null;
    verses: {
      number: { inQuran: number; inSurah: number };
      meta: {
        jux: number;
        page: number;
        manzil: number;
        ruku: number;
        hizbQuarter: number;
        sajda: { recommended: boolean; obligatory: boolean };
      };
      text: {
        arab: string;
        transliteration: { en: string };
      };
      translation: { en: string; id: string };
      audio: {
        primary: string;
        secondary: [];
      };
      tafsir: { id: { short: string; long: string } };
    }[];
  };
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/surah');
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  return (
    <>
      {loading ? (
        <main className="mainBar">
          {items.map((item) => (
            <div key={item} className="items bg-red-500"></div>
          ))}
        </main>
      ) : (
        <main className="mainBar">
          {posts.map((surah: any) => {
            return (
              <div key={surah.number} className="items">
                <div></div>
              </div>
            );
          })}
        </main>
      )}
    </>
  );
}
