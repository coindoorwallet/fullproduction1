import "./globals.css";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";

export const metadata = {
  title: "CoinDoor",
  description: "Your crypto homepage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Ticker />
        <main>{children}</main>
      </body>
    </html>
  );
}
