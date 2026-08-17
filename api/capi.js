import { createHash } from "node:crypto";

const PIXEL_ID = "38973829158883028";
const GRAPH_URL = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`;

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function clientIp(headers) {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return headers.get("x-real-ip") || "0.0.0.0";
}

export default async function handler(req) {
  if (req.method !== "POST") {
    return json({ error: "POST only" }, 405);
  }

  const token = process.env.META_PIXEL_ACCESS_TOKEN;
  if (!token) {
    return json(
      { error: "META_PIXEL_ACCESS_TOKEN not configured — generate it in Meta Events Manager > Settings > Conversions API" },
      501
    );
  }

  let body = {};
  try {
    body = JSON.parse(req.body || "{}");
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const { eventName = "Contact", eventId, email, phone, testEventCode } = body;

  const userData = {
    client_ip_address: clientIp(req.headers),
    client_user_agent: req.headers.get("user-agent") || "",
  };
  if (email) userData.em = [sha256(String(email).trim().toLowerCase())];
  if (phone) userData.ph = [sha256(String(phone).replace(/[^\d]/g, ""))];

  const data = [
    {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      action_source: "website",
      event_source_url:
        req.headers.get("x-forwarded-host") || "https://peakmodeinternational.com",
      user_data: userData,
    },
  ];

  const params = new URLSearchParams({ access_token: token, data: JSON.stringify(data) });
  if (testEventCode) params.set("test_event_code", testEventCode);

  try {
    const res = await fetch(`${GRAPH_URL}?${params}`, { method: "POST" });
    const payload = await res.json();
    return json(payload, res.ok ? 200 : 400);
  } catch (err) {
    return json({ error: "Meta request failed", detail: String(err && err.message ? err.message : err) }, 502);
  }
}

function json(payload, status) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json" },
  });
}