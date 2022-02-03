import { MainLayout } from 'components/common/layouts/MainLayout';
import { Container } from 'components/common/wrappers/Container';
import { ContentBlockHtml } from 'components/ContentBlockHtml';
import { content } from 'constants/faqsPageContent';
import Head from 'next/head';
import React from 'react';
import styles from './styles.module.scss';

export default function Faqs() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container>
          <ContentBlockHtml title="FAQs" content={content} className={styles.content} />
        </Container>
      </MainLayout>
    </div>
  );
}
