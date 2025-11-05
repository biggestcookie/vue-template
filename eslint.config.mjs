import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import typescriptEslint from "typescript-eslint";
import { defineConfig } from "vite";

export default defineConfig([
  includeIgnoreFile(".gitignore"),
  {
    ignores: ["**/*.d.ts", "**/coverage", "**/dist", "**/node_modules"],
  },
  eslint.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...eslintPluginVue.configs["flat/recommended"],
  {
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "no-console": [
        "error",
        {
          allow: ["info", "warn", "error"],
        },
      ],
      "vue/multi-word-component-names": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@tyescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-types": "warn",
    },
  },
  eslintConfigPrettier,
]);
