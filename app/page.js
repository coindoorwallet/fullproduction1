export default function Home() {
  return (
    <section className="text-center mt-20 px-6">
      <h1 className="text-5xl font-bold">CoinDoor</h1>
      <p className="mt-4 text-lg opacity-70 max-w-xl mx-auto">
        Your gateway to live crypto charts, curated Web3 news, and our upcoming educator program.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="/markets" className="px-6 py-3 rounded-xl border border-white/20">View Markets</a>
        <a href="/news" className="px-6 py-3 rounded-xl bg-white text-black">Latest News</a>
      </div>
    </section>
  );
}
