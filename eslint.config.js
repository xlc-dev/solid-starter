import tseslint from "typescript-eslint";
import solid from "eslint-plugin-solid";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default tseslint.config(
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  solid.configs["flat/typescript"],
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          useTabs: false,
          tabWidth: 2,
          singleQuote: false,
          semi: true,
          trailingComma: "es5",
          bracketSameLine: true,
          printWidth: 99,
          endOfLine: "lf",
          plugins: ["prettier-plugin-tailwindcss"],
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/prefer-readonly": "warn",
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/await-thenable": "error",
    },
  }
);
