import fs from "fs";

const igonanTxt = fs.readFileSync("./asset/igonan.txt", "utf8");
const sorryTxt = fs.readFileSync("./asset/sorry.txt", "utf8");

export async function delayedPrint(
  arr: string[],
  delayPerUnit: number,
  newLine: boolean = true
) {
  await Promise.all(
    arr.map((str, idx) =>
      delayed(() => {
        newLine ? console.log(str) : process.stdout.write(str);
      }, delayPerUnit * idx)
    )
  );
}

export const delayed = (fun: Function, timeToDelay: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      fun();
      resolve("ok");
    }, timeToDelay)
  );

export const sleep = (timeToDelay: number) =>
  new Promise((resolve) => setTimeout(() => resolve("ok"), timeToDelay));

export const newLine = () => console.log("\n\n");

export const printIgonan = async () => {
  await delayedPrint("설정이 뭉탱이로 있네~".split(""), 80, false);
  await sleep(1000);
  newLine();

  await delayedPrint("gitigonan! 를! 생성 하는 나".split(""), 100, false);
  await sleep(1000);
  newLine();

  await delayedPrint(igonanTxt.split("\n"), 50);
};

export enum SorryType {
  ParamNotFound,
  IgonanNotFound,
}

export const printSorry = async (t: SorryType) => {
  await sleep(3000);
  await delayedPrint("어!!!!!!!!!\n".split(""), 100, false);
  await sleep(3000);

  await delayedPrint(sorryTxt.split("\n"), 50);

  await sleep(1000);
  newLine();

  let result: string;

  switch (t) {
    case SorryType.ParamNotFound:
      result = "입력값 를! 안넣은 나";
      break;
    case SorryType.IgonanNotFound:
      result = "gitigonan 를! 찾을 수 없습니다..";
      break;
  }

  await delayedPrint(`죄송합니다..\n${result}`.split(""), 150, false);
};
