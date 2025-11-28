import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-800 p-5 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">CoinDoor</Link>
      <div className="flex gap-6">
        <Link href="/markets" className="hover:opacity-80">Markets</Link>
        <Link href="/news" className="hover:opacity-80">News</Link>
        <Link href="/join" className="hover:opacity-80">Join</Link>
      </div>
    </nav>
  );
}
