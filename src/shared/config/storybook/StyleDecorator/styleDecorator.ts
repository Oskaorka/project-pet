// import 'app/styles/index.scss';
// import { Decorator } from '@storybook/react';

// // import { Decorator } from '@storybook/react';

// export const StyleDecorator: Decorator = (Story) => Story();
// const TestDecorator: Decorator = (Story) => <Story />;
// export default StyleDecorator;

// export const TestDecorator: Decorator = (Story) => Story();

// export default TestDecorator;

import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();
