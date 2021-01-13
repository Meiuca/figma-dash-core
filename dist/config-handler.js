"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = exports.getPath = void 0;
const lodash_1 = require("lodash");
const path_1 = require("path");
function getPath() {
    return path_1.resolve(process.cwd(), `./figma-dash.config.js`);
}
exports.getPath = getPath;
function handle(config) {
    if (!config) {
        config = require(getPath());
    }
    let defaultConfig = {
        globals: {
            patterns: {
                tokenNameIdentifier: /^\$/,
                tokenValueIdentifier: /^#|^--|\d+(?=px|rem|em|%|\.\d+)/,
                parentContainerTokenIdentifier: /^:{2}/,
                childContainerTokenIdentifier: /(\w+):\W*(\w+)/,
            },
        },
    };
    return lodash_1.merge(defaultConfig, config);
}
exports.handle = handle;
