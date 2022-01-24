import Link from 'next/link';
import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  isExternalLink?: boolean;
  href: string;
}

export const LinkButton: FC<Props> = ({ isExternalLink, children, href }) =>
  isExternalLink ? (
    <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
      <span className={styles.content}>{children}</span>
    </a>
  ) : (
    <Link href={href}>
      <a className={styles.link}>
        <span className={styles.content}>{children}</span>
      </a>
    </Link>
  );
