import chalk from "chalk";
import FigmaDashCore from "./index";

export class FigmaDashError extends Error {
  help?: string;

  constructor(core: FigmaDashCore, message: string, help?: string) {
    super(message);

    this.help = help;

    if (this.stack) {
      this.stack = this.stack.replace(/\n/g, "\n" + core.Functions.tab(1));
    }

    if (help) {
      this.stack += `${chalk.yellowBright("\n\n help")} ${help}\n`;
    }
  }
}

function handler(this: FigmaDashCore, error: Error, help?: string) {
  throw new FigmaDashError(this, error.message, help);
}

export default function init(thisArg: FigmaDashCore) {
  return handler.bind(thisArg);
}

export type ExceptionHandler = (
  error: Error,
  help?: string | undefined
) => void;
