import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export default defineEventHandler(async (event) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const data = await fs.readFile(
    join(__dirname, `/../../CHANGELOG.md`),
    "binary"
  );

  event.node.res.setHeader("content-type", "text/plain");
  event.node.res.end(Buffer.from(data));
});
