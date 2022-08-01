import React from 'react';

import styles from './Grid.module.scss';

interface GridProps {
  children: React.ReactNode;
}

function Grid({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>;
}

export default Grid;
