require("child_process")
  .execFile("node", ["../typescript/lib/tsc"], {
    cwd: process.cwd(),
    shell: true,
    windowsHide: true,
  })
  .addListener("close", () =>
    require("fs").rmSync("./src", { recursive: true })
  );
