import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["..\\public"],
  storyIndexers: [
    {
      test: /\.(stories)\.[tj]sx?$/,
      indexer: async (fileName, options) => {
        const { default: storyModuleExports } = await options.storyIndexGenerator.importFn(fileName);
        const title = `Common/${path.basename(fileName).replace(/\.stories\.[tj]sx?$/, "")}`;
        return {
          title,
          id: path.relative(process.cwd(), fileName).replace(/\\/g, "-"),
          name: storyModuleExports.default?.title ?? title,
          importPath: fileName,
        };
      },
    },
  ],
};
export default config;
