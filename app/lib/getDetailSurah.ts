async function getDetailSurah(id: any) {
  const res = await fetch(`https://api.quran.gading.dev/surah/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default getDetailSurah;
