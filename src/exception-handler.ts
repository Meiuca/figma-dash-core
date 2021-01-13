import chalk from "chalk";

export default class MeiucaEngineError extends Error {
  help?: string;

  constructor(error: Error | string, help?: string) {
    if (error instanceof Error) super(error.message);
    else super(error);

    let name = error instanceof Error ? error.name : error;
    let stack = error instanceof Error ? error.stack : this.stack;

    this.name = `MeiucaEngineError: ${name}`;
    this.stack = stack;
    this.help = help;

    if (this.stack) {
      this.stack = this.stack.replace(/\n/g, "\n\t");
    }

    if (help) {
      this.stack += `\n\n ${chalk.yellowBright("help")} ${help}\n`;
    }
  }
}
