import {
  MeiucaEngineConfig,
  MeiucaEngineModules,
  handle,
  getPath,
} from "./config-handler";

import MeiucaEngineError from "./exception-handler";

import InitFunctions, { Functions } from "./functions";

import InitValidations, { Validations } from "./validations";

export { default as MeiucaEngineError } from "./exception-handler";

export default class MeiucaEngineCore {
  config: MeiucaEngineConfig & MeiucaEngineModules;
  path: string;
  functions: Functions;
  validations: Validations;

  constructor(config?: MeiucaEngineConfig & MeiucaEngineModules) {
    try {
      this.config = handle(config);
    } catch (err) {
      throw new MeiucaEngineError(err, "Try 'init' first");
    }

    this.path = getPath();
    this.functions = InitFunctions(this);
    this.validations = InitValidations(this);
  }
}
