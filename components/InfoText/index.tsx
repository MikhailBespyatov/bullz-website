import { Paragraph } from 'components/common/typography/Paragraph';
import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  text?: string;
  item?: string;
  value?: string;
}

export const InfoText: FC<Props> = ({ text }) => (
  <div>
    <Paragraph className={styles.text}>{text}</Paragraph>
  </div>
);

export const InfoList: FC<Props> = ({ item, value }) => (
  <div className={styles.list}>
    <Paragraph className={styles.value}>{value}</Paragraph>
    <Paragraph className={styles.item}>{item}</Paragraph>
  </div>
);
