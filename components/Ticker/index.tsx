import cn from 'classnames';
import { FC } from 'react';
import Marquee from 'react-fast-marquee';
import { ClassName } from 'types';
import styles from './styles.module.scss';

const MARQUEE_SPEED = 200;

export const Ticker: FC<ClassName> = ({ children, className }) => (
  <Marquee className={cn(styles.marquee, className)} gradient={false} speed={MARQUEE_SPEED}>
    <span className={styles.content}>{`${children} `}&nbsp;</span>
  </Marquee>
);
