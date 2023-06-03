// import 'app/styles/index.scss';

// import { Decorator } from '@storybook/react';
// import { Theme } from 'app/provider/themeProvider';

// export const ThemeDecorator = (theme : Theme) : Decorator => (Story) => (
//     <div className={`app ${theme}`}>
//         <Story />
//     </div>

// );
// <ThemeProvider>
// { /* </ThemeProvider> */ }
// export default ThemeDecorator;

import { Story } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
// import { Theme } from 'app/provider/ThemeProvider';
// import { Theme } from 'app/provider/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
