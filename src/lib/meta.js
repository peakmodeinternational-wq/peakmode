export function sendMetaEvent(eventName, { email, phone, eventId } = {}) {
  const id =
    eventId ||
    (typeof window.crypto !== "undefined" && window.crypto.randomUUID
      ? window.crypto.randomUUID()
      : `id-${Date.now()}`);

  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, {}, { eventID: id });
  }

  const params = new URLSearchParams({ eventName, eventId: id });
  if (email) params.set("email", email);
  if (phone) params.set("phone", phone);
  const tc = new URLSearchParams(window.location.search).get("test_event_code");
  if (tc) params.set("testEventCode", tc);

  fetch(`/api/capi?${params.toString()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  }).catch(() => {});

  return id;
}