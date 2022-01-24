import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  type: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h5'>;
  color?: 'white';
  className?: string;
}

export const Title: React.FC<Props> = ({ type: Tag, children, color, className }) => {
  const classNames = cn(styles.title, styles[`title_${Tag}`], { [styles[`title_color_${color}`]]: color }, className);
  return <Tag className={classNames}>{children}</Tag>;
};
