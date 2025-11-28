"use client";
import { useEffect, useRef } from "react";

let tradingviewScriptLoaded = false;

function loadTradingViewScript(onLoad) {
  if (tradingviewScriptLoaded) {
    onLoad();
    return;
  }
  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/tv.js";
  script.async = true;
  script.onload = () => {
    tradingviewScriptLoaded = true;
    onLoad();
  };
  script.onerror = () => {
    tradingviewScriptLoaded = false;
    onLoad();
  };
  document.head.appendChild(script);
}

export default function CoinChart({ symbol }) {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    function createWidget() {
      try {
        if (!window.TradingView) return;
        if (widgetRef.current && widgetRef.current.remove) {
          try { widgetRef.current.remove(); } catch (e) {}
          widgetRef.current = null;
          containerRef.current.innerHTML = "";
        }
        const widget = new window.TradingView.widget({
          autosize: true,
          symbol: symbol,
          interval: "15",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#121212",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
        });
        widgetRef.current = widget;
      } catch (err) {
        console.error("TradingView widget error", err);
      }
    }

    if (!containerRef.current.id) {
      containerRef.current.id = "tv-" + Math.random().toString(36).slice(2,9);
    }

    if (tradingviewScriptLoaded && window.TradingView) {
      createWidget();
    } else {
      loadTradingViewScript(() => createWidget());
    }

    return () => {
      if (widgetRef.current && widgetRef.current.remove) {
        try { widgetRef.current.remove(); } catch (e) {}
      }
    };
  }, [symbol]);

  return <div ref={containerRef} style={{ minHeight: 220 }} />;
}
