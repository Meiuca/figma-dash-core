"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = exports.path = void 0;
const exception_handler_1 = __importDefault(require("./exception-handler"));
const path_1 = require("path");
const package_json_1 = __importDefault(require("../package.json"));
var config;
const parsedName = package_json_1.default.name.split(/-|[A-Z]/);
parsedName.pop();
exports.path = path_1.resolve(process.cwd(), `./${parsedName.join("-")}.config.js`);
function handle() {
    try {
        if (!config)
            config = require(exports.path);
        return config;
    }
    catch (err) {
        exception_handler_1.default(err, "Try using 'init' first");
        return {};
    }
}
exports.handle = handle;
