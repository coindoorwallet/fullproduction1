export default function CoinChart({ params }) {
  const { id } = params;

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">{id} Chart</h1>

      <iframe
        src={`https://s.tradingview.com/embed-widget/ticker-tape/#${id}`}
        className="w-full h-[600px] border border-neutral-700 rounded"
        allowTransparency="true"
      ></iframe>
    </main>
  );
}
