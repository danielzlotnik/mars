import React from 'react';

import styles from './Page.module.scss';

function Page({ children }: { children: React.ReactNode }) {
  return <main className={styles.page}>{children}</main>;
}

export default Page;
