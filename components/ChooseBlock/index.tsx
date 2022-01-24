import { ChooseCard } from 'components/ChooseBlock/ChooseCard';
import { chooseBlockItems } from 'components/ChooseBlock/constants';
import { Title } from 'components/common/typography/Title';
import { Container } from 'components/common/wrappers/Container';
import React from 'react';
import styles from './styles.module.scss';

export const ChooseBlock = () => (
  <Container>
    <Title type="h5" color="white" className={styles.title}>
      <span className={styles.titleTextContainer}>choose who you want to be</span>
    </Title>
    <div className={styles.cardsWrapper}>
      {chooseBlockItems.map(props => (
        <ChooseCard key={props.href} {...props} />
      ))}
    </div>
  </Container>
);
