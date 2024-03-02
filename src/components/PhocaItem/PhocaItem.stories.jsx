import PhocaItem from './PhocaItem';
import { BrowserRouter as Router } from 'react-router-dom';

/**@type{import('@storybook/react').Meta} */
export default {
  title: 'Components/PhocaItem',
  component: PhocaItem,
};

const Template = (args) => (
  <Router>
    <PhocaItem {...args} />
  </Router>
);

/**@type{import('@storybook/react').StoryObj} */
export const Default = {};
