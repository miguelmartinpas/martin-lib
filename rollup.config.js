import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    postcss({
      plugins: [],
      extract: true,
      extract: "styles.css",
    }),
    typescript({
      typescript: require("typescript"),
    }),
  ],
};
