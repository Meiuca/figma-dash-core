import { resolve } from "path";

export const path = resolve(process.cwd(), `./figma-dash.config.js`);

export function handle(): FigmaDashConfig & FigmaDashModules {
  try {
    return require(path);
  } catch (err) {
    throw err;
  }
}

export interface DirectLink {
  src: string;
  local: string;
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
    directLinks?: DirectLink[];
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
