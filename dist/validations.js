"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const fontProviderRegExp = /^https?:\/\/\S*((\{f\})|(\{w\}))\S*((\{f\})|(\{w\}))\S*$/;
const figmaSrcRegExp = /(figma\.com\/file\/.+\/)|(^\w+$)/;
function validateFonts() {
    let { fonts } = this;
    if (lodash_1.default.isEmpty(fonts))
        throw new Error("fonts object is not valid");
    if (!fonts.output || typeof fonts.output != "string")
        throw new TypeError("fonts.output must be declared and must be a string");
    if (fonts.linkCommand && typeof fonts.linkCommand != "string")
        throw new TypeError("fonts.linkCommand must be a string");
    if (fonts.urls &&
        (!Array.isArray(fonts.urls) ||
            fonts.urls.some((url) => typeof url != "string")))
        throw new TypeError("fonts.urls must be an string array");
    if (fonts.directLinks &&
        (!Array.isArray(fonts.directLinks) ||
            fonts.directLinks.some(({ src, local }) => typeof src != "string" || typeof local != "string")))
        throw new TypeError("fonts.directLinks must be { src: string, local: string }[]");
    if (fonts.files && !fonts.provider)
        throw new Error("fonts.provider must be declared");
    if (fonts.provider && !fontProviderRegExp.test(fonts.provider))
        throw new Error("fonts.provider must be a valid url and include both '{f}' and '{w}'");
}
function validateFigmaConfig() {
    let { figma } = this;
    if (lodash_1.default.isEmpty(figma))
        throw new Error("figma object is not valid");
    if (!figma.accessToken || typeof figma.accessToken != "string")
        throw new Error("figma.accessToken must be a string");
    if (typeof figma.src != "string" || !figmaSrcRegExp.test(figma.src))
        throw new Error("figma.src is not a valid Figma URL or Figma File ID");
    if (!figma.output || typeof figma.output != "string")
        throw new TypeError("figma.output must be a string");
}
function init(thisArg) {
    return {
        validateFonts: validateFonts.bind(thisArg.config),
        validateFigmaConfig: validateFigmaConfig.bind(thisArg.config),
    };
}
exports.default = init;
