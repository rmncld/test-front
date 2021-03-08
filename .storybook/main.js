// .storybook/main.js

const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: { modules: true }
      }
    },
  ],
  webpackFinal: async (config) => {
    // this sets the default path for modules
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    config.module.rules.map(rule => {
      if (rule.test instanceof RegExp && rule.test.toString() === '/\\.s[ca]ss$/') {
        rule.use.push({
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: [
              path.resolve(__dirname, '../src/assets/styles/main.scss'),
            ]
          }
        })
      }
      return rule
    })
    return config;
  },
}
