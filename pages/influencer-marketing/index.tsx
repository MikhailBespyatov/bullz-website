import { Benefits } from 'components/Benefits';
import { MainLayout } from 'components/common/layouts/MainLayout';
import { Container } from 'components/common/wrappers/Container';
import { ContentBlock } from 'components/ContentBlock';
import { SparkBlock } from 'components/SparkBlock';
import { WhatYouWaiting } from 'components/WhatYouWaiting';
import { influencerBlocksItems } from 'constants/blocks';
import Head from 'next/head';
import React from 'react';
import styles from './styles.module.scss';

export default function ForProjects() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container className={styles.block}>
          <SparkBlock />
        </Container>

        {influencerBlocksItems.map(item => (
          <Container key={item.titleText} className={styles.block}>
            <ContentBlock {...item} />
          </Container>
        ))}

        <Container className={styles.block}>
          <Benefits />
        </Container>

        <Container className={styles.block}>
          <WhatYouWaiting />
        </Container>
      </MainLayout>
    </div>
  );
}
