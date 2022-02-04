import screen from 'assets/images/screen-img_for-creators-page.png';
import { MainLayout } from 'components/common/layouts/MainLayout';
import { Paragraph } from 'components/common/typography/Paragraph';
import { Title } from 'components/common/typography/Title';
import { Container } from 'components/common/wrappers/Container';
import { StoreButtons } from 'components/StoreButtons';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';

export default function ForCreators() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container className={styles.titleContainer}>
          <Title type="h1" className={styles.title}>
            BULLZ <span className={styles.titleTextContainer}>for Creators.</span>
          </Title>
          <Paragraph type="gothic" className={styles.paragraph}>
            BULLZ IS A DEDICATED APP FOR SHARING YOUR CRYPTO RECOMMENDATIONS.
          </Paragraph>
        </Container>
        <Container className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <Image src={screen} alt="" />
          </div>
          <div className={styles.textContainer}>
            <Paragraph type="gothic" className={styles.contentParagraph}>
              <span className={styles.textColorBlue}>SHARE</span> YOUR FAVOURITE PROJECTS AND PRODUCTS
            </Paragraph>

            <Paragraph type="gothic" className={styles.contentParagraph}>
              <span className={styles.textColorBlue}>EARN</span> REWARDS BY SPREADING YOUR WORD
            </Paragraph>

            <Paragraph type="gothic" className={styles.contentParagraph}>
              <span className={styles.textColorBlue}>DON&apos;T</span> MISS OUT ON TRENDS AND OPPORTUNITIES
            </Paragraph>
            <StoreButtons />
          </div>
        </Container>
      </MainLayout>
    </div>
  );
}
