import PhocaItem from './PhocaItem';

/**@type{import('@storybook/react').Meta} */
export default {
  title: 'Components/PhocaItem',
  component: PhocaItem,
};

const Template = (args) => <PhocaItem {...args} />;

/**@type{import('@storybook/react').StoryObj} */
export const Default = {
  args: {
    title: '샘플 타이틀',
    altText: '샘플 아티스트 로고',
    likes: 123,
    imgUrl: '../../../public/blackPink.jpeg',
  },
};
