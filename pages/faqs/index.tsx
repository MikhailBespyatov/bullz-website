import { MainLayout } from 'components/common/layouts/MainLayout';
import { Paragraph } from 'components/common/typography/Paragraph';
import { Title } from 'components/common/typography/Title';
import { Container } from 'components/common/wrappers/Container';
import styles from './styles.module.scss';
import Head from 'next/head';
import React from 'react';

export default function Faqs() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container>
          <Title type="h1" className={styles.title}>
            FAQs
          </Title>
          <Title type="h3" className={styles.smallMargin}>
            What is BULLZ?
          </Title>
          <Paragraph type="covic-semi-bold">
            <p className={styles.bigMargin}>
              The BULLZ app is a social recommendation platform dedicated to crypto and blockchain. The crypto space is
              full of misinformation with countless Telegram groups, tokens, projects, exchanges, and airdrops popping
              up every day. Finding the real projects can be tough and discouraging.
            </p>
            <p className={styles.bigMargin}>
              BULLZ cuts through the bull by providing trusted, authenticated community information and education about
              projects, tokens, exchanges, events, and everything else crypto.
            </p>
            <p className={styles.bigMargin}>
              Additionally, creators earn WOM Tokens--the WOM Protocol native token--based on the engagement with their
              recommendations.
            </p>
          </Paragraph>
          <Title type="h3" className={styles.smallMargin}>
            How are recommendations on BULLZ authenticated?
          </Title>
          <Paragraph type="covic-semi-bold">
            <p className={styles.bigMargin}>
              BULLZ uses the WOM Protocol to peer-review and authenticate every recommendation video on BULLZ. No shills
              allowed!
            </p>
            <p className={styles.bigMargin}>
              WOM Authenticators rate each recommendation based on the following criteria:
            </p>
            <p className={styles.list}>Authenticity: Is the recommendation honest, reliable, and trustworthy?</p>
            <p className={styles.list}>
              Creativity: Did the creator put effort and creativity into a unique recommendation?
            </p>
            <p className={styles.list}>
              Positivity: Does the recommendation show the product in a positive light and create desire?
            </p>
            <p className={styles.bigMargin}>
              Recommendations that pass authentication can earn WOM Tokens. Check out this link to learn more about how
              WOM Protocol authentication works.
            </p>
          </Paragraph>
          <Title type="h3" className={styles.bigMargin}>
            Video Creation
          </Title>
          <Title type="h3" className={styles.smallMargin}>
            How do I create a recommendation video?
          </Title>
          <Paragraph>
            <p className={styles.bigMargin}>
              You can record videos directly in the BULLZ app using the in-app video recording and editing tools. Simply
              tap on the camera icon and get started! Alternatively, you can upload pre-recorded videos from your phone
              to the BULLZ app as well.
            </p>
            <p className={styles.bigMargin}>
              After you record or upload your video you will be prompted to add the following:
            </p>
            <ul>
              <li className={styles.numberList}>The topic of your video (e.g. Metamask or Coinbase Rewards)</li>
              <li className={styles.numberList}>
                The brand or company that created what you recommend (e.g. ConsenSys or Coinbase)
              </li>
              <li className={styles.numberList}>
                A URL (e.g. https://metamask.io/ or https://www.coinbase.com/rewards))
              </li>
              <li className={styles.numberList}>Hashtags</li>
              <li className={styles.numberList}>The spoken language in the video</li>
            </ul>
          </Paragraph>
        </Container>
      </MainLayout>
    </div>
  );
}
