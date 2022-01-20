import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  type?: 'gothic' | 'covic-semi-bold';
}

export const Paragraph: React.FC<Props> = ({ type, children }) => {
  const classNames = cn(styles.paragraph, styles[`paragraph_${type}`]);
  return <p className={classNames}>{children}</p>;
};
