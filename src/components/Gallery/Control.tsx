import clsx from 'clsx';
import React from 'react';

import styles from './Gallery.module.scss';

export enum Direction {
  left = 'left',
  right = 'right',
}

function Control({
  children,
  onClick,
  ariaLabel,
  direction,
}: {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
  direction: Direction;
}) {
  return (
    <button
      className={clsx([styles.control, styles[direction]])}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Control;
