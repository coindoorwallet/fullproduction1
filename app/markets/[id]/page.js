"use client";

import { useEffect, useRef } from "react";

export default function CoinChart({ params }) {
  const { id } = params; // e.g. BTCUSDT
  const chartRef = useRef(null);

  useEffect(() => {
    // Remove any previous widget
    chartRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      // Check TradingView global exists
      if (window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `BINANCE:${id}`,
          interval: "60",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#000000",
          enable_publishing: false,
          hide_legend: false,
          container_id: "tv_chart_container",
        });
      }
    };

    chartRef.current.appendChild(script);
  }, [id]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{id} Live Chart</h1>
      <div
        id="tv_chart_container"
        ref={chartRef}
        className="w-full h-[600px] rounded border border-neutral-800"
      ></div>
    </main>
  );
}
