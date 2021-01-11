import FigmaDashCore from "./index";
export default function init(thisArg: FigmaDashCore): {
    validateFonts: () => void;
    validateFigmaConfig: () => void;
};
export interface Validations {
    validateFonts: () => void;
    validateFigmaConfig: () => void;
}
