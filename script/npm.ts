import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./main.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "@sooboy/format",
    version: Deno.args[0],
    description: "stock format",
  },
//   postBuild() {
//     // steps to run after building and before running the tests
//     Deno.copyFileSync("LICENSE", "npm/LICENSE");
//     Deno.copyFileSync("README.md", "npm/README.md");
//   },
});