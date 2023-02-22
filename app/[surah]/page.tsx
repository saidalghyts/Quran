type Props = {
  params: { surah: string };
};

async function getDetail(id: any) {
  const res = await fetch(`https://api.quran.gading.dev/surah/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function getData() {
  const res = await fetch('https://api.quran.gading.dev/surah');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Surah({ params }: Props) {
  const path = params.surah.toLowerCase();
  const data = await getData();

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
  const detailSurah = await getDetail(id);

  return <div>{detailSurah.data.name.transliteration.id}</div>;
}
