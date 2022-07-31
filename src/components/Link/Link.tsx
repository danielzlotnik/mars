import NextLink, { LinkProps } from 'next/link';
import React from 'react';

import styles from './Link.module.scss';

interface Props extends LinkProps {
  children: React.ReactNode;
}

function Link({ children, ...props }: Props) {
  return (
    <NextLink {...props}>
      <a className={styles.linkButton}>{children}</a>
    </NextLink>
  );
}

export default Link;
