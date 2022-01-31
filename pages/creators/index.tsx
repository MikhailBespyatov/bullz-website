import { MainLayout } from 'components/common/layouts/MainLayout';
import { Title } from 'components/common/typography/Title';
import { Container } from 'components/common/wrappers/Container';
import styles from './styles.module.scss';
import Head from 'next/head';
import screen from 'assets/images/screen_for-creators-page.png';
import React from 'react';
import Image from 'next/image';
import { Paragraph } from 'components/common/typography/Paragraph';
import { StoreButtons } from 'components/StoreButtons';

export default function ForCreators() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container>
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
