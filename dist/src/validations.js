"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFigmaConfig = exports.validateFonts = void 0;
const config_handler_1 = require("./config-handler");
const lodash_1 = __importDefault(require("lodash"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const config = config_handler_1.handle();
function validateFonts() {
    if (typeof config == "boolean")
        return;
    if (!config.fonts || lodash_1.default.isEmpty(config.fonts))
        throw new Error("fonts object is not valid");
    if (typeof config.fonts.output != "string")
        throw new TypeError("outPath must be declared and must be a string");
    if (config.fonts.linkCommand && typeof config.fonts.linkCommand != "string")
        throw new TypeError("linkCommand must be a string");
    if (config.fonts.files && !config.fonts.provider)
        throw new TypeError("provider must be declared");
    if (config.fonts.provider && !config.fonts.provider.includes("http"))
        throw new Error("provider is not a valid url");
    if (config.fonts.provider && !config.fonts.provider.includes("{f}"))
        throw new SyntaxError("provider must include '{f}'");
    if (config.fonts.provider && !config.fonts.provider.includes("{w}"))
        throw new SyntaxError("provider must include '{w}'");
    if (config.fonts.urls &&
        (!Array.isArray(config.fonts.urls) ||
            config.fonts.urls.some((url) => typeof url != "string")))
        throw new TypeError("urls must be an string array");
    if (config.fonts.directLinks &&
        (!Array.isArray(config.fonts.directLinks) ||
            config.fonts.directLinks.some(({ src, local }) => typeof src != "string" || typeof local != "string")))
        throw new TypeError("directLinks must be an array containing '{ src: string, local: string }'");
}
exports.validateFonts = validateFonts;
function validateFigmaConfig() {
    if (typeof config == "boolean")
        return;
    if (lodash_1.default.isEmpty(config.figma))
        throw new Error("figma object is not valid");
    if (typeof config.figma.accessToken != "string")
        throw new TypeError("accessToken must be a string");
    if (typeof config.figma.fileID != "string")
        throw new TypeError("fileID must be a string");
    if (lodash_1.default.isError(path_1.default.resolve(config.figma.output)))
        throw new Error(chalk_1.default.gray(config.figma.output) + " is not a valid output path");
}
exports.validateFigmaConfig = validateFigmaConfig;
