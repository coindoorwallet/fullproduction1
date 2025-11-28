"use client";
import { useEffect, useState } from "react";

export default function Ticker() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/ticker");
      const data = await res.json();
      setPrices(data);
    }
    load();
    const interval = setInterval(load, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black border-b border-[#1d251c] overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap py-3">
        {prices.map((coin, index) => (
          <div key={index} className="mx-8 text-[#52a447] font-medium flex items-center">
            <span className="mr-2">{coin.symbol.toUpperCase()}</span>
            <span>${coin.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
