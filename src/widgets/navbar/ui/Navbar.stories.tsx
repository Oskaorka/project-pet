// import type { Meta, StoryObj } from '@storybook/react';
// import { Theme } from 'app/provider/themeProvider';
// import { MemoryRouter } from 'react-router-dom';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Navbar } from './Navbar';

// const meta: Meta<typeof Navbar> = {
//     title: 'widget/Navbar',
//     component: Navbar,
//     decorators: [(Story) => (<MemoryRouter><Story /></MemoryRouter>)],
// };

// export default meta;
// type Story = StoryObj<typeof Navbar>;

// export const NavbarLight: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.LIGHT)],
// };
// export const NavbarDark: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.DARK)],
// };

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/provider/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
