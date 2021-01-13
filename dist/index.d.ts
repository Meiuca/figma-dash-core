import { MeiucaEngineConfig, MeiucaEngineModules } from "./config-handler";
import { Functions } from "./functions";
import { Validations } from "./validations";
export { default as MeiucaEngineError } from "./exception-handler";
export default class MeiucaEngineCore {
    config: MeiucaEngineConfig & MeiucaEngineModules;
    path: string;
    functions: Functions;
    validations: Validations;
    constructor(config?: MeiucaEngineConfig & MeiucaEngineModules);
}
