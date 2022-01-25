import { FC } from 'react';
import Marquee from 'react-fast-marquee';
import styles from './styles.module.scss';

const MARQUEE_SPEED = 200;

export const Ticker: FC = ({ children }) => (
  <Marquee className={styles.marquee} gradient={false} speed={MARQUEE_SPEED}>
    <span className={styles.content}>{children}</span>
  </Marquee>
);
