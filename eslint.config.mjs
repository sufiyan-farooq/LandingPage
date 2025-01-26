import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Match JavaScript/TypeScript files
    languageOptions: {
      ecmaVersion: 2021, // Modern JavaScript features
      sourceType: "module", // Enable ES modules
    },
    rules: {
      // Add custom rules here
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
];

export default eslintConfig;
