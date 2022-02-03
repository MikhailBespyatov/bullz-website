import webRecorderImage from 'assets/images/web-recorder.png';
import { Button } from 'components/common/buttons/Button';
import { ArrowIcon } from 'components/common/icons/ArrowIcon';
import { ResponsiveImage } from 'components/common/images/ResponsiveImage';
import { Paragraph } from 'components/common/typography/Paragraph';
import { Title } from 'components/common/typography/Title';
import { FC } from 'react';
import { ClassName } from 'types';
import { scrollBottom } from 'utils';
import styles from './styles.module.scss';

export const WebRecorder: FC<ClassName> = props => (
  <section {...props}>
    <Title type="h2" className={styles.title}>
      The BULLZ Web Recorder
    </Title>
    <div className={styles.wrapper}>
      <div>
        <Paragraph type="covic-semi-bold" className={styles.paragraph}>
          Get UGC directly from your users and fans with the BULLZ Web Recorder. Simply drop this plugin into your
          website and your users can record recommendations directly on your site. Word-of-mouth UGC is the future of
          marketing--get it for your platform now! You can show these short-form videos wherever you want on your
          website.
        </Paragraph>
        <Paragraph type="covic-semi-bold" className={styles.paragraphSecond}>
          All recommendations are authenticated via the peer-review system WOM Protocol. Only honest and authentic UGC
          is approved and users can earn rewards for their recommendations. The recommendations also appear in the BULLZ
          app--enabling you to reach a wider audience and giving you a share of the WOM Token rewards for videos
          recorded on your website.
        </Paragraph>
        <Button variant="secondary" icon={<ArrowIcon />} className={styles.button} onClick={scrollBottom}>
          Get Started
        </Button>
      </div>
      <div className={styles.image}>
        <ResponsiveImage src={webRecorderImage} alt="web recorder image" />
      </div>
    </div>
  </section>
);
