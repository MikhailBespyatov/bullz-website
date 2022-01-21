import { Meta } from '@storybook/react/types-6-0';
import { Title } from '.';

export default {
  title: 'Title',
  component: Title,
  decorators: [Story => <Story />]
} as Meta;

export const Titles = () => (
  <>
    <Title type="h1"> H1 Title Example</Title>
    <br />
    <br />
    <Title type="h2"> H2 Title Example</Title>
    <br />
    <br />
    <Title type="h3"> H3 Title Example</Title>
    <br />
    <br />
    <Title type="h3" color="white">
      H3 White Title Example
    </Title>
  </>
);
