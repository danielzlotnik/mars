import React from 'react';

import styles from './Page.module.scss';

function Heading({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.heading}>{children}</h1>;
}

export default Heading;
