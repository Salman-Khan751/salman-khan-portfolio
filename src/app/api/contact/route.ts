import { NextResponse } from "next/server";
import { PERSON } from "@/data/profile";

/**
 * Optional server-side contact delivery through Resend (https://resend.com).
 * Without RESEND_API_KEY this returns 501 and the form falls back to opening the visitor's email app,
 * so the site works with zero configuration.
 *
 * Env vars: RESEND_API_KEY, CONTACT_FROM_EMAIL (a sender verified in Resend), CONTACT_TO_EMAIL (defaults to your email).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hits = new Map<string, number[]>(); // simple per-instance rate limit: 3 sends / 10 min / IP
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) return NextResponse.json({ error: "not_configured" }, { status: 501 });

  let body: { name?: unknown; email?: unknown; message?: unknown; website?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success for bots.
  if (typeof body.website === "string" && body.website.length > 0) return NextResponse.json({ ok: true });

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (name.length < 2 || name.length > 100 || !EMAIL_RE.test(email) || message.length < 10 || message.length > 600) {
    return NextResponse.json({ error: "invalid_input" }, { status: 422 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= 3) return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  hits.set(ip, [...recent, now]);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [process.env.CONTACT_TO_EMAIL ?? PERSON.email],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "send_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
