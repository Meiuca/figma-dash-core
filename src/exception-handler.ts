import chalk from "chalk";
import { tab } from "./functions";

export default function (error: Error, help?: string) {
  error.stack =
    (error.stack || "undefined\n").replace(/\n/g, "\n" + tab(1)) +
    (help ? `${chalk.yellowBright("\n\n help")} ${help}\n` : "");

  Object.defineProperty(error, "help", { value: help });

  throw error;
}
