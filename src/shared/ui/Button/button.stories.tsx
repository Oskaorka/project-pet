import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    // argTypes: {
    //     children: { control: { type: 'string' } },
    // },

    // tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};
// decorators: [ThemeDecorator(Theme.DARK)],

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'TEXT',
    },

    decorators: [ThemeDecorator(Theme.LIGHT)],
};
// Primary.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimaryDark: Story = {
    args: {
        children: 'TEXT',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
// Primary.decorators = [ThemeDecorator(Theme.DARK)];
export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'TEXT',
    },

};

export const Clear: Story = {
    args: {
        children: 'TEXT',
        theme: ThemeButton.CLEAR,
    },
};
