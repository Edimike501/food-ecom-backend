import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import tseslint from "typescript-eslint";
// import tsPlugin from "ts";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Apply to all JS/TS files
    languageOptions: {
      globals: globals.node,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021, // Match es2021 environment
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    rules: {
      "no-console": "warn",
      "no-eval": "error",
      eqeqeq: ["error", "always"],

      // ...rules,
      "no-unused-vars": "off", // Disable base ESLint no-unused-vars rule
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error" based on your preference
        {
          args: "all",
          argsIgnorePattern: "^_", // Ignore variables starting with _
          varsIgnorePattern: "^_" // Ignore variables starting with _
        }
      ],
      "no-undef": "error",

      "no-constant-condition": "warn",
      "no-duplicate-imports": "error",
      "no-useless-constructor": "error",
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true }
      ]
    }
    /*  env: {
      node: true,
      es2021: true
    } */
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
  // .map((config) => ({
  //   ...config,
  //   files: ["**/*.ts"], // Ensure TypeScript rules apply only to .ts files
  //   rules: {
  //     ...config.rules,
  //     "no-console": "warn" // Ensure no-console is not overridden
  //   }
  // }))
];
