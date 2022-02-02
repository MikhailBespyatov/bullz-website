import { benefitsItems } from 'components/Benefits/constants';
import { Title } from 'components/common/typography/Title';
import styles from './styles.module.scss';

export const Benefits = () => (
  <section>
    <Title type="h2" className={styles.title}>
      Benefits
    </Title>
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        {benefitsItems.map(({ icon, title }) => (
          <li key={title} className={styles.listItem}>
            <div className={styles.icon}>{icon}</div>
            {title}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
