import { MainLayout } from 'components/common/layouts/MainLayout';
import { Paragraph } from 'components/common/typography/Paragraph';
import { Title } from 'components/common/typography/Title';
import { Container } from 'components/common/wrappers/Container';
import styles from './styles.module.scss';
import Head from 'next/head';
import React from 'react';
import { Subtitle } from 'components/common/typography/Subtitle';
import {
  InfoTextFive,
  InfoTextFour,
  InfoListOne,
  InfoListTwo,
  InfoTextOne,
  InfoTextThree,
  InfoTextTwo,
  InfoTextSix,
  InfoTextSeven
} from 'components/InfoText/constants';
import { InfoList, InfoText } from 'components/InfoText';

export default function Faqs() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container className={styles.margin}>
          <Title type="h1" className={styles.title}>
            FAQs
          </Title>
          <Subtitle>What is BULLZ?</Subtitle>
          {InfoTextOne.map(props => (
            <InfoText key={props.text} {...props} />
          ))}
          <Subtitle className={styles.smallMargin}>How are recommendations on BULLZ authenticated?</Subtitle>
          {InfoTextTwo.map(props => (
            <InfoText key={props.text} {...props} />
          ))}
          <Paragraph type="covic-semi-bold">
            <p className={styles.list}>Authenticity: Is the recommendation honest, reliable, and trustworthy?</p>
            <p className={styles.list}>
              Creativity: Did the creator put effort and creativity into a unique recommendation?
            </p>
            <p className={styles.list}>
              Positivity: Does the recommendation show the product in a positive light and create desire?
            </p>
          </Paragraph>
          <Paragraph className={styles.bigMargin}>
            Recommendations that pass authentication can earn WOM Tokens. Check out this link to learn more about how
            WOM Protocol authentication works.
          </Paragraph>
          <Subtitle className={styles.bigMargin}>Video Creation</Subtitle>
          <Subtitle className={styles.smallMargin}>How do I create a recommendation video?</Subtitle>
          {InfoTextThree.map(props => (
            <InfoText key={props.text} {...props} />
          ))}
          {InfoListOne.map(props => (
            <InfoList key={props.item} {...props} />
          ))}
          <Paragraph className={styles.bigMargin}>
            The final step is to stake WOM Tokens for your video to be authenticated and for the potential to earn WOM
            Tokens.
          </Paragraph>
          <Subtitle className={styles.smallMargin}>How long does my video need to be?</Subtitle>
          <Paragraph className={styles.bigMargin}>
            There is no minimum time requirement for your video. However, we recommend recording videos between 30-60
            seconds in length to give yourself time to properly cover the topic.
          </Paragraph>
          <Subtitle className={styles.smallMargin}>What audio can I use in my video?</Subtitle>
          <Paragraph className={styles.bigMargin}>
            You can use whatever audio you record and own. Any videos with copyrighted music will be removed.
          </Paragraph>
          <Subtitle className={styles.bigMargin}>WOM Rewards</Subtitle>
          <Subtitle className={styles.smallMargin}>How do I earn rewards for my recommendations?</Subtitle>
          {InfoTextFour.map(props => (
            <InfoText key={props.text} {...props} />
          ))}
          <Subtitle className={styles.smallMargin}>When do I earn rewards for my recommendations?</Subtitle>
          <Paragraph className={styles.bigMargin}>
            After your video passes authentication it is immediately eligible to start earning. Rewards are emitted
            daily with a few days’ delay for accounting reasons.
          </Paragraph>
          <Subtitle className={styles.smallMargin}>Where are my WOM Tokens?</Subtitle>
          {InfoTextFive.map(props => (
            <InfoText key={props.text} {...props} />
          ))}
          <Subtitle className={styles.smallMargin}>How much WOM can I earn?</Subtitle>
          <Paragraph className={styles.bigMargin}>
            There is a set daily amount of WOM Tokens rewarded each day in the WOM Ecosystem. How much you earn depends
            on a variety of factors including the authentication rating on your video and the engagement with your
            videos (likes, comments, shares, etc.).
          </Paragraph>
          <Subtitle className={styles.smallMargin}>What can I do with WOM Tokens?</Subtitle>
          <Paragraph className={styles.bigMargin}>You can do a number of different things with WOM Tokens:</Paragraph>
          {InfoListTwo.map(props => (
            <InfoList key={props.item} {...props} />
          ))}
          <Subtitle className={styles.smallMargin}>Why does my wallet balance keep changing?</Subtitle>
          {InfoTextSix.map(props => (
            <InfoText key={props.text} {...props} />
          ))}
          <Subtitle className={styles.largeMargin}>Etc.</Subtitle>
          <Subtitle className={styles.smallMargin}>How do I get verified?</Subtitle>
          {InfoTextSeven.map(props => (
            <InfoText key={props.text} {...props} />
          ))}
        </Container>
      </MainLayout>
    </div>
  );
}
