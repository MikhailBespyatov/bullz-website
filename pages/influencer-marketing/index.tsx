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

export default function ForProjects() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container>
          <SparkBlock className="block" />

          {influencerBlocksItems.map(item => (
            <ContentBlock key={item.titleText} className="block" {...item} />
          ))}

          <Benefits items={forProjectsBenefitsItems} className="block" />

          <WhatYouWaiting className="block" />
        </Container>
      </MainLayout>
    </div>
  );
}
