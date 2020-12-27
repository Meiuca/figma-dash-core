require("child_process")
  .execFile("../typescript/bin/tsc")
  .addListener("close", () =>
    require("fs").rmSync("./src", { recursive: true })
  );
