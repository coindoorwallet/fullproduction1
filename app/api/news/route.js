export async function GET() {
  const token = process.env.CRYPTOPANIC_TOKEN;

  if (!token) {
    return Response.json({ error: "CRYPTOPANIC_TOKEN missing" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://cryptopanic.com/api/v1/posts/?auth_token=${token}&filter=trending`
    );

    if (!res.ok) {
      return Response.json({ error: "Failed to fetch Cryptopanic API" }, { status: 500 });
    }

    const data = await res.json();
    return Response.json({ items: data.results || [] });
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
