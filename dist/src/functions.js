"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.childContainerTokenRegexTest = exports.tokenNameRegexTest = exports.parentContainerTokenRegexTest = exports.tokenValueRegexTest = exports.parseDeepObj = exports.cleanTokenValue = exports.cleanStr = exports.depth = exports.tab = void 0;
var figmaDashConfig;
function getConfig() {
    if (!figmaDashConfig)
        figmaDashConfig = require("./config-handler").handle();
    return figmaDashConfig;
}
function tab(count) {
    return "\t".repeat(count);
}
exports.tab = tab;
function depth(array) {
    let to_ret = Array.isArray(array)
        ? 1 + Math.max(...array.map(depth))
        : 0;
    return isFinite(to_ret) ? to_ret : 1;
}
exports.depth = depth;
function cleanStr(str) {
    return (str.length > 75 ? str.slice(0, 75) : str)
        .replace(/[^A-Za-z0-9_:\(\)]/g, "-")
        .replace(/^[-]+|[-]+$|[-]{2,}/g, "")
        .toLowerCase();
}
exports.cleanStr = cleanStr;
function cleanTokenValue(str) {
    return str.replace(/[^A-Za-z0-9.,'\(\)%#\s]/g, "").replace(/^\s+|\s+$/g, "");
}
exports.cleanTokenValue = cleanTokenValue;
function parseDeepObj(obj) {
    let mappedObj = Object.values(obj).map((item) => typeof item == "object" ? parseDeepObj(item) : item);
    return mappedObj.flat(depth(mappedObj));
}
exports.parseDeepObj = parseDeepObj;
function tokenValueRegexTest(key) {
    let patterns = getConfig().patterns || {};
    return (patterns.tokenValueIdentifier || /^#|^~|\d+(?=px|rem|em|%|\.\d+)/).test(key);
}
exports.tokenValueRegexTest = tokenValueRegexTest;
function parentContainerTokenRegexTest(key) {
    let patterns = getConfig().patterns || {};
    return (patterns.parentContainerTokenIdentifier || /^:{2}/).test(key);
}
exports.parentContainerTokenRegexTest = parentContainerTokenRegexTest;
function tokenNameRegexTest(key) {
    let patterns = getConfig().patterns || {};
    return (patterns.tokenNameIdentifier || /^\$/).test(key);
}
exports.tokenNameRegexTest = tokenNameRegexTest;
function childContainerTokenRegexTest(key) {
    let patterns = getConfig().patterns || {};
    return (patterns.childContainerTokenIdentifier || /^:{1}/).test(key);
}
exports.childContainerTokenRegexTest = childContainerTokenRegexTest;
