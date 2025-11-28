"use client";

import Link from "next/link";
import CoinCard from "../components/CoinCard";

const COINS = [
  { id: "bitcoin", symbol: "BTC", tv: "BINANCE:BTCUSDT", name: "Bitcoin", logo: "/logos/btc.png" },
  { id: "ethereum", symbol: "ETH", tv: "BINANCE:ETHUSDT", name: "Ethereum", logo: "/logos/eth.png" },
  { id: "solana", symbol: "SOL", tv: "BINANCE:SOLUSDT", name: "Solana", logo: "/logos/sol.png" },
  { id: "ripple", symbol: "XRP", tv: "BINANCE:XRPUSDT", name: "XRP", logo: "/logos/xrp.png" },
  { id: "cardano", symbol: "ADA", tv: "BINANCE:ADAUSDT", name: "Cardano", logo: "/logos/ada.png" },
  { id: "avalanche-2", symbol: "AVAX", tv: "BINANCE:AVAXUSDT", name: "Avalanche", logo: "/logos/avax.png" },
  { id: "polkadot", symbol: "DOT", tv: "BINANCE:DOTUSDT", name: "Polkadot", logo: "/logos/dot.png" },
  { id: "binancecoin", symbol: "BNB", tv: "BINANCE:BNBUSDT", name: "BNB", logo: "/logos/bnb.png" },
];

export default function MarketsPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Markets</h1>
      <p className="small-muted mb-6">Interactive charts — click a coin for its full chart and details.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {COINS.map(c => (
          <Link key={c.id} href={`/coins/${c.id}`}>
            <a>
              <CoinCard coin={c} />
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}
