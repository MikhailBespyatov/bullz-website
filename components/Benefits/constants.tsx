import heartIcon from 'assets/icons/benefits/heart.png';
import smileIcon from 'assets/icons/benefits/smile.png';
import speakerIcon from 'assets/icons/benefits/speaker.png';
import sproutIcon from 'assets/icons/benefits/sprout.png';
import starsIcon from 'assets/icons/benefits/stars.png';
import bullzIcon from 'assets/icons/bullz-icon.png';
import { BenefitIcon } from 'components/common/icons/BenefitIcon';

export const benefitsItems = [
  {
    title: 'Influencer matching',
    icon: <BenefitIcon src={smileIcon} alt="smile icon" />
  },
  {
    title: 'Campaign planning',
    icon: <BenefitIcon src={speakerIcon} alt="smile icon" />
  },
  {
    title: 'Product awareness on TikTok, other social media, and BULLZ',
    icon: <BenefitIcon src={bullzIcon} alt="bullz icon" />
  },
  {
    title: 'Free tools to get and display more recommendations',
    icon: <BenefitIcon src={starsIcon} alt="stars icon" />
  },
  {
    title: 'Organic conversation growth',
    icon: <BenefitIcon src={sproutIcon} alt="sprout icon" />
  },
  {
    title: 'Fan loyalty program',
    icon: <BenefitIcon src={heartIcon} alt="heart icon" />
  },
  {
    title: 'Revenue stream',
    icon: <BenefitIcon src={heartIcon} alt="heart icon" />
  }
];
