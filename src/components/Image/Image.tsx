import clsx from 'clsx';
import React, { useState } from 'react';

import { ImageProps } from '@/components/Image/types';

import styles from './Image.module.scss';

function Image(props: ImageProps) {
  const [loading, setLoading] = useState(true);

  const onLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    props.onLoad && props.onLoad(e);
    setLoading(false);
  };

  return (
    <img
      className={clsx({ [styles.image]: true, [styles.loading]: loading })}
      {...props}
      // override the default dynamic sized styles
      style={{
        width: props.width,
        height: props.height,
      }}
      onLoad={onLoad}
    />
  );
}

export default Image;
