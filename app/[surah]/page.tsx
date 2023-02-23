import { Suspense } from 'react';
import getDetailSurah from '../lib/getDetailSurah';
import getSurah from '../lib/getSurah';

type Props = {
  params: { surah: string };
};

export default async function Surah({ params }: Props) {
  const path = params.surah.toLowerCase();
  const data = await getSurah();

  function getIdFromName(path: string, data: any[]) {
    const check = data
      .filter(
        (x) => encodeURI(x.name.transliteration.id).toLowerCase() === path
      )
      .map((z) => z.number);
    return check.toString();
  }
  const id = getIdFromName(path, data.data);
  if (!id) {
    return <p>Surah not found</p>;
  }
  const detailSurah = await getDetailSurah(id);

  return (
    <div>
      <p className="text-center text-3xl font-bold font-['Uthmani']">
        {detailSurah.data.preBismillah
          ? 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ'
          : ''}
      </p>

      {detailSurah.data.verses.map((a: any) => (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <div className={'body-ayat mb-6'}>
              <span key={a.number.inSurah} className="arab mb-2">
                {a.text.arab}
              </span>

              <span className="translation">{a.translation.id}</span>
            </div>
          </Suspense>
        </>
      ))}
    </div>
  );
}
