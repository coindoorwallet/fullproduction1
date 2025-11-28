import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CoinDoor",
  description: "Your doorway to crypto education, markets, and insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
