import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/styleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
// import { RouterDecoretor } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/provider/themeProvider/lib/themeContext';
import '../../src/app/styles/index.scss';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator],
        // decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator, RouterDecoretor],
        // decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)],
        // decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
    },
};
export default preview;
