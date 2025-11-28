export default function JoinPage() {
  return (
    <main className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Become an Educator</h1>

      <form action="/api/notify" method="post" className="space-y-4">
        <input name="name" placeholder="Full name" required className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded" />
        <input name="email" type="email" placeholder="Email" required className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded" />
        <textarea name="message" rows="4" placeholder="Tell us about your background" className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded" />
        <button className="w-full p-3 bg-blue-600 rounded font-semibold">Submit</button>
      </form>
    </main>
  );
}
