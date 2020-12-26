import { FigmaDashConfig } from "./config-handler";

var figmaDashConfig: FigmaDashConfig;

function getConfig() {
  if (!figmaDashConfig) figmaDashConfig = require("./config-handler").handle();

  return figmaDashConfig;
}

export function tab(count: number) {
  return "\t".repeat(count);
}

export function depth(array: any[]) {
  let to_ret: number = Array.isArray(array)
    ? 1 + Math.max(...array.map(depth))
    : 0;

  return isFinite(to_ret) ? to_ret : 1;
}

export function cleanStr(str: string) {
  return (str.length > 75 ? str.slice(0, 75) : str)
    .replace(/[^A-Za-z0-9_:\(\)]/g, "-")
    .replace(/^[-]+|[-]+$|[-]{2,}/g, "")
    .toLowerCase();
}

export function cleanTokenValue(str: string) {
  return str.replace(/[^A-Za-z0-9.,'\(\)%#\s]/g, "").replace(/^\s+|\s+$/g, "");
}

export function parseDeepObj(obj: object) {
  let mappedObj: any[] = Object.values(obj).map((item) =>
    typeof item == "object" ? parseDeepObj(item) : item
  );

  return mappedObj.flat(depth(mappedObj));
}

export function tokenValueRegexTest(key: string): boolean {
  let patterns = getConfig().patterns || {};

  return (
    patterns.tokenValueIdentifier || /^#|^~|\d+(?=px|rem|em|%|\.\d+)/
  ).test(key);
}

export function parentContainerTokenRegexTest(key: string): boolean {
  let patterns = getConfig().patterns || {};

  return (patterns.parentContainerTokenIdentifier || /^:{2}/).test(key);
}

export function tokenNameRegexTest(key: string): boolean {
  let patterns = getConfig().patterns || {};

  return (patterns.tokenNameIdentifier || /^\$/).test(key);
}

export function childContainerTokenRegexTest(key: string) {
  let patterns = getConfig().patterns || {};

  return (patterns.childContainerTokenIdentifier || /^:{1}/).test(key);
}
