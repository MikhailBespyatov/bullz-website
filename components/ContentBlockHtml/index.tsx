import { Title } from 'components/common/typography/Title';
import { ClassName } from 'types';
import styles from './styles.module.scss';

interface Props extends ClassName {
  title?: string;
  content: string;
}

export const ContentBlockHtml: React.FC<Props> = ({ title, content, className }) => (
  <div className={className}>
    <Title type="h1" className={styles.title}>
      {title}
    </Title>
    <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);
