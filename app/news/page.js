async function getNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data.results || data.items || [];
}

// Map cryptopanic source IDs to readable names
const SOURCE_MAP = {
  cointelegraph: "CoinTelegraph",
  decrypt: "Decrypt",
  coindesk: "CoinDesk",
  theblock: "The Block",
  watcher_guru: "Watcher Guru",
  bitcoinist: "Bitcoinist",
  fxstreet: "FXStreet",
  newsbtc: "NewsBTC",
  beincrypto: "BeInCrypto",
};

export default async function NewsPage() {
  const articles = await getNews();

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Crypto News</h1>

      {articles.length === 0 && (
        <p className="text-neutral-400">No news available right now.</p>
      )}

      <ul className="space-y-5">
        {articles.map((item) => {
          const sourceName =
            SOURCE_MAP[item.source_id] || "Crypto News";

          return (
            <li
              key={item.id}
              className="border border-neutral-800 p-4 rounded-lg hover:bg-neutral-900 transition flex gap-4"
            >
              {/* Fallback Image */}
              <img
                src="/news-placeholder.jpg"
                alt="news"
                className="w-28 h-20 object-cover rounded"
              />

              <div>
                <a
                  href={item.url}
                  target="_blank"
                  className="font-semibold text-lg text-blue-400 hover:underline"
                >
                  {item.title}
                </a>

                <p className="text-neutral-500 text-sm mt-1">
                  Source: {sourceName}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
