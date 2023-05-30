// import { Story } from '@storybook/react';
import { Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
