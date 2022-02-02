import { FeedbackForm } from 'components/common/forms/FeedbackForm';
import { Title } from 'components/common/typography/Title';
import styles from './styles.module.scss';

export const WhatYouWaiting = () => (
  <>
    <Title type="h2" className={styles.title}>
      What are you waiting for?
    </Title>
    <div className={styles.formWrapper}>
      <FeedbackForm className={styles.form} />
    </div>
  </>
);
