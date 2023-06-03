// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import webpack from 'webpack';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// import { BuildOptions } from './types/config';

// export function buildPlagins({
//     paths,
//     isDev,
// }: BuildOptions): webpack.WebpackPluginInstance[] {
//     return [
//         new HtmlWebpackPlugin({
//             template: paths.html,
//         }),
//         new webpack.ProgressPlugin(),
//         new MiniCssExtractPlugin({
//             filename: 'css/[name].[contenthash:8].css',
//             chunkFilename: 'css/[name].[contenthash:8].css',
//         }),
//         new webpack.DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
//         new webpack.HotModuleReplacementPlugin(
//             isDev
//         && [
//             new ReactRefreshWebpackPlugin(),
//             new webpack.HotModuleReplacementPlugin(),
//         ].filter(Boolean),
//         ),
//         new BundleAnalyzerPlugin({ openAnalyzer: false }),
//     ];
// }

import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }

    return plugins;
}
