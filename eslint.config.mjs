import eslint from "@eslint/js";
import * as tseslint from "typescript-eslint";
import nextjs from "@next/eslint-plugin-next";
import prettier from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";
import storybook from "eslint-plugin-storybook";
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      next: nextjs,
      prettier: prettier,
      unusedImports: unusedImports,
      import: importPlugin,
      storybook,
    },
    settings: {
      next: {
        rootDir: ".",
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "next/no-img-element": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/display-name": "off",
      "linebreak-style": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          useTabs: false,
          printWidth: 120,
          trailingComma: "all",
          arrowParens: "avoid",
          proseWrap: "always",
          semi: true,
          tabWidth: 2,
          singleAttributePerLine: true,
          overrides: [
            {
              files: ["*.scss"],
              options: {
                singleQuote: false,
              },
            },
          ],
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
          pathGroups: [
            {
              pattern: "next/**",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "parent",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "never",
        },
      ],
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/.vercel/**",
      "**/coverage/**",
      "**/*.config.js",
      "**/*.config.ts",
      "**/public/**",
      "**/.git/**",
    ],
  },
];
