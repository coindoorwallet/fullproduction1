import Link from "next/link";

const coins = [
  { id: "BTCUSDT", name: "Bitcoin (BTC)" },
  { id: "ETHUSDT", name: "Ethereum (ETH)" },
  { id: "XRPUSDT", name: "XRP" },
  { id: "SOLUSDT", name: "Solana (SOL)" },
  { id: "ADAUSDT", name: "Cardano (ADA)" },
  { id: "AVAXUSDT", name: "Avalanche (AVAX)" },
  { id: "DOTUSDT", name: "Polkadot (DOT)" },
  { id: "BNBUSDT", name: "BNB" },
];

export default function MarketsPage() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Markets</h1>

      <ul className="space-y-4">
        {coins.map((coin) => (
          <li key={coin.id}>
            <Link
              href={`/markets/${coin.id}`}
              className="block p-4 border border-neutral-800 rounded hover:bg-neutral-900 transition"
            >
              {coin.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
