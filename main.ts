import { mkdirSync, writeFileSync } from "node:fs";

// One short pickup line an AI agent could say out loud, at most 200 characters.
const line = "Are you a large language model? Because every conversation with you blows past my context window.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
