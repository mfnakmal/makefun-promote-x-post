// Entry for "Promote make.fun's make-your-own-bounty post on X" (Node 22,
// standard library only). The entry is the X post itself: a quote of
// make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// with a photo of its own, make.fun / @makefunai and the entrant's play code
// in its text. This program only hands the post's address to the gate: it
// copies POST.json from the repository root to /output/POST.json, where the
// house reads it and then reads the post's replies, reposts and quotes from X.
// Nothing this program writes about the post is scored.
//
// Note: the copy is the whole program — the post's counts are read by the
// house from X, never from anything this program writes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
