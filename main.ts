const { mkdir, writeFile } = require('node:fs/promises');
const { join } = require('node:path');

const joke = `I fixed the office printer once. HR now lists me as its emergency contact.`;
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';

async function main() {
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(join(outputDirectory, 'entry.txt'), `${joke}\n`, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
