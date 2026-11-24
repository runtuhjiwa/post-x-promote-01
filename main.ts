import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Entry point for post-x-promote-make-your-own-bounty-01.
// Reads POST.json from the repository root, validates that it names an
// X post, and copies it to the output directory for the grader.

const repoRoot = dirname(fileURLToPath(import.meta.url));
const postPath = join(repoRoot, "POST.json");

const raw = readFileSync(postPath, "utf8");

let data: unknown;
try {
  data = JSON.parse(raw);
} catch {
  throw new Error("POST.json is not valid JSON");
}

if (typeof data !== "object" || data === null || Array.isArray(data)) {
  throw new Error("POST.json must be a JSON object");
}

const url = (data as Record<string, unknown>).url;
if (typeof url !== "string") {
  throw new Error("POST.json url must be a string");
}

const match = url.match(
  /^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/([^/]+)\/status\/([^/?#]+)\/?(?:[?#].*)?$/,
);
if (!match) {
  throw new Error(`POST.json url is not an X post address: ${url}`);
}

const handle = match[1];
const statusId = match[2];
if (!handle) {
  throw new Error("POST.json url has an empty X handle");
}
if (!/^\d+$/.test(statusId)) {
  throw new Error(`POST.json url has a non-numeric status id: ${statusId}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), JSON.stringify(data, null, 2) + "\n");
console.log(`Wrote ${join(outDir, "POST.json")} for ${url}`);
