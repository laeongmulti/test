import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: { prettier: prettierPlugin },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      // "no-unsed-vars": "warn",
      // "no-console": "warn",
    },
  },

  pluginVue.configs["flat/essential"],

  {
    files: ["**/*.{html,css,json,md}"],
    plugins: { prettier: prettierPlugin },
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
