import { merge } from "lodash";
import { resolve } from "path";

export function getPath() {
  return resolve(process.cwd(), `./figma-dash.config.js`);
}

export function handle(config?: FigmaDashConfig & FigmaDashModules) {
  if (!config) {
    config = require(getPath());
  }

  let defaultConfig = {
    globals: {
      patterns: {
        tokenNameIdentifier: /^\$/,
        tokenValueIdentifier: /^#|^--|\d+(?=px|rem|em|%|\.\d+)/,
        parentContainerTokenIdentifier: /^:{2}/,
        childContainerTokenIdentifier: /(\w+):\W*(\w+)/,
      },
    },
  };

  return merge(defaultConfig, config) as FigmaDashConfig & FigmaDashModules;
}

export interface DirectLink {
  src: string;
  local: string;
}

export interface Globals {
  ds?: string;

  tokenNameModel?: "classic" | "inverted";

  patterns: {
    tokenNameIdentifier: RegExp;
    tokenValueIdentifier: RegExp;
    parentContainerTokenIdentifier: RegExp;
    childContainerTokenIdentifier: RegExp;
  };
}

export interface FigmaDashConfig {
  globals: Globals;

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
