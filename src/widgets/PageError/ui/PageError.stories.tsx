// import type { Meta, StoryObj } from '@storybook/react';
// import { Theme } from 'app/provider/themeProvider';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { PageError } from './PageError';

// const meta: Meta<typeof PageError> = {
//     title: 'widget/PageError',
//     component: PageError,
// };

// export default meta;
// type Story = StoryObj<typeof PageError>;

// export const PageErrorLight: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.LIGHT)],
// };
// export const PageErrorDark: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.DARK)],
// };
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/provider/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
