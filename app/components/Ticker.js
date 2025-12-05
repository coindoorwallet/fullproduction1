"use client";

import { useEffect, useState } from "react";

export default function Ticker() {
  const [prices, setPrices] = useState({});

  const symbols = ["BTC", "ETH", "XRP", "SOL", "BNB", "AVAX"];

  // Fetch prices from CoinGecko
  useEffect(() => {
    async function loadPrices() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,solana,binancecoin,avalanche-2&vs_currencies=usd"
        );
        const data = await res.json();

        setPrices({
          BTC: data.bitcoin.usd,
          ETH: data.ethereum.usd,
          XRP: data.ripple.usd,
          SOL: data.solana.usd,
          BNB: data.binancecoin.usd,
          AVAX: data["avalanche-2"].usd,
        });
      } catch (e) {}
    }

    loadPrices();
    const interval = setInterval(loadPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black border-t border-b border-white/10 overflow-hidden whitespace-nowrap">
      <div className="flex gap-12 animate-marquee py-3 px-6 text-sm">
        {symbols.map((sym) => (
          <div
            key={sym}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span className="font-semibold">{sym}:</span>
            <span className="text-green-400">
              {prices[sym] ? `$${prices[sym]}` : "..."}
            </span>
          </div>
        ))}
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
