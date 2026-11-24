import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Are you a large language model? Because every word you say makes my context window feel too small.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
