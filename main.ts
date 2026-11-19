// gta6-meme-x-01 entry program.
// Job: hand the grader the X post that carries the meme, unchanged.
// The post address lives in POST.json next to this file; this program
// reads that file, checks it really names an X post, and writes the
// exact same bytes into the output folder the grader points at.
// No network, no installs, stdlib only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const sourcePath = join(botDir, "POST.json");
const raw = readFileSync(sourcePath, "utf8");

if (raw.trim().length === 0) {
  throw new Error("POST.json is empty");
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  throw new Error("POST.json is not valid JSON");
}

const url =
  parsed !== null && typeof parsed === "object"
    ? (parsed as Record<string, unknown>).url
    : undefined;

if (typeof url !== "string" || !url.startsWith("https://x.com/")) {
  throw new Error("POST.json must name an https://x.com/ post URL");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw, "utf8");
console.log(`Wrote POST.json for ${url}`);
