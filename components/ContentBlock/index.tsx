import cn from 'classnames';
import { Button } from 'components/common/buttons/Button';
import { ArrowIcon } from 'components/common/icons/ArrowIcon';
import { ResponsiveImage } from 'components/common/images/ResponsiveImage';
import { Paragraph } from 'components/common/typography/Paragraph';
import { Title } from 'components/common/typography/Title';
import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  href?: string;
  src?: StaticImageData;
  alt?: string;
  additionalText?: string;
  titleText: string;
  paragraphText: string;
  buttonText?: string;
  onButtonClick?: () => void;
  reverse?: boolean;
}

export const ContentBlock: FC<Props> = ({
  href,
  src,
  alt,
  additionalText,
  titleText,
  paragraphText,
  buttonText,
  onButtonClick,
  reverse
}) => (
  <div className={cn(styles.container, { [styles.container_reverse]: reverse })}>
    <div className={styles.content}>
      <Title type="h5" color="white" className={styles.additionalText}>
        {additionalText}
      </Title>
      <Title type="h2" className={styles.title}>
        {titleText}
      </Title>
      <Paragraph className={styles.paragraph}>{paragraphText}</Paragraph>
      {buttonText && (
        <Button variant="secondary" href={href} className={styles.button} onClick={onButtonClick} icon={<ArrowIcon />}>
          {buttonText}
        </Button>
      )}
    </div>
    {src && alt && (
      <div className={styles.image}>
        <ResponsiveImage src={src} alt={alt} />
      </div>
    )}
  </div>
);
