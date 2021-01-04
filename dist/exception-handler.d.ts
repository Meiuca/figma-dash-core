import FigmaDashCore from "./index";
export declare class FigmaDashError extends Error {
    help?: string;
    constructor(core: FigmaDashCore, message: string, help?: string);
}
export default function init(thisArg: FigmaDashCore): (error: Error, help?: string | undefined) => void;
export declare type ExceptionHandler = (error: Error, help?: string | undefined) => void;
