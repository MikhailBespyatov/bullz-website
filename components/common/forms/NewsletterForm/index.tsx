import { newsletterFormFields } from 'components/common/forms/NewsletterForm/constants';
import { Field } from 'components/common/inputs/Field';
import { tryAgainText } from 'constants/messages';
import { useForm } from 'effector-forms';
import React, { FC, FormEvent } from 'react';
import { newsletterForm } from 'stores/forms/newsletterForm';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export const NewsletterForm: FC<ClassName> = ({ className }) => {
  const { fields, submit } = useForm(newsletterForm);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <>
      <h5 className={styles.title}>Sign Up for our Newsletter:</h5>

      <form className={className} onSubmit={onSubmit} noValidate>
        {newsletterFormFields.map(item => {
          const { name } = item;
          const field = fields[name];
          const { value, onChange, errors, isValid } = field;

          return (
            <Field
              className={styles.field}
              inputType="transparent"
              key={name}
              value={value}
              onChange={onChange}
              errorText={errors[0]?.errorText || tryAgainText}
              errorVisible={!isValid}
              {...item}
            />
          );
        })}

        <button className={styles.button} type="submit">
          <span className={styles.content}>join newsletter</span>
        </button>
      </form>
    </>
  );
};
