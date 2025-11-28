export const dynamic = "force-dynamic";

async function getNews() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
  const url = base ? `${base}/api/news` : "https://api.allorigins.win/raw?url=https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return data.results || data.items || [];
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
          <li key={item.id || item.guid} className="border border-neutral-800 p-4 rounded-lg hover:bg-neutral-900 transition">
            <a href={item.url || item.link || "#"} target="_blank" className="font-semibold text-lg text-blue-400 hover:underline">
              {item.title || item.story_title || item.title_plain}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
