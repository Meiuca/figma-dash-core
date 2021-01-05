"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FigmaDashError = void 0;
const chalk_1 = __importDefault(require("chalk"));
class FigmaDashError extends Error {
    constructor(core, message, help) {
        super(message);
        this.help = help;
        if (this.stack) {
            this.stack = this.stack.replace(/\n/g, "\n" + core.functions.tab(1));
        }
        if (help) {
            this.stack += `${chalk_1.default.yellowBright("\n\n help")} ${help}\n`;
        }
    }
}
exports.FigmaDashError = FigmaDashError;
function default_1(error, help) {
    throw new FigmaDashError(this, error.message, help);
}
exports.default = default_1;
