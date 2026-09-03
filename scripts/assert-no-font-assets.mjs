import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const BUILD_DIRECTORY = fileURLToPath(new URL("../dist", import.meta.url));
const FONT_EXTENSION = /\.woff2?$/i;

async function findFontAssets(directory) {
  let entries;

  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return [];
    }

    throw error;
  }

  const fontAssets = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      fontAssets.push(...(await findFontAssets(path)));
    } else if (entry.isFile() && FONT_EXTENSION.test(entry.name)) {
      fontAssets.push(path);
    }
  }

  return fontAssets;
}

const fontAssets = await findFontAssets(BUILD_DIRECTORY);

if (fontAssets.length > 0) {
  const assetList = fontAssets.map((path) => `- ${path}`).join("\n");
  process.stderr.write(`Production build contains font binaries:\n${assetList}\n`);
  process.exitCode = 1;
}
