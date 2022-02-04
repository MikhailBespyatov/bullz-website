import cn from 'classnames';
import { Button } from 'components/common/buttons/Button';
import { feedbackFormFields } from 'components/common/forms/FeedbackForm/constants';
import { Checkbox } from 'components/common/inputs/Checkbox';
import { Field } from 'components/common/inputs/Field';
import { tryAgainText } from 'constants/messages';
import { useForm } from 'effector-forms';
import React, { FC, FormEvent } from 'react';
import { feedbackForm, FeedbackFormNames } from 'stores/forms/feedbackForm';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export const FeedbackForm: FC<ClassName> = ({ className }) => {
  const { fields, submit } = useForm(feedbackForm);
  const { value: checked, onChange: onCheckboxChange, errors: checkboxErrors } = fields.checked;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <div className={cn(styles.formWrapper, className)}>
      <h3 className={styles.title}>
        Get influencers and UGC for your brand now. Fill out the form and we will be in touch with you shortly!
      </h3>
      <form onSubmit={onSubmit} noValidate>
        {feedbackFormFields.map(item => {
          const { name } = item;
          const field = fields[name];
          const { onChange, value, errors, isValid, isDirty } = field;
          const errorVisible = name === FeedbackFormNames.website ? !isValid && isDirty : !isValid;

          return (
            <Field
              key={name}
              className={styles.field}
              value={value}
              onChange={onChange}
              errorText={errors[0]?.errorText || tryAgainText}
              errorVisible={errorVisible}
              {...item}
            />
          );
        })}
        <Checkbox
          classNames={styles.checkboxWrapper}
          label='By clicking "Get Started" you are agreeing to receive communications from WOM Protocol Pte. Ltd. and its
    affiliates.'
          onChange={() => onCheckboxChange(!checked)}
          error={!!checkboxErrors[0]}
          checked={checked}
        />
        <Button type="submit" uppercase rounded>
          send now
        </Button>
      </form>
    </div>
  );
};
