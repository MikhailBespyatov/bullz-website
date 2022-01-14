import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  type: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3'>;
  color?: 'white';
}

export const Title: React.FC<Props> = ({ type: Tag, children, color }) => {
  const classNames = cn(styles.title, styles[`title_${Tag}`], { [styles[`title_color_${color}`]]: color });
  return <Tag className={classNames}>{children}</Tag>;
};
