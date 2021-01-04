"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_handler_1 = require("./config-handler");
const exception_handler_1 = __importStar(require("./exception-handler"));
const functions_1 = __importDefault(require("./functions"));
const validations_1 = __importDefault(require("./validations"));
class FigmaDashCore {
    constructor(config) {
        this.FigmaDashError = exception_handler_1.FigmaDashError;
        let error;
        try {
            this.config = config || config_handler_1.handle();
        }
        catch (err) {
            error = err;
            this.config = {};
        }
        this.path = config_handler_1.path;
        this.exceptionHandler = exception_handler_1.default(this);
        this.Functions = functions_1.default(this);
        this.Validations = validations_1.default(this);
        if (error) {
            this.exceptionHandler(error, "Try 'init' first");
        }
    }
}
exports.default = FigmaDashCore;
