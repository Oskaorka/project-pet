import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const PageErrorLight: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const PageErrorDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
