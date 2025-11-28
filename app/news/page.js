export const dynamic = "force-dynamic";

async function getNews() {
  // Use runtime domain when available, otherwise fallback to direct API route call via allorigins proxy for build safety
  const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : (process.env.NEXT_PUBLIC_BASE_URL || "");
  const url = base ? `${base}/api/news` : `https://api.allorigins.win/raw?url=https://jsonplaceholder.typicode.com/posts`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    // CryptoPanic returns .results
    return data.results || data.items || [];
  } catch (err) {
    return [];
  }
}

export default async function NewsPage() {
  const articles = await getNews();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Latest Crypto News</h1>

      {articles.length === 0 ? (
        <p className="small-muted">No news available right now.</p>
      ) : (
        <ul className="space-y-4">
          {articles.map((a) => (
            <li key={a.id || a.guid} className="card">
              <a href={a.url || a.link || "#"} target="_blank" rel="noreferrer" className="font-semibold text-lg text-blue-400">
                {a.title || a.story_title || a.title_plain}
              </a>
              <div className="small-muted mt-1">{a.published_at || a.created_at || ""}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
