import phoneInHandImage from 'assets/images/phone-in-hand.jpg';
import { NewsletterForm } from 'components/common/forms/NewsletterForm';
import { ResponsiveImage } from 'components/common/images/ResponsiveImage';
import { Paragraph } from 'components/common/typography/Paragraph';
import { Title } from 'components/common/typography/Title';
import { StoreButtons } from 'components/StoreButtons';
import styles from './styles.module.scss';

export const UltimateBlock = () => (
  <div className={styles.container}>
    <div>
      <Title type="h1" className={styles.title}>
        The ultimate source for everything crypto
      </Title>
      <Paragraph type="gothic" className={styles.paragraph}>
        BULLZ is your home for everything crypto. Make, view, and use authentic recommendations about #NFTs, #DeFi,
        $crypto, and more!
      </Paragraph>

      <div className={styles.imageWrapperMobile}>
        <div className={styles.image}>
          <ResponsiveImage src={phoneInHandImage} alt="phone in hand" />
        </div>
      </div>

      <StoreButtons className={styles.socials} />
      <NewsletterForm className={styles.form} />
    </div>
    <div className={styles.imageWrapperTablet}>
      <div className={styles.image}>
        <ResponsiveImage src={phoneInHandImage} alt="phone in hand" />
      </div>
    </div>
  </div>
);
