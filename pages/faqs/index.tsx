import { MainLayout } from 'components/common/layouts/MainLayout';
import { Container } from 'components/common/wrappers/Container';
import { ContentBlockHtml } from 'components/ContentBlockHtml';
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
          <ContentBlockHtml />
        </Container>
      </MainLayout>
    </div>
  );
}
