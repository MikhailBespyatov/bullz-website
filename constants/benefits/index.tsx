import offerIcon from 'assets/icons//benefits/offer.png';
import easyIcon from 'assets/icons/benefits/easy.png';
import goBackIcon from 'assets/icons/benefits/go-back.png';
import heartIcon from 'assets/icons/benefits/heart.png';
import mobileIcon from 'assets/icons/benefits/mobile.png';
import moneyIcon from 'assets/icons/benefits/money.png';
import smileIcon from 'assets/icons/benefits/smile.png';
import speakerIcon from 'assets/icons/benefits/speaker.png';
import sproutIcon from 'assets/icons/benefits/sprout.png';
import starsIcon from 'assets/icons/benefits/stars.png';
import verticalVideoIcon from 'assets/icons/benefits/vertical-video.png';
import bullzIcon from 'assets/icons/bullz-icon.png';
import { BenefitIcon } from 'components/common/icons/BenefitIcon';

export const forProjectsBenefitsItems = [
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

export const webRecorderBenefitsItems = [
  {
    title: 'Leverage UGC for your platform',
    icon: <BenefitIcon src={smileIcon} alt="smile icon" />
  },
  {
    title: 'Trust via WOM-authenticated content',
    icon: <BenefitIcon src={goBackIcon} alt="go back icon" />
  },
  {
    title: 'Extra exposure on the BULLZ app',
    icon: <BenefitIcon src={bullzIcon} alt="bullz icon" />
  },
  {
    title: 'Offer crypto rewards to project fans',
    icon: <BenefitIcon src={offerIcon} alt="offer icon" />
  },
  {
    title: 'Gain a revenue stream',
    icon: <BenefitIcon src={moneyIcon} alt="money icon" />
  },
  {
    title: 'Easy to implement',
    icon: <BenefitIcon src={easyIcon} alt="easy icon" />
  },
  {
    title: 'Mobile friendly',
    icon: <BenefitIcon src={mobileIcon} alt="mobile icon" />
  },
  {
    title: 'Popular vertical video format',
    icon: <BenefitIcon src={verticalVideoIcon} alt="vertical video icon" />
  }
];
