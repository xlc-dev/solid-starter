import tseslint from "typescript-eslint";
import solid from "eslint-plugin-solid";

export default tseslint.config(
  tseslint.configs.strict,
  tseslint.configs.stylistic,

  solid.configs["flat/typescript"],

  {
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  }
);
