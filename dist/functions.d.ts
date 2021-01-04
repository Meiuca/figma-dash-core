import FigmaDashCore from "./index";
declare function tab(count: number): string;
declare function depth(array: any[]): number;
declare function cleanStr(str: string): string;
declare function cleanTokenValue(str: string): string;
declare function parseDeepObj(obj: object): any[];
export default function init(thisArg: FigmaDashCore): {
    tab: typeof tab;
    depth: typeof depth;
    cleanStr: typeof cleanStr;
    cleanTokenValue: typeof cleanTokenValue;
    parseDeepObj: typeof parseDeepObj;
    tokenValueRegexTest: (key: string) => boolean;
    parentContainerTokenRegexTest: (key: string) => boolean;
    tokenNameRegexTest: (key: string) => boolean;
    childContainerTokenRegexTest: (key: string) => boolean;
};
export interface Functions {
    tab: (count: number) => string;
    depth: (array: any[]) => number;
    cleanStr: (str: string) => string;
    cleanTokenValue: (str: string) => string;
    parseDeepObj: (obj: object) => any[];
    tokenValueRegexTest: (key: string) => boolean;
    parentContainerTokenRegexTest: (key: string) => boolean;
    tokenNameRegexTest: (key: string) => boolean;
    childContainerTokenRegexTest: (key: string) => boolean;
}
export {};
