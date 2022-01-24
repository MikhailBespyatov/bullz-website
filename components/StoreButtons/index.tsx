import appStoreImg from 'assets/images/app-store.png';
import googlePlay from 'assets/images/google-play.png';
import { goToAppStoreLink, goToGooglePlay } from 'components/StoreButtons/constants';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';

export const StoreButtons = () => (
  <div className={styles.wrapper}>
    <a className={styles.storeLink} href={goToAppStoreLink} target="_blank" rel="noreferrer">
      <Image src={appStoreImg} alt="go to app store" />
    </a>
    <a className={styles.storeLink} href={goToGooglePlay} target="_blank" rel="noreferrer">
      <Image src={googlePlay} alt="go to google play" />
    </a>
  </div>
);
