"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class FigmaDashError extends Error {
    constructor(error, help) {
        super(error.message);
        this.name = `FigmaDashError: ${error.name}`;
        this.stack = error.stack;
        this.help = help;
        if (this.stack) {
            this.stack = this.stack.replace(/\n/g, "\n\t");
        }
        if (help) {
            this.stack += `\n\n ${chalk_1.default.yellowBright("help")} ${help}\n`;
        }
    }
}
exports.default = FigmaDashError;
