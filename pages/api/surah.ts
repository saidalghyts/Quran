import { NextApiRequest, NextApiResponse } from 'next';
import postsData from './daftar-surah.json';

type Post = {
  license: string;
  source: string;
  audioEdition: string;
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

type PostsData = {
  data: Post[];
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const data: PostsData = postsData as PostsData;
    res.status(200).json(data.data);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
