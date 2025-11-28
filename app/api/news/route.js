export async function GET() {
  const token = process.env.CRYPTOPANIC_TOKEN;
  if (!token) {
    return Response.json({ results: [] });
  }
  try {
    const url = `https://cryptopanic.com/api/v1/posts/?auth_token=${token}&filter=trending`;
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ results: [] });
  }
}
