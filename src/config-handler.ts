import { resolve } from "path";

export function getPath() {
  return resolve(process.cwd(), `./figma-dash.config.js`);
}

export function handle(): FigmaDashConfig & FigmaDashModules {
  return require(getPath());
}

export interface DirectLink {
  src: string;
  local: string;
}

export interface FigmaDashConfig {
  globals: {
    ds?: string;

    tokenNameModel?: "classic" | "inverted";

    patterns?: {
      tokenNameIdentifier?: RegExp;
      tokenValueIdentifier?: RegExp;
      parentContainerTokenIdentifier?: RegExp;
      childContainerTokenIdentifier?: RegExp;
    };
  };

  figma: {
    accessToken: string;
    src: string;
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
