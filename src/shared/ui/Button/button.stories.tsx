// import type { Meta, StoryObj } from '@storybook/react';
// import { Theme } from 'app/provider/themeProvider';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Button, ThemeButton } from './button';

// const meta: Meta<typeof Button> = {
//     title: 'shared/Button',
//     component: Button,
//     // argTypes: {
//     //     children: { control: { type: 'string' } },
//     // },

//     // tags: ['autodocs'],
//     // argTypes: {
//     //     backgroundColor: { control: 'color' },
//     // },
// };
// // decorators: [ThemeDecorator(Theme.DARK)],

// export default meta;
// type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//     args: {
//         children: 'TEXT',
//     },

//     decorators: [ThemeDecorator(Theme.LIGHT)],
// };
// // Primary.decorators = [ThemeDecorator(Theme.DARK)];
// export const PrimaryDark: Story = {
//     args: {
//         children: 'TEXT',
//     },
//     decorators: [ThemeDecorator(Theme.DARK)],
// };
// // Primary.decorators = [ThemeDecorator(Theme.DARK)];
// export const Outline: Story = {
//     args: {
//         theme: ThemeButton.OUTLINE,
//         children: 'TEXT',
//     },

// };

// export const Clear: Story = {
//     args: {
//         children: 'TEXT',
//         theme: ThemeButton.CLEAR,
//     },
// };

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
