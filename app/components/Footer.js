export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-12 py-6">
      <div className="container text-center small-muted">
        © {new Date().getFullYear()} CoinDoor — Built for African crypto education.
      </div>
    </footer>
  );
}
