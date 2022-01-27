import cn from 'classnames';
import { ChangeEventHandler, FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  label?: string;
  defaultChecked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  classNames?: string;
  error?: boolean;
  checked: boolean;
}

export const Checkbox: FC<Props> = ({ label, onChange, classNames, error, checked }) => (
  <label className={cn(styles.label, { [styles.label_error]: error }, classNames)}>
    <input className={styles.checkbox} onChange={onChange} checked={checked} type="checkbox" />
    {label && label}
  </label>
);
