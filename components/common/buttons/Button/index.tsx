import cn from 'classnames';
import { FC } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

interface Props extends ClassName {
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export const Button: FC<Props> = ({ children, disabled, className, type = 'button' }) => (
  <button className={cn(styles.button, className)} disabled={disabled} type={type}>
    {children}
  </button>
);
