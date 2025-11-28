async function getNews() {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/news`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) return [];

    const data = await res.json();
    return data.items || [];
  } catch (_) {
    return [];
  }
}

export default async function NewsPage() {
  const articles = await getNews();

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Crypto News</h1>

      {articles.length === 0 && (
        <p className="text-neutral-400">No news available right now.</p>
      )}

      <ul className="space-y-5">
        {articles.map((item) => (
          <li
            key={item.id}
            className="border border-neutral-800 p-4 rounded-lg hover:bg-neutral-900 transition"
          >
            <a target="_blank" href={item.url} className="font-semibold text-blue-400">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
