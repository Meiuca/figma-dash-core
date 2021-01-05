import {
  FigmaDashConfig,
  FigmaDashModules,
  handle,
  path,
} from "./config-handler";

import ExceptionHandler, { FigmaDashError } from "./exception-handler";

import InitFunctions, { Functions } from "./functions";

import InitValidations, { Validations } from "./validations";

export default class FigmaDashCore {
  config: FigmaDashConfig & FigmaDashModules;
  path: string;
  exceptionHandler = ExceptionHandler;
  functions: Functions;
  validations: Validations;

  static FigmaDashError = FigmaDashError;

  constructor(config?: FigmaDashConfig & FigmaDashModules) {
    try {
      this.config = config || handle();
    } catch (err) {
      this.exceptionHandler(err, "Try 'init' first");

      // Node will never reach this line, since `this.exceptionHandler` throws a `FigmaDashError`
      this.config = {} as FigmaDashConfig & FigmaDashModules;
    }

    this.path = path;
    this.functions = InitFunctions(this);
    this.validations = InitValidations(this);
  }
}
