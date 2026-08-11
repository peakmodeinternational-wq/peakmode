const { removeBackground } = require("@imgly/background-removal-node");
const fs = require("fs");
const https = require("https");
const path = require("path");

const url =
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80";
const jpg = path.join(__dirname, "hero.jpg");
const out = path.join(__dirname, "..", "public", "hero-cutout.png");

function download(u, dest) {
  return new Promise((res, rej) => {
    const f = fs.createWriteStream(dest);
    https
      .get(u, (r) => {
        if (r.statusCode !== 200) return rej(new Error("HTTP " + r.statusCode));
        r.pipe(f).on("finish", () => f.close(res));
      })
      .on("error", rej);
  });
}

(async () => {
  await download(url, jpg);
  console.log("downloaded hero.jpg");
  const blob = await removeBackground(url, {
    output: { format: "image/png", quality: 1 },
    model: "medium",
  });
  const buf = Buffer.from(await blob.arrayBuffer());
  fs.writeFileSync(out, buf);
  console.log("saved", out, buf.length, "bytes");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
