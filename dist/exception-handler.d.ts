export default class MeiucaEngineError extends Error {
    help?: string;
    constructor(error: Error | string, help?: string);
}
