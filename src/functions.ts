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
  return str.replace(/[^A-Za-z0-9.,'\(\)%#\s]/g, "").replace(/^\s+|\s+$/g, "");
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

function parentContainerTokenRegexTest(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.parentContainerTokenIdentifier.test(key);
}

function tokenNameRegexTest(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.tokenNameIdentifier.test(key);
}

function childContainerTokenRegexTest(this: MeiucaEngineCore, key: string) {
  return this.config.globals.patterns.childContainerTokenIdentifier.test(key);
}

function parseFigmaSrc(src: string) {
  let parsedSrc = /figma\.com\/file\/(.+)\//.exec(src);

  return parsedSrc ? (parsedSrc[1] ? parsedSrc[1] : null) : src;
}

export default function init(thisArg: MeiucaEngineCore) {
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
  parseFigmaSrc: (src: string) => string | null;
}
