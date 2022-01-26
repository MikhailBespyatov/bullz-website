import { NewsletterInput } from 'components/common/forms/NewsletterForm/NewsletterInput';
import { useForm } from 'effector-forms';
import React, { FormEvent } from 'react';
import { newsletterForm } from 'stores/forms/newsletterForm';
import styles from './styles.module.scss';

export const NewsletterForm = () => {
  const { submit } = useForm(newsletterForm);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <>
      <h5 className={styles.title}>Sign Up for our Newsletter:</h5>

      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <NewsletterInput type="text" placeholder="Full Name" name="userName" />
        <NewsletterInput type="email" placeholder="Email" name="email" />

        <button className={styles.button} type="submit">
          <span className={styles.content}>join newsletter</span>
        </button>
      </form>
    </>
  );
};
