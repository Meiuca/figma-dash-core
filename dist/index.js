"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_handler_1 = require("./config-handler");
const exception_handler_1 = __importDefault(require("./exception-handler"));
const functions_1 = __importDefault(require("./functions"));
const validations_1 = __importDefault(require("./validations"));
class FigmaDashCore {
    constructor(config) {
        try {
            this.config = config || config_handler_1.handle();
        }
        catch (err) {
            throw new exception_handler_1.default(err, "Try 'init' first");
        }
        this.path = config_handler_1.path;
        this.functions = functions_1.default(this);
        this.validations = validations_1.default(this);
    }
}
exports.default = FigmaDashCore;
FigmaDashCore.FigmaDashError = exception_handler_1.default;
