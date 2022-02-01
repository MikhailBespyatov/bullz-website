import appStoreImg from 'assets/images/app-store.png';
import googlePlay from 'assets/images/google-play.png';
import cn from 'classnames';
import { goToAppStoreLink, goToGooglePlay } from 'components/StoreButtons/constants';
import Image from 'next/image';
import React, { FC } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export const StoreButtons: FC<ClassName> = ({ className }) => (
  <div className={cn(styles.wrapper, className)}>
    <a className={styles.storeLink} href={goToAppStoreLink} target="_blank" rel="noreferrer">
      <Image src={appStoreImg} alt="go to app store" />
    </a>
    <a className={styles.storeLink} href={goToGooglePlay} target="_blank" rel="noreferrer">
      <Image src={googlePlay} alt="go to google play" />
    </a>
  </div>
);
