import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";

const outputDir = "_site";

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

execSync("npm run build:css", { stdio: "inherit" });

const rootFiles = ["index.html", "CNAME", "hgvme.html"];

for (const file of rootFiles) {
  if (existsSync(file)) {
    cpSync(file, `${outputDir}/${file}`);
  }
}

for (const directory of ["hgvme", "hgvme-privacy-policy", "icons", "images"]) {
  cpSync(directory, `${outputDir}/${directory}`, { recursive: true });
}

mkdirSync(`${outputDir}/css`, { recursive: true });
cpSync("css/tailwind.css", `${outputDir}/css/tailwind.css`);
