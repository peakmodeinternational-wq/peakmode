import { createHash } from "node:crypto";

const PIXEL_ID = "38973829158883028";
const GRAPH_URL = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`;

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

export async function POST(request) {
  const token = process.env.META_PIXEL_ACCESS_TOKEN;
  if (!token) {
    return Response.json(
      { error: "META_PIXEL_ACCESS_TOKEN not configured — generate it in Meta Events Manager > Settings > Conversions API" },
      { status: 501 }
    );
  }

  let body = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }
  const q = new URL(request.url).searchParams;
  for (const key of ["eventName", "eventId", "email", "phone", "testEventCode"]) {
    if (!body[key] && q.get(key)) body[key] = q.get(key);
  }

  const { eventName = "Contact", eventId, email, phone, testEventCode } = body;

  const userData = {
    client_ip_address: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0",
    client_user_agent: request.headers.get("user-agent") || "",
  };
  if (email) userData.em = [sha256(String(email).trim().toLowerCase())];
  if (phone) userData.ph = [sha256(String(phone).replace(/[^\d]/g, ""))];

  const data = [
    {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      action_source: "website",
      event_source_url: request.headers.get("x-forwarded-host") || "https://peakmodeinternational.com",
      user_data: userData,
    },
  ];

  const params = new URLSearchParams({ access_token: token, data: JSON.stringify(data) });
  if (testEventCode) params.set("test_event_code", testEventCode);

  try {
    const res = await fetch(`${GRAPH_URL}?${params}`, { method: "POST" });
    return Response.json(await res.json(), { status: res.ok ? 200 : 400 });
  } catch (err) {
    return Response.json(
      { error: "Meta request failed", detail: String(err && err.message ? err.message : err) },
      { status: 502 }
    );
  }
}

export async function GET() {
  return Response.json({ ok: true, route: "capi", ready: !!process.env.META_PIXEL_ACCESS_TOKEN });
}