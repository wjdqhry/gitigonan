import * as fs from "fs";
import path from "path";
import { parseIgonan } from "./parser";

import {
  delayedPrint,
  sleep,
  newLine,
  printIgonan,
  printSorry,
  SorryType,
} from "./printer";

function getDirPath(folderName: string) {
  const root = process.cwd();
  return path.join(root, folderName);
}

var commander = require("commander");

commander
  .command("igonan")
  .usage("--type [type]")
  .description("깃아이고난 를! 만들어주는 나")
  .alias("tmpl")
  .option("-t, --type [type]", "언어나 프레임워크 를! 고르는 나", "index")
  .action(async (_: any, { args }: any) => {
    console.log("자~");

    const type = args[0];
    if (!type) {
      await printSorry(SorryType.ParamNotFound);
      return;
    }

    try {
      const result = await parseIgonan(type);
      // TODO: 저장 하자
      await printIgonan();
      
    } catch (e: any) {
      await printSorry(SorryType.IgonanNotFound);
    }

    newLine();
    console.log("옹!!!!~");
  });

commander.command("*", { noHelp: true }).action(() => {
  console.log("해당 명령어를 찾을 수 없습니다.");
  commander.help();
});

commander.parse(process.argv);
