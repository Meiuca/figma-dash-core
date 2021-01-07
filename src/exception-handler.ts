import chalk from "chalk";

export default class FigmaDashError extends Error {
  help?: string;

  constructor(error: Error, help?: string) {
    super(error.message);

    this.name = `FigmaDashError: ${error.name}`;
    this.stack = error.stack;
    this.help = help;

    if (this.stack) {
      this.stack = this.stack.replace(/\n/g, "\n\t");
    }

    if (help) {
      this.stack += `\n\n ${chalk.yellowBright("help")} ${help}\n`;
    }
  }
}
