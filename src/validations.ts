import lodash from "lodash";
import FigmaDashCore from "./index";

function validateFonts(this: FigmaDashCore) {
  let {
    config: { fonts },
  } = this;

  if (!fonts) throw new Error("fonts object is not valid");

  if (typeof fonts.output != "string")
    throw new TypeError("fonts.output must be declared and must be a string");

  if (fonts.linkCommand && typeof fonts.linkCommand != "string")
    throw new TypeError("fonts.linkCommand must be a string");

  if (fonts.files && !fonts.provider)
    throw new TypeError("fonts.provider must be declared");

  if (typeof fonts.provider != "string" || !fonts.provider.includes("http"))
    throw new Error("fonts.provider is not a valid url");

  if (!fonts.provider.includes("{f}"))
    throw new SyntaxError("fonts.provider must include '{f}'");

  if (!fonts.provider.includes("{w}"))
    throw new SyntaxError("fonts.provider must include '{w}'");

  if (
    fonts.urls &&
    (!Array.isArray(fonts.urls) ||
      fonts.urls.some((url) => typeof url != "string"))
  )
    throw new TypeError("fonts.urls must be an string array");

  if (
    fonts.directLinks &&
    (!Array.isArray(fonts.directLinks) ||
      fonts.directLinks.some(
        ({ src, local }) => typeof src != "string" || typeof local != "string"
      ))
  )
    throw new TypeError(
      "fonts.directLinks must be { src: string, local: string }[]"
    );
}

function validateFigmaConfig(this: FigmaDashCore) {
  let {
    config: { figma },
  } = this;

  if (lodash.isEmpty(figma)) throw new Error("figma object is not valid");

  if (typeof figma.accessToken != "string")
    throw new TypeError("figma.accessToken must be a string");

  if (!figma.src || !/(figma\.com\/file\/.+\/)|(^\w+$)/.test(figma.src))
    throw new TypeError("figma.src is not a valid Figma URL or Figma File ID");

  if (typeof figma.output != "string")
    throw new TypeError("figma.output must be a string");
}

export default function init(thisArg: FigmaDashCore) {
  return {
    validateFonts: validateFonts.bind(thisArg),
    validateFigmaConfig: validateFigmaConfig.bind(thisArg),
  };
}

export interface Validations {
  validateFonts: () => void;
  validateFigmaConfig: () => void;
}
