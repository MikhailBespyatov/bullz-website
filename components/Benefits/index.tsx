import cn from 'classnames';
import { Title } from 'components/common/typography/Title';
import { FC } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

interface Item {
  title: string;
  icon: JSX.Element;
}

interface Props extends ClassName {
  items: Item[];
  backgroundColor?: 'transparent';
  withoutPadding?: boolean;
}

export const Benefits: FC<Props> = ({ items, backgroundColor, withoutPadding, ...props }) => (
  <section {...props}>
    <Title type="h2" className={styles.title}>
      Benefits
    </Title>
    <div
      className={cn(styles.listWrapper, {
        [styles[`listWrapper_${backgroundColor}`]]: backgroundColor,
        [styles.listWrapper_withoutPadding]: withoutPadding
      })}
    >
      <ul className={styles.list}>
        {items.map(({ icon, title }) => (
          <li key={title} className={styles.listItem}>
            <div className={styles.icon}>{icon}</div>
            {title}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
