import cn from 'classnames';
import React from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

interface Props extends ClassName {
  type?: 'gothic' | 'covic-semi-bold';
}

export const Paragraph: React.FC<Props> = ({ type, children, className }) => {
  const classNames = cn(styles.paragraph, { [styles[`paragraph_${type}`]]: type }, className);
  return <p className={classNames}>{children}</p>;
};
