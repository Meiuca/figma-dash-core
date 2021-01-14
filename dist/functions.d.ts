import MeiucaEngineCore from "./index";
export default function init(thisArg: MeiucaEngineCore): Functions;
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
    tokenValueRegexExec: (key: string) => RegExpExecArray | null;
    parentContainerTokenRegexExec: (key: string) => RegExpExecArray | null;
    tokenNameRegexExec: (key: string) => RegExpExecArray | null;
    childContainerTokenRegexExec: (key: string) => RegExpExecArray | null;
    parseFigmaSrc: (src: string) => string | null;
}
