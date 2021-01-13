"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeiucaEngineError = void 0;
const config_handler_1 = require("./config-handler");
const exception_handler_1 = __importDefault(require("./exception-handler"));
const functions_1 = __importDefault(require("./functions"));
const validations_1 = __importDefault(require("./validations"));
var exception_handler_2 = require("./exception-handler");
Object.defineProperty(exports, "MeiucaEngineError", { enumerable: true, get: function () { return __importDefault(exception_handler_2).default; } });
class MeiucaEngineCore {
    constructor(config) {
        try {
            this.config = config_handler_1.handle(config);
        }
        catch (err) {
            throw new exception_handler_1.default(err, "Try 'init' first");
        }
        this.path = config_handler_1.getPath();
        this.functions = functions_1.default(this);
        this.validations = validations_1.default(this);
    }
}
exports.default = MeiucaEngineCore;
