export async function POST(req) {
  try {
    const form = await req.formData();
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    console.log('New lead:', { name, email, message });
    return Response.redirect('/join?sent=1');
  } catch (err) {
    return Response.json({ error: 'failed' }, { status: 500 });
  }
}
