// import type { Meta, StoryObj } from '@storybook/react';
// import { Theme } from 'app/provider/themeProvider';
// import { MemoryRouter } from 'react-router-dom';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { AppLink, AppLinkTheme } from './AppLink';

// const meta: Meta<typeof AppLink> = {
//     title: 'shared/AppLink',
//     component: AppLink,
//     decorators: [(Story) => (<MemoryRouter><Story /></MemoryRouter>)],
// };

// export default meta;
// type Story = StoryObj<typeof AppLink>;

// export const Primary: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.PRIMARY,
//     },
// };

// export const Secondary: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.SECONDARY,
//     },

// };
// export const Red: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.RED,
//     },
// };

// export const PrimaryDark: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.PRIMARY,
//     },
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const SecondaryDark: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.SECONDARY,
//     },
// };
// SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const RedDark: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.RED,
//     },
// };
// RedDark.decorators = [ThemeDecorator(Theme.DARK)];

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
