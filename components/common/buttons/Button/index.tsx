import cn from 'classnames';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { ClassName, noop } from 'types';
import styles from './styles.module.scss';

interface Props extends ClassName {
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  withArrow?: boolean;
  uppercase?: boolean;
  rounded?: boolean;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: noop;
  icon?: ReactNode;
}

export const Button: FC<Props> = ({
  children,
  disabled,
  className,
  type = 'button',
  uppercase,
  rounded,
  href,
  variant = 'primary',
  onClick,
  icon
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

  const customIcon = icon && <div className={styles.icon}>{icon}</div>;

  const isExternalLink = href?.includes('http');

  if (href) {
    return isExternalLink ? (
      <a className={buttonClasses} href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        <span className={styles.content}>{children}</span>
        {customIcon}
      </a>
    ) : (
      <Link href={href}>
        <a className={buttonClasses} onClick={onClick}>
          <span className={styles.content}>{children}</span>
          {customIcon}
        </a>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled} type={type} onClick={onClick}>
      <span className={styles.content}>{children}</span>
      {customIcon}
    </button>
  );
};
