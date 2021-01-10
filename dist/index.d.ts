import { FigmaDashConfig, FigmaDashModules } from "./config-handler";
import { Functions } from "./functions";
import { Validations } from "./validations";
export { default as FigmaDashError } from "./exception-handler";
export default class FigmaDashCore {
    config: FigmaDashConfig & FigmaDashModules;
    path: string;
    functions: Functions;
    validations: Validations;
    constructor(config?: FigmaDashConfig & FigmaDashModules);
}
