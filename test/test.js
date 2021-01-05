const config = {
  patterns: { childContainerTokenIdentifier: /./ },
  figma: { accessToken: "", fileID: "", output: "./" },
};

const x = new (require("figma-dash-core").default)(config);

console.log(x.functions.depth([[]]));
console.log(x.functions.childContainerTokenRegexTest("x"));
console.log(x.functions.parentContainerTokenRegexTest(""));
console.log(x.functions.tokenNameRegexTest(""));
console.log(x.functions.tokenValueRegexTest(""));
console.log(x.path);
console.log(x.config);

try {
  x.exceptionHandler(new Error("eaeeee"), "troxa");
} catch (err) {
  console.log(err.name);
  console.log(err.stack);
  console.log(err.help);
}
