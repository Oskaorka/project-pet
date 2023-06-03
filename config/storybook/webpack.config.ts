// import path from 'path';
// // import webpack from 'webpack';
// import webpack, { RuleSetRule } from 'webpack';

// import { buildCssLoader } from '../build/loaders/buildCssLoader';
// import { BuildPaths } from '../build/types/config';

// export default ({ config }:{config: webpack.Configuration}) => {
//     const paths: BuildPaths = {
//         build: '',
//         html: '',
//         entry: '',
//         src: path.resolve(__dirname, '..', '..', 'src'),
//     };

//     config.resolve?.modules?.push(paths.src);
//     config.resolve?.extensions?.push('.ts', '.tsx');

//     // if (config.module?.rules) {
//     //     // eslint-disable-next-line no-param-reassign
//     //     config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | '...') => {
//     //         if (rule !== '...' && /svg/.test(rule.test as string)) {
//     //             return { ...rule, exclude: /\.svg$/i };
//     //         }

//     //         return rule;
//     //     });
//     // }
//     // if (config.module?.rules) {
//     //     // eslint-disable-next-line max-len
//     //     const fileLoaderRule: any = config.module.rules.find((rule: webpack.RuleSetRule | any) => rule.test?.test('.svg') as string);
//     //     fileLoaderRule.exclude = /\.svg$/;
//     // }
//     // if (config.module?.rules) {
//     //     config.module.rules
//     //     //     // eslint-disable-next-line no-param-reassign
//     //         .filter((rule: any) => rule.test.test('.svg'))
//     //         // eslint-disable-next-line no-return-assign, no-param-reassign
//     //         .forEach((rule: webpack.RuleSetRule | any) => rule.exclude = /\.svg$/i);

//     //     // add SVGR instead
//     //     config.module.rules.push({
//     //         test: /\.svg$/,
//     //         use: [
//     //             {
//     //                 loader: '@svgr/webpack',
//     //             },
//     //             {
//     //                 loader: 'file-loader',
//     //                 options: {
//     //                     name: 'static/media/[path][name].[ext]',
//     //                 },
//     //             },
//     //         ],
//     //         type: 'javascript/auto',
//     //         issuer: {
//     //             and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
//     //         },
//     //     });
//     // }

//     // config.module?.rules?.push({
//     //     test: /\.svg$/,
//     //     use: ['@svg/webpack'],
//     // });

//     // config.module?.rules?.push(buildCssLoader(true));

//     // eslint-disable-next-line no-param-reassign
//     if (config.module?.rules) {
//         // eslint-disable-next-line no-param-reassign
//         config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
//             if (rule !== '...' && /svg/.test(rule.test as string)) {
//                 return { ...rule, exclude: /\.svg$/i };
//             }

//             return rule;
//         });
//         config.module.rules.push({
//             test: /\.svg$/,
//             use: ['@svgr/webpack'],
//         });
//         config.module.rules.push(buildCssLoader(true));
//     }
//     // config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
//     //     if (/svg/.test(rule.test as string)) {
//     //         return { ...rule, exclude: /\.svg$/i };
//     //     }

//     //     return rule;
//     // });

//     return config;
// };

import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    // if (config.module?.rules) {
    //     config.resolve.modules.push(paths.src);
    //     config.resolve.extensions.push('.ts', '.tsx');

    //     // eslint-disable-next-line no-param-reassign
    //     config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    //         if (/svg/.test(rule.test as string)) {
    //             return { ...rule, exclude: /\.svg$/i };
    //         }

    //         return rule;
    //     });

    //     config.module.rules.push({
    //         test: /\.svg$/,
    //         use: ['@svgr/webpack'],
    //     });
    //     config.module.rules.push(buildCssLoader(true));

    //     return config;
    // }
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
            if (rule !== '...' && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config.module.rules.push(buildCssLoader(true));
    }
    return config;
};
