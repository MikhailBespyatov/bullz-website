import cn from 'classnames';
import { Title } from 'components/common/typography/Title';
import { ClassName } from 'types';
import styles from './styles.module.scss';

interface Props extends ClassName {
  title?: string;
  content: string;
}

export const ContentBlockHtml: React.FC<Props> = ({ title, content, className }) => {
  const classNames = cn(styles.content, className);
  return (
    <div className={classNames}>
      <Title type="h1" className={styles.title}>
        {title}
      </Title>
      <div className={cn(styles.content)} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
