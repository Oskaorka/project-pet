import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],

};
