// import type { Meta, StoryObj } from '@storybook/react';
// import { Theme } from 'app/provider/themeProvider';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import MainPage from './MainPage';

// const meta: Meta<typeof MainPage> = {
//     title: 'pages/MainPage',
//     component: MainPage,
//     decorators: [ThemeDecorator(Theme.LIGHT)],
// };

// export default meta;
// type Story = StoryObj<typeof MainPage>;

// export const Normal: Story = {
//     args: {},
// };
// export const Dark: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.DARK)],
// };
// import { Theme } from 'app/providers/ThemeProvider';

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
