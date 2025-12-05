"use client";

import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import TopCoins from "@/components/TopCoins";
import TopNews from "@/components/TopNews";
import EducatorProgram from "@/components/EducatorProgram";
import CommunityShowcase from "@/components/CommunityShowcase";
import Spotlight from "@/components/Spotlight";
import JoinOurTeam from "@/components/JoinOurTeam";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Ticker />

      {/* HERO */}
      <section className="relative">
        <Hero />
      </section>

      {/* TOP COINS */}
      <section className="relative py-20 px-5">
        <TopCoins />
      </section>

      {/* TOP NEWS */}
      <section className="relative py-20 px-5">
        <TopNews />
      </section>

      {/* EDUCATOR PROGRAM */}
      <section className="relative py-20 px-5">
        <EducatorProgram />
      </section>

      {/* COMMUNITY */}
      <section className="relative py-20 px-5">
        <CommunityShowcase />
      </section>

      {/* SPOTLIGHT */}
      <section className="relative py-20 px-5">
        <Spotlight />
      </section>

      {/* JOIN OUR TEAM CTA */}
      <section className="relative py-20 px-5">
        <JoinOurTeam />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
