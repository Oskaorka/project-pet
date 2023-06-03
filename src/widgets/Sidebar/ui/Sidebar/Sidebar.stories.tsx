// import type { Meta, StoryObj } from '@storybook/react';
// import { Theme } from 'app/provider/themeProvider';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Sidebar } from './Sidebar';

// const meta: Meta<typeof Sidebar> = {
//     title: 'widget/Sidebar',
//     component: Sidebar,
// };

// export default meta;
// type Story = StoryObj<typeof Sidebar>;

// export const Light: Story = {
//     args: {
//     },

//     decorators: [ThemeDecorator(Theme.LIGHT)],
// };
// export const Dark: Story = {
//     args: {
//     },
//     decorators: [ThemeDecorator(Theme.DARK)],
// };

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
