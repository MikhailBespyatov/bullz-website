import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import React, { FC } from 'react';
import styles from './styles.module.scss';

export const MainLayout: FC = ({ children }) => (
  <main className={styles.main}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer />
  </main>
);
