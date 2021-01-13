"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class MeiucaEngineError extends Error {
    constructor(error, help) {
        if (error instanceof Error)
            super(error.message);
        else
            super(error);
        let name = error instanceof Error ? error.name : error;
        let stack = error instanceof Error ? error.stack : this.stack;
        this.name = `FigmaDashError: ${name}`;
        this.stack = stack;
        this.help = help;
        if (this.stack) {
            this.stack = this.stack.replace(/\n/g, "\n\t");
        }
        if (help) {
            this.stack += `\n\n ${chalk_1.default.yellowBright("help")} ${help}\n`;
        }
    }
}
exports.default = MeiucaEngineError;
