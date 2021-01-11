import {
  FigmaDashConfig,
  FigmaDashModules,
  handle,
  getPath,
} from "./config-handler";

import FigmaDashError from "./exception-handler";

import InitFunctions, { Functions } from "./functions";

import InitValidations, { Validations } from "./validations";

export { default as FigmaDashError } from "./exception-handler";

export default class FigmaDashCore {
  config: FigmaDashConfig & FigmaDashModules;
  path: string;
  functions: Functions;
  validations: Validations;

  constructor(config?: FigmaDashConfig & FigmaDashModules) {
    try {
      this.config = config || handle();

      if (!this.config.globals) this.config.globals = {};
    } catch (err) {
      throw new FigmaDashError(err, "Try 'init' first");
    }

    this.path = getPath();
    this.functions = InitFunctions(this);
    this.validations = InitValidations(this);
  }
}
