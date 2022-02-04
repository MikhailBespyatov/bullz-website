import webRecorderImage from 'assets/images/web-recorder.webp';
import { ResponsiveImage } from 'components/common/images/ResponsiveImage';
import { Paragraph } from 'components/common/typography/Paragraph';
import { Title } from 'components/common/typography/Title';
import { statisticsItems } from 'components/GetAwersome/constants';
import { FC } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export const GetAwesome: FC<ClassName> = props => (
  <section {...props}>
    <Title className={styles.title} type="h1">
      Get awesome UGC for your website
    </Title>
    <div className={styles.content}>
      <Paragraph type="gothic">
        Use the BULLZ Web Recorder to get real recommendations from your users and boost your website with
        user-generated content
      </Paragraph>
      <div className={styles.image}>
        <ResponsiveImage src={webRecorderImage} alt="web-recorder image" />
      </div>
    </div>
    <ul className={styles.statistics}>
      {statisticsItems.map(({ title, description }) => (
        <li className={styles.statisticsItem} key={title}>
          <Title type="h2" className={styles.statisticsTitle}>
            {title}
          </Title>
          <Paragraph type="covic-semi-bold">{description}</Paragraph>
        </li>
      ))}
    </ul>
    <Paragraph type="gothic" className={styles.paragraphSecond}>
      UCG is hands-down the best content you can have on your website. Nothing beats peer-to-peer word-of-mouth
      recommendations.
    </Paragraph>
  </section>
);
