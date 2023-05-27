// import 'app/styles/index.scss';

import { Decorator } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';

export const ThemeDecorator = (theme : Theme) : Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>

);
// <ThemeProvider>
// { /* </ThemeProvider> */ }
// export default ThemeDecorator;
