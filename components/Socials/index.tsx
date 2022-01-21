import { InstagramIcon } from 'components/common/icons/InstagramIcon';
import { TwitterIcon } from 'components/common/icons/twitter';
import { toInstagramLink, toTwitterLink } from 'components/Socials/constants';
import React from 'react';
import styles from './styles.module.scss';

export const Socials = () => {
  return (
    <div className={styles.socialIconsWrapper}>
      <a
        className={styles.socialIconWrapper}
        href={toInstagramLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go to our instagram"
      >
        <InstagramIcon className={styles.socialIcon} />
      </a>
      <a
        className={styles.socialIconWrapper}
        href={toTwitterLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go to our twitter"
      >
        <TwitterIcon className={styles.socialIcon} />
      </a>
    </div>
  );
};
