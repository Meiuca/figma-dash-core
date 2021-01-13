export declare function getPath(): string;
export declare function handle(config?: MeiucaEngineConfig & MeiucaEngineModules): MeiucaEngineConfig & MeiucaEngineModules;
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
export interface MeiucaEngineConfig {
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
export interface MeiucaEngineModules {
    [module: string]: MeiucaEngineModule;
}
export interface MeiucaEngineModule {
    filter?: string | object;
    transforms?: string[];
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
