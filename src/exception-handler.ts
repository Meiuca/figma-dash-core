import chalk from "chalk";
import FigmaDashCore from "./index";

export class FigmaDashError extends Error {
  help?: string;

  constructor(core: FigmaDashCore, message: string, help?: string) {
    super(message);

    this.help = help;

    if (this.stack) {
      this.stack = this.stack.replace(/\n/g, "\n" + core.functions.tab(1));
    }

    if (help) {
      this.stack += `${chalk.yellowBright("\n\n help")} ${help}\n`;
    }
  }
}

export default function (this: FigmaDashCore, error: Error, help?: string) {
  throw new FigmaDashError(this, error.message, help);
}
