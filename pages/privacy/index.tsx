import { MainLayout } from 'components/common/layouts/MainLayout';
import { Paragraph } from 'components/common/typography/Paragraph';
import { Title } from 'components/common/typography/Title';
import { Container } from 'components/common/wrappers/Container';
import styles from './styles.module.scss';
import Head from 'next/head';
import React from 'react';
import { contentTextArray } from 'constants/privacyPageContent';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container>
          <Title type="h1">Privacy</Title>
        </Container>

        <Container className={styles.textContainer}>
          {contentTextArray.map(({ text, margin }) => {
            return (
              <Paragraph type="covic-semi-bold" marginType={margin} key={text.substring(10, 21)}>
                {text}
              </Paragraph>
            );
          })}
        </Container>
      </MainLayout>
    </>
  );
}
