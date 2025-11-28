export default function Home() {
  return (
    <section className="mt-16 text-center">
      <div className="max-w-2xl mx-auto">
        <img src="/logo.png" alt="CoinDoor" width="96" style={{margin:'0 auto', borderRadius:10}}/>
        <h1 className="text-5xl font-bold mt-6">CoinDoor</h1>
        <p className="mt-4 text-lg small-muted">
          Real-time crypto charts, curated Web3 news, and a trusted educator program for schools.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a href="/markets" className="px-6 py-3 rounded-xl border border-white/10">View Markets</a>
          <a href="/news" className="px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--accent-foreground)]">Latest News</a>
          <a href="/educator-program" className="px-6 py-3 rounded-xl border border-white/10">Educator Program</a>
        </div>
      </div>
    </section>
  );
}
