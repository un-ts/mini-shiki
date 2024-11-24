import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/shiki.ts",
    output: {
      dir: "./dist",
      entryFileNames: "shiki.js",
      format: "esm",
    },
    external: [
      "@shikijs/vscode-textmate",
      "@shikijs/engine-oniguruma",
      "@shikijs/types",
    ],
    plugins: [typescript(), nodeResolve()],
  },
];
