"use client";

import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import TopCoins from "./components/TopCoins";
import TopNews from "./components/TopNews";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#000", color: "#fff" }}>
      
      {/* NAVBAR */}
      <section>
        <Navbar />
      </section>

      {/* LIVE TICKER */}
      <section style={{ marginTop: "20px" }}>
        <Ticker />
      </section>

      {/* HERO SECTION */}
      <section style={{ marginTop: "40px" }}>
        <Hero />
      </section>

      {/* TOP COINS */}
      <section style={{ marginTop: "50px" }}>
        <TopCoins />
      </section>

      {/* TOP NEWS */}
      <section style={{ marginTop: "50px", marginBottom: "50px" }}>
        <TopNews />
      </section>

    </main>
  );
}
