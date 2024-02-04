// import standardConfig from 'prettier-config-standard'
/** @type {import("prettier").Config} */
export default {
  // ...standardConfig,
  // useTabs: true,
  singleQuote: true,
  trailingComma: "none",
  semi: false,
  // printWidth: 100,
  // tabWidth: 2,
  // pluginSearchDirs: false,
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
