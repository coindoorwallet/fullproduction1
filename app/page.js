import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import TopCoins from "@/components/TopCoins";
import TopNews from "@/components/TopNews";
import EducatorProgram from "@/components/EducatorProgram";
import CommunitySection from "@/components/CommunitySection";
import ResearchSection from "@/components/ResearchSection";
import Spotlight from "@/components/Spotlight";
import JoinTeam from "@/components/JoinTeam";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white flex flex-col items-center">
      {/* NAVIGATION */}
      <Navbar />

      {/* TICKER */}
      <Ticker />

      {/* HERO */}
      <Hero />

      {/* TOP COINS */}
      <TopCoins />

      {/* TOP NEWS */}
      <TopNews />

      {/* EDUCATOR PROGRAM */}
      <EducatorProgram />

      {/* COMMUNITY */}
      <CommunitySection />

      {/* RESEARCH */}
      <ResearchSection />

      {/* HUMPHREY'S SPOTLIGHT */}
      <Spotlight />

      {/* JOIN OUR TEAM */}
      <JoinTeam />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
