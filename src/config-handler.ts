import exceptionHandler from "./exception-handler";
import { resolve } from "path";
import packageJson from "./package.json";

const parsedName = packageJson.name.split(/-|[A-Z]/);

parsedName.pop();

export const path = resolve(
  process.cwd(),
  `./${parsedName.join("-")}.config.js`
);

export function handle(): (FigmaDashConfig & FigmaDashModules) | false {
  try {
    return require(path);
  } catch (err) {
    exceptionHandler(err, "Try using 'init' first");

    return false;
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
  [module: string]: {
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
  };
}
