import { ChooseCard } from 'components/ChooseBlock/ChooseCard';
import { chooseBlockItems } from 'components/ChooseBlock/constants';
import { Title } from 'components/common/typography/Title';
import { Container } from 'components/common/wrappers/Container';
import React, { FC } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export const ChooseBlock: FC<ClassName> = ({ className }) => (
  <Container className={className}>
    <h2 className={styles.title}>
      <span className={styles.titleTextContainer}>choose who you want to be</span>
    </h2>
    <div className={styles.cardsWrapper}>
      {chooseBlockItems.map(props => (
        <ChooseCard key={props.href} {...props} />
      ))}
    </div>
  </Container>
);
