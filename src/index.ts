import {
  FigmaDashConfig,
  FigmaDashModules,
  handle,
  path,
} from "./config-handler";

import InitExceptionHandler, {
  ExceptionHandler,
  FigmaDashError,
} from "./exception-handler";

import InitFunctions, { Functions } from "./functions";

import InitValidations, { Validations } from "./validations";

export default class FigmaDashCore {
  config: FigmaDashConfig & FigmaDashModules;
  path: string;
  exceptionHandler: ExceptionHandler;
  Functions: Functions;
  Validations: Validations;
  FigmaDashError = FigmaDashError;

  constructor(config?: FigmaDashConfig & FigmaDashModules) {
    let error;
    try {
      this.config = config || handle();
    } catch (err) {
      error = err;

      this.config = {} as FigmaDashConfig & FigmaDashModules;
    }

    this.path = path;
    this.exceptionHandler = InitExceptionHandler(this);
    this.Functions = InitFunctions(this);
    this.Validations = InitValidations(this);

    if (error) {
      this.exceptionHandler(error, "Try 'init' first");
    }
  }
}
