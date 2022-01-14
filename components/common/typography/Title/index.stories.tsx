import { Meta } from '@storybook/react/types-6-0';
import { Title } from '.';

export default {
  title: 'Title',
  component: Title
} as Meta;

export const TitleH1 = () => <Title type="h1">Example Title</Title>;

export const TitleH2 = () => <Title type="h2">Example Title</Title>;

export const TitleH3 = () => <Title type="h3">Example Title</Title>;

export const WhiteTitle = () => (
  <Title type="h3" color="white">
    Example Title
  </Title>
);
