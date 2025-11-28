export async function GET() {
  const ids = "bitcoin,ethereum,solana,ripple,cardano,avalanche,polkadot,binancecoin";

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`;

  const res = await fetch(url, { next: { revalidate: 15 } });
  const data = await res.json();

  const formatted = Object.keys(data).map((coin) => ({
    symbol: coin.slice(0, 4),
    price: data[coin].usd.toLocaleString(),
  }));

  return Response.json(formatted);
}
