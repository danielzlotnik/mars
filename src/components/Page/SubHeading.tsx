import React from 'react';

import styles from './Page.module.scss';

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.subHeading}>{children}</h2>;
}

export default SubHeading;
