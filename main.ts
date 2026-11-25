const { mkdir, writeFile } = require('node:fs/promises');
const { join } = require('node:path');

const joke = `I suggested cancelling the meeting about fewer meetings; now I chair its monthly follow-up.`;
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';

async function main() {
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(join(outputDirectory, 'entry.txt'), `${joke}\n`, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
