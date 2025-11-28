export default function EducatorProgram() {
  return (
    <main className="mt-8 max-w-2xl mx-auto">
      <div className="card">
        <h1 className="text-2xl font-bold">Educator Program</h1>
        <p className="mt-3 small-muted">
          Join CoinDoor’s educator network — get training, materials, and paid teaching opportunities.
          Leave your details and we’ll contact you when the curriculum and pilot are ready.
        </p>

        <form className="mt-6 space-y-4" action="/api/notify" method="post">
          <input name="name" required placeholder="Full name" className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded" />
          <textarea name="message" rows="4" placeholder="Your background / where you teach" className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded" />
          <button type="submit" className="w-full p-3 rounded font-semibold" style={{background: "var(--accent)", color:"var(--accent-foreground)"}}>Apply</button>
        </form>
      </div>
    </main>
  );
}
