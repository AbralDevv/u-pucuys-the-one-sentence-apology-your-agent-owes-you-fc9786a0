import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  'I\'m sorry I sent Aunt Carol your condolence email about Uncle Ray and forgot to delete the line I added right under your name: "Let me know if you\'d like this sadder or shorter!"';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
