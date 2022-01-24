import Link from 'next/link';
import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  title: string;
  href: string;
  linkText: string;
}

export const ChooseCard: FC<Props> = ({ title, href, linkText }) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <Link href={href}>
      <a className={styles.link}>{linkText}</a>
    </Link>
  </div>
);
