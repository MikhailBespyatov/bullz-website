import cn from 'classnames';
import React from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

interface Props extends ClassName {
  color?: 'primary' | 'secondary';
  weight?: 'bold';
}

export const Subtitle: React.FC<Props> = ({ children, color = 'primary', weight, className }) => {
  const classNames = cn(
    styles.subtitle,
    styles[`subtitle_${color}`],
    { [styles[`subtitle_weight_${weight}`]]: weight },
    className
  );
  return <p className={classNames}>{children}</p>;
};
