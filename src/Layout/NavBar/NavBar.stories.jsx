import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';

/**@type{import('@storybook/react').Meta} */
export default {
  title: 'Components/NavBar',
  component: NavBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
