import MeiucaEngineCore from "./index";

function tab(count: number) {
  return "\t".repeat(count);
}

function depth(array: any[]) {
  let to_ret: number = Array.isArray(array)
    ? 1 + Math.max(...array.map(depth))
    : 0;

  return isFinite(to_ret) ? to_ret : 1;
}

function cleanStr(str: string) {
  return (str.length > 75 ? str.slice(0, 75) : str)
    .replace(/[^A-Za-z0-9_:\(\)]/g, "-")
    .replace(/^[-]+|[-]+$|[-]{2,}/g, "")
    .toLowerCase();
}

function cleanTokenValue(str: string) {
  return str.replace(/[^A-Za-z0-9.,'\(\)%#\s]/g, "").trim();
}

function parseDeepObj(obj: object) {
  let mappedObj: any[] = Object.values(obj).map((item) =>
    typeof item == "object" ? parseDeepObj(item) : item
  );

  return mappedObj.flat(depth(mappedObj));
}

function tokenValueRegexTest(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.tokenValueIdentifier.test(key);
}

function tokenValueRegexExec(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.tokenValueIdentifier.exec(key);
}

function parentContainerTokenRegexTest(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.parentContainerTokenIdentifier.test(key);
}

function parentContainerTokenRegexExec(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.parentContainerTokenIdentifier.exec(key);
}

function tokenNameRegexTest(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.tokenNameIdentifier.test(key);
}

function tokenNameRegexExec(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.tokenNameIdentifier.exec(key);
}

function childContainerTokenRegexTest(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.childContainerTokenIdentifier.test(key);
}

function childContainerTokenRegexExec(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.childContainerTokenIdentifier.exec(key);
}

function parseFigmaSrc(src: string) {
  let parsedSrc = /figma\.com\/file\/(.+)\//.exec(src);

  return parsedSrc ? (parsedSrc[1] ? parsedSrc[1] : null) : src;
}

export default function init(thisArg: MeiucaEngineCore): Functions {
  return {
    tab,
    depth,
    cleanStr,
    cleanTokenValue,
    parseDeepObj,
    parseFigmaSrc,
    tokenValueRegexTest: tokenValueRegexTest.bind(thisArg),
    parentContainerTokenRegexTest: parentContainerTokenRegexTest.bind(thisArg),
    tokenNameRegexTest: tokenNameRegexTest.bind(thisArg),
    childContainerTokenRegexTest: childContainerTokenRegexTest.bind(thisArg),
    tokenValueRegexExec: tokenValueRegexExec.bind(thisArg),
    parentContainerTokenRegexExec: parentContainerTokenRegexExec.bind(thisArg),
    tokenNameRegexExec: tokenNameRegexExec.bind(thisArg),
    childContainerTokenRegexExec: childContainerTokenRegexExec.bind(thisArg),
  };
}

export interface Functions {
  tab: (count: number) => string;
  depth: (array: any[]) => number;
  cleanStr: (str: string) => string;
  cleanTokenValue: (str: string) => string;
  parseDeepObj: (obj: object) => any[];
  tokenValueRegexTest: (key: string) => boolean;
  parentContainerTokenRegexTest: (key: string) => boolean;
  tokenNameRegexTest: (key: string) => boolean;
  childContainerTokenRegexTest: (key: string) => boolean;
  tokenValueRegexExec: (key: string) => RegExpExecArray | null;
  parentContainerTokenRegexExec: (key: string) => RegExpExecArray | null;
  tokenNameRegexExec: (key: string) => RegExpExecArray | null;
  childContainerTokenRegexExec: (key: string) => RegExpExecArray | null;
  parseFigmaSrc: (src: string) => string | null;
}
