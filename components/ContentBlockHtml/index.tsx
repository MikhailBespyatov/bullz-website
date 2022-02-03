import cn from 'classnames';
import { content } from 'constants/faqsPageContent';
import styles from './styles.module.scss';

export const ContentBlockHtml = () => (
  <div className={cn(styles.content)} dangerouslySetInnerHTML={{ __html: content }} />
);
