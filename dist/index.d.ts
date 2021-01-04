import { FigmaDashConfig, FigmaDashModules } from "./config-handler";
import { ExceptionHandler, FigmaDashError } from "./exception-handler";
import { Functions } from "./functions";
import { Validations } from "./validations";
export default class FigmaDashCore {
    config: FigmaDashConfig & FigmaDashModules;
    path: string;
    exceptionHandler: ExceptionHandler;
    Functions: Functions;
    Validations: Validations;
    FigmaDashError: typeof FigmaDashError;
    constructor(config?: FigmaDashConfig & FigmaDashModules);
}
