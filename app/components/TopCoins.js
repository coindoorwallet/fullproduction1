"use client";

import { useEffect, useState } from "react";

export default function TopCoins() {
  const [coins, setCoins] = useState([]);

  const topCoins = [
    "bitcoin",
    "ethereum",
    "ripple",
    "solana",
    "binancecoin",
    "avalanche-2"
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${topCoins.join(
            ","
          )}`
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Coin fetch error:", error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ padding: "80px 0", color: "white" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>Top Coins</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >
        {coins.map((coin) => (
          <div
            key={coin.id}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.08)"
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              {coin.name}
            </h3>

            <p style={{ fontSize: "16px" }}>
              Price: ${coin.current_price.toLocaleString()}
            </p>

            <p
              style={{
                fontSize: "14px",
                color: coin.price_change_percentage_24h >= 0 ? "#00ff99" : "#ff4444"
              }}
            >
              24h: {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
