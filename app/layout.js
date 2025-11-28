import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CoinDoor",
  description: "Crypto markets, news & education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
