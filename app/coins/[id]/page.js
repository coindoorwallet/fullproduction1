"use client";
import { useRouter } from "next/router";
import CoinChart from "../../components/CoinChart";

export default function CoinDetail() {
  const router = useRouter();
  const { id } = router.query;
  // Map id to TradingView symbol (basic)
  const mapping = {
    bitcoin: "BINANCE:BTCUSDT",
    ethereum: "BINANCE:ETHUSDT",
    solana: "BINANCE:SOLUSDT",
    ripple: "BINANCE:XRPUSDT",
    cardano: "BINANCE:ADAUSDT",
    "avalanche-2": "BINANCE:AVAXUSDT",
    polkadot: "BINANCE:DOTUSDT",
    binancecoin: "BINANCE:BNBUSDT",
  };
  const symbol = mapping[id] || "BINANCE:BTCUSDT";

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">{id?.replace(/-/g," ").toUpperCase()}</h1>
      <div className="card">
        <div style={{height: 520}}>
          <CoinChart symbol={symbol} />
        </div>
      </div>
    </main>
  );
}
