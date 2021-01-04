"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const functions_1 = require("./functions");
function default_1(error, help) {
    error.stack =
        (error.stack || "undefined\n").replace(/\n/g, "\n" + functions_1.tab(1)) +
            (help ? `${chalk_1.default.yellowBright("\n\n help")} ${help}\n` : "");
    Object.defineProperty(error, "help", { value: help });
    throw error;
}
exports.default = default_1;
