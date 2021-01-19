export declare function getPath(): string;
export declare function handle(config?: MeiucaEngineUserConfig & MeiucaEngineModules): MeiucaEngineConfig & MeiucaEngineModules;
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
