"use client";
import CoinChart from "../components/CoinChart";

const COINS = [
  { id: "BTC", tv: "BINANCE:BTCUSDT", name: "Bitcoin" },
  { id: "ETH", tv: "BINANCE:ETHUSDT", name: "Ethereum" },
  { id: "SOL", tv: "BINANCE:SOLUSDT", name: "Solana" },
  { id: "XRP", tv: "BINANCE:XRPUSDT", name: "XRP" },
  { id: "ADA", tv: "BINANCE:ADAUSDT", name: "Cardano" },
  { id: "AVAX", tv: "BINANCE:AVAXUSDT", name: "Avalanche" },
  { id: "DOT", tv: "BINANCE:DOTUSDT", name: "Polkadot" },
  { id: "BNB", tv: "BINANCE:BNBUSDT", name: "BNB" },
];

export default function MarketsPage() {
  return (
    <main className="p-6 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">Live Market Charts</h1>
      <p className="mb-6 text-neutral-400">Real-time TradingView charts for 8 layer-1 coins.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {COINS.map((coin) => (
          <div key={coin.id} className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-semibold">{coin.name}</div>
                <div className="text-sm text-neutral-400">{coin.id}</div>
              </div>
            </div>
            <div style={{ height: 240 }}>
              <CoinChart symbol={coin.tv} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
