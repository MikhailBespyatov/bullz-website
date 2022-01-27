import cn from 'classnames';
import React, { FC } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export const Container: FC<ClassName> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
