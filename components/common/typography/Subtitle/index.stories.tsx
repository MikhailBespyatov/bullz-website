import { Meta } from '@storybook/react/types-6-0';
import { Subtitle } from '.';

export default {
  title: 'Paragraph',
  component: Subtitle,
  decorators: [Story => <Story />]
} as Meta;

export const Subtitles = () => (
  <>
    <Subtitle color="primary">
      Example Gothic Paragraph: <br />
      BULLZ is your home for everything crypto. Make, view, and use authentic recommendations about #NFTs, #DeFi,
      $crypto, and more!
    </Subtitle>
    <br />
    <br />
    <Subtitle>
      Example Paragraph: <br />
      Tap into the extensive BULLZ influencer network that covers all things crypto. Their recommendations for your
      project will be seen across all major social networks as well as in the BULLZ app.
    </Subtitle>
    <br />
    <br />
    <Subtitle color="secondary" weight="bold">
      Example Covic Semibold Paragraph: <br />
      The BULLZ app is a social recommendation platform dedicated to crypto and blockchain. The crypto space is full of
      misinformation with countless Telegram groups, tokens, projects, exchanges, and airdrops popping up every day.
    </Subtitle>
  </>
);
