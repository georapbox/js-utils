import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import jsdoc2md from 'jsdoc-to-markdown';

const directories = process.argv.slice(2);

if (directories.length === 0) {
  console.error('Usage: npm run docs -- <directory> [...directories]');
  process.exit(1);
}

async function generateDocs(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const name = path.basename(directory);
  const filename = `${name}.js`;

  if (entries.some((entry) => entry.isFile() && entry.name === filename)) {
    const source = path.join(directory, filename);
    const destination = path.join(directory, 'README.md');

    const markdown = await jsdoc2md.render({ files: source });

    if (markdown.trim()) {
      await writeFile(destination, markdown);
      console.log(`Generated: ${destination}`);
    }
  }

  for (const entry of entries) {
    if (entry.isDirectory()) {
      await generateDocs(path.join(directory, entry.name));
    }
  }
}

for (const directory of directories) {
  await generateDocs(path.resolve(directory));
}
