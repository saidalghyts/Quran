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

  const gh = (n: number) => {
    let ar = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    let nm = `${n}`;
    let result = '';
    for (let c of nm) {
      result += ar[parseInt(c)];
    }
    return result;
  };

  return (
    <div>
      <p className="text-center text-3xl font-bold font-['Uthmani'] mb-12">
        {detailSurah.data.preBismillah
          ? 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ'
          : ''}
      </p>

      {detailSurah.data.verses.map((a: any) => (
        <>
          <div className={'body-ayat mb-6 items w-full ayat'}>
            <span key={a.number.inSurah} className="arab mb-2">
              {a.text.arab}&nbsp;{gh(a.number.inSurah)}
            </span>

            <span key={a.number.inSurah} className="translation">
              {a.translation.id}
            </span>
          </div>
        </>
      ))}
    </div>
  );
}
