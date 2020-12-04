const exceptionHandler = require("./exception-handler");
const path = require("path");
const packageJson = require("./package.json");

const parsedName = packageJson.name.split(/-|[A-Z]/);

parsedName.pop();

exports.path = path.resolve(
  process.cwd(),
  `./${parsedName.join("-")}.config.js`
);

exports.handle = () => {
  try {
    return require(exports.path);
  } catch (err) {
    exceptionHandler(err, "Try using 'init' first");
  }
};
