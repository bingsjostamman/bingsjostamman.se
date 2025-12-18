import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["public/", "processed/", "prebuilt/"],
  },

  js.configs.recommended,

  {
    files: ["src/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "import/order": ["warn", { "newlines-between": "always" }],
    },
  },
];
