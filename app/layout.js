import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "CoinDoor",
  description: "Crypto Markets, News & Research",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="page-content">{children}</div>
      </body>
    </html>
  );
}
