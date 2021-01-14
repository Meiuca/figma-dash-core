import MeiucaEngineCore from "./index";
export default function init(thisArg: MeiucaEngineCore): Validations;
export interface Validations {
    validateFonts: () => void;
    validateFigmaConfig: () => void;
}
