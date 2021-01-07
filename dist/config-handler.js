"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = exports.getPath = void 0;
const path_1 = require("path");
function getPath() {
    return path_1.resolve(process.cwd(), `./figma-dash.config.js`);
}
exports.getPath = getPath;
function handle() {
    return require(getPath());
}
exports.handle = handle;
