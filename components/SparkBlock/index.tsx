import influencersImage from 'assets/images/influencers.jpg';
import { Button } from 'components/common/buttons/Button';
import { ArrowIcon } from 'components/common/icons/ArrowIcon';
import { ResponsiveImage } from 'components/common/images/ResponsiveImage';
import { Paragraph } from 'components/common/typography/Paragraph';
import { Title } from 'components/common/typography/Title';
import { FC } from 'react';
import { ClassName } from 'types';
import { scrollBottom } from 'utils';
import styles from './styles.module.scss';

export const SparkBlock: FC<ClassName> = props => (
  <section {...props}>
    <Title className={styles.title} type="h1">
      Spark Conversations. Ignite Creators. Get UGC.
    </Title>
    <div className={styles.contentWrapper}>
      <div>
        <Paragraph type="gothic" className={styles.paragraph}>
          Get crypto influencers and creators excited about your brand. Let them find new fans and jump start organic
          conversations and recommendations about you on your website and across the web.
        </Paragraph>
        <div className={styles.imageMobile}>
          <ResponsiveImage src={influencersImage} alt="influencers image" />
        </div>
        <Button variant="secondary" icon={<ArrowIcon />} onClick={() => scrollBottom()}>
          Get Started
        </Button>
      </div>
      <div className={styles.imageTablet}>
        <ResponsiveImage src={influencersImage} alt="influencers image" />
      </div>
    </div>
  </section>
);
