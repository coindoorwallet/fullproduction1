# CoinDoor — Production-ready Next.js app (App Router)

This repo is a production-ready foundation for CoinDoor:
- Live TradingView charts on /markets (client-side)
- Trending news via CryptoPanic on /news (server-side)
- Lead capture form on /join -> /api/notify
- TailwindCSS configured

ENV required on Vercel:
- CRYPTOPANIC_TOKEN (optional for real news)
- NEXT_PUBLIC_BASE_URL (set to your deployed domain for absolute fetches)

Deploy to Vercel: connect the repo and deploy. Do a clean deploy (no cache) after adding env vars.
