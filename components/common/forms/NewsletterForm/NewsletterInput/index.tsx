import cn from 'classnames';
import { useField } from 'effector-forms';
import React, { FC } from 'react';
import { newsletterForm } from 'stores/forms/newsletterForm';
import styles from './styles.module.scss';

interface Props {
  type: string;
  placeholder: string;
  name: 'userName' | 'email';
}

export const NewsletterInput: FC<Props> = props => {
  const { value, onChange, isValid, errors } = useField(newsletterForm.fields[props.name]);

  return (
    <div className={styles.wrapper}>
      <input
        className={cn(styles.input, { [styles.input_error]: !isValid })}
        value={value}
        onChange={e => onChange(e.target.value)}
        {...props}
      />
      {!isValid && <span className={styles.error}>{errors[0].errorText}</span>}
    </div>
  );
};
