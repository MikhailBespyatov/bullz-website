import { InstagramIcon } from 'components/common/icons/InstagramIcon';
import { TwitterIcon } from 'components/common/icons/twitter';
import React from 'react';
import styles from './styles.module.scss';

export const Socials = () => {
  return (
    <div className={styles.socialIconsWrapper}>
      <a className={styles.socialIconWrapper} href="#" target="_blank" rel="noopener noreferrer">
        <InstagramIcon className={styles.socialIcon} />
      </a>
      <a className={styles.socialIconWrapper} href="#" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className={styles.socialIcon} />
      </a>
    </div>
  );
};
