import bullzIcon from 'assets/icons/bullz-icon.png';
import { privacyLink, termsLink } from 'constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.bullzIconWrapper}>
      <Image src={bullzIcon} alt="bullz icon" />
    </div>

    <div className={styles.copyright}>
      <p className={styles.copyrightInfo}>
        <span className={styles.copyrightInfo_container}>2021 © WOM Protocol Pte. Ltd. All Rights reserved.</span>
      </p>
      <Link href={termsLink}>
        <a className={styles.link}>Terms & Conditions</a>
      </Link>
      <Link href={privacyLink}>
        <a className={styles.link}>Privacy</a>
      </Link>
    </div>
  </footer>
);
