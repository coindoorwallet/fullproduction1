"use client";

import { useEffect, useState } from "react";

export default function Ticker() {
  const [prices, setPrices] = useState([]);

  async function fetchPrices() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,cardano,avalanche,polkadot,binancecoin&vs_currencies=usd&include_24hr_change=true"
      );
      const data = await res.json();

      const formatted = Object.keys(data).map((coin) => ({
        name: coin.toUpperCase(),
        price: data[coin].usd,
        change: data[coin].usd_24h_change,
      }));

      setPrices(formatted);
    } catch (e) {
      console.error("Ticker fetch failed", e);
    }
  }

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black overflow-hidden border-t border-b border-[#52a447]">
      <div className="ticker flex whitespace-nowrap animate-ticker py-2">
        {prices.map((c, i) => (
          <div key={i} className="mx-10 flex items-center gap-3">
            <span className="text-white font-semibold">{c.name}</span>
            <span className="text-white">${c.price.toLocaleString()}</span>
            <span
              className={
                c.change >= 0 ? "text-green-400" : "text-red-400"
              }
            >
              {c.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
