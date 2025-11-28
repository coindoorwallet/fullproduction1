import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-800 py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="CoinDoor" width="44" height="44" style={{borderRadius:8}}/>
          <span className="text-xl font-bold">CoinDoor</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="header-link">Home</Link>
          <Link href="/markets" className="header-link">Markets</Link>
          <Link href="/news" className="header-link">News</Link>
          <Link href="/about" className="header-link">About</Link>
          <Link href="/educator-program" className="pill">Educator Program</Link>
        </div>
      </div>
    </nav>
  );
}
