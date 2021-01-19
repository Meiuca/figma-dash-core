import { merge } from "lodash";
import { resolve } from "path";

export function getPath() {
  return resolve(process.cwd(), `./meiuca-engine.config.js`);
}

export function handle(config?: MeiucaEngineUserConfig & MeiucaEngineModules) {
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
      tokenNameModel: "classic",
    },
    figma: {
      output: "./tokens/",
    },
    fonts: {
      files: true,
      output: "./assets/",
      provider: "https://fonts.googleapis.com/css2?family={f}:wght@{w}",
    },
  };

  return merge(defaultConfig, config) as MeiucaEngineConfig &
    MeiucaEngineModules;
}

export interface DirectLink {
  src: string;
  local: string;
}

export interface Globals {
  ds?: string;

  tokenNameModel: "classic" | "inverted";

  patterns: {
    tokenNameIdentifier: RegExp;
    tokenValueIdentifier: RegExp;
    parentContainerTokenIdentifier: RegExp;
    childContainerTokenIdentifier: RegExp;
  };
}

export interface MeiucaEngineConfig {
  globals: Globals;

  figma: {
    accessToken: string;
    src: string;
    output: string;
  };

  fonts: {
    output: string;
    linkCommand?: string;
    provider: string;
    files: boolean;
    urls?: string[];
    directLinks?: DirectLink[];
  };
}

export interface MeiucaEngineModules {
  [module: string]: MeiucaEngineModule;
}

export interface MeiucaEngineModule {
  tokens: {
    filter?: string | object;
    transforms?: string[];
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

export interface UserGlobals {
  ds?: string;

  tokenNameModel?: "classic" | "inverted";

  patterns?: {
    tokenNameIdentifier?: RegExp;
    tokenValueIdentifier?: RegExp;
    parentContainerTokenIdentifier?: RegExp;
    childContainerTokenIdentifier?: RegExp;
  };
}

export interface MeiucaEngineUserConfig {
  globals: UserGlobals;

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
