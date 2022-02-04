import cn from 'classnames';
import React from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

interface Props extends ClassName {
  type: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4'>;
  color?: 'white';
}

export const Title: React.FC<Props> = ({ type: Tag, children, color, className }) => {
  const classNames = cn(styles.title, styles[`title_${Tag}`], { [styles[`title_color_${color}`]]: color }, className);
  return <Tag className={classNames}>{children}</Tag>;
};
