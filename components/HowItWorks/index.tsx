import cn from 'classnames';
import { Button } from 'components/common/buttons/Button';
import { ArrowIcon } from 'components/common/icons/ArrowIcon';
import { Title } from 'components/common/typography/Title';
import { howItWorksItems } from 'components/HowItWorks/constants';
import { ecommerceLink } from 'constants/externalLinks/constants';
import { FC } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export const HowItWorks: FC<ClassName> = props => (
  <section {...props}>
    <Title type="h2" className={styles.title}>
      How it works
    </Title>
    <ul className={styles.list}>
      {howItWorksItems.map(({ title, description }) => (
        <li key={title} className={styles.listItem}>
          <h3 className={styles.secondTitle}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </li>
      ))}
      <li className={styles.choose}>
        <h3 className={cn(styles.secondTitle, styles.secondTitle_white)}>
          5. Choose and show recommendations on your platform.
        </h3>
        <p className={cn(styles.description, styles.description_withMargin)}>
          The WOM Protocol has additional tools that enable you to browse all authenticated recommendations and display
          them on your website, as well as boost the visibility of these recommendations on the BULLZ app and other
          platforms.
        </p>
        <Button href={ecommerceLink} icon={<ArrowIcon />} className={styles.button}>
          Find out more
        </Button>
      </li>
    </ul>
  </section>
);
