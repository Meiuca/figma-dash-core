import MeiucaEngineCore from "./index";
export default function init(thisArg: MeiucaEngineCore): {
    validateFonts: () => void;
    validateFigmaConfig: () => void;
};
export interface Validations {
    validateFonts: () => void;
    validateFigmaConfig: () => void;
}
