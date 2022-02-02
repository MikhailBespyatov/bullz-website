import cn from 'classnames';
import React from 'react';
import { ClassName, MarginType } from 'types';
import styles from './styles.module.scss';

interface Props extends ClassName {
  type?: 'gothic' | 'covic-semi-bold';
  marginType?: MarginType;
}

export const Paragraph: React.FC<Props> = ({ type, marginType, children, className }) => {
  const classNames = cn(
    styles.paragraph,
    { [styles[`paragraph_${type}`]]: type },
    { [styles[`paragraph_marginBottom_${marginType}`]]: marginType },
    className
  );
  return <p className={classNames}>{children}</p>;
};
