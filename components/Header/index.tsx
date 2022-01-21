import bullzLogo from 'assets/images/bullz-logo.png';
import cn from 'classnames';
import { Container } from 'components/common/wrappers/Container';
import { Socials } from 'components/Socials';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { navItems } from './constants';
import styles from './styles.module.scss';

export const Header = () => {
  const { pathname } = useRouter();
  const [opened, setOpened] = useState(false);
  const onBurgerButtonClick = () => setOpened(!opened);

  return (
    <header>
      <Container className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logoWrapper} aria-label="go to main page">
            <Image src={bullzLogo} alt="bullz website logo" />
          </a>
        </Link>
        <div
          className={cn(styles.navAndSocialWrapper, {
            [styles.navAndSocialWrapper_opened]: opened
          })}
        >
          <nav>
            {navItems.map(({ title, href }) => (
              <Link key={href} href={href}>
                <a
                  className={cn(styles.navItem, {
                    [styles.navItem_active]: href === pathname
                  })}
                >
                  {title}
                </a>
              </Link>
            ))}
          </nav>
          <Socials />
        </div>

        <button
          type="button"
          className={cn(styles.burgerButton, {
            [styles.burgerButton_opened]: opened
          })}
          onClick={onBurgerButtonClick}
          aria-label={opened ? 'close main menu' : 'open main menu'}
        />
      </Container>
    </header>
  );
};
