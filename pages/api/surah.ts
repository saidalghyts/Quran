import { NextApiRequest, NextApiResponse } from 'next';
import postsData from './daftar-surah.json';

type Post = {
  id: number;
  title: string;
  body: string;
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
