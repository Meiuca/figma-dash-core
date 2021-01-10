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
    return str.replace(/[^A-Za-z0-9.,'\(\)%#\s]/g, "").replace(/^\s+|\s+$/g, "");
}
function parseDeepObj(obj) {
    let mappedObj = Object.values(obj).map((item) => typeof item == "object" ? parseDeepObj(item) : item);
    return mappedObj.flat(depth(mappedObj));
}
function tokenValueRegexTest(key) {
    return ((this.config.patterns || {}).tokenValueIdentifier ||
        /^#|^~|\d+(?=px|rem|em|%|\.\d+)/).test(key);
}
function parentContainerTokenRegexTest(key) {
    return ((this.config.patterns || {}).parentContainerTokenIdentifier || /^:{2}/).test(key);
}
function tokenNameRegexTest(key) {
    return ((this.config.patterns || {}).tokenNameIdentifier || /^\$/).test(key);
}
function childContainerTokenRegexTest(key) {
    return ((this.config.patterns || {}).childContainerTokenIdentifier || /^:{1}/).test(key);
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
    };
}
exports.default = init;
