import * as fs from "fs";
import path from "path";
import { parseIgonan } from "./parser";

import { newLine, printIgonan, printSorry, SorryType } from "./printer";

function getDirPath(folderName: string) {
  const root = process.cwd();
  return path.join(root, folderName);
}

export function runCommander() {
  var commander = require("commander");

  commander
    .command("new <type>")
    .usage("<type>")
    .description("깃아이고난 를! 만들어주는 나")
    .action(getIgonanAction);

  commander.command("*", { noHelp: true }).action(() => {
    console.log("명령어 를! 찾을 수 없는 나");
    commander.help();
  });

  commander.parse(process.argv);
}

const getIgonanAction = async (type: any, { args }: any) => {
  console.log("자~");


  if (!type) {
    await printSorry(SorryType.ParamNotFound);
  } else {
    try {
      const result = await parseIgonan(type);

      if (result === "" || result.includes("undefined")) {
        await printSorry(SorryType.IgonanNotFound);
      } else {
        await printIgonan();
        fs.writeFileSync(getDirPath(".gitigonan"), result);
      }
    } catch (e: any) {
      await printSorry(SorryType.IgonanNotFound);
    }
  }

  newLine();
  console.log("옹!!!!~");
};
