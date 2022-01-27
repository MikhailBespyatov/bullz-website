import { FeedbackForm } from 'components/common/forms/FeedbackForm';
import { MainLayout } from 'components/common/layouts/MainLayout';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <FeedbackForm />
      </MainLayout>
    </div>
  );
}
