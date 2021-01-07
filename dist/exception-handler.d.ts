export default class FigmaDashError extends Error {
    help?: string;
    constructor(error: Error, help?: string);
}
