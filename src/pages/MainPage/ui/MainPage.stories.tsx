import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
