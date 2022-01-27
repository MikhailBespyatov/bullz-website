import cn from 'classnames';
import { FC, HTMLInputTypeAttribute } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export interface Props extends ClassName {
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  errorText: string;
  errorVisible: boolean;
  inputType?: 'transparent';
}

export const Field: FC<Props> = ({
  errorText,
  errorVisible,
  onChange,
  className,
  inputType,
  type = 'text',
  ...props
}) => (
  <div className={cn(styles.field, className)}>
    <input
      className={cn(styles.input, {
        [styles[`input_${inputType}`]]: !!inputType
      })}
      onChange={e => onChange(e.target.value)}
      type={type}
      {...props}
    />
    {errorVisible && <span className={styles.error}>{errorText}</span>}
  </div>
);
