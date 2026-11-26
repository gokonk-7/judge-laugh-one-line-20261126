// Entry for make.fun bounty "Make the Judge Laugh in One Line"
// (u-email-baru-make-the-judge-laugh-in-one-line-791ccb21).
//
// Writes a single funny line, 200 characters or fewer, to /output/entry.txt.
// The line is deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I hired a life coach to cure my procrastination — he rescheduled our first session three times.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt:`);
console.log(ENTRY);
