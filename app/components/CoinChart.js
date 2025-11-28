"use client";

import { useEffect, useRef } from "react";

let tradingviewScriptLoaded = false;
function loadTradingViewScript(onLoad) {
  if (tradingviewScriptLoaded) { onLoad(); return; }
  const s = document.createElement("script");
  s.src = "https://s3.tradingview.com/tv.js";
  s.async = true;
  s.onload = () => { tradingviewScriptLoaded = true; onLoad(); };
  s.onerror = () => { tradingviewScriptLoaded = false; onLoad(); };
  document.head.appendChild(s);
}

export default function CoinChart({ symbol }) {
  const ref = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    function createWidget() {
      try {
        if (!window.TradingView) return;
        if (widgetRef.current && widgetRef.current.remove) {
          try { widgetRef.current.remove(); } catch(e) {}
          widgetRef.current = null;
          ref.current.innerHTML = "";
        }
        const widget = new window.TradingView.widget({
          autosize: true,
          symbol,
          interval: "15",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#0b0b0b",
          enable_publishing: false,
          container_id: ref.current.id,
        });
        widgetRef.current = widget;
      } catch (err) {
        console.error("TradingView error", err);
      }
    }

    if (!ref.current.id) ref.current.id = "tv-" + Math.random().toString(36).slice(2,9);
    if (tradingviewScriptLoaded && window.TradingView) createWidget();
    else loadTradingViewScript(() => createWidget());

    return () => {
      if (widgetRef.current && widgetRef.current.remove) {
        try { widgetRef.current.remove(); } catch(e) {}
      }
    };
  }, [symbol]);

  return <div ref={ref} style={{minHeight: 160}} />;
}
