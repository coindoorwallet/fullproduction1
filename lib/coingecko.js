export async function getPrices() {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,xrp,cardano,avalanche,polkadot,binancecoin";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}
