// Entry program for the gta6-meme-x-01 round 3 meme.
// The bounty grades the X post that carries the meme, so this program's
// whole job is to hand that post's address to the grader, byte for byte.
// It takes the address from POST.json in this same folder, makes sure it
// really points at a post on x.com, and drops an identical copy into the
// folder the grader tells it to use. It never touches the network and it
// needs nothing beyond the Node standard library.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function postUrlFrom(rawText) {
  let data;
  try {
    data = JSON.parse(rawText);
  } catch {
    throw new Error("POST.json is not valid JSON, cannot find the post");
  }
  const url = data !== null && typeof data === "object" ? data.url : undefined;
  if (typeof url !== "string" || url.trim() !== url) {
    throw new Error("POST.json has no url field naming the post");
  }
  if (!url.startsWith("https://x.com/") || !url.includes("/status/")) {
    throw new Error("POST.json must name an https://x.com/ post URL");
  }
  return url;
}

function main() {
  const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  const rawText = readFileSync(join(repoDir, "POST.json"), "utf8");
  if (rawText.trim() === "") {
    throw new Error("POST.json is empty, there is no post to hand over");
  }
  const url = postUrlFrom(rawText);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "POST.json"), rawText, "utf8");
  console.log(`Handed the grader the post at ${url}`);
}

main();
