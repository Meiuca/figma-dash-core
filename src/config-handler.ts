import exceptionHandler from "./exception-handler";
import { resolve } from "path";
import packageJson from "../package.json";

var config: FigmaDashConfig & FigmaDashModules;

const parsedName = packageJson.name.split(/-|[A-Z]/);

parsedName.pop();

export const path = resolve(
  process.cwd(),
  `./${parsedName.join("-")}.config.js`
);

export function handle() {
  try {
    if (!config) config = require(path);

    return config;
  } catch (err) {
    exceptionHandler(err, "Try using 'init' first");

    // Node will never reach this part, since exceptionHandler() throws an Error
    return {} as FigmaDashConfig & FigmaDashModules;
  }
}

export interface FigmaDashConfig {
  patterns?: {
    tokenNameIdentifier?: RegExp;
    tokenValueIdentifier?: RegExp;
    parentContainerTokenIdentifier?: RegExp;
    childContainerTokenIdentifier?: RegExp;
  };

  ds?: string;

  figma: {
    accessToken: string;
    fileID: string;
    output: string;
  };

  fonts?: {
    output: string;
    linkCommand?: string;
    provider: string;
    files: boolean;
    urls?: string[];
    directLinks?: {
      src: string;
      local: string;
    }[];
  };
}

export interface FigmaDashModules {
  [module: string]: FigmaDashModule;
}

export interface FigmaDashModule {
  filter?: string | object;

  tokens: {
    output: {
      dir: string;
      extension?: string;
      format?: string;
    };

    files?: {
      destination: string;
      format: string;
      include?: string;
      filter?: string | object;
    }[];
  };
}
