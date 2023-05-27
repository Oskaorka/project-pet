import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        // '@storybook-addonreact-router-v6',
        // {
    //     name: '@storybook/addon-essentials',
    //     options: {
    //         backgrounds: false,
    //     },
    // },
    // '@storybook/addon-links',
    // '@storybook/addon-styling',
    // '@storybook/addon-interactions',
    // '../build/buildLoaders.ts',
    // '@storybook/preset-scss',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    // features: {
    //     buildStoriesJson: true,
    // },
    docs: {
        autodocs: 'tag',
    },

    // allows you to alter the webpack config of the Storybook manager
    // managerWebpack: async (config, options) =>
    // // update webpack config to support sass files here
    //     config,
    // features: {
    //     buildStoriesJson: true,
    // },
    // docs: {
    //     autodocs: 'tag',
    // },
};
export default config;
