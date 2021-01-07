"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = exports.path = void 0;
const path_1 = require("path");
exports.path = path_1.resolve(process.cwd(), `./figma-dash.config.js`);
function handle() {
    return require(exports.path);
}
exports.handle = handle;
