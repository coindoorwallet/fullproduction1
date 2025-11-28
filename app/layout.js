import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CoinDoor",
  description: "Your gateway to crypto education and analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
