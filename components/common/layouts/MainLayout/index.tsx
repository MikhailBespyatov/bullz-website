import { Header } from 'components/Header';
import React, { FC } from 'react';

export const MainLayout: FC = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
