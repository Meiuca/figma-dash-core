import { FigmaDashConfig, FigmaDashModules } from "./config-handler";
import FigmaDashError from "./exception-handler";
import { Functions } from "./functions";
import { Validations } from "./validations";
export default class FigmaDashCore {
    config: FigmaDashConfig & FigmaDashModules;
    path: string;
    functions: Functions;
    validations: Validations;
    static FigmaDashError: typeof FigmaDashError;
    constructor(config?: FigmaDashConfig & FigmaDashModules);
}
