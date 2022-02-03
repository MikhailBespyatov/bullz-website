import { Benefits } from 'components/Benefits';
import { MainLayout } from 'components/common/layouts/MainLayout';
import { Container } from 'components/common/wrappers/Container';
import { ContentBlock } from 'components/ContentBlock';
import { SparkBlock } from 'components/SparkBlock';
import { WhatYouWaiting } from 'components/WhatYouWaiting';
import { forProjectsBenefitsItems } from 'constants/benefits';
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
        <Container>
          <SparkBlock className={styles.block} />

          {influencerBlocksItems.map(item => (
            <ContentBlock key={item.titleText} className={styles.block} {...item} />
          ))}

          <Benefits items={forProjectsBenefitsItems} className={styles.block} />

          <WhatYouWaiting className={styles.block} />
        </Container>
      </MainLayout>
    </div>
  );
}
