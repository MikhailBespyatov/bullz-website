import { Benefits } from 'components/Benefits';
import { MainLayout } from 'components/common/layouts/MainLayout';
import { Container } from 'components/common/wrappers/Container';
import { ContentBlock } from 'components/ContentBlock';
import { GetAwesome } from 'components/GetAwersome';
import { HowItWorks } from 'components/HowItWorks';
import { WebRecorder } from 'components/WebRecorder';
import { webRecorderBenefitsItems } from 'constants/benefits';
import Head from 'next/head';
import React from 'react';
import styles from './styles.module.scss';

export default function Terms() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container>
          <GetAwesome className={styles.block} />

          <WebRecorder className={styles.block} />

          <HowItWorks className={styles.block} />

          <Benefits
            withoutPadding
            backgroundColor="transparent"
            items={webRecorderBenefitsItems}
            className={styles.block}
          />

          <ContentBlock
            titleText="Get the Web Recorder now!"
            paragraphText="Ready to get UCG from your fans? Download the instructions below to install and use the BULLZ Web Recorder"
            buttonText="Download now"
            className={styles.block}
          />
        </Container>
      </MainLayout>
    </div>
  );
}
