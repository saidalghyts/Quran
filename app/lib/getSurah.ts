async function getSurah() {
  const res = await fetch('https://api.quran.gading.dev/surah');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default getSurah;
