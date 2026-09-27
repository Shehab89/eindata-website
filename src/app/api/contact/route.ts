// Contact form handler: validates the message and forwards it by email via Resend
// (https://resend.com). Configure with environment variables:
//   RESEND_API_KEY      – required, API key from Resend
//   CONTACT_TO_EMAIL    – where messages are delivered (default: info@eindata.nl)
//   CONTACT_FROM_EMAIL  – verified sender (default: Resend's test sender, which can
//                         only deliver to the Resend account owner's own address)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  const field = (key: string, max: number) =>
    typeof body[key] === 'string' ? (body[key] as string).trim().slice(0, max) : '';

  const name = field('name', 200);
  const email = field('email', 200);
  const company = field('company', 200);
  const message = field('message', 5000);

  // Honeypot: real visitors never fill this hidden field, bots usually do.
  if (field('website', 200)) {
    return Response.json({ ok: true });
  }

  if (!name || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: 'Please fill in your name, a valid email and a message.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set');
    return Response.json({ error: 'Email is not configured' }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL || 'info@eindata.nl';
  const from = process.env.CONTACT_FROM_EMAIL || 'EinData website <onboarding@resend.dev>';

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '-'}`,
    '',
    message,
  ].join('\n');

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}<br>
    <strong>Email:</strong> ${escapeHtml(email)}<br>
    <strong>Company:</strong> ${escapeHtml(company || '-')}</p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New message via eindata.nl from ${name}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error('Contact form: Resend error', res.status, await res.text());
    return Response.json({ error: 'Could not send message' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
