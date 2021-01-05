import FigmaDashCore from "./index";
export declare class FigmaDashError extends Error {
    help?: string;
    constructor(core: FigmaDashCore, message: string, help?: string);
}
export default function (this: FigmaDashCore, error: Error, help?: string): void;
