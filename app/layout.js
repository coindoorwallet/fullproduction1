import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "CoinDoor — Real-time crypto charts & trusted Web3 news",
  description: "CoinDoor — live charts, curated Web3 news and educator program signups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="container min-h-screen py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
