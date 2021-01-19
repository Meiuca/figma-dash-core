const x = new (require("../dist").default)();

console.log(x.functions.depth([[]]));
console.log(x.functions.childContainerTokenRegexTest("x"));
console.log(x.functions.parentContainerTokenRegexTest(""));
console.log(x.functions.tokenNameRegexTest(""));
console.log(x.functions.tokenValueRegexTest("#fff"));
console.log(x.path);
console.log(x.config);

x.validations.validateFigmaConfig();
x.validations.validateFonts();

console.log(x.functions.parseFigmaSrc(x.config.figma.src));

console.log(new (require("../dist").MeiucaEngineError)(new Error()).help);
