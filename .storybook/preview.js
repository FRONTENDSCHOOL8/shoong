/** @type { import('@storybook/react').Preview } */
import '../src/styles/tailwind.css';
import { MemoryRouter } from 'react-router-dom';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
