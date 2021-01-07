import {
  FigmaDashConfig,
  FigmaDashModules,
  handle,
  path,
} from "./config-handler";

import FigmaDashError from "./exception-handler";

import InitFunctions, { Functions } from "./functions";

import InitValidations, { Validations } from "./validations";

export default class FigmaDashCore {
  config: FigmaDashConfig & FigmaDashModules;
  path: string;
  functions: Functions;
  validations: Validations;

  static FigmaDashError = FigmaDashError;

  constructor(config?: FigmaDashConfig & FigmaDashModules) {
    try {
      this.config = config || handle();
    } catch (err) {
      throw new FigmaDashError(err, "Try 'init' first");
    }

    this.path = path;
    this.functions = InitFunctions(this);
    this.validations = InitValidations(this);
  }
}
