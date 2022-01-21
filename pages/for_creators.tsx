import { MainLayout } from 'components/common/layouts/MainLayout';
import Head from 'next/head';
import React from 'react';

export default function ForCreators() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout />
    </div>
  );
}
