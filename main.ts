// Select an office joke and write it to entry.txt.
const { mkdir, writeFile } = require('node:fs/promises');
const { join } = require('node:path');

const CANDIDATES = [
  `I finally fixed the office printer. Its first job was printing my layoff notice.`,
  `Our office went paperless. Now we shred morale.`,
];

function pickBest() {
  // Fixing the printer enables the narrator's own layoff: the strongest turn.
  return CANDIDATES[0];
}

const joke = pickBest();
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';

async function main() {
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(join(outputDirectory, 'entry.txt'), `${joke}\n`, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
