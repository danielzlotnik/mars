import { ImgHTMLAttributes } from 'react';

import styles from './Image.module.scss';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

function Image(props: ImageProps) {
  return <img className={styles.image} {...props} />;
}

export default Image;
