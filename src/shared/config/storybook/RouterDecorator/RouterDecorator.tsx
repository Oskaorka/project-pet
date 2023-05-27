import { Decorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
// dont add in app... no work!! (((
export const RouterDecorator = () : Decorator => (Story) => (
    <MemoryRouter>
        <Story />
    </MemoryRouter>
);
