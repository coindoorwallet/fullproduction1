import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CoinDoor",
  description: "Next-gen crypto insights for Africa and the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
