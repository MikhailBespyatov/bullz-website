import { FeedbackForm } from 'components/common/forms/FeedbackForm';
import { Title } from 'components/common/typography/Title';
import { FC } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export const WhatYouWaiting: FC<ClassName> = props => (
  <section {...props}>
    <Title type="h2" className={styles.title}>
      What are you waiting for?
    </Title>
    <div className={styles.formWrapper}>
      <FeedbackForm className={styles.form} />
    </div>
  </section>
);
