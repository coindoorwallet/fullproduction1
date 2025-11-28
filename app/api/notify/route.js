export async function POST(req) {
  try {
    const form = await req.formData();
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    console.log("New educator lead:", { name, email, message });

    // If you want email notifications, integrate Resend or SendGrid here.
    return Response.redirect("/educator-program?sent=1");
  } catch (err) {
    return Response.json({ error: "failed" }, { status: 500 });
  }
}
