import cn from 'classnames';
import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}

export const Container: FC<Props> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
