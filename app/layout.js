import "./globals.css";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";

export const metadata = {
  title: "CoinDoor",
  description: "Your gateway to the digital economy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0c0f0d] text-white">
        <Navbar />
        <Ticker />
        <main>{children}</main>
      </body>
    </html>
  );
}
