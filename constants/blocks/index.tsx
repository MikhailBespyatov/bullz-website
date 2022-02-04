import cryptoRewardsImage from 'assets/images/crypto-rewards.webp';
import superChargedImage from 'assets/images/super-charged.webp';
import topInfluencersImage from 'assets/images/top-influencers.webp';
import topPowerImage from 'assets/images/top-power.webp';
import { webRecorderLink } from 'constants/routes';

export const influencerBlocksItems = [
  {
    titleText: 'Top influencers excited about your project',
    paragraphText:
      'Leverage our extensive influencer network and ignite conversations about your project. We get the right influencers for your brand and develop the marketing strategy for you. See your project recommended on TikTok, YouTube, Instagram,Snapchat, and, of course BULLZ!',
    src: topInfluencersImage,
    alt: 'top influencers image'
  },
  {
    titleText: 'The power of UGC on your website',
    paragraphText:
      'Integrate our FREE plugins to enable your fans to record authentic recommendations directly on your website. Display these recommendations along with recommendations from the BULLZ app anywhere on your website and tap into the power of user-generated content.',
    src: topPowerImage,
    alt: 'top power image',
    buttonText: 'Learn more',
    href: webRecorderLink,
    reverse: true
  },
  {
    titleText: 'Super-charged organic conversations about you',
    paragraphText:
      'Influencers spark the conversations and drive new users to your website. New users become new fans and record recommendations on your website and BULLZ. Organic conversations and recommendations about you across the web accelerate.',
    src: superChargedImage,
    alt: 'super-charged image'
  },
  {
    titleText: 'Crypto rewards',
    paragraphText:
      'Creators earn crypto when people see and interact with their recommendations about you. You also earn crypto from the recommendations recorded on your website. This is a loyalty bonus for your fans and a revenue stream for you!',
    src: cryptoRewardsImage,
    alt: 'crypto rewards image',
    reverse: true
  }
];
