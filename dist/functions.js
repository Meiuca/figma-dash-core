"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tab(count) {
    return "\t".repeat(count);
}
function depth(array) {
    let to_ret = Array.isArray(array)
        ? 1 + Math.max(...array.map(depth))
        : 0;
    return isFinite(to_ret) ? to_ret : 1;
}
function cleanStr(str) {
    return (str.length > 75 ? str.slice(0, 75) : str)
        .replace(/[^A-Za-z0-9_:\(\)]/g, "-")
        .replace(/^[-]+|[-]+$|[-]{2,}/g, "")
        .toLowerCase();
}
function cleanTokenValue(str) {
    return str.replace(/[^A-Za-z0-9.,'\(\)%#\s]/g, "").trim();
}
function parseDeepObj(obj) {
    let mappedObj = Object.values(obj).map((item) => typeof item == "object" ? parseDeepObj(item) : item);
    return mappedObj.flat(depth(mappedObj));
}
function tokenValueRegexTest(key) {
    return this.config.globals.patterns.tokenValueIdentifier.test(key);
}
function tokenValueRegexExec(key) {
    return this.config.globals.patterns.tokenValueIdentifier.exec(key);
}
function parentContainerTokenRegexTest(key) {
    return this.config.globals.patterns.parentContainerTokenIdentifier.test(key);
}
function parentContainerTokenRegexExec(key) {
    return this.config.globals.patterns.parentContainerTokenIdentifier.exec(key);
}
function tokenNameRegexTest(key) {
    return this.config.globals.patterns.tokenNameIdentifier.test(key);
}
function tokenNameRegexExec(key) {
    return this.config.globals.patterns.tokenNameIdentifier.exec(key);
}
function childContainerTokenRegexTest(key) {
    return this.config.globals.patterns.childContainerTokenIdentifier.test(key);
}
function childContainerTokenRegexExec(key) {
    return this.config.globals.patterns.childContainerTokenIdentifier.exec(key);
}
function parseFigmaSrc(src) {
    let parsedSrc = /figma\.com\/file\/(.+)\//.exec(src);
    return parsedSrc ? (parsedSrc[1] ? parsedSrc[1] : null) : src;
}
function init(thisArg) {
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
exports.default = init;
