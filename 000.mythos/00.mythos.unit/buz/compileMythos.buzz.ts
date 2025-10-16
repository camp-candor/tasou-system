import { MythosModel } from "../mythos.model";
import MythosBit from "../fce/mythos.bit";
import State from "../../99.core/state";
import * as fs from "fs";
import * as path from "path";

const getFilesRecursively = (dir: string): string[] => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.map((entry) => {
    const res = path.resolve(dir, entry.name);
    return entry.isDirectory() ? getFilesRecursively(res) : res;
  });
  return Array.prototype.concat(...files);
};

export const compileMythos = (clone: MythosModel, bal: MythosBit, ste: State) => {
  const rootDir = bal.src || "000.mythos";
  const outputFile = bal.dat || "./data/000.mythos.txt";

  try {
    const filePaths = getFilesRecursively(rootDir);
    let compiledContent = "";

    for (const filePath of filePaths) {
      // Exclude the output file itself if it's in the scanned directory
      if (path.resolve(filePath) === path.resolve(outputFile)) {
        continue;
      }
      const content = fs.readFileSync(filePath, "utf-8");
      compiledContent += `\n\n//--- ${filePath} ---\n\n${content}`;
    }

    fs.writeFileSync(outputFile, compiledContent.trim());
    console.log(`Successfully compiled mythos to ${outputFile}`);
  } catch (error) {
    console.error(`Error compiling mythos: ${error}`);
  }

  return clone;
};