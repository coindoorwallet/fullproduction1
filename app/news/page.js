async function getNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/news`,
      { cache: "no-store" }
    );

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

      <div className="space-y-6">
        {articles.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            className="block p-5 rounded-lg border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 transition"
          >
            <p className="text-sm text-neutral-400 mb-2">
              {item.source?.title || "Unknown source"} •{" "}
              {new Date(item.published_at).toLocaleString()}
            </p>

            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

            {item.domain && (
              <span className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-neutral-300">
                {item.domain}
              </span>
            )}
          </a>
        ))}
      </div>
    </main>
  );
}
