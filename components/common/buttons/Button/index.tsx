import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { ClassName } from 'types';
import styles from './styles.module.scss';

interface Props extends ClassName {
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  withArrow?: boolean;
  uppercase?: boolean;
  rounded?: boolean;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export const Button: FC<Props> = ({
  children,
  disabled,
  className,
  type = 'button',
  withArrow,
  uppercase,
  rounded,
  href,
  variant = 'primary'
}) => {
  const buttonClasses = cn(
    styles.button,
    styles[`button_${variant}`],
    {
      [styles.button_uppercase]: uppercase,
      [styles.button_rounded]: rounded
    },
    className
  );

  const spanClasses = cn(styles.content, { [cn(styles.arrow, styles[`arrow_${variant}`])]: withArrow });

  const isExternalLink = href?.includes('http');

  if (href) {
    return isExternalLink ? (
      <a className={buttonClasses} href={href} target="_blank" rel="noopener noreferrer">
        <span className={spanClasses}>{children}</span>
      </a>
    ) : (
      <Link href={href}>
        <a className={buttonClasses}>
          <span className={spanClasses}>{children}</span>
        </a>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled} type={type}>
      <span className={spanClasses}>{children}</span>
    </button>
  );
};
