import CoinChart from "./CoinChart";

export default function CoinCard({ coin }) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={coin.logo} alt={coin.name} width="36" height="36" style={{borderRadius:8}} />
          <div>
            <div className="font-semibold">{coin.name}</div>
            <div className="small-muted text-sm">{coin.symbol}</div>
          </div>
        </div>
        <div className="pill">Live</div>
      </div>

      <div style={{height: 180}}>
        <CoinChart symbol={coin.tv} />
      </div>
    </div>
  );
}
